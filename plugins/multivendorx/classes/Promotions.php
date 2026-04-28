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
        global $current_user;
        if (isset($_POST['multivendorx_admin_notice_action_type']) && 'later' === $_POST['multivendorx_admin_notice_action_type']) {
            set_transient('multivendorx_wp_review_request', 'yes', MONTH_IN_SECONDS);
        } elseif (isset($_POST['multivendorx_admin_notice_action_type']) && 'add_review' === $_POST['multivendorx_admin_notice_action_type']) {
            $user_id = $current_user->ID;
            add_user_meta($user_id, 'multivendorx_wp_review_request', 'true', true);
        } elseif (isset($_POST['multivendorx_admin_notice_action_type']) && 'review_closed' === $_POST['multivendorx_admin_notice_action_type']) {
            set_transient('multivendorx_wp_review_request', 'yes', YEAR_IN_SECONDS);
        } elseif (isset($_POST['multivendorx_admin_notice_action_type']) && 'multivendorx_wp_billing_phone_notice' === $_POST['multivendorx_admin_notice_action_type']) {
            $user_id = $current_user->ID;
            add_user_meta($user_id, 'multivendorx_wp_billing_phone_notice', 'true', true);
        }
    }

    public function review_admin_notice() {
        global $current_user;
        $user_id = $current_user->ID;

        if (false === get_transient('multivendorx_wp_review_request') && !get_user_meta($user_id, 'multivendorx_wp_review_request')) :
            ?>
            <div class="multivendorx_wp_review_request notice notice-info is-dismissible">
                <h3 style="margin: 10px 0;"><?php _e('MultiVendorX', 'multivendorx'); ?></h3>
                <p><?php esc_html_e('Hey, We would like to thank you for using our plugin. We would appreciate it if you could take a moment to drop a quick review that will inspire us to keep going.', 'multivendorx'); ?></p>
                <p>
                    <a class="button button-secondary" style="color:#333; border-color:#ccc; background:#efefef;" data-type="later">Remind me later</a>
                    <a class="button button-primary" data-type="add_review">Review now</a>
                </p>
            </div>
        <?php endif; ?>
        <script type="text/javascript">
            (function ($) {
                "use strict";
                var data_obj = {
                    action: 'multivendorx_admin_notice_action',
                    multivendorx_admin_notice_action_type: ''
                };
                $(document).on('click', '.multivendorx_wp_review_request a.button', function (e) {
                    e.preventDefault();
                    var elm = $(this);
                    var btn_type = elm.attr('data-type');
                    if (btn_type == 'add_review') {
                        window.open('https://wordpress.org/support/plugin/dc-woocommerce-multi-vendor/reviews/#new-post');
                    }
                    elm.parents('.multivendorx_wp_review_request').hide();

                    data_obj['multivendorx_admin_notice_action_type'] = btn_type;
                    $.ajax({
                        url: ajaxurl,
                        data: data_obj,
                        type: 'POST'
                    });

                }).on('click', '.multivendorx_wp_review_request .notice-dismiss', function (e) {
                    e.preventDefault();
                    var elm = $(this);
                    elm.parents('.multivendorx_wp_review_request').hide();
                    data_obj['multivendorx_admin_notice_action_type'] = 'review_closed';
                    $.ajax({
                        url: ajaxurl,
                        data: data_obj,
                        type: 'POST'
                    });

                }).on('click', '.multivendorx_wp_billing_phone_notice .notice-dismiss', function (e) {
                    e.preventDefault();
                    var elm = $(this);
                    elm.parents('.multivendorx_wp_billing_phone_notice').hide();
                    data_obj['multivendorx_admin_notice_action_type'] = 'multivendorx_wp_billing_phone_notice';
                    $.ajax({
                        url: ajaxurl,
                        data: data_obj,
                        type: 'POST'
                    });

                });
            })(jQuery);
        </script>
        <?php
    }

    public function notice() {
        /**
         * Return if notice is not set.
         */

        $notice_options      = [
            'consent_button_text'   => __( 'What we collect.', 'multivendorx' ),
            'yes'                   => __( 'Sure, I\'d like to help', 'multivendorx' ),
            'no'                    => __( 'No Thanks.', 'multivendorx' ),
            'notice'                => __('Want to help make <strong>MultiVendorX</strong> even more awesome? You can get a <strong>10% discount coupon</strong> for Premium extensions if you allow us to track the usage.', 'multivendorx'),
            'extra_notice'          => __('We collect non-sensitive diagnostic data and plugin usage information.
            Your site URL, WordPress & PHP version, plugins & themes and email address to send you the
            discount coupon. This data lets us make sure this plugin always stays compatible with the most
            popular plugins and themes. No spam, I promise.', 'multivendorx'),
        ];

        if ( ! isset( $notice_options['notice'] ) ) {
            return;
        }
        /**
         * Check is allowed or blocked for notice.
         */
        $block_notice = get_option( 'multivendorx_plugin_action_block_notice' );
        if ( !empty($block_notice) ) {
            return;
        }
        if ( ! current_user_can( 'manage_options' ) ) {
            return;
        }

        //$this->has_notice = true;

        $url_yes = add_query_arg( [
            'plugin'        => 'dc-woocommerce-multi-vendor',
            'plugin_action' => 'yes',
            ]
        );
        $url_no  = add_query_arg( array(
            'plugin'        => 'dc-woocommerce-multi-vendor',
            'plugin_action' => 'no',
            )
        );

        // Decide on notice text
        $notice_text       = $notice_options['notice'] . ' <a href="#" class="multivenddorxn-' . esc_attr( 'dc-woocommerce-multi-vendor' ) . '-collect" >' . $notice_options['consent_button_text'] . '</a>';
        $extra_notice_text = $notice_options['extra_notice'];

        ?>

        <div class="notice notice-success">
            <p><?php echo wp_kses_post( $notice_text ); ?></p>
            <div class="multivenddorxn-data" style="display: none;">
                <p><?php echo wp_kses_post( $extra_notice_text ); ?></p>
            </div>
            <p>
                <a href="<?php echo esc_url( $url_yes ); ?>" class="button-primary">
                    <?php echo esc_html( $notice_options['yes'] ); ?>
                </a>&nbsp;
                <a href="<?php echo esc_url( $url_no ); ?>" class="button-secondary">
                    <?php echo esc_html( $notice_options['no'] ); ?>
                </a>
            </p>
        </div>

        <?php

        if (isset($_GET['plugin_action'])) {
            update_option('multivendorx_plugin_action_block_notice', $_GET['plugin_action']);
            if ($_GET['plugin_action'] == 'yes') {
                $body                     = MultiVendorX()->tracker->get_data();
                $body['status']           = 'Deactivated';
                $body['deactivated_date'] = time();
                MultiVendorX()->tracker->send_data( $body );
                // create coupon
                $current_user = wp_get_current_user();
                $user_name = $current_user->display_name;
                $user_email_id = $current_user->user_email;
                $data['name'] = $user_name;
                $data['email'] = $user_email_id;
                $this->create_coupon_for_discount( $data );

                //After share site information sent a mail
                $current_user_id = get_current_user_id();
                $email = WC()->mailer()->emails['WC_Email_Send_Site_Information'];
                $email->trigger($current_user_id);
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