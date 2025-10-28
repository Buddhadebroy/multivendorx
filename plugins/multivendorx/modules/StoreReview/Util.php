<?php
namespace MultiVendorX\StoreReview;

use MultiVendorX\Utill;

if (!defined('ABSPATH')) exit;

class Util {

    /**
     * Check if a user has purchased from a specific store
     */
    public static function is_verified_buyer($store_id, $user_id) {
        if (empty($store_id) || empty($user_id)) {
            return 0;
        }
    
        //Fetch all relevant orders for this user
        $orders = wc_get_orders([
            'customer_id' => $user_id,
            'status'      => ['completed', 'processing', 'on-hold'],
            'limit'       => -1,
            'return'      => 'ids',
        ]);
    
        if (empty($orders)) {
            return 0;
        }
    
        foreach ($orders as $order_id) {
            $order = wc_get_order($order_id);
            if (!$order) {
                continue;
            }
    
            //Loop through all products in the order
            foreach ($order->get_items('line_item') as $item_id => $item) {
                $product_id = $item->get_product_id();
                $product    = wc_get_product($product_id);
                if (!$product) continue;
    
                // Get store ID from product meta or item meta
                $product_store_id = get_post_meta($product_id, 'multivendorx_store_id', true);
                if (empty($product_store_id)) {
                    $product_store_id = $item->get_meta('multivendorx_store_id');
                }
    
                // Match store ID
                if ((int) $product_store_id === (int) $store_id) {
                    return (int) $order_id; // Verified buyer — return that order ID
                }
            }
        }
    
        return 0; //Not a verified buyer
    }

    /**
     * Check if user has already submitted a review for a store
     */
    public static function has_reviewed($store_id, $user_id) {
        global $wpdb;
        $table_review = $wpdb->prefix . Utill::TABLES['review'];

        return (bool) $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(*) FROM {$table_review} WHERE store_id = %d AND customer_id = %d",
            $store_id, $user_id
        ));
    }

    /**
     * Insert a new review
     */
    public static function insert_review($store_id, $user_id, $title, $content, $overall, $order_id = 0, $images = []) {
        global $wpdb;
        $table_review = $wpdb->prefix . Utill::TABLES['review'];
    
        $wpdb->insert($table_review, [
            'store_id'       => $store_id,
            'customer_id'    => $user_id,
            'order_id'       => intval($order_id),
            'overall_rating' => $overall,
            'review_title'   => $title,
            'review_content' => $content,
            'review_images'  => !empty($images) ? wp_json_encode($images) : null,
            'status'         => 'pending',
            'date_created'   => current_time('mysql'),
        ]);
    
        return $wpdb->insert_id;
    }
    
    

    /**
     * Insert multiple parameter ratings for a review
     */
    public static function insert_ratings($review_id, $ratings) {
        global $wpdb;
        $table_rating = $wpdb->prefix . Utill::TABLES['rating'];

        foreach ($ratings as $param => $value) {
            if ($value) {
                $wpdb->insert($table_rating, [
                    'review_id'    => $review_id,
                    'parameter'    => sanitize_text_field($param),
                    'rating_value' => intval($value),
                ]);
            }
        }
    }

    /**
     * Fetch all approved reviews for a store
     */
    public static function get_reviews_by_store($store_id, $limit = 20) {
        global $wpdb;
        $table_review = $wpdb->prefix . Utill::TABLES['review'];

        return $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM {$table_review} WHERE store_id = %d AND status = 'approved' ORDER BY date_created DESC LIMIT %d",
            $store_id, $limit
        ));
    }

    /**
     * Get individual parameter ratings for a review
     */
    public static function get_ratings_for_review($review_id) {
        global $wpdb;
        $table_rating = $wpdb->prefix . Utill::TABLES['rating'];

        return $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM {$table_rating} WHERE review_id = %d",
            $review_id
        ));
    }

    /**
     * Get average rating per parameter
     */
    public static function get_avg_ratings($store_id, $parameters) {
        global $wpdb;
        $table_review = $wpdb->prefix . Utill::TABLES['review'];
        $table_rating = $wpdb->prefix . Utill::TABLES['rating'];

        $averages = [];
        foreach ($parameters as $param) {
            $param_value = is_array($param) ? ($param['value'] ?? '') : $param;
            if (empty($param_value)) continue;

            $avg = $wpdb->get_var($wpdb->prepare(
                "SELECT AVG(rating_value) FROM {$table_rating}
                 INNER JOIN {$table_review} ON {$table_review}.review_id = {$table_rating}.review_id
                 WHERE {$table_review}.store_id = %d
                 AND {$table_rating}.parameter = %s
                 AND {$table_review}.status = 'approved'",
                $store_id, $param_value
            ));

            $averages[$param_value] = $avg ? round($avg, 2) : 0;
        }

        return $averages;
    }

    /**
     * Get overall store rating
     */
    public static function get_overall_rating($store_id) {
        global $wpdb;
        $table_review = $wpdb->prefix . Utill::TABLES['review'];

        $overall = $wpdb->get_var($wpdb->prepare(
            "SELECT AVG(overall_rating) FROM {$table_review} WHERE store_id = %d AND status = 'approved'",
            $store_id
        ));

        return round($overall, 2);
    }

    public static function get_user_review_status($store_id, $user_id) {
        global $wpdb;
        $table_review = $wpdb->prefix . Utill::TABLES['review'];
    
        return $wpdb->get_var($wpdb->prepare(
            "SELECT status FROM {$table_review} 
             WHERE store_id = %d 
             AND customer_id = %d 
             ORDER BY date_created DESC 
             LIMIT 1",
            $store_id,
            $user_id
        ));
    }
    
    /**
     * Fetch review information from database.
     * Supports filtering by ID, store, customer, date range, pagination, and count.
     */
    public static function get_review_information( $args ) {
        global $wpdb;
        $where = [];

        // 🔹 Filter by review IDs
        if ( isset( $args['review_id'] ) ) {
            $ids = is_array( $args['review_id'] ) ? $args['review_id'] : [ $args['review_id'] ];
            $ids = implode( ',', array_map( 'intval', $ids ) );
            $where[] = "review_id IN ($ids)";
        }

        // 🔹 Filter by store_id
        if ( isset( $args['store_id'] ) ) {
            $where[] = "store_id = " . intval( $args['store_id'] );
        }

        // 🔹 Filter by customer_id
        if ( isset( $args['customer_id'] ) ) {
            $where[] = "customer_id = " . intval( $args['customer_id'] );
        }

        // 🔹 Filter by order_id
        if ( isset( $args['order_id'] ) ) {
            $where[] = "order_id = " . intval( $args['order_id'] );
        }

        // 🔹 Filter by review status (pending, approved, rejected, etc.)
        if ( isset( $args['status'] ) && $args['status'] !== '' ) {
            $where[] = "status = '" . esc_sql( $args['status'] ) . "'";
        }

        // 🔹 Filter by reported flag
        if ( isset( $args['reported'] ) ) {
            $where[] = "reported = " . intval( $args['reported'] );
        }

        // 🔹 Filter by start_date
        if ( !empty( $args['start_date'] ) ) {
            $where[] = "date_created >= '" . esc_sql( $args['start_date'] ) . "'";
        }

        // 🔹 Filter by end_date
        if ( !empty( $args['end_date'] ) ) {
            $where[] = "date_created <= '" . esc_sql( $args['end_date'] ) . "'";
        }

        // 🔹 Table name (update according to your DB structure)
        $table = $wpdb->prefix . Utill::TABLES['review'];

        // 🔹 Build query
        if ( isset( $args['count'] ) ) {
            $query = "SELECT COUNT(*) FROM $table";
        } else {
            $query = "SELECT * FROM $table";
        }

        // 🔹 Add WHERE conditions
        if ( !empty( $where ) ) {
            $condition = $args['condition'] ?? ' AND ';
            $query .= ' WHERE ' . implode( $condition, $where );
        }

        // 🔹 Order results
        if ( !isset( $args['count'] ) ) {
            $order_by  = $args['order_by']  ?? 'date_created';
            $order_dir = $args['order_dir'] ?? 'DESC';
            $query .= " ORDER BY " . esc_sql( $order_by ) . " " . esc_sql( $order_dir );
        }

        // 🔹 Limit & offset
        if ( isset( $args['limit'] ) && isset( $args['offset'] ) && !isset( $args['count'] ) ) {
            $query .= " LIMIT " . intval( $args['limit'] ) . " OFFSET " . intval( $args['offset'] );
        }

        // 🔹 Execute query
        if ( isset( $args['count'] ) ) {
            return (int) $wpdb->get_var( $query );
        } else {
            return $wpdb->get_results( $query, ARRAY_A ) ?? [];
        }
    }
    public static function update_review( $id, $data ) {
        global $wpdb;
    
        // Define main review table
        $table = $wpdb->prefix . Utill::TABLES['review'];
    
        // Nothing to update
        if ( empty( $data ) ) {
            return false;
        }
    
        // Sanitize & prepare update data
        $update_data   = [];
        $update_format = [];
    
        if ( isset( $data['reply'] ) ) {
            $update_data['reply'] = sanitize_textarea_field( $data['reply'] );
            $update_format[] = '%s';
        }
    
        if ( isset( $data['reply_date'] ) ) {
            $update_data['reply_date'] = sanitize_text_field( $data['reply_date'] );
            $update_format[] = '%s';
        }
    
        if ( isset( $data['status'] ) ) {
            $update_data['status'] = sanitize_text_field( $data['status'] );
            $update_format[] = '%s';
        }
    
        // No valid data
        if ( empty( $update_data ) ) {
            return false;
        }
    
        $where         = [ 'review_id' => intval( $id ) ];
        $where_format  = [ '%d' ];
    
        $updated = $wpdb->update(
            $table,
            $update_data,
            $where,
            $update_format,
            $where_format
        );
    
        // $wpdb->update returns number of rows updated, or false on error
        if ( $updated === false ) {
            return false; // DB error
        }
    
        return true; // success, even if no change
    }

    public static function delete_review( $id ) {
        global $wpdb;
    
        $review_table = $wpdb->prefix . Utill::TABLES['review'];
        $rating_table = $wpdb->prefix . Utill::TABLES['rating'];
    
        $id = intval( $id );
        if ( ! $id ) {
            return false;
        }
    
        // Begin transaction (optional but good practice if supported)
        $wpdb->query( 'START TRANSACTION' );
    
        //Delete from ratings first
        $wpdb->delete(
            $rating_table,
            [ 'review_id' => $id ],
            [ '%d' ]
        );
    
        //Delete from main review table
        $deleted = $wpdb->delete(
            $review_table,
            [ 'review_id' => $id ],
            [ '%d' ]
        );
    
        if ( $deleted === false ) {
            $wpdb->query( 'ROLLBACK' );
            return false;
        }
    
        $wpdb->query( 'COMMIT' );
        return true;
    }
    
}
