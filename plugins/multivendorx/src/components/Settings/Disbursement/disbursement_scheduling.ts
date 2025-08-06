import { __ } from '@wordpress/i18n';

export default {
    id: 'disbursement-scheduling',
    priority: 3,
    name: __( 'Disbursement Scheduling', 'multivendorx' ),
    desc: __(
        'Manage payment and disbursement setting of your site.',
        'multivendorx'
    ),
    icon: 'adminlib-price',
    submitUrl: 'settings',
    modal: [   
        {
            key: 'choose_payment_mode_automatic_disbursal',
            label: __( 'Disbursement Schedule', 'multivendorx' ),
            desc: __(
                'Schedule when vendors would receive their commission',
                'multivendorx'
            ),
            type: 'checkbox',
            options: [
                {
                    key: 'choose_payment_mode_automatic_disbursal',
                    value: 'choose_payment_mode_automatic_disbursal',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'payment_schedule',
            type: 'radio',
            label: __( 'Set Schedule', 'multivendorx' ),
            options: [
                {
                    key: 'weekly',
                    label: __( 'Weekly', 'multivendorx' ),
                    value: 'weekly',
                },
                {
                    key: 'daily',
                    label: __( 'Daily', 'multivendorx' ),
                    value: 'daily',
                },
                {
                    key: 'monthly',
                    label: __( 'Monthly', 'multivendorx' ),
                    value: 'monthly',
                },
                {
                    key: 'fortnightly',
                    label: __( 'Fortnightly', 'multivendorx' ),
                    value: 'fortnightly',
                },
                {
                    key: 'hourly',
                    label: __( 'Hourly', 'multivendorx' ),
                    value: 'hourly',
                },
            ],
            dependent: {
                key: 'choose_payment_mode_automatic_disbursal',
                set: true,
            },
        },
        {
            key: 'commission_threshold',
            type: 'number',
            label: __( 'Disbursement Threshold', 'multivendorx' ),
            desc: __(
                'Add the minimum value required before payment is disbursed to the vendor',
                'multivendorx'
            ),
        },    
    ],
};
