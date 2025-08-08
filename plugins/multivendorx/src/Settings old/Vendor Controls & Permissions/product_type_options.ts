import { __ } from '@wordpress/i18n';

export default {
    id: 'products-types-options',
    priority: 3,
    name: __( 'Product Type Options', 'multivendorx' ),
    desc: __(
        'Allow sellers to create specialized types of products.',
        'multivendorx'
    ),
    icon: 'adminlib-warehousing-icon',
    submitUrl: 'settings',
    modal: [      
        {
            key: 'type_options',
            type: 'checkbox',
            label: __( 'Type options', 'multivendorx' ),
            class: 'mvx-toggle-checkbox',
            desc: __(
                'Select the types of products you want to enable in your marketplace: <li>Virtual Products: Choose this option for products that don’t have a physical form (e.g., services, memberships). <li>Downloadable Products: Use this option for products that customers can download (e.g., software, eBooks).',
                'multivendorx'
            ),
            options: [
                {
                    key: 'virtual',
                    label: __( 'Virtual', 'multivendorx' ),
                    value: 'virtual',
                },
                {
                    key: 'downloadable',
                    label: __( 'Downloadable', 'multivendorx' ),
                    value: 'downloadable',
                },
            ],
            selectDeselect: true,
        },
    ],
};
