import { __ } from '@wordpress/i18n';

export default {
    id: 'store-inventory',
    priority: 2,
    name: __('Store Inventory', 'multivendorx'),
    desc: __('Store Inventory', 'multivendorx'),
    icon: 'adminlib-support',
    submitUrl: 'settings',
    modal: [
        {
            key: 'stock_alerts',
            type: 'checkbox',
            label: __('Stock Alerts for Vendors', 'multivendorx'),
            desc: __(
                'Select the type of stock alerts you want to enable for vendors.',
                'multivendorx'
            ),
            class: 'mvx-toggle-checkbox',
            options: [
                {
                    key: 'low_stock_enabled',
                    label: __('Enable low stock alert for Vendors', 'multivendorx'),
                    value: 'low_stock_enabled',
                },
                {
                    key: 'out_of_stock_enabled',
                    label: __('Enable out of stock alert for Vendors', 'multivendorx'),
                    value: 'out_of_stock_enabled',
                },
            ],
            selectDeselect: true,
        },
        {
            key: 'low_stock_limit',
            type: 'text',
            label: __('Low stock alert limit for Vendors', 'multivendorx'),
            desc: __('It will represent low stock limit', 'multivendorx'),
            dependent: {
                key: 'stock_alerts',
                set: true,
                value: 'low_stock_enabled',
            },
        },
        {
            key: 'out_of_stock_limit',
            type: 'text',
            label: __('Out of stock alert limit for Vendors', 'multivendorx'),
            desc: __('It will represent out of stock limit', 'multivendorx'),
            dependent: {
                key: 'stock_alerts',
                set: true,
                value: 'out_of_stock_enabled',
            },
        },
    ],
};
