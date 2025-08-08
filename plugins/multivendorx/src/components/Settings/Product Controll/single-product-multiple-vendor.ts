import { __ } from '@wordpress/i18n';

export default {
    id: 'single-product-multiple-vendor',
    priority: 3,
    name: __( 'Single Product Multiple Vendor', 'multivendorx' ),
    desc: __(
        'Controls how sellers are onboarded and what access they get.',
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
            key: 'is_singleproductmultiseller',
            type: 'checkbox',
            label: __( 'Allow Vendor to Copy Products', 'multivendorx' ),
            desc: __(
                'Let vendors search for products sold on your site and sell them from their store.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'is_singleproductmultiseller',
                    value: 'is_singleproductmultiseller',
                },
            ],
            look: 'toggle',
            // moduleEnabled: 'spmv',
        },
        {
            key: 'singleproductmultiseller_show_order',
            type: 'select',
            label: __( 'Display Shop Page Product', 'multivendorx' ),
            desc: __(
                'Select the criteria on which the SPMV product is going to be based on.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'min-price',
                    label: __( 'Min Price', 'multivendorx' ),
                    value: __( 'min-price', 'multivendorx' ),
                },
                {
                    key: 'max-price',
                    label: __( 'Max Price', 'multivendorx' ),
                    value: __( 'max-price', 'multivendorx' ),
                },
                {
                    key: 'top-rated-vendor',
                    label: __( 'Top rated vendor', 'multivendorx' ),
                    value: __( 'top-rated-vendor', 'multivendorx' ),
                },
            ],
            dependent: {
                key: 'is_singleproductmultiseller',
                set: true,
            },
            proSetting: true,
            moduleEnabled: 'spmv',
        },
        {
            key: 'moreoffers_display_position',
            type: 'select',
            label: __( 'More Offers Display Position', 'multivendorx' ),
            desc: __(
                'Select where you want the "More Offers" section to appear on the Single Product Page.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'none',
                    label: __( 'None', 'multivendorx' ),
                    value: 'none',
                },
                {
                    key: 'above-tabs',
                    label: __( 'Above Single Page Product Tabs', 'multivendorx' ),
                    value: 'above-tabs',
                },
                {
                    key: 'inside-tabs',
                    label: __( 'Display Inside Single Page Product Tabs', 'multivendorx' ),
                    value: 'inside-tabs',
                },
                {
                    key: 'after-tabs',
                    label: __( 'After Single Page Product Tabs', 'multivendorx' ),
                    value: 'after-tabs',
                },
            ],
            dependent: {
                key: 'is_singleproductmultiseller',
                set: true,
            },
            proSetting: false,
            moduleEnabled: 'spmv',
        },
    ],
};