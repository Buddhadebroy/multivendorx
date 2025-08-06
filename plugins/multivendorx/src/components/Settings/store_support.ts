import { __ } from '@wordpress/i18n';

export default {
    id: 'store-support',
    priority: 15,
    name: __( 'Store Support', 'mvx-pro' ),
    desc: __( 'Manage store support', 'mvx-pro' ),
    icon: 'adminlib-support',
    submitUrl: 'settings',
    modal: [
        {
            key: 'display_on_order_details',
            type: 'checkbox',
            label: __( 'Display on Order Details', 'multivendorx' ),
            desc: __( 'Enable this to show the support option on the order details page.', 'multivendorx' ),
            options: [
                {
                    key: 'display_on_order_details',
                    value: 'display_on_order_details',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'display_on_single_product',
            type: 'select',
            label: __( 'Display On Single Product Page', 'multivendorx' ),
            desc: __( 'Choose where and how this feature should appear on the single product page.', 'multivendorx' ),
            options: [
                {
                    key: 'display_nowhere',
                    label: __( 'Do Not Display', 'multivendorx' ),
                    value: 'display_nowhere',
                },
                {
                    key: 'display_above_cart',
                    label: __( 'Above Add to Cart', 'multivendorx' ),
                    value: 'display_above_cart',
                },
                {
                    key: 'display_below_cart',
                    label: __( 'Below Add to Cart', 'multivendorx' ),
                    value: 'display_below_cart',
                },
                {
                    key: 'display_in_sidebar',
                    label: __( 'In Sidebar', 'multivendorx' ),
                    value: 'display_in_sidebar',
                },
                {
                    key: 'display_custom_hook',
                    label: __( 'Custom Hook (Advanced)', 'multivendorx' ),
                    value: 'display_custom_hook',
                },
            ],
        },
        
        {
            key: 'support_button_label',
            type: 'text',
            label: __( 'Support Button Label', 'multivendorx' ),
            desc: __( 'Customize the label of the support button (e.g., “Get Help”, “Contact Support”).', 'multivendorx' ),
            placeholder: __( 'Enter button label', 'multivendorx' ),
        },
        {
            key: 'separator_order_support_info',
            type: 'section',
            desc: __( 'Order & Support Info', 'multivendorx' ),
            hint: __(
                'Manage order handling, tracking details, and customer support information for vendors.',
                'multivendorx'
            ),
        },        
        {
            key: 'is_customer_support_details',
            type: 'checkbox',
            label: __( 'Customer support information', 'multivendorx' ),
            desc: __(
                'Display customer support details on the "Thank You" page and in new order confirmation emails. This can improve customer satisfaction by making support easily accessible.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'is_customer_support_details',
                    value: 'is_customer_support_details',
                },
            ],
            look: 'toggle',
        },
        
    ],
};
