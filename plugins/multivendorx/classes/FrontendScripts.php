<?php
/**
 * FrontendScripts class file.
 *
 * @package MultiVendorX
 */

namespace MultiVendorX;

use MultiVendorX\Store\StoreUtil;
use MultiVendorX\Vendor\VendorUtil as VendorUtil;

defined( 'ABSPATH' ) || exit;

/**
 * MultiVendorX FrontendScripts class
 *
 * @class       FrontendScripts class
 * @version     PRODUCT_VERSION
 * @author      MultiVendorX
 */
class FrontendScripts {

    /**
     * Holds the scripts.
     *
     * @var array
     */
    public static $scripts = array();
	/**
     * Holds the styles.
     *
     * @var array
     */
    public static $styles = array();

    /**
     * FrontendScripts constructor.
     */
    public function __construct() {
        add_action( 'wp_enqueue_scripts', array( $this, 'load_scripts' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'admin_load_scripts' )  , 55);
    }

    /**
	 * Get the build path for assets based on environment.
	 *
	 * @return string Relative path to the build directory.
	 */
    public static function get_build_path_name() {
        if ( MultiVendorX()->is_dev ) {
			return 'release/assets/';
        }
        return 'assets/';
    }

    /**
	 * Enqueue external JavaScript files.
	 *
	 * @return void
	 */
	public static function enqueue_external_scripts() {
        $base_dir = plugin_dir_path( __FILE__ ) . '../' . self::get_build_path_name() . 'js/';
        $base_url = MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/';
        self::enqueue_scripts_from_dir( $base_dir . 'externals/', $base_url . 'externals/' );
        if ( MultiVendorX()->is_dev ) {
            self::enqueue_scripts_from_dir(
                $base_dir,
                $base_url,
                array( 'index.js', 'components.js' ),
                '/min\.js$/i'
            );
        }
    }

	/**
	 * Enqueue JavaScript files from a directory, optionally excluding some by name or pattern.
	 *
	 * @param string   $dir            Full filesystem path to the JS directory.
	 * @param string   $url            Corresponding URL for the directory.
	 * @param string[] $exclude_files Array of filenames to exclude.
	 * @param string   $exclude_pattern Optional regex pattern to exclude.
	 * @return void
	 */
    private static function enqueue_scripts_from_dir( $dir, $url, $exclude_files = array(), $exclude_pattern = '' ) {
        if ( ! is_dir( $dir ) ) {
            return;
        }
        $js_files = glob( $dir . '*.js' );
        foreach ( $js_files as $chunk_path ) {
            $chunk_file = basename( $chunk_path );
            // Exclude based on filename or regex.
            if ( in_array( $chunk_file, $exclude_files, true ) ||
                ( $exclude_pattern && preg_match( $exclude_pattern, $chunk_file ) )
            ) {
                continue;
            }
            $chunk_handle = 'multivendorx-script-' . sanitize_title( $chunk_file );
            $asset_file   = str_replace( '.js', '.asset.php', $chunk_path );
            $deps         = array();
            $version      = filemtime( $chunk_path );
            if ( file_exists( $asset_file ) ) {
                $asset   = include $asset_file;
                $deps    = $asset['dependencies'] ?? array();
                $version = $asset['version'] ?? $version;
            }
            wp_enqueue_script(
                $chunk_handle,
                $url . $chunk_file,
                $deps,
                $version,
                true
            );
        }
    }

    /**
	 * Register and store a script for later use.
	 *
	 * @param string $handle       Unique script handle.
	 * @param string $path         URL to the script file.
	 * @param array  $deps         Optional. Script dependencies. Default empty array.
	 * @param string $version      Optional. Script version. Default empty string.
	 */
    public static function register_script( $handle, $path, $deps = array(), $version = '' ) {
        self::$scripts[] = $handle;
        wp_register_script( $handle, $path, $deps, $version, true );
        wp_set_script_translations( $handle, 'multivendorx' );
    }

    /**
	 * Register and store a style for later use.
	 *
	 * @param string $handle   Unique style handle.
	 * @param string $path     URL to the style file.
	 * @param array  $deps     Optional. Style dependencies. Default empty array.
	 * @param string $version  Optional. Style version. Default empty string.
	 */
    public static function register_style( $handle, $path, $deps = array(), $version = '' ) {
        self::$styles[] = $handle;
        wp_register_style( $handle, $path, $deps, $version );
    }

    /**
	 * Register frontend scripts using filters and enqueue required external scripts.
	 *
	 * Loads block assets and additional scripts defined through the `multivendorx_register_scripts` filter.
	 */
    public static function register_scripts() {
        $version          = MultiVendorX()->version;
        self::enqueue_external_scripts();
        $index_asset      = include plugin_dir_path( __FILE__ ) . '../' . self::get_build_path_name() . 'js/index.asset.php';
        $component_asset  = include plugin_dir_path( __FILE__ ) . '../' . self::get_build_path_name() . 'js/components.asset.php';
        $register_scripts = apply_filters(
            'multivendorx_register_scripts',
            array(
				// 'multivendorx-frontend-script' => array(
				// 	'src'         => MultiVendorX()->plugin_url . 'assets/js/' . self::get_script_name( 'frontend' ) . '.js',
				// 	'deps'        => array( 'jquery', 'wp-element', 'wp-components' ),
				// 	'version'     => $version, 
				// ),
                'multivendorx-dashboard-script'      => array(
					'src'         => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/index.js',
					'deps'        => $index_asset['dependencies'],
					'version'     => $version,
				),
				'multivendorx-dashboard-components-script' => array(
					'src'         => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/components.js',
					'deps'        => $component_asset['dependencies'],
					'version'     => $version,
				),
                'multivendorx-registration-form-script' => array(
					'src'         => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/block/RegistrationForm/index.js',
					'deps'        => $component_asset['dependencies'],
					'version'     => $version,
				),
                'multivendorx-store-dashboard-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/' . MULTIVENDORX_PLUGIN_SLUG . '-store-dashboard.min.js',
					'deps'    => array( 'jquery', 'jquery-blockui', 'wp-element', 'wp-i18n', 'react-jsx-runtime' ),
					'version' => $version,
				),
                // 'multivendorx-store-products-script' => array(
				// 	'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/' . MULTIVENDORX_PLUGIN_SLUG . '-store-products.min.js',
				// 	'deps'    => array( 'jquery', 'jquery-blockui', 'wp-element', 'wp-i18n', 'react-jsx-runtime', 'jquery-ui-datepicker' ),
				// 	'version' => $version,
				// ),
                'multivendorx-product-classify-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/' . MULTIVENDORX_PLUGIN_SLUG . '-product-classify.min.js',
					'deps'    => array( 'jquery', 'jquery-blockui', 'wp-element', 'wp-i18n', 'react-jsx-runtime' ),
					'version' => $version,
				),
                'multivendorx-qna-frontend-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'modules/QuestionsAnswers/js/' . MULTIVENDORX_PLUGIN_SLUG . '-frontend.min.js',
					'deps'    => array( 'jquery' ),
					'version' => $version,
				),
                'multivendorx-follow-store-frontend-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'modules/FollowStore/js/' . MULTIVENDORX_PLUGIN_SLUG . '-frontend.min.js',
					'deps'    => array( 'jquery' ),
					'version' => $version,
				),
                'multivendorx-distance-shipping-frontend-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'modules/DistanceShipping/js/' . MULTIVENDORX_PLUGIN_SLUG . '-frontend.min.js',
					'deps'    => array( 'jquery' ),
					'version' => $version,
				),
                'multivendorx-report-abuse-frontend-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'modules/ReportAbuse/js/' . MULTIVENDORX_PLUGIN_SLUG . '-frontend.min.js',
					'deps'    => array( 'jquery' ),
					'version' => $version,
				),
                'multivendorx-review-frontend-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'modules/StoreReview/js/' . MULTIVENDORX_PLUGIN_SLUG . '-frontend.min.js',
					'deps'    => array( 'jquery' ),
					'version' => $version,
				),
                'multivendorx-single-product-multiple-vendor-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'modules/Spmv/js/' . MULTIVENDORX_PLUGIN_SLUG . '-frontend.min.js',
					'deps'    => array( 'jquery' ),
					'version' => $version,
				),
                'multivendorx-stores-list-script'        => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/blocks/stores-list/index.js',
					'deps'    => array( 'jquery', 'jquery-blockui', 'wp-element', 'wp-i18n', 'wp-blocks' ),
					'version' => $version,
				),
			)
        );
        foreach ( $register_scripts as $name => $props ) {
            self::register_script( $name, $props['src'], $props['deps'], $props['version'] );
        }
    }

    /**
	 * Register frontend styles using filters.
	 *
	 * Allows style registration through `multivendorx_register_styles` filter.
	 */
    public static function register_styles() {
        $version         = MultiVendorX()->version;
        $register_styles = apply_filters(
            'multivendorx_register_styles',
            array(
				'multivendorx-dashboard-style' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'styles/index.css',
					'deps'    => array(),
					'version' => $version,
				),
                'multivendorx-store-product-style' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'styles/' . MULTIVENDORX_PLUGIN_SLUG . '-store-products.min.css',
					'deps'    => array(),
					'version' => $version,
				),
			)
        );
        foreach ( $register_styles as $name => $props ) {
            self::register_style( $name, $props['src'], $props['deps'], $props['version'] );
        }
    }

    /**
     * Register/queue frontend scripts.
     */
    public static function load_scripts() {
        self::register_scripts();
        self::register_styles();
    }

    /**
	 * Register/queue admin scripts.
	 */
	public static function admin_load_scripts() {
        self::admin_register_scripts();
		self::admin_register_styles();
    }

    /**
	 * Register admin scripts using filters.
	 *
	 * Loads admin-specific JavaScript assets and chunked dependencies.
	 */
    public static function admin_register_scripts() {
		$version = MultiVendorX()->version;
        // Enqueue all chunk files (External dependencies).
        self::enqueue_external_scripts();
        $index_asset      = include plugin_dir_path( __FILE__ ) . '../' . self::get_build_path_name() . 'js/index.asset.php';
        $component_asset  = include plugin_dir_path( __FILE__ ) . '../' . self::get_build_path_name() . 'js/components.asset.php';
		$register_scripts = apply_filters(
            'admin_multivendorx_register_scripts',
            array(
				'multivendorx-admin-script'      => array(
					'src'         => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/index.js',
					'deps'        => $index_asset['dependencies'],
					'version'     => $version,
				),
				'multivendorx-components-script' => array(
					'src'         => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/components.js',
					'deps'        => $component_asset['dependencies'],
					'version'     => $version,
				),
                'multivendorx-product-tab-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'js/' . MULTIVENDORX_PLUGIN_SLUG . '-product-tab.min.js',
					'deps'    => array( 'jquery', 'jquery-blockui', 'wp-element', 'wp-i18n', 'react-jsx-runtime' ),
					'version' => $version,
				),
                'multivendorx-admin-product-auto-search-script' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'modules/Spmv/js/' . MULTIVENDORX_PLUGIN_SLUG . '-admin-product-auto-search.min.js',
					'deps'    => array( 'jquery' ),
					'version' => $version,
				),
            )
        );
		foreach ( $register_scripts as $name => $props ) {
			self::register_script( $name, $props['src'], $props['deps'], $props['version'] );
		}
	}

    /**
	 * Register admin styles using filters.
	 *
	 * Allows style registration through `admin_moowoodle_register_styles` filter.
	 */
    public static function admin_register_styles() {
		$version         = MultiVendorX()->version;
		$register_styles = apply_filters(
            'admin_multivendorx_register_styles',
            array(
				'multivendorx-components-style' => array(
					'src'     => MultiVendorX()->plugin_url . self::get_build_path_name() . 'styles/components.css',
					'deps'    => array(),
					'version' => $version,
				),
			)
        );

		foreach ( $register_styles as $name => $props ) {
			self::register_style( $name, $props['src'], $props['deps'], $props['version'] );
		}
	}

    /**
	 * Localize all scripts.
	 *
	 * @param string $handle Script handle the data will be attached to.
	 */
    public static function localize_scripts( $handle ) {
        // Get all tab setting's database value.
        $settings_databases_value = array();

		$tabs_names = apply_filters(
			'multivendorx_additional_tabs_names',
            array(
                'general',
                'store-registration-form',
                'menu-manager',
                'privacy-settings',
                'store-coupon',
                'store',
                'products',
                'policy',
                'disbursement',
                'products-capability',
                'commissions',
                'marketplace-settings',
                'user-capability',
                'store-capability',
                'identity-verification',
                'commission-rule',
                'payment-integration',
                'store-appearance',
                'product-report-abuse',
                'store-commissions',
                'store-inventory',
                'review-management',
                'order-actions-refunds',
                'advertising',
                'product-preferencess',
                'product-store-category-control',
                'geolocation',
                'shipping',
                'legal-compliance',
                'product-compliance',
                'tax-compliance',
                'custom-css',
                'single-product-multiple-store',
            )
		);

        foreach ( $tabs_names as $tab_name ) {
            $option_name                           = str_replace( '-', '_', 'multivendorx_' . $tab_name . '_settings' );
            $settings_databases_value[ $tab_name ] = MultiVendorX()->setting->get_option( $option_name );
        }

        $pages = get_pages();
        $woocommerce_pages = array(wc_get_page_id('shop'), wc_get_page_id('cart'), wc_get_page_id('checkout'), wc_get_page_id('myaccount'));
        if($pages){
            foreach ($pages as $page) {
                if (!in_array($page->ID, $woocommerce_pages)) {
                    $pages_array[] = array(
                        'value'=> $page->ID,
                        'label'=> $page->post_title,
                        'key'=> $page->ID,
                    );
                }
            }

            $shortcode = '[multivendorx_store_dashboard]';
            $matched_pages = array_filter( $pages, function ( $page ) use ( $shortcode ) {
                return strpos( $page->post_content, $shortcode ) !== false;
            });
            $vendor_dashboard_pages = [];
            foreach ( $matched_pages as $page ) {
                $vendor_dashboard_pages[] = array(
                    'value'=> $page->post_name,
                    'label'=> $page->post_title,
                    'key'=> $page->ID,
                );
            }
        }

        $woo_countries = new \WC_Countries();
        $countries = $woo_countries->get_allowed_countries();
        $country_list = [];
        foreach ($countries as $countries_key => $countries_value) {
            $country_list[] = array(
                'label' => $countries_value,
                'value' => $countries_key
            );
        }

        $store_owners = get_users([
            'role'    => 'store_owner',
            'orderby' => 'ID',
            'order'   => 'ASC',
        ]);

        $owners_list = [];
        foreach ( $store_owners as $owner ) {
            $owners_list[] = array(
                'label' => $owner->display_name,
                'value' => $owner->ID,
            );
        }

        $gateways = WC()->payment_gateways->payment_gateways();
        $gateway_list = [];
        foreach ( $gateways as $gateway_id => $gateway ) {
            if ( $gateway_id === 'cheque' ) {
                continue;
            }
            $gateway_list[] = array(
                'label' => $gateway->get_title(),
                'value' => $gateway_id,
            );
        }

        $payment_admin_settings = MultiVendorX()->setting->get_setting( 'payment_methods', [] );
        $settings = !empty($payment_admin_settings['custom-gateway']) ? $payment_admin_settings['custom-gateway'] : [];
        
        $gateway_name = $settings && !empty($settings['custom_gateway_name']) ? $settings['custom_gateway_name'] : 'Custom Gateway';

        $payout_payment_options = [
            [
                'value' => 'custom-gateway',
                'label' => $gateway_name
            ],
            [
                'value' => 'cash',
                'label' => 'Cash'
            ]
        ];

        $localize_scripts = apply_filters(
            'multivendorx_localize_scripts',
            array(
                'multivendorx-admin-script'  => array(
                    'object_name' => 'appLocalizer',
					'data'        => apply_filters('multivendorx_admin_localize_scripts', array(
						'apiUrl'                   => untrailingslashit( get_rest_url() ),
						'restUrl'                  => MultiVendorX()->rest_namespace,
						'nonce'                    => wp_create_nonce( 'wp_rest' ),
                        'woo_nonce'                => wp_create_nonce( 'wc_store_api' ),
						'khali_dabba'              => Utill::is_khali_dabba(),
						'tab_name'                 => __( 'MultiVendorX', 'multivendorx' ),
						'settings_databases_value' => $settings_databases_value,
						'pages_list'               => $pages_array,
						'vendor_dashboard_pages'   => $vendor_dashboard_pages,
						'pro_url'                  => esc_url( MULTIVENDORX_PRO_SHOP_URL ),
                        'open_uploader'            => 'Upload Image',
                        'country_list'             => $country_list,
                        'store_owners'             => $owners_list,
                        'gateway_list'             => $gateway_list,
                        'tinymceApiKey'             => MultiVendorX()->setting->get_setting( 'tinymce_api_section' ),
                        'default_logo'             => MultiVendorX()->plugin_url.'assets/images/WP-stdavatar.png',
                        'capabilities'             => StoreUtil::get_store_capability(),
                        'custom_roles'             => Roles::multivendorx_get_roles(),
                        'all_payments'             => MultiVendorX()->payments->get_all_payment_settings(),
                        'all_store_settings'       => MultiVendorX()->payments->get_all_store_payment_settings(),
                        'freeVersion'              => MultiVendorX()->version,
                        'marketplace_site'         => get_bloginfo(),
                        'site_url'                 => site_url(),
                        'woocommerce_currency'     => get_woocommerce_currency(),
                        'user_id'                  => get_current_user_id(),
                        'currency'                 => get_woocommerce_currency(),       // e.g., USD
                        'currency_symbol'          => get_woocommerce_currency_symbol(),
                        'payout_payment_options'   => $payout_payment_options,
						'module_page_url'          => admin_url( 'admin.php?page=multivendorx#&tab=modules' ),
						'store_page_url'           => trailingslashit( site_url() ) . untrailingslashit( MultiVendorX()->setting->get_setting( 'store_url', 'store' ) ),
                        'map_providor'             => MultiVendorX()->setting->get_setting( 'choose_map_api' ),
                        'google_api_key'           => MultiVendorX()->setting->get_setting( 'google_api_key' ),
                        'mapbox_api_key'           => MultiVendorX()->setting->get_setting( 'mapbox_api_key' ),
                        'all_verification_methods' => MultiVendorX()->setting->get_setting( 'all_verification_methods' ),
                        'approve_store'            => MultiVendorX()->setting->get_setting( 'approve_store' ),
                        'enable_profile_deactivation_request' => MultiVendorX()->setting->get_setting( 'enable_profile_deactivation_request' ),
                        'can_publish_products'     => MultiVendorX()->setting->get_setting( 'products' ),
                        'can_publish_coupons'      => MultiVendorX()->setting->get_setting( 'coupons' ),
                        'withdrawals'              => MultiVendorX()->setting->get_setting( 'withdrawals' ),
					) ),
                ),
                'multivendorx-product-tab-script' => array(
					'object_name' => 'multivendorx',
					'data'        => array(
						'ajaxurl'     => admin_url( 'admin-ajax.php' ),
						'select_text' => __( 'Select an item...', 'multivendorx' ),
					),
				),
                'multivendorx-store-dashboard-script' => array(
					'object_name' => 'dashboard',
					'data'        => array(
						'ajaxurl'     => admin_url( 'admin-ajax.php' ),
					),
				),
                'multivendorx-product-classify-script' => array(
					'object_name' => 'mvx_product_classify',
					'data'        => array(
						'ajaxurl'     => admin_url( 'admin-ajax.php' ),
                        'initial_graphic_url' => MultiVendorX()->plugin_url.'assets/images/select-category-graphic.png',
                        'i18n' => array(
                            'select_cat_list' => __( 'Select a category from the list', 'multivendorx' )
                        )
					),
				),
                // 'multivendorx-store-products-script' => array(
				// 	'object_name' => 'mvx_advance_product_params',
				// 	'data'        => array(
				// 		'ajax_url'                            => admin_url( 'admin-ajax.php' ),
                //         'product_id'                          => MultiVendorX()->store->products->product_id,
                //         'search_products_nonce'               => wp_create_nonce( 'search-products' ),
                //         'add_attribute_nonce'                 => wp_create_nonce( 'add-attribute' ),
                //         'save_attributes_nonce'               => wp_create_nonce( 'save-attributes' ),
                //         'add_variation_nonce'                 => wp_create_nonce( 'add-variation' ),
                //         'link_variation_nonce'                => wp_create_nonce( 'link-variations' ),
                //         'delete_variations_nonce'             => wp_create_nonce( 'delete-variations' ),
                //         'load_variations_nonce'               => wp_create_nonce( 'load-variations' ),
                //         'save_variations_nonce'               => wp_create_nonce( 'save-variations' ),
                //         'bulk_edit_variations_nonce'          => wp_create_nonce( 'bulk-edit-variations' ),
                //         'save_product_nonce'                  => wp_create_nonce( 'save-product' ),
                //         'product_data_tabs'                   => json_encode( MultiVendorX()->store->products->get_product_data_tabs() ),
                //         'default_product_types'               => json_encode( MultiVendorX()->store->products->mvx_default_product_types() ),
                //         'product_types'                       => json_encode( wc_get_product_types() ),
                //         'product_type'                        => MultiVendorX()->store->products->product_object->get_type(),
                //         'downloadable_files'                  => json_encode( $downloadable_contents ),
                //         'attributes'                          => MultiVendorX()->store->products->product_object->get_attributes( 'edit' ),
                //         'custom_attribute'                    => apply_filters( 'vendor_can_add_custom_attribute', true ),
                //         'new_attribute_prompt'                => esc_js( __( 'Enter a name for the new attribute term:', 'multivendorx' ) ),
                //         'remove_attribute'                    => esc_js( __( 'Remove this attribute?', 'multivendorx' ) ),
                //         'woocommerce_placeholder_img_src'     => wc_placeholder_img_src(),
                //         'i18n_link_all_variations'            => esc_js( sprintf( __( 'Are you sure you want to link all variations? This will create a new variation for each and every possible combination of variation attributes (max %d per run).', 'multivendorx' ), defined( 'WC_MAX_LINKED_VARIATIONS' ) ? WC_MAX_LINKED_VARIATIONS : 50 ) ),
                //         'i18n_enter_a_value'                  => esc_js( __( 'Enter a value', 'multivendorx' ) ),
                //         'i18n_enter_menu_order'               => esc_js( __( 'Variation menu order (determines position in the list of variations)', 'multivendorx' ) ),
                //         'i18n_enter_a_value_fixed_or_percent' => esc_js( __( 'Enter a value (fixed or %)', 'multivendorx' ) ),
                //         'i18n_delete_all_variations'          => esc_js( __( 'Are you sure you want to delete all variations? This cannot be undone.', 'multivendorx' ) ),
                //         'i18n_last_warning'                   => esc_js( __( 'Last warning, are you sure?', 'multivendorx' ) ),
                //         'i18n_choose_image'                   => esc_js( __( 'Choose an image', 'multivendorx' ) ),
                //         'i18n_set_image'                      => esc_js( __( 'Set variation image', 'multivendorx' ) ),
                //         'i18n_variation_added'                => esc_js( __( "variation added", 'multivendorx' ) ),
                //         'i18n_variations_added'               => esc_js( __( "variations added", 'multivendorx' ) ),
                //         'i18n_no_variations_added'            => esc_js( __( "No variations added", 'multivendorx' ) ),
                //         'i18n_remove_variation'               => esc_js( __( 'Are you sure you want to remove this variation?', 'multivendorx' ) ),
                //         'i18n_scheduled_sale_start'           => esc_js( __( 'Sale start date (YYYY-MM-DD format or leave blank)', 'multivendorx' ) ),
                //         'i18n_scheduled_sale_end'             => esc_js( __( 'Sale end date (YYYY-MM-DD format or leave blank)', 'multivendorx' ) ),
                //         'i18n_edited_variations'              => esc_js( __( 'Save changes before changing page?', 'multivendorx' ) ),
                //         'i18n_variation_count_single'         => esc_js( __( '%qty% variation', 'multivendorx' ) ),
                //         'i18n_variation_count_plural'         => esc_js( __( '%qty% variations', 'multivendorx' ) ),
                //         'variations_per_page'                 => absint( apply_filters( 'woocommerce_admin_meta_boxes_variations_per_page', 15 ) ),
                //         'mon_decimal_point'                   => wc_get_price_decimal_separator(),
                //         'add_tags'                            => apply_filters( 'mvx_vendor_can_add_product_tag', true, get_current_user_id() ),
                //         'dashboard_nonce'                     => wp_create_nonce('mvx-dashboard'),
				// 	),
				// ),
                'multivendorx-qna-frontend-script' => array(
					'object_name' => 'qnaFrontend',
					'data'        => array(
						'ajaxurl'     => admin_url( 'admin-ajax.php' ),
                        'nonce'    => wp_create_nonce('qna_ajax_nonce'),
					),
				),
                'multivendorx-follow-store-frontend-script' => array(
					'object_name' => 'followStoreFrontend',
					'data'        => array(
						'ajaxurl'     => admin_url( 'admin-ajax.php' ),
                        'nonce'    => wp_create_nonce('follow_store_ajax_nonce'),
					),
				),
                'multivendorx-distance-shipping-frontend-script' => array(
					'object_name' => 'distanceShippingFrontend',
                    'data'        => array(
                        'ajaxurl'           => admin_url('admin-ajax.php'),
                        'nonce'             => wp_create_nonce('distance_shipping_ajax_nonce'),
                        // 'mapbox_emable'     => \MultiVendorX\DistanceShipping\Frontend::mvx_mapbox_api_enabled(),
                        'default_lat'       => MultiVendorX()->setting->get_setting('default_map_lat', '28.6139'), // example default lat
                        'default_lng'       => MultiVendorX()->setting->get_setting('default_map_lng', '77.2090'), // example default lng
                        'default_zoom'      => 13,
                        'store_icon'        => plugin_dir_url(__FILE__) . 'assets/images/store-icon.png',
                        'icon_width'        => 40,
                        'icon_height'       => 40,
                    ),
				),
                'multivendorx-report-abuse-frontend-script' => array(
					'object_name' => 'reportAbuseFrontend',
					'data'        => array(
						'ajaxurl'     => admin_url( 'admin-ajax.php' ),
                        'nonce'    => wp_create_nonce('report_abuse_ajax_nonce'),
					),
				),
                'multivendorx-review-frontend-script' => array(
					'object_name' => 'review',
					'data'        => array(
						'ajaxurl'     => admin_url( 'admin-ajax.php' ),
                        'nonce'    => wp_create_nonce('review_ajax_nonce'),
                        'parameters' => MultiVendorX()->setting->get_setting('ratings_parameters', []),
					),
				),
                'multivendorx-admin-product-auto-search-script' => array(
					'object_name' => 'admin_product_auto_search',
					'data'        => array(
						'ajaxurl'     => admin_url( 'admin-ajax.php' ),
                        'search_products_nonce' => wp_create_nonce('search-products'),
					),
				),
                'multivendorx-single-product-multiple-vendor-script' => array(
					'object_name' => 'single_product_multiple_vendors',
					'data'        => array(
						'ajaxurl'     => admin_url( 'admin-ajax.php' ),
                        'dashboard_nonce' => wp_create_nonce('mvx-dashboard'),
                        'vendors_nonce' => wp_create_nonce('mvx-vendors'),
					),
				),
                'multivendorx-dashboard-script' => array(
                'object_name' => 'appLocalizer',
                'data'        => array(
                    'apiUrl'                   => untrailingslashit( get_rest_url() ),
                    'restUrl'                  => MultiVendorX()->rest_namespace,
                    'nonce'                    => wp_create_nonce( 'wp_rest' ),
                    'woo_nonce'                => wp_create_nonce( 'wc_store_api' ),
                    // 'country_list'             => WC()->countries->get_shipping_countries(),
                    // 'state_list'               => WC()->countries->get_states(),
                    'country_list'             => $country_list,
                    'color'                    => MultiVendorX()->setting->get_setting( 'store_color_settings' ),
                    'map_providor'             => MultiVendorX()->setting->get_setting( 'choose_map_api' ),
                    'google_api_key'           => MultiVendorX()->setting->get_setting( 'google_api_key' ),
                    'mapbox_api_key'           => MultiVendorX()->setting->get_setting( 'mapbox_api_key' ),
                    'tinymceApiKey'            => MultiVendorX()->setting->get_setting( 'tinymce_api_section' ),
                    'store_payment_settings'   => MultiVendorX()->payments->get_all_store_payment_settings(),
                    'store_id'                 => get_user_meta( wp_get_current_user()->ID, 'multivendorx_active_store', true ),
                    'ajaxurl'                  => admin_url( 'admin-ajax.php' ),
                    'currency'                 => get_woocommerce_currency(),
                    'currency_symbol'          => get_woocommerce_currency_symbol(),
                    'edit_order_capability'    => current_user_can( 'edit_shop_orders' ),
                    'add_product_link'         => StoreUtil::get_endpoint_url( 'products', 'edit' ),
                    'all_verification_methods' => MultiVendorX()->setting->get_setting( 'all_verification_methods' ),
                    'shipping_methods'         => apply_filters( 'multivendorx_store_shipping_options', array() ),
                    'product_page_chat'        => MultiVendorX()->setting->get_setting( 'product_page_chat' ),
                    'chat_provider'            => MultiVendorX()->setting->get_setting(' chat_provider' ),
                    'messenger_color'            => MultiVendorX()->setting->get_setting(' messenger_color' ),
                    'whatsapp_opening_pattern'            => MultiVendorX()->setting->get_setting(' whatsapp_opening_pattern' ),
                    'whatsapp_pre_filled'            => MultiVendorX()->setting->get_setting(' whatsapp_pre_filled' ),
                    ),
                ),
                'multivendorx-registration-form-script'          => array(
                    'object_name' => 'registrationForm',
                    'data'        => array(
                        'apiUrl'                   => untrailingslashit( get_rest_url() ),
                        'restUrl'                  => MultiVendorX()->rest_namespace,
                        'nonce'               => wp_create_nonce( 'wp_rest' ),
                        'settings'            => VendorUtil::get_vendor_registration_form() ?? array(),
                        'content_before_form' => apply_filters( 'multivendorx_add_content_before_form', '' ),
                        'content_after_form'  => apply_filters( 'multivendorx_add_content_after_form', '' ),
                        'error_strings'       => array(
                            'required' => __( 'This field is required', 'multivendorx' ),
                            'invalid'  => __( 'Invalid email format', 'multivendorx' ),
                        ),
                    ),
                ),
                'multivendorx-stores-list-editor-script'  => array(
                    'object_name' => 'storesList',
                    'data'        => array(
                        'apiUrl'    => untrailingslashit( get_rest_url() ),
                        'restUrl'   => MultiVendorX()->rest_namespace,
                        'nonce'     => wp_create_nonce( 'wp_rest' ),
                    ),
                ),
                'multivendorx-stores-list-script'  => array(
                    'object_name' => 'storesList',
                    'data'        => array(
                        'apiUrl'    => untrailingslashit( get_rest_url() ),
                        'restUrl'   => MultiVendorX()->rest_namespace,
                        'nonce'     => wp_create_nonce( 'wp_rest' ),
                    ),
                ),
			)
        );

        if ( isset( $localize_scripts[ $handle ] ) ) {
            $props = $localize_scripts[ $handle ];
            self::localize_script( $handle, $props['object_name'], $props['data'] );
        }
    }

    /**
	 * Localizes a registered script with data for use in JavaScript.
	 *
	 * @param string $handle Script handle the data will be attached to.
	 * @param string $name   JavaScript object name.
	 * @param array  $data   Data to be made available in JavaScript.
	 */
    public static function localize_script( $handle, $name, $data = array(), ) {
		wp_localize_script( $handle, $name, $data );
	}

	/**
	 * Enqueues a registered script.
	 *
	 * @param string $handle Handle of the registered script to enqueue.
	 */
    public static function enqueue_script( $handle ) {
		wp_enqueue_script( $handle );
	}

	/**
	 * Enqueues a registered style.
	 *
	 * @param string $handle Handle of the registered style to enqueue.
	 */
    public static function enqueue_style( $handle ) {
		wp_enqueue_style( $handle );
	}
}