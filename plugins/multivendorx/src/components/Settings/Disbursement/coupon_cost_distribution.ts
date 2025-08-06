import { __ } from '@wordpress/i18n';

export default {
    id: 'coupon-cost',
    priority: 2,
    name: __( 'Coupon Cost Distribution', 'multivendorx' ),
    desc: __(
        'Manage payment and disbursement setting of your site.',
        'multivendorx'
    ),
    icon: 'adminlib-price',
    submitUrl: 'settings',
    modal: [      
        {
            key: 'commission_include_coupon',
            label: __( 'Who will bear the Coupon Cost', 'multivendorx' ),
            type: 'checkbox',
            desc: __(
                'Tap to let the vendors bear the coupon discount charges of the coupons created by them',
                'multivendorx'
            ),
            options: [
                {
                    key: 'commission_include_coupon',
                    value: 'commission_include_coupon',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'admin_coupon_excluded',
            label: __( 'Exclude Admin Created Coupon', 'multivendorx' ),
            desc: __(
                'Bear the coupon discount charges of the coupons created by you',
                'multivendorx'
            ),
            type: 'checkbox',
            options: [
                {
                    key: 'admin_coupon_excluded',
                    value: 'admin_coupon_excluded',
                },
            ],
            look: 'toggle',
        },  
    ],
};
