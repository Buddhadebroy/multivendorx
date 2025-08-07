import { __ } from '@wordpress/i18n';

export default {
    id: 'withdrawa-management',
    priority: 4,
    name: __( 'Withdrawal Management', 'multivendorx' ),
    desc: __(
        'Manage payment and disbursement setting of your site.',
        'multivendorx'
    ),
    icon: 'adminlib-price',
    submitUrl: 'settings',
    modal: [
        {
            key: 'withdrawal_request',
            label: __( 'Allow Withdrawal Request', 'multivendorx' ),
            desc: __(
                'Let vendors withdraw payment prior to reaching the agreed disbursement value',
                'multivendorx'
            ),
            type: 'checkbox',
            options: [
                {
                    key: 'withdrawal_request',
                    value: 'withdrawal_request',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'commission_threshold_time',
            type: 'number',
            label: __( 'Withdrawal Locking Period', 'multivendorx' ),
            desc: __(
                'Refers to the minimum number of days required before a seller can send a withdrawal request',
                'multivendorx'
            ),
            placeholder: __( 'in days', 'multivendorx' ),
        },
        {
            key: 'order_withdrawl_status',
            type: 'multi-select',
            label: __(
                'Available Order Status for Withdrawal',
                'multivendorx'
            ),
            desc: __(
                'Withdrawal request would be available in case of these order statuses',
                'multivendorx'
            ),
            options: [
                {
                    key: 'on-hold',
                    label: __( 'On hold', 'multivendorx' ),
                    value: 'on-hold',
                },
                {
                    key: 'processing',
                    label: __( 'Processing', 'multivendorx' ),
                    value: 'processing',
                },
                {
                    key: 'completed',
                    label: __( 'Completed', 'multivendorx' ),
                    value: 'completed',
                },
            ],
        },
        {
            key: 'no_of_orders',
            type: 'number',
            label: __( 'Number of Free Withdrawals', 'multivendorx' ),
            desc: __( 'Number of free withdrawal requests.', 'multivendorx' ),
        },
        {
            key: 'commission_transfer',
            type: 'number',
            label: __( 'Withdrawal Charges', 'multivendorx' ),
            desc: __(
                'Vendors will be charged this amount per withdrawal after the quota of free withdrawals is over.',
                'multivendorx'
            ),
        },    
    ],
};
