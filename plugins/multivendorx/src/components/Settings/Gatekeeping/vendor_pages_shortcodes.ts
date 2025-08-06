import { __ } from '@wordpress/i18n';

export default {
    id: 'vendor-pages-shortcodes',
    priority: 2,
    name: __( 'Vendor Pages & Shortcodes', 'multivendorx' ),
    desc: __(
        'Configure the basic setting of the marketplace.',
        'multivendorx'
    ),
    video: {
        icon: 'adminlib-general-tab', // optional icon class
        link: 'https://example.com/video/general-settings',
    },
    docs: {
        icon: 'adminlib-general-tab', // optional icon class
        link: 'https://example.com/docs/general-settings',
    },
    icon: 'adminlib-general-tab',
    submitUrl: 'settings',
    modal: [
        {
            key: 'seller_registration_page',
            type: 'select',
            label: __( 'Seller Registration Page', 'multivendorx' ),
            desc: __(
                'Select the page where you have inserted the <code>[seller_registration]</code> shortcode. This page will be used to onboard new sellers.',
                'multivendorx'
            ),
            options: appLocalizer.pages_list,
        },
        {
            key: 'vendor_dashboard_page',
            type: 'select',
            label: __( 'Vendor dashboard page', 'multivendorx' ),
            desc: __(
                'Select the page on which you have inserted <code>[mvx_vendor]</code> shortcode. This will be the main dashboard page for your vendors to manage their store.',
                'multivendorx'
            ),
            options: appLocalizer.pages_list,
        },
        {
            key: 'mvx_tinymce_api_section',
            type: 'text',
            label: __( 'TinyMCE Api', 'multivendorx' ),
            desc: __(
                'Set TinyMCE Api key <a href="https://www.tiny.cloud/blog/how-to-get-tinymce-cloud-up-in-less-than-5-minutes/" target="_blank">Click here to generate key</a> to enable the text editor for vendors. This allows them to format their product descriptions and other content with ease.',
                'multivendorx'
            ),
        },
        {
            key: 'available_shortcodes',
            type: 'shortcode-table',
            label: __( 'Available shortcodes', 'multivendorx' ),
            desc: __( '', 'multivendorx' ),
            optionLabel: [ 'Shortcodes', 'Description' ],
            options: [
                {
                    key: '',
                    label: '[mvx_vendor]',
                    desc: __(
                        'Enables you to create a seller dashboard ',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[vendor_registration]',
                    desc: __(
                        'Creates a page where the vendor registration form is available',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[vendor_coupons]',
                    desc: __(
                        'Lets you view  a brief summary of the coupons created by the seller and number of times it has been used by the customers',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[mvx_recent_products]',
                    desc: __(
                        'Allows you to glance at the recent products added by seller',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[mvx_products]',
                    desc: __(
                        'Displays the products added by seller',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[mvx_featured_products]',
                    desc: __(
                        'Exhibits featured products added by the seller',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[mvx_sale_products]',
                    desc: __(
                        'Allows you to see the products put on sale by a seller',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[mvx_top_rated_products]',
                    desc: __(
                        'Displays the top rated products of the seller',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[mvx_best_selling_products]',
                    desc: __(
                        'Presents you the option of viewing the best selling products of the vendor',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[mvx_product_category]',
                    desc: __(
                        'Lets you see the product categories used by the vendor',
                        'multivendorx'
                    ),
                },
                {
                    key: '',
                    label: '[mvx_vendorslist]',
                    desc: __(
                        'Shows customers a list of available seller.',
                        'multivendorx'
                    ),
                },
            ],
        },
    ],
};