import { __ } from '@wordpress/i18n';

export default {
    id: 'products-fields',
    priority: 2,
    name: __( 'Product Fields', 'multivendorx' ),
    desc: __(
        'Enable specific data fields that sellers must or can use when listing a product.',
        'multivendorx'
    ),
    icon: 'adminlib-warehousing-icon',
    submitUrl: 'settings',
    modal: [
        {
            key: 'products_fields',
            type: 'checkbox',
            label: __( 'Product fields ', 'multivendorx' ),
            desc: __(
                'Select the types of products you want to enable in your marketplace: <li>General: Basic product details such as name, description, and price.<li>Inventory: Manage stock levels, SKU, and stock status for products.<li>Linked Products: Link related products, upsells, and cross-sells to increase sales.<li>Attributes: Add custom attributes like size, color, or material to products.<li>Advanced Settings: Configure additional options like purchase notes and order visibility.<li>Policies: Set store policies, including return and refund rules.<li>Product Tags: Help categorize products using tags for easier searching and filtering.<li>GTIN (Global Trade Item Number): Enter the product’s unique identifier for tracking and categorization purposes.',
                'multivendorx'
            ),
            class: 'mvx-toggle-checkbox',
            options: [
                {
                    key: 'general',
                    label: __( 'General', 'multivendorx' ),
                    value: 'general',
                },
                {
                    key: 'inventory',
                    label: __( 'Inventory', 'multivendorx' ),
                    value: 'inventory',
                },
                {
                    key: 'linked_product',
                    label: __( 'Linked Product', 'multivendorx' ),
                    value: 'linked_product',
                },
                {
                    key: 'attribute',
                    label: __( 'Attribute', 'multivendorx' ),
                    value: 'attribute',
                },
                {
                    key: 'advanced',
                    label: __( 'Advance', 'multivendorx' ),
                    value: 'advanced',
                },
                {
                    key: 'policies',
                    label: __( 'Policies', 'multivendorx' ),
                    value: 'policies',
                },
                {
                    key: 'product_tag',
                    label: __( 'Product Tag', 'multivendorx' ),
                    value: 'product_tag',
                },
                {
                    key: 'GTIN',
                    label: __( 'GTIN', 'multivendorx' ),
                    value: 'GTIN',
                },
            ],
            selectDeselect: true,
        },
    ],
};
