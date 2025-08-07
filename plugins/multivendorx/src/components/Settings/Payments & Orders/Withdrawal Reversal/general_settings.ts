import { __ } from '@wordpress/i18n';

export default {
    id: 'general-settings',
    priority: 2,
    name: __('General Settings', 'mvx-pro'),
    icon: 'adminlib-wholesale',
    submitUrl: 'settings',
    modal: [
        // 3. Billing Type
        {
            key: 'billing_type',
            type: 'select',
            label: __('Billing Type', 'multivendorx'),
            desc: __('Choose how vendor billing is handled.', 'multivendorx'),
            options: [
                {
                    key: 'billing_prepaid',
                    label: __('Prepaid', 'multivendorx'),
                    value: 'prepaid',
                },
                {
                    key: 'billing_postpaid',
                    label: __('Postpaid', 'multivendorx'),
                    value: 'postpaid',
                },
                {
                    key: 'billing_credit',
                    label: __('On Credit', 'multivendorx'),
                    value: 'credit',
                },
            ],
        },

        // 4. Reverse Balance Threshold (USD)
        {
            key: 'reverse_balance_threshold',
            type: 'number',
            label: __('Reverse Balance Threshold (USD)', 'multivendorx'),
            desc: __('Minimum balance (in USD) required before a vendor can reverse a withdrawal.', 'multivendorx'),
        },

        // 5. Grace Period (days)
        {
            key: 'grace_period_days',
            type: 'number',
            label: __('Grace Period (days)', 'multivendorx'),
            desc: __('Number of days after withdrawal during which reversal is allowed.', 'multivendorx'),
        },
    ],
};
