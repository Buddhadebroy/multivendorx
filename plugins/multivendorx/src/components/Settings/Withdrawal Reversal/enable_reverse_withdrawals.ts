import { __ } from '@wordpress/i18n';

export default {
    id: 'enable-reverse-withdraw',
    priority: 1,
    name: __('Enable Reverse Withdrawals', 'mvx-pro'),
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
    ],
};
