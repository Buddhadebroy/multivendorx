<?php

namespace MultiVendorX;

defined( 'ABSPATH' ) || exit;
/**
 * @class       MultiVendorX Promotions Class
 *
 * @version     PRODUCT_VERSION
 * @package     MultiVendorX
 * @author 		MultiVendorX
 */
class Promotions {
    public function __construct() {
        add_action( 'admin_notices', array($this, 'notice' ) );
        add_action( 'admin_notices', array($this, 'review_admin_notice'));
        add_action( 'wp_ajax_multivendorx_admin_notice_action', array($this, 'multivendorx_admin_notice_action'), 10);
        add_action( 'admin_print_footer_scripts', array($this, 'notice_script' ) );
    }

    public function multivendorx_admin_notice_action() {
        $action_type = filter_input(INPUT_POST, 'multivendorx_admin_notice_action_type', FILTER_SANITIZE_STRING);
        $user_id     = get_current_user_id();
        if (!$action_type) {
            wp_die();
        }
        switch ($action_type) {
            case 'later':
                set_transient('multivendorx_wp_review_request', 'yes', MONTH_IN_SECONDS);
                break;

            case 'add_review':
                add_user_meta($user_id, 'multivendorx_wp_review_request', 'true', true);
                break;

            case 'review_closed':
                set_transient('multivendorx_wp_review_request', 'yes', YEAR_IN_SECONDS);
                break;

            case 'multivendorx_wp_billing_phone_notice':
                add_user_meta($user_id, 'multivendorx_wp_billing_phone_notice', 'true', true);
                break;
        }
        wp_die();
    }

    public function review_admin_notice() {
        $user_id = get_current_user_id();

        if ( false !== get_transient('multivendorx_wp_review_request') || get_user_meta($user_id, 'multivendorx_wp_review_request', true) ) {
            return;
        }
        ?>
        <div class="multivendorx_wp_review_request notice notice-info is-dismissible">
            <h3 style="margin: 10px 0;"><?php esc_html_e('MultiVendorX', 'multivendorx'); ?></h3>
            <p><?php esc_html_e('Hey, We would like to thank you for using our plugin. We would appreciate it if you could take a moment to drop a quick review that will inspire us to keep going.', 'multivendorx'); ?></p>
            <p>
                <a class="button button-secondary" data-type="later"><?php esc_html_e('Remind me later', 'multivendorx'); ?></a>
                <a class="button button-primary" data-type="add_review"><?php esc_html_e('Review now', 'multivendorx'); ?></a>
            </p>
        </div>

        <script type="text/javascript">
        (function ($) {
            "use strict";

            let data_obj = {
                action: 'multivendorx_admin_notice_action',
                multivendorx_admin_notice_action_type: ''
            };

            $(document)
                .on('click', '.multivendorx_wp_review_request a.button', function (e) {
                    e.preventDefault();
                    let type = $(this).data('type');

                    if (type === 'add_review') {
                        window.open('https://wordpress.org/support/plugin/dc-woocommerce-multi-vendor/reviews/#new-post');
                    }

                    $(this).closest('.multivendorx_wp_review_request').hide();
                    data_obj.multivendorx_admin_notice_action_type = type;
                    $.post(ajaxurl, data_obj);
                })
                .on('click', '.multivendorx_wp_review_request .notice-dismiss', function () {
                    $(this).closest('.multivendorx_wp_review_request').hide();
                    data_obj.multivendorx_admin_notice_action_type = 'review_closed';
                    $.post(ajaxurl, data_obj);
                })
                .on('click', '.multivendorx_wp_billing_phone_notice .notice-dismiss', function () {
                    $(this).closest('.multivendorx_wp_billing_phone_notice').hide();
                    data_obj.multivendorx_admin_notice_action_type = 'multivendorx_wp_billing_phone_notice';
                    $.post(ajaxurl, data_obj);
                });

        })(jQuery);
        </script>
        <?php
    }

    public function notice() {
        if (get_option('multivendorx_plugin_action_block_notice')) {
            return;
        }

        $notice_options = [
            'consent_button_text' => __('What we collect.', 'multivendorx'),
            'yes'                 => __('Sure, I\'d like to help', 'multivendorx'),
            'no'                  => __('No Thanks.', 'multivendorx'),
            'notice'              => __('Want to help make <strong>MultiVendorX</strong> even more awesome? You can get a <strong>10% discount coupon</strong> for Premium extensions if you allow us to track the usage.', 'multivendorx'),
            'extra_notice'        => __('We collect non-sensitive diagnostic data and plugin usage information. Your site URL, WordPress & PHP version, plugins & themes and email address to send you the discount coupon.', 'multivendorx'),
        ];

        $url_yes = add_query_arg([
            'plugin'        => 'dc-woocommerce-multi-vendor',
            'plugin_action' => 'yes',
        ]);

        $url_no = add_query_arg([
            'plugin'        => 'dc-woocommerce-multi-vendor',
            'plugin_action' => 'no',
        ]);

        ?>
        <div class="notice notice-success">
            <p>
                <?php
                echo wp_kses_post($notice_options['notice']); ?>
                <a href="#" class="multivenddorxn-dc-woocommerce-multi-vendor-collect">
                    <?php echo esc_html($notice_options['consent_button_text']); ?>
                </a>
            </p>

            <div class="multivenddorxn-data" style="display:none;">
                <p><?php echo wp_kses_post($notice_options['extra_notice']); ?></p>
            </div>

            <p>
                <a href="<?php echo esc_url($url_yes); ?>" class="button-primary">
                    <?php echo esc_html($notice_options['yes']); ?>
                </a>
                <a href="<?php echo esc_url($url_no); ?>" class="button-secondary">
                    <?php echo esc_html($notice_options['no']); ?>
                </a>
            </p>
        </div>
        <?php

        $plugin_action = filter_input(INPUT_GET, 'plugin_action', FILTER_SANITIZE_STRING);

        if ($plugin_action) {
            update_option('multivendorx_plugin_action_block_notice', $plugin_action);
            if ($plugin_action === 'yes') {
                $body = MultiVendorX()->tracker->get_data();
                $body['status'] = 'Deactivated';
                $body['deactivated_date'] = time();
                MultiVendorX()->tracker->send_data($body);
                $current_user = wp_get_current_user();
                $this->create_coupon_for_discount([
                    'name'  => sanitize_text_field($current_user->display_name),
                    'email' => sanitize_email($current_user->user_email),
                ]);

                $email = WC()->mailer()->emails['WC_Email_Send_Site_Information'];
                $email->trigger(get_current_user_id());
            }
        }
    }

    public function create_coupon_for_discount( $data = array(), $args = array() ) {
        if ( empty( $data ) ) {
            return;
        }
        $args = wp_parse_args( $args, array(
            'method'      => 'POST',
            'timeout'     => 30,
            'redirection' => 5,
            'httpversion' => '1.1',
            'blocking'    => true,
            'body'        => $data,
            'user-agent'  => 'PUT/1.0.0; ' . get_bloginfo( 'url' ),
            )
        );
        $endpoint = 'https://multivendorx.com/wp-json/mvx_thirdparty/v1/coupon_create_for_pro';
        $request = wp_remote_post( esc_url( $endpoint ), $args );
        if ( is_wp_error( $request ) || ( isset( $request['response'], $request['response']['code'] ) && $request['response']['code'] != 200 ) ) {
            return new \WP_Error( 500, 'Something went wrong.' );
        }
        return $request;
    }

    public function notice_script() {
        echo "<script type='text/javascript'>jQuery('.multivenddorxn-" . esc_attr( 'dc-woocommerce-multi-vendor' ) . "-collect').on('click', function(e) {e.preventDefault();jQuery('.multivenddorxn-data').slideToggle('fast');});</script>";
    }
}