<?php

namespace MultiVendorX;

defined( 'ABSPATH' ) || exit;
/**
 * @class       MultiVendorX Tracker Class
 *
 * @version     PRODUCT_VERSION
 * @package     MultiVendorX
 * @author 		MultiVendorX
 */
class Tracker {
    const PLUGIN_SLUG = 'dc-woocommerce-multi-vendor';
    public function __construct() {
        add_filter( 'plugin_action_links_' . MultiVendorX()->plugin_base, array($this, 'deactivate_action_links' ));
        add_action( 'admin_print_footer_scripts-plugins.php', array($this, 'deactivate_reasons_form_script' ));
        add_action( 'wp_ajax_deactivation_form_' . esc_attr( 'dc-woocommerce-multi-vendor' ), array($this, 'deactivate_reasons_form_submit' ));
        /**
         * Deactivation Hook
         */
        register_deactivation_hook( MultiVendorX()->plugin_path . 'dc_product_vendor.php', array( $this, 'deactivate_multivendorx_plugin' ) );
        add_action( 'admin_print_styles-plugins.php', array( $this, 'deactivate_reasons_form_style' ) );
    }

    public function deactivate_multivendorx_plugin() {
        if (!$this->is_tracking_allowed()) {
            return;
        }

        $body = $this->get_data();
        $body['status'] = 'Deactivated';
        $body['deactivated_date'] = time();

        $reason  = get_option('multivendorx_deactivation_reason_' . self::PLUGIN_SLUG);
        $details = get_option('multivendorx_deactivation_details_' . self::PLUGIN_SLUG);

        if ($reason) {
            $body['deactivation_reason'] = $reason;
        }
        if ($details) {
            $body['deactivation_details'] = $details;
        }

        $this->send_data($body);

        delete_option('multivendorx_deactivation_reason_' . self::PLUGIN_SLUG);
        delete_option('multivendorx_deactivation_details_' . self::PLUGIN_SLUG);
    }

    /**
     * Is tracking allowed?
     *
     * @since 1.0.0
     */
    private function is_tracking_allowed() {
        // The multivendorx_plugin_action_block_notice option is an array of plugins that are being tracked
        $allow_tracking = get_option( 'multivendorx_plugin_action_block_notice' );
        // If this plugin is in the array, then tracking is allowed
        return $allow_tracking === 'yes';
    }

    public function deactivate_action_links( $links ) {
        $links['settings'] = '<a href="' . admin_url( 'admin.php?page=multivendorx#&tab=settings&subtab=overview' ) . '">' . __( 'Settings', 'multivendorx' ) . '</a>';

        if (isset($links['deactivate'])) {
            $links['deactivate'] = $this->wrap_deactivate_link($links['deactivate']);
        }

        $links['write_review'] = '<a href="https://wordpress.org/support/plugin/dc-woocommerce-multi-vendor/reviews/#new-post">' . __('Write a Review', 'multivendorx') . '</a>';
        if ( ! Utill::is_khali_dabba() ) {
            $links['go_pro'] = '<a href="' . MULTIVENDORX_PRO_SHOP_URL . '" class="multivendorx-pro-plugin" target="_blank" style="font-weight: 700;background: linear-gradient(110deg, rgb(63, 20, 115) 0%, 25%, rgb(175 59 116) 50%, 75%, rgb(219 75 84) 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">' . __( 'Upgrade to Pro', 'multivendorx' ) . '</a>';
        }

        return $links;
    }

    private function wrap_deactivate_link($link) {
        $wrapper = '<div class="multivendor-xs-goodbye-form-wrapper-' . self::PLUGIN_SLUG . '">
                        <div class="multivendor-xs-goodbye-form-bg"></div>
                        <span class="multivendor-xs-goodbye-form" id="multivendor-xs-goodbye-form"></span>
                    </div>';

        return str_replace(
            '<a ',
            $wrapper . '<a onclick="event.preventDefault();" id="multivendor-xs-goodbye-link-' . self::PLUGIN_SLUG . '" ',
            $link
        );
    }

    public function deactivate_reasons_form_script() {
        $slug       = 'dc-woocommerce-multi-vendor';
        $form       = $this->deactivation_reasons();
        $nonce      = wp_create_nonce( 'multivendorx_deactivation_nonce' );

        ob_start();
        ?>
        <div class="multivendor-xs-goodbye-form-head">
            <strong><?php echo esc_html( $form['heading'] ); ?></strong>
        </div>

        <div class="multivendor-xs-goodbye-form-body">
            <p class="multivendor-xs-goodbye-form-caption">
                <?php echo esc_html( $form['body-upper'] ); ?>
            </p>

            <!-- Support Cards -->
            <div class="support-card">
                <a href="http://multivendorx.com/support-forum/" target="_blank" rel="noopener noreferrer" class="card-item">
                    <div>
                        <svg style="width:38px;fill:#522c81" class="svg-icon" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
                        </svg>
                    </div>
                    <div><?php esc_html_e( 'Contact us over Support Forum.', 'multivendorx' ); ?></div>
                </a>

                <a href="https://www.facebook.com/groups/226246620006065" target="_blank" rel="noopener noreferrer" class="card-item">
                    <div>
                        <svg style="width:35px" class="svg-icon" viewBox="0 0 20 20" aria-hidden="true">
                            <path fill="#522c81" d="M10,0.5c-5.247,0-9.5,4.253-9.5,9.5c0,5.247,4.253,9.5,9.5,9.5c5.247,0,9.5-4.253,9.5-9.5C19.5,4.753,15.247,0.5,10,0.5 M10,18.637c-4.77,0-8.636-3.867-8.636-8.637S5.23,1.364,10,1.364S18.637,5.23,18.637,10S14.77,18.637,10,18.637 M10.858,7.949c0-0.349,0.036-0.536,0.573-0.536h0.719v-1.3H11c-1.38,0-1.866,0.65-1.866,1.743v0.845h-0.86V10h0.86v3.887h1.723V10h1.149l0.152-1.299h-1.302L10.858,7.949z"></path>
                        </svg>
                    </div>
                    <div><?php esc_html_e( 'Get help from MultiVendorX Facebook community.', 'multivendorx' ); ?></div>
                </a>

                <a href="https://calendly.com/contact-hkdq/30min" target="_blank" rel="noopener noreferrer" class="card-item">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:35px;fill:#522c81" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"/>
                        </svg>
                    </div>
                    <div><?php esc_html_e( 'Book a free 15-min call with us.', 'multivendorx' ); ?></div>
                </a>
            </div>

            <p class="multivendor-xs-goodbye-form-caption">
                <?php echo esc_html( $form['body-bottom'] ); ?>
            </p>

            <?php if ( ! empty( $form['options'] ) && is_array( $form['options'] ) ) : ?>
                <div id="multivendor-xs-goodbye-options" class="multivendor-xs-goodbye-options">
                    <ul>
                        <?php foreach ( $form['options'] as $option ) :
                            $label    = is_array( $option ) ? $option['label'] : $option;
                            $id       = sanitize_title( $label ) . '_' . $slug;
                            $id_attr  = esc_attr( $id );
                            $has_extra = is_array( $option ) && ! empty( $option['extra_field'] );
                            $type     = $has_extra ? ( $option['type'] ?? 'input' ) : '';
                            // Only allow safe input types
                            $allowed_types = [ 'input', 'textarea' ];
                            $type = in_array( $type, $allowed_types, true ) ? $type : 'input';
                        ?>
                            <li class="<?php echo $has_extra ? 'has-goodbye-extra' : ''; ?>">
                                <input
                                    type="radio"
                                    name="multivendor-xs-dc-woocommerce-multi-vendor-goodbye-options"
                                    id="<?php echo $id_attr; ?>"
                                    value="<?php echo esc_attr( $label ); ?>"
                                >
                                <label for="<?php echo $id_attr; ?>">
                                    <?php echo esc_html( $label ); ?>
                                </label>

                                <?php if ( $has_extra ) :
                                    $field_id          = esc_attr( str_replace( ' ', '', $option['extra_field'] ) );
                                    $field_placeholder = esc_attr( $option['extra_field'] );
                                ?>
                                    <?php if ( $type === 'textarea' ) : ?>
                                        <textarea
                                            style="display:none"
                                            name="<?php echo $id_attr; ?>"
                                            id="<?php echo $field_id; ?>"
                                            placeholder="<?php echo $field_placeholder; ?>"
                                        ></textarea>
                                    <?php else : ?>
                                        <input
                                            type="text"
                                            style="display:none"
                                            name="<?php echo $id_attr; ?>"
                                            id="<?php echo $field_id; ?>"
                                            placeholder="<?php echo $field_placeholder; ?>"
                                        >
                                    <?php endif; ?>
                                <?php endif; ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>

                <h6 class="multivendorx-collecting-area">
                    <?php esc_html_e( 'We collect non-sensitive diagnostic data and plugin usage information along with your feedback.', 'multivendorx' ); ?>
                </h6>
            <?php endif; ?>
        </div>

        <p class="deactivating-spinner" style="display:none">
            <span class="spinner"></span> <?php esc_html_e( 'Submitting form', 'multivendorx' ); ?>
        </p>
        <?php

        // Safely encode HTML for embedding in JS — eliminates XSS risk entirely
        $html       = ob_get_clean();
        $html_json  = wp_json_encode( $html );
        $footer_html = wp_json_encode(
            '<div class="multivendor-xs-goodbye-form-footer">'
            . '<div class="multivendor-xs-goodbye-form-buttons">'
            . '<a class="multivendor-xs-submit-btn" id="multivendor-xs-deactivate-url-' . esc_attr( $slug ) . '" href="#">'
            . esc_html__( 'Skip & Deactivate', 'multivendor-x' )
            . '</a></div></div>'
        );
        ?>
        <script type="text/javascript">
        jQuery(document).ready(function ($) {
            var slug        = <?php echo wp_json_encode( $slug ); ?>;
            var nonce       = <?php echo wp_json_encode( $nonce ); ?>;
            var formHtml    = <?php echo $html_json; ?>;
            var footerHtml  = <?php echo $footer_html; ?>;
            var $triggerLink = $('#multivendor-xs-goodbye-link-' + slug);
            var $formWrapper = $('.multivendor-xs-goodbye-form-wrapper-' + slug);
            var $form        = $formWrapper.find('#multivendor-xs-goodbye-form');

            $triggerLink.on('click', function (e) {
                e.preventDefault();
                var deactivateUrl = $(this).attr('href');
                $('body').toggleClass('multivendor-xs-form-active-' + slug);
                $form.html(formHtml + footerHtml).fadeIn();
                $form.find('#multivendor-xs-deactivate-url-' + slug).attr('href', deactivateUrl);

                $('#multivendor-xs-submit-form-' + slug).on('click', function (e) {
                    e.preventDefault();
                    $form.find('.multivendor-xs-goodbye-form-body').fadeOut();
                    $form.find('.multivendor-xs-goodbye-form-footer').fadeOut();
                    $form.find('.deactivating-spinner').fadeIn();
                    var $checked  = $('input[name="multivendor-xs-' + slug + '-goodbye-options"]:checked');
                    var reason    = $checked.length ? $checked.val()  : 'No Reason';
                    var details   = '';

                    if ( $checked.length ) {
                        var inputName = $checked[0].id;
                        details = $('input[name="' + inputName + '"], textarea[name="' + inputName + '"]').val() || '';
                    }

                    $.post(
                        ajaxurl,
                        {
                            action   : 'deactivation_form_' + slug,
                            values   : reason,
                            details  : details,
                            security : nonce,
                            dataType : 'json'
                        },
                        function () {
                            window.location.href = deactivateUrl;
                        }
                    );
                });
                
                $('#multivendor-xs-goodbye-options > ul').on(
                    'click',
                    'li label, li > input[type="radio"]',
                    function () {
                        var $li = $(this).closest('li');
                        $li.siblings().find('input:not([type="radio"]), textarea').hide();
                        $li.find('input:not([type="radio"]), textarea').show();
                    }
                );

                $('.multivendor-xs-goodbye-form-bg').on('click', function () {
                    $form.fadeOut();
                    $('body').removeClass('multivendor-xs-form-active-' + slug);
                });
            });
        });
        </script>
        <?php
    }

    public function deactivation_reasons() {
        $form            = array();
        $form['heading'] = __( 'We\'re sorry to see you leave 😔', 'multivendor-x' );
        $form['body-upper']    = __( 'Thinking about Deactivating ? Know we\'re here to help. Contact us anytime', 'multivendor-x' );
        $form['body-bottom']    = __( 'Before you deactivate the plugin, would you quickly give us your reason for doing so?', 'multivendor-x' );

        $form['options'] = array(
            __( 'I no longer need the plugin', 'multivendor-x' ),
            [
                'label'       => __( 'I found a better plugin', 'multivendor-x' ),
                'extra_field' => __( 'Please share which plugin', 'multivendor-x' ),
            ],
            __( "I couldn't get the plugin to work", 'multivendor-x' ),
            __( 'It\'s a temporary deactivation', 'multivendor-x' ),
            [
                'label'       => __( 'Other', 'multivendor-x' ),
                'extra_field' => __( 'Please share the reason', 'multivendor-x' ),
                'type'        => 'textarea',
            ],
        );
        return apply_filters( 'multivendorx_form_text_' . 'dc-woocommerce-multi-vendor', $form );
    }

    public function deactivate_reasons_form_submit() {
        check_ajax_referer( 'multivendorx_deactivation_nonce', 'security' );
        $values  = sanitize_text_field( wp_unslash( filter_input(INPUT_POST, 'values') ?? '' ) );
        $details = sanitize_text_field( wp_unslash( filter_input(INPUT_POST, 'details') ?? '' ) );

        update_option( 'multivendorx_deactivation_reason_' . self::PLUGIN_SLUG, $values, 'no' );
        update_option( 'multivendorx_deactivation_details_' . self::PLUGIN_SLUG, $details, 'no' );
        echo 'success';
        //deactivation mail sent
        $current_user_id = get_current_user_id();
        $email = WC()->mailer()->emails['WC_Email_Plugin_Deactivated_Mail'];
        $email->trigger($current_user_id);
        wp_die();
    }
  

    public function get_data() {
        $body = array(
            'plugin_slug'   => sanitize_text_field( 'dc-woocommerce-multi-vendor' ),
            'url'           => get_bloginfo( 'url' ),
            'site_name'     => get_bloginfo( 'name' ),
            'site_version'  => get_bloginfo( 'version' ),
            'site_language' => get_bloginfo( 'language' ),
            'charset'       => get_bloginfo( 'charset' ),
            'plugin_version' => MULTIVENDORX_PLUGIN_VERSION,
            'php_version'   => phpversion(),
            'multisite'     => is_multisite(),
            'file_location' => __FILE__,
        );

        // Collect the email if the correct option has been set
        if ( ! function_exists( 'wp_get_current_user' ) ) {
            include ABSPATH . 'wp-includes/pluggable.php';
        }
        $current_user = wp_get_current_user();
        $email        = $current_user->user_email;
        $admin_email_from_settings = get_option('admin_email', true) ? get_option('admin_email', true) : '';
        $one_user_email = '';
        $one_user = get_userdata(1);
        if ($one_user) {
            $one_user_email = get_userdata(1)->data->user_email;
        }

        $body['email'] = $email . ','. $one_user_email . ',' . $admin_email_from_settings;
        $body['server']           = isset( $_SERVER['SERVER_SOFTWARE'] ) ? $_SERVER['SERVER_SOFTWARE'] : '';

        /**
         * Collect all active and inactive plugins
         */
        if ( ! function_exists( 'get_plugins' ) ) {
            include ABSPATH . '/wp-admin/includes/plugin.php';
        }
        $plugins        = array_keys( get_plugins() );
        $active_plugins = is_network_admin() ? array_keys( get_site_option( 'active_sitewide_plugins', array() ) ) : get_option( 'active_plugins', array() );
        foreach ( $plugins as $key => $plugin ) {
            if ( in_array( $plugin, $active_plugins ) ) {
                unset( $plugins[ $key ] );
            }
        }
        $body['active_plugins']   = serialize($active_plugins);
        $body['inactive_plugins'] = serialize($plugins);
        
        /**
         * Text Direction.
         */
        $body['text_direction'] = ( function_exists( 'is_rtl' ) ? ( is_rtl() ? 'RTL' : 'LTR' ) : 'NOT SET' );
        /**
         * Get Our Plugin Data.
         *
         * @since 3.0.0
         */
        $plugin = $this->plugin_data();
        if ( empty( $plugin ) ) {
            $body['message'] .= __( 'We can\'t detect any plugin information. This is most probably because you have not included the code in the plugin main file.', 'plugin-usage-tracker' );
            $body['status']   = 'NOT FOUND';
        } else {
            if ( isset( $plugin['Name'] ) ) {
                $body['plugin'] = sanitize_text_field( $plugin['Name'] );
            }
            if ( isset( $plugin['Version'] ) ) {
                $body['version'] = sanitize_text_field( $plugin['Version'] );
            }
            $body['status'] = 'Active';
        }

        /**
         * Get active theme name and version
         *
         * @since 3.0.0
         */
        $theme = wp_get_theme();
        if ( $theme->Name ) {
            $body['theme'] = sanitize_text_field( $theme->Name );
        }
        if ( $theme->Version ) {
            $body['theme_version'] = sanitize_text_field( $theme->Version );
        }
        return $body;
    }

    public function plugin_data() {
        if ( ! function_exists( 'get_plugin_data' ) ) {
            include ABSPATH . '/wp-admin/includes/plugin.php';
        }
        $plugin = get_plugin_data( MultiVendorX()->plugin_path . 'dc_product_vendor.php' );
        return $plugin;
    }

    /**
     * Send the data to insights.
     *
     * @since 3.0.0
     */
    public function send_data( $body ) {
        /**
         * Get SITE ID
         */
        $site_id_key       = "multivendorx_dc-woocommerce-multi-vendor_site_id";
        $site_id           = get_option( $site_id_key, false );
        $site_url          = get_bloginfo( 'url' );
        $original_site_url = get_option( "multivendorx_dc-woocommerce-multi-vendor_original_url", false );
        if ( $original_site_url === false ) {
            $site_id = false;
        }
        /**
         * Send Initial Data to API
         */

        if ( $site_id == false && $original_site_url === false ) {
            if ( isset( $_SERVER['REMOTE_ADDR'] ) && ! empty( $_SERVER['REMOTE_ADDR'] && $_SERVER['REMOTE_ADDR'] != '127.0.0.1' ) ) {
                $country_request = wp_remote_get( 'http://ip-api.com/json/' . $_SERVER['REMOTE_ADDR'] . '?fields=country' );
                if ( ! is_wp_error( $country_request ) && $country_request['response']['code'] == 200 ) {
                    $ip_data         = json_decode( $country_request['body'] );
                    $body['country'] = isset( $ip_data->country ) ? $ip_data->country : 'NOT SET';
                }
            }

            $body['plugin_slug'] = 'dc-woocommerce-multi-vendor';
            $body['url']         = $site_url;

            $request = $this->remote_post( $body );
            if ( ! is_wp_error( $request ) && $request['response']['code'] == 200 ) {
                $retrieved_body = json_decode( wp_remote_retrieve_body( $request ), true );
                if ( is_array( $retrieved_body ) && isset( $retrieved_body['siteId'] ) ) {
                    update_option( $site_id_key, $retrieved_body['siteId'], 'no' );
                    update_option( "multivendorx_dc-woocommerce-multi-vendor_original_url", $site_url, 'no' );
                    update_option( "multivendorx_dc-woocommerce-multi-vendor_{$retrieved_body['siteId']}", $body, 'no' );
                }
            }
        }

        if ( isset( $request ) && is_wp_error( $request ) ) {
            return $request;
        }

        if ( isset( $request ) ) {
            return true;
        }
        return false;
    }

        /**
     * WP_REMOTE_POST method responsible for send data to the API_URL
     *
     * @param array $data
     * @param array $args
     * @return void
     */
    protected function remote_post( $data = array(), $args = array() ) {
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
        $endpoint = 'https://multivendorx.com/wp-json/mvx_thirdparty/v1/users_database_update';
        $request = wp_remote_post( esc_url( $endpoint ), $args );
        if ( is_wp_error( $request ) || ( isset( $request['response'], $request['response']['code'] ) && $request['response']['code'] != 200 ) ) {
            return new \WP_Error( 500, 'Something went wrong.' );
        }

        return $request;
    }

        /**
     * Deactivate Reasons Form.
     * This form will appears when user wants to deactivate the plugin to send you deactivated reasons.
     *
     * @since 3.0.0
     */
    public function deactivate_reasons_form_style() {
        ?>
        <style>
            .multivendor-xs-form-active-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-bg {
                background: rgba(0, 0, 0, .8);
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor {
                position: relative;
                display: none;
            }

            .multivendor-xs-form-active-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor {
                display: flex !important;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                z-index: 10;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form {
                display: none;
            }

            .multivendor-xs-form-active-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form {
                position: relative !important;
                width: 34.65rem;
                max-width: 80%;
                background: #fff;
                box-shadow: 0.126rem 0.504rem 1.449rem 0.189rem rgba(0, 0, 0, .2);
                border-radius: 0.189rem;
                white-space: normal;
                overflow: hidden;
                display: block;
                z-index: 999999;
                height: 34.65rem;
                overflow-y: scroll;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-head {
                background: #fff;
                color: #495157;
                padding: 1.134rem;
                box-shadow: 0 0 0.504rem rgba(0, 0, 0, .1);
                font-size: 0.945rem;
                text-align: center;
            }
            .multivendorx-collecting-area {
                font-weight: 500;
                background: #eee;
                padding: 1.5rem;
                border: 0.06rem solid #d1d4d9;
                border-radius: 0.25rem;
                text-align: center;
                font-size: 0.875rem;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form .multivendor-xs-goodbye-form-head strong {
                font-size: 0.945rem;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-body {
                padding: 0.504rem 0.756rem 0;
                color: #333;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-body label {
                padding-left: 0.315rem;
                color: #6d7882;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-body .multivendor-xs-goodbye-form-caption {
                font-weight: 500;
                font-size: 0.945rem;
                color: #495157;
                line-height: 1.4;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-body #multivendor-xs-goodbye-options {
                padding-top: 0.315rem;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-body #multivendor-xs-goodbye-options ul>li {
                margin-bottom: 0.945rem;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-body #multivendor-xs-goodbye-options ul>li>div {
                display: inline;
                padding-left: 0.189rem;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-body #multivendor-xs-goodbye-options ul>li>div>input,
            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-body #multivendor-xs-goodbye-options ul>li>div>textarea {
                margin: 0.63rem 1.134rem;
                padding: 0.504rem;
                width: 80%;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .deactivating-spinner {
                display: none;
                padding-bottom: 1.26rem !important;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .deactivating-spinner .spinner {
                float: none;
                margin: 0.252rem 0.252rem 0 1.134rem;
                vertical-align: bottom;
                visibility: visible;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-footer {
                padding: 0.504rem 0 1.134rem;
                background-color: #fff;
                position: sticky;
                bottom: 0;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-footer>.multivendor-xs-goodbye-form-buttons {
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-footer .multivendor-xs-submit-btn {
                background-image: linear-gradient(-28deg, #db4b54, #af3b74, #3f1473);
                -webkit-border-radius: 0.189rem;
                border-radius: 0.189rem;
                color: #f9f8fb;
                line-height: 1;
                padding: 0.945rem 1.26rem;
                font-size: 0.819rem;
                font-weight: 500;
            }
            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-footer .multivendor-xs-submit-btn:hover {
                background-image: linear-gradient(110deg, #db4b54, #af3b74, #3f1473);

            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-footer .multivenddorxn-deactivate-btn {
                font-size: 0.819rem;
                color: #a4afb7;
                background: none;
                float: right;
                padding-right: 0.63rem;
                width: auto;
            }

            .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .test {}

            @media screen and (max-width: 48.384rem) {
                .multivendor-xs-goodbye-form-wrapper-dc-woocommerce-multi-vendor .multivendor-xs-goodbye-form-footer>.multivendor-xs-goodbye-form-buttons {
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 2rem;
                }
            }
            .support-card{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.75rem;
                flex-wrap: wrap;
                max-width: 100%;
                margin: 1rem auto;
            }
            
            .support-card .card-item {
                padding: 1.25rem 0.75rem;
                flex: 1 0 7rem;
                border: 0.005rem solid rgba(82, 44, 129, 0.4784313725);
                border-radius: 0.25rem;
                background: #fff;
                box-shadow: 0.63rem 0.63rem 1rem #ededed, -0.63rem -0.63rem 1rem #ffffff;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                height: 6.3rem;
            }

            .support-card .card-item i {
                font-size: 2rem;
                color: #522c81;
                margin-bottom: 0.75rem;
            }
            .support-card .card-item div {
                font-size: 0.875rem;
                margin-bottom: 0.5rem;
                text-align: center;
                display: block;
                color: #522c81;
            }
            .support-card .card-item:hover {
                background: linear-gradient(-145deg, #ffffff, #e6e6e6);
            }
        </style>
        <?php
    }
}
