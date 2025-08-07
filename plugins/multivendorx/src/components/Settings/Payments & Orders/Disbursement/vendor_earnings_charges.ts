import { __ } from '@wordpress/i18n';

export default {
    id: 'venor-earnings-charge',
    priority: 1,
    name: __( ' Vendor Earnings & Charges', 'multivendorx' ),
    desc: __(
        'Manage payment and disbursement setting of your site.',
        'multivendorx'
    ),
    icon: 'adminlib-price',
    submitUrl: 'settings',
    modal: [
        {
            key: 'commission_calculation_on_tax',
            label: __( 'Commission Calculation On Tax', 'multivendorx' ),
            desc: __( '', 'multivendorx' ),
            type: 'checkbox',
            options: [
                {
                    key: 'commission_calculation_on_tax',
                    value: 'commission_calculation_on_tax',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'give_tax',
            label: __( 'Tax', 'multivendorx' ),
            desc: __(
                'Let vendor collect & manage tax amount',
                'multivendorx'
            ),
            type: 'checkbox',
            options: [
                {
                    key: 'give_tax',
                    value: 'give_tax',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'give_shipping',
            label: __( 'Shipping', 'multivendorx' ),
            desc: __(
                'Allow sellers to collect & manage shipping charges',
                'multivendorx'
            ),
            type: 'checkbox',
            options: [
                {
                    key: 'give_shipping',
                    value: 'give_shipping',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'exclude_cod_payments',
            label: __( 'Exclude COD Payments', 'multivendorx' ),
            desc: __(
                'Disable the Cash on Delivery (COD) payment method for vendor orders.',
                'multivendorx'
            ),
            type: 'checkbox',
            options: [
                {
                    key: 'exclude_cod_payments',
                    value: 'exclude_cod_payments',
                },
            ],
            look: 'toggle',
        },    
    ],
};
