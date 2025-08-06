import { __ } from '@wordpress/i18n';

export default {
    id: 'reverse-withdraw',
    priority: 9,
    name: __('Reverse Withdraw', 'mvx-pro'),
    desc: __('Reverse Withdraw', 'mvx-pro'),
    icon: 'adminlib-wholesale',
    submitUrl: 'settings',
    modal: [
        // 1. Enable Reverse Withdrawal
        {
            key: 'enable_reverse_withdrawal',
            type: 'checkbox',
            label: __('Enable Reverse Withdrawal', 'multivendorx'),
            desc: __('Allow vendors to reverse/undo a withdrawal request before it is processed.', 'multivendorx'),
            options: [
                {
                    key: 'enable_reverse_withdrawal',
                    value: 'enable_reverse_withdrawal',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'section_reverse_withdrawal_gateway',
            type: 'section',
            desc: __( 'Enable Reverse Withdrawal for This Gateway', 'multivendorx' ),
            hint: __(
                'Toggle reverse withdrawal functionality independently for each payment gateway.',
                'multivendorx'
            ),
        },
        // 2. Cash On Delivery
        {
            key: 'enable_cod',
            type: 'checkbox',
            label: __('Cash On Delivery', 'multivendorx'),
            desc: __('Enable Cash on Delivery as a payment method for orders.', 'multivendorx'),
            options: [
                {
                    key: 'enable_cod',
                    value: 'enable_cod',
                },
            ],
            look: 'toggle',
        },

        
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
        {
            key: 'after_grace_period_actions',
            type: 'checkbox',
            label: __('After Grace Period Actions', 'multivendorx'),
            desc: __('Choose the actions that should be automatically applied after the withdrawal grace period has ended.', 'multivendorx'),
            class: 'mvx-toggle-checkbox',
            selectDeselect: true, // ✅ Adds Select All / Deselect All button
            options: [
                {
                    key: 'disable_add_to_cart',
                    label: __('Disable Add to Cart Button', 'multivendorx'),
                    value: 'disable_add_to_cart',
                },
                {
                    key: 'hide_withdrawal',
                    label: __('Hide Withdrawal', 'multivendorx'),
                    value: 'hide_withdrawal',
                },
                {
                    key: 'auto_inactivate_seller',
                    label: __('Make Seller Status Inactive', 'multivendorx'),
                    value: 'auto_inactivate_seller',
                },
                {
                    key: 'notice_during_grace_period',
                    label: __('Display Notice During Grace Period', 'multivendorx'),
                    value: 'notice_during_grace_period',
                },
                {
                    key: 'send_announcement',
                    label: __('Send Announcement', 'multivendorx'),
                    value: 'send_announcement',
                },
            ],
        }
        
    ],
};
