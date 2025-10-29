<?php

namespace MultiVendorX\Commission;
use MultiVendorX\Order\VendorOrder as VendorOrder;

defined('ABSPATH') || exit;

/**
 * MultiVendorX Commission Hooks class
 *
 * @version		PRODUCT_VERSION
 * @package		MultiVendorX
 * @author 		MultiVendorX
 */
class Hooks {
    function __construct() {
        add_action( 'mvx_checkout_vendor_order_processed', [$this, 'create_commission'], 10, 3 );
        add_action( 'woocommerce_order_refunded', [$this, 'create_commission_refunds'], 10, 2 );
    }

    /**
     * Create commission of vendor order.
     * @param   int $vendor_order_id
     * @param   object $vendor_order
     * @param   object $main_order
     * @return  void
     */
    public function create_commission( $vendor_order, $main_order ) {
        $processed = $vendor_order->get_meta( 'multivendorx_commissions_processed', true );

        if ( ! $processed ) {
            
            $commission_id = MultiVendorX()->commission->calculate_commission( $vendor_order );
            $vendor_order->update_meta_data( 'multivendorx_commission_id', $commission_id );
            $vendor_order->update_meta_data( 'multivendorx_commissions_processed', 'yes' );
            
            // Action hook after commission processed.
            do_action( 'multivendorx_after_calculate_commission', $commission_id, $vendor_order, $main_order );
        }
    }
    
    /**
     * Create refunds for vendor commission
     * @param mixed $order_id
     * @param mixed $refund_id
     * @return void
     */
    public function create_commission_refunds( $order_id, $refund_id ) {
        $order  = wc_get_order($order_id);
        $refund  = wc_get_order($refund_id);
       
        if ($order->get_parent_id() == 0) return;
        
        if ( $refund->get_meta( '_commission_refund_processed', true ) ) {
            return;
        }

        $commission_id = MultiVendorX()->commission->calculate_commission_refunds( $order, $refund_id );

        if ($commission_id) {
            $refund->update_meta_data( '_commission_refund_processed', true );

            $store_id = $order->get_meta('multivendorx_store_id');
            if( $store_id ){
                $refund->update_meta_data( 'multivendorx_store_id', $store_id );
            }
            
            $refund->save();

            /**
             * Action hook after commission refund save.
             * @since 3.4.0
             */
            do_action( 'mvx_after_create_commission_refunds', $order_id, $commission_id );
        }
    }
}