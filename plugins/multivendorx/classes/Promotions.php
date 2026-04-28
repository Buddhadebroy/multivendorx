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
                update_user_meta($user_id, 'multivendorx_wp_billing_phone_notice', 'true', true);
                break;
        }
        wp_send_json_success();
    }

    public function review_admin_notice() {
        $user_id = get_current_user_id();

        if ( false !== get_transient('multivendorx_wp_review_request') || get_user_meta($user_id, 'multivendorx_wp_review_request', true) ) {
            return;
        }
        ?>
        <div class="notice notice-info is-dismissible multivendorx-review-notice">
			<h3><?php esc_html_e( 'MultiVendorX', 'multivendorx' ); ?></h3>
			<p><?php esc_html_e( 'We appreciate you using MultiVendorX. If it has helped your business, please consider leaving a quick review.', 'multivendorx' ); ?></p>
			<p>
				<a href="#" class="button button-secondary" data-action="later"><?php esc_html_e( 'Remind me later', 'multivendorx' ); ?></a>
				<a href="<?php echo esc_url( MULTIVENDORX_REVIEW_URL ); ?>" target="_blank" rel="noopener noreferrer" class="button button-primary" data-action="add_review"><?php esc_html_e( 'Review now', 'multivendorx' ); ?></a>
			</p>
		</div>
        <?php
    }

    public function notice() {
        if (get_option('multivendorx_plugin_action_block_notice')) {
            return;
        }

        $yes_url = add_query_arg([
            'plugin'        => 'dc-woocommerce-multi-vendor',
            'plugin_action' => 'yes',
        ]);

        $no_url = add_query_arg([
            'plugin'        => 'dc-woocommerce-multi-vendor',
            'plugin_action' => 'no',
        ]);

        ?>
        <div class="notice notice-success multivendorx-tracking-notice">
			<p>
				<?php echo wp_kses_post( __( 'Want to help make <strong>MultiVendorX</strong> even better? Allow anonymous usage tracking and receive a <strong>10% discount coupon</strong> for premium extensions.', 'multivendorx' ) ); ?>
				<a href="#" class="multivendorx-tracking-toggle"><?php esc_html_e( 'What we collect.', 'multivendorx' ); ?></a>
			</p>

			<div class="multivendorx-tracking-details" style="display:none;">
				<p><?php echo wp_kses_post( __( 'We collect non-sensitive diagnostic and usage data, including your site URL, WordPress and PHP versions, active plugins and themes, and your email address to send the discount coupon.', 'multivendorx' ) ); ?></p>
			</div>

			<p>
				<a href="<?php echo esc_url( $yes_url ); ?>" class="button button-primary"><?php esc_html_e( 'Sure, I\'d like to help', 'multivendorx' ); ?></a>
				<a href="<?php echo esc_url( $no_url ); ?>" class="button button-secondary"><?php esc_html_e( 'No Thanks', 'multivendorx' ); ?></a>
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

    public function create_coupon_for_discount( $data = array() ) {
		if ( empty( $data ) ) {
			return new \WP_Error( 'missing_data', __( 'Coupon data is required.', 'multivendorx' ) );
		}

		$response = wp_remote_post(
			'https://multivendorx.com/wp-json/mvx_thirdparty/v1/coupon_create_for_pro',
			array(
				'timeout'    => 30,
				'headers'    => array(
					'User-Agent' => 'MultiVendorX/' . ( defined( 'MULTIVENDORX_VERSION' ) ? MULTIVENDORX_VERSION : '1.0.0' ) . '; ' . home_url(),
				),
				'body'       => $data,
				'data_format' => 'body',
			)
		);
		if ( is_wp_error( $response ) ) {
			return $response;
		}
		$response_code = wp_remote_retrieve_response_code( $response );
		if ( 200 !== $response_code ) {
			return new \WP_Error( 'remote_request_failed', __( 'Unable to create coupon.', 'multivendorx' ) );
		}
		return $response;
	}

    public function notice_script() {
        ?>
        <script>
            jQuery( function( $ ) {
			const ajaxData = {
				action: 'multivendorx_admin_notice_action',
				nonce: '<?php echo esc_js( wp_create_nonce( 'multivendorx_admin_notice' ) ); ?>'
			};

			$( document )
				.on( 'click', '.multivendorx-review-notice .button', function( e ) {
					e.preventDefault();

					const actionType = $( this ).data( 'action' );
					const href       = $( this ).attr( 'href' );

					$.post( ajaxurl, { ...ajaxData, multivendorx_admin_notice_action_type: actionType } );
					$( this ).closest( '.notice' ).fadeOut();

					if ( href && '#' !== href ) {
						window.open( href, '_blank', 'noopener' );
					}
				} )
				.on( 'click', '.multivendorx-review-notice .notice-dismiss', function() {
					$.post( ajaxurl, { ...ajaxData, multivendorx_admin_notice_action_type: 'review_closed' } );
				} )
				.on( 'click', '.multivendorx-tracking-toggle', function( e ) {
					e.preventDefault();
					$( '.multivendorx-tracking-details' ).slideToggle( 'fast' );
				} );
		} );
		</script>
        <?php
    }
}