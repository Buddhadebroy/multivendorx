import { __ } from '@wordpress/i18n';

export default {
    id: 'commissions',
    priority: 100,
    name: __( 'Commission', 'multivendorx' ),
    desc: __(
        "Tailor your marketplace's commission plan to fit your revenue-sharing preferences.",
        'multivendorx'
    ),
    icon: 'adminlib-dynamic-pricing',
    submitUrl: 'settings',
    modal: [
        {
            key: 'revenue_sharing_mode',
            type: 'setting-toggle',
            label: 'Revenue Sharing Mode',
            desc: 'Select how you want the commission to be split. If you are not sure about how to setup commissions and payment options in your marketplace, kindly read this <a href="https://multivendorx.com/doc/knowladgebase/payments/" target="_blank">article</a> before proceeding.',
            options: [
                {
                    key: 'revenue_sharing_mode_admin',
                    label: 'Admin fees',
                    value: 'revenue_sharing_mode_admin',
                },
                {
                    key: 'revenue_sharing_mode_seller',
                    label: 'Seller commissions',
                    value: 'revenue_sharing_mode_seller',
                },
            ],
        },
        {
            key: 'commission_type',
            type: 'setting-toggle',
            label: __( 'Commission Type', 'multivendorx' ),
            desc: __(
                'Choose the type of commission structure that best fits your marketplace model.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'per_transaction',
                    label: __( 'Per Transaction', 'multivendorx' ),
                    value: 'per_transaction',
                },
                {
                    key: 'per_unit',
                    label: __( 'Per Unit', 'multivendorx' ),
                    value: 'per_unit',
                },
                {
                    key: 'per_store',
                    label: __( 'Per Store', 'multivendorx' ),
                    value: 'per_store',
                },
                {
                    key: 'commission_by_product_price',
                    label: __( 'Commission By Product Price', 'multivendorx' ),
                    value: 'commission_by_product_price',
                },
                {
                    key: 'commission_by_purchase_quantity',
                    label: __( 'Commission By Purchase Quantity', 'multivendorx' ),
                    value: 'commission_by_purchase_quantity',
                },
            ],
        },
        
        // Nested Input fields added later
        {
            key: 'mvx_commission_rules_per_transaction',
            type: 'multi-number',
            label: __( 'Commission Value', 'multivendorx' ),
            desc: __(
                'This is the default commission amount that will be applicable for all transactions.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'mvx_commission_fixed_per_transaction',
                    label: __( 'Fixed', 'multivendorx' ),
                    type: 'number',
                    desc: __( 'Fixed amount per transaction', 'multivendorx' ),
                },
                {
                    key: 'mvx_commission_percentage_per_transaction',
                    label: __( 'Percentage', 'multivendorx' ),
                    type: 'number',
                    desc: __(
                        'Percentage of product price per transaction',
                        'multivendorx'
                    ),
                },
            ],
            dependent: {
                key: 'commission_type',
                set: true,
                value: 'per_transaction',
            },
        },
        {
            key: 'mvx_commission_rules_per_unit',
            type: 'multi-number',
            label: __( 'Commission Value', 'multivendorx' ),
            desc: __(
                'This is the default commission amount that will be applicable for all transactions.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'mvx_commission_fixed_per_unit',
                    label: __( 'Fixed', 'multivendorx' ),
                    type: 'number',
                    desc: __( 'Fixed amount per unit', 'multivendorx' ),
                },
                {
                    key: 'mvx_commission_percentage_per_unit',
                    label: __( 'Percentage', 'multivendorx' ),
                    type: 'number',
                    desc: __(
                        'Percentage of product price per unit',
                        'multivendorx'
                    ),
                },
            ],
            dependent: {
                key: 'commission_type',
                set: true,
                value: 'per_unit',
            },
        },
        {
            key: 'mvx_commission_rules_per_unit',
            type: 'multi-number',
            label: __( 'Commission Value', 'multivendorx' ),
            desc: __(
                'This is the default commission amount that will be applicable for all transactions.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'mvx_commission_fixed_per_unit',
                    label: __( 'Fixed', 'multivendorx' ),
                    type: 'number',
                    desc: __( 'Fixed amount per unit', 'multivendorx' ),
                },
                {
                    key: 'mvx_commission_percentage_per_unit',
                    label: __( 'Percentage', 'multivendorx' ),
                    type: 'number',
                    desc: __(
                        'Percentage of product price per unit',
                        'multivendorx'
                    ),
                },
            ],
            dependent: {
                key: 'commission_type',
                set: true,
                value: 'per_store',
            },
        },
        {
            key: 'commission_by_product_price',
            type: 'nested',
            label: 'Commission By Product Price',
            addButtonLabel: 'Add new',
            deleteButtonLabel: 'Remove',
            nestedFields: [
                {
                    key: 'product_cost',
                    type: 'number',
                    label: 'Product Cost',
                    placeholder: 'Enter cost',
                },
                {
                    key: 'rule',
                    type: 'select',
                    label: 'Rule',
                    options: [
                        { value: 'up_to', label: 'Up To' },
                        { value: 'more_than', label: 'More than' },
                    ],
                },
                {
                    key: 'commission_type',
                    type: 'select',
                    label: 'Commission Type',
                    options: [
                        { value: 'percent', label: 'Percent' },
                        { value: 'fixed', label: 'Fixed' },
                        { value: 'percent_fixed', label: 'Percent + Fixed' },
                    ],
                },
                {
                    key: 'commission_percent',
                    type: 'number',
                    label: 'Commission Percent (%)',
                    placeholder: 'Enter percent',
                },
                {
                    key: 'commission_fixed',
                    type: 'number',
                    label: 'Commission Fixed ($)',
                    placeholder: 'Enter fixed amount',
                },
            ],
            dependent: {
                key: 'commission_type',
                set: true,
                value: 'commission_by_product_price',
            },
        },
        {
            key: 'commission_by_purchase_quantity',
            type: 'nested',
            label: 'Commission By Purchase Quantity',
            addButtonLabel: 'Add New',
            deleteButtonLabel: 'Remove',
            nestedFields: [
                {
                    key: 'purchase_quantity',
                    type: 'number',
                    label: 'Purchase Quantity',
                    placeholder: 'Enter quantity',
                },
                {
                    key: 'quantity_rule',
                    type: 'select',
                    label: 'Rule',
                    options: [
                        { value: 'up_to', label: 'Up To' },
                        { value: 'more_than', label: 'More than' },
                    ],
                },
                {
                    key: 'quantity_commission_type',
                    type: 'select',
                    label: 'Commission Type',
                    options: [
                        { value: 'percent', label: 'Percent' },
                        { value: 'fixed', label: 'Fixed' },
                        { value: 'percent_fixed', label: 'Percent + Fixed' },
                    ],
                },
                {
                    key: 'quantity_commission_percent',
                    type: 'number',
                    label: 'Commission Percent (%)',
                    placeholder: 'Enter percent',
                },
                {
                    key: 'quantity_commission_fixed',
                    type: 'number',
                    label: 'Commission Fixed ($)',
                    placeholder: 'Enter fixed amount',
                },
            ],
            dependent: {
                key: 'commission_type',
                set: true,
                value: 'commission_by_purchase_quantity',
            },
        },      
        {
            key: 'commission_settings',
            type: 'checkbox',
            label: __( 'Commission Settings', 'multivendorx' ),
            desc: __( 'Choose how commissions are calculated for vendors.', 'multivendorx' ),
            options: [
                {
                    key: 'product_wise_commission',
                    label: __( 'Product Wise Commission', 'multivendorx' ),
                    value: 'product_wise_commission',
                },
                {
                    key: 'vendor_wise_commission',
                    label: __( 'Vendor Wise Commission', 'multivendorx' ),
                    value: 'vendor_wise_commission',
                },
                {
                    key: 'category_wise_commission',
                    label: __( 'Category Wise Commission', 'multivendorx' ),
                    value: 'category_wise_commission',
                },
            ],
            selectDeselect: true,
        },
                
        {
            key: 'payment_method_disbursement',
            label: __( 'Commission Disbursement Method', 'multivendorx' ),
            desc: __(
                `Decide how vendors will receive their commissions, such as via Stripe, PayPal, or Bank Transfer. This setting determines the method through which payments are processed and transferred to your vendors. <li>Important: Kindly activate your preferred payment method in the <a href="${ appLocalizer.modules_page_url }">Module section</a>`,
                'multivendorx'
            ),
            type: 'checkbox',
            right_content: true,
            options: [],
        },
        {
            key: 'separator_content',
            type: 'section',
        },
        {
            key: 'payment_gateway_charge',
            label: __( 'Payment Gateway Charge', 'multivendorx' ),
            desc: __(
                'Include any additional fees charged by the payment gateway during online transactions.',
                'multivendorx'
            ),
            type: 'checkbox',
            options: [
                {
                    key: 'payment_gateway_charge',
                    label: __( '', 'multivendorx' ),
                    value: 'payment_gateway_charge',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'gateway_charges_cost_carrier',
            type: 'select',
            label: __( 'Gateway charges responsibility', 'multivendorx' ),
            desc: __(
                'Decide who will bear the payment gateway charges (e.g., admin or vendor) when making automated payment',
                'multivendorx'
            ),
            options: [
                {
                    key: 'vendor',
                    label: __( 'Vendor', 'multivendorx' ),
                    value: __( 'vendor', 'multivendorx' ),
                },
                {
                    key: 'admin',
                    label: __( 'Site owner', 'multivendorx' ),
                    value: __( 'admin', 'multivendorx' ),
                },
                {
                    key: 'separate',
                    label: __( 'Separately', 'multivendorx' ),
                    value: __( 'separate', 'multivendorx' ),
                },
            ],
            dependent: {
                key: 'payment_gateway_charge',
                set: true,
            },
        },
        {
            key: 'payment_gateway_charge_type',
            type: 'select',
            label: __( 'Gateway charge structure', 'multivendorx' ),
            desc: __(
                'Choose how payment gateway fees will be calculated.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'percent',
                    label: __( 'Percentage', 'multivendorx' ),
                    value: 'percent',
                },
                {
                    key: 'fixed',
                    label: __( 'Fixed amount', 'multivendorx' ),
                    value: 'fixed',
                },
                {
                    key: 'fixed_with_percentage',
                    label: __( '%age + Fixed', 'multivendorx' ),
                    value: 'fixed_with_percentage',
                },
            ],
            dependent: {
                key: 'payment_gateway_charge',
                set: true,
            },
        },
        // gayeway charge value
        {
            key: 'default_gateway_charge_value',
            type: 'multi-number',
            label: __( 'Gateway charge value', 'multivendorx' ),
            desc: __(
                'Set specific values for gateway fees based on the selected charge structure.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'fixed_gayeway_amount_paypal_masspay',
                    type: 'number',
                    label: __( 'Fixed paypal masspay amount', 'multivendorx' ),
                    value: 'fixed_gayeway_amount_paypal_masspay',
                },
            ],
            dependent: {
                key: 'payment_gateway_charge_type',
                value: 'fixed',
            },
        },
        {
            key: 'default_gateway_charge_value',
            type: 'multi-number',
            label: __( 'Gateway Value', 'multivendorx' ),
            desc: __(
                'The commission amount added here will be applicable for all commissions. In case the your commission type is fixed the',
                'multivendorx'
            ),
            options: [
                {
                    key: 'percent_gayeway_amount_paypal_masspay',
                    type: 'number',
                    label: __(
                        'Percent paypal masspay amount',
                        'multivendorx'
                    ),
                    value: 'percent_gayeway_amount_paypal_masspay',
                },
            ],
            dependent: {
                key: 'payment_gateway_charge_type',
                value: 'percent',
            },
        },
        {
            key: 'default_gateway_charge_value',
            type: 'multi-number',
            label: __( 'Gateway Value', 'multivendorx' ),
            desc: __(
                'The commission amount added here will be applicable for all commissions. In case the your commission type is fixed the',
                'multivendorx'
            ),
            options: [
                {
                    key: 'fixed_gayeway_amount_paypal_masspay',
                    type: 'number',
                    label: __( 'Fixed paypal masspay amount', 'multivendorx' ),
                    value: 'fixed_gayeway_amount_paypal_masspay',
                },
                {
                    key: 'percent_gayeway_amount_paypal_masspay',
                    type: 'number',
                    label: __(
                        'Percent paypal masspay amount',
                        'multivendorx'
                    ),
                    value: 'percent_gayeway_amount_paypal_masspay',
                },
            ],
            dependent: {
                key: 'payment_gateway_charge_type',
                value: 'fixed_with_percentage',
            },
        },
    ],
};
