import { __ } from '@wordpress/i18n';

export default {
    id: 'product -store-category -control',
    priority: 2,
    name: __( 'Product & Store Category Control', 'multivendorx' ),
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
            key: 'show_related_products',
            type: 'select',
            label: __( 'Related Product', 'multivendorx' ),
            desc: __(
                'Let customers view other products related to the product they are viewing..',
                'multivendorx'
            ),
            options: [
                {
                    key: 'all_related',
                    label: __(
                        'Related Products from Entire Store',
                        'multivendorx'
                    ),
                    value: __( 'all_related', 'multivendorx' ),
                },
                {
                    key: 'vendors_related',
                    label: __(
                        'Related Products from Seller Store',
                        'multivendorx'
                    ),
                    value: __( 'vendors_related', 'multivendorx' ),
                },
                {
                    key: 'disable',
                    label: __( 'Disable', 'multivendorx' ),
                    value: __( 'disable', 'multivendorx' ),
                },
            ],
        },   
    ],
};