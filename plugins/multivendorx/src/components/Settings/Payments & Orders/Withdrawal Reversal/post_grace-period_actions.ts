import { __ } from '@wordpress/i18n';

export default {
    id: 'post-grace-period-actions',
    priority: 9,
    name: __('Post-Grace Period Actions', 'mvx-pro'),
    icon: 'adminlib-wholesale',
    submitUrl: 'settings',
    modal: [
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
