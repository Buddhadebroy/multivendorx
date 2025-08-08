import { __ } from '@wordpress/i18n';

export default {
    id: 'products-types',
    priority: 1,
    name: __( 'Product Types', 'multivendorx' ),
    desc: __(
        'Select the types of products sellers are allowed to add.',
        'multivendorx'
    ),
    icon: 'adminlib-warehousing-icon',
    submitUrl: 'settings',
    modal: [
        {
            key: 'product_types',
            type: 'checkbox',
            label: __( 'Product Types', 'multivendorx' ),
            class: 'mvx-toggle-checkbox',
            desc: __(
                'Select the types of products you want to allow in your marketplace. <li>Simple: Standard product with no variations. <li>Variable: Product with variations (like size or color). <li>External: Links to another site. <li>Rental: Rental-based product.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'simple',
                    label: __( 'Simple', 'multivendorx' ),
                    value: 'simple',
                },
                {
                    key: 'variable',
                    label: __( 'Variable', 'multivendorx' ),
                    value: 'variable',
                },
                {
                    key: 'external',
                    label: __( 'External', 'multivendorx' ),
                    value: 'external',
                },
                {
                    key: 'rental',
                    label: __( 'Rental', 'multivendorx' ),
                    value: 'rental',
                },
            ],
            selectDeselect: true,
        },
    ],
};
