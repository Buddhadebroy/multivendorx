import { __ } from '@wordpress/i18n';

export default {
    id: 'seller-access-approval',
    priority: 1,
    name: __( 'Seller Access & Approval', 'multivendorx' ),
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
            key: 'approve_seller',
            type: 'setting-toggle',
            label: __( 'Approve Seller', 'multivendorx' ),
            desc: __(
                'Decide how you want to approve new sellers for your marketplace: <li>Manual Approval: Review and approve sellers manually. <li>Automatic Approval: Automatically approve sellers without review.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'manually',
                    label: __( 'Manually', 'multivendorx' ),
                    value: 'manually',
                },
                {
                    key: 'automatically',
                    label: __( 'Automatically', 'multivendorx' ),
                    value: 'automatically',
                },
            ],
        },
        {
            key: 'vendors_backend_access',
            type: 'checkbox',
            label: __( "Seller's Backend Access", 'multivendorx' ),
            desc: __(
                'Allow sellers to access the full WordPress backend with an integrated dashboard to manage products, orders, and more from one place.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'vendors_backend_access',
                    value: 'vendors_backend_access',
                },
            ],
            look: 'toggle',
            proSetting: true,
        },
        {
            key: 'category_pyramid_guide',
            type: 'checkbox',
            label: __( 'Category assistance (CPG)', 'multivendorx' ),
            desc: __(
                'Help vendors categorize their products accurately with the Category Pyramid Guide.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'category_pyramid_guide',
                    value: 'category_pyramid_guide',
                },
            ],
            look: 'toggle',
        },
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
        {
            key: 'enable_store_category',
            type: 'checkbox',
            label: __( 'Enable Store Category', 'multivendorx' ),
            desc: __(
                'Allow vendors to assign their stores to categories for better browsing and filtering.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'enable_store_category',
                    value: 'enable_store_category',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'display_product_seller',
            type: 'checkbox',
            label: __( 'Display vendor name on products', 'multivendorx' ),
            desc: __(
                "show the vendor's name on their product listings. This helps customers identify who they're buying from.",
                'multivendorx'
            ),
            options: [
                {
                    key: 'display_product_seller',
                    value: 'display_product_seller',
                },
            ],
            look: 'toggle',
        }
    ],
};