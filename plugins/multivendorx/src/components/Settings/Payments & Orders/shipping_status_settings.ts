import { __ } from '@wordpress/i18n';

export default {
    id: 'shipping-status',
    priority: 3,
    name: __( 'Shipping Status', 'mvx-pro' ),
    desc: __( 'Shipping Status', 'mvx-pro' ),
    icon: 'adminlib-wholesale',
    submitUrl: 'settings',
    modal: [
        {
            key: 'allow_shipment_tracking',
            label: __( 'Allow Shipment Tracking', 'multivendorx' ),
            desc: __(
                'Enable this option to allow vendors to add and manage shipment tracking details for their orders.',
                'multivendorx'
            ),
            type: 'checkbox',
            options: [
                {
                    key: 'allow_shipment_tracking',
                    value: 'allow_shipment_tracking',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'shipping_providers',
            type: 'checkbox',
            label: __('Shipping Providers', 'multivendorx'),
            desc: __('Enable one or more shipping providers for vendor shipment tracking.', 'multivendorx'),
            class: 'mvx-toggle-checkbox',
            selectDeselect: true,
            options: [
                { key: 'australia_post', label: __('Australia Post', 'multivendorx'), value: 'australia_post' },
                { key: 'canada_post', label: __('Canada Post', 'multivendorx'), value: 'canada_post' },
                { key: 'city_link', label: __('City Link', 'multivendorx'), value: 'city_link' },
                { key: 'dhl', label: __('DHL', 'multivendorx'), value: 'dhl' },
                { key: 'dpd', label: __('DPD', 'multivendorx'), value: 'dpd' },
                { key: 'fastway_south_africa', label: __('Fastway South Africa', 'multivendorx'), value: 'fastway_south_africa' },
                { key: 'fedex', label: __('FedEx', 'multivendorx'), value: 'fedex' },
                { key: 'ontrack', label: __('Ontrack', 'multivendorx'), value: 'ontrack' },
                { key: 'parcelforce', label: __('ParcelForce', 'multivendorx'), value: 'parcelforce' },
                { key: 'polish_shipping_providers', label: __('Polish Shipping Providers', 'multivendorx'), value: 'polish_shipping_providers' },
                { key: 'royal_mail', label: __('Royal Mail', 'multivendorx'), value: 'royal_mail' },
                { key: 'tnt_express', label: __('TNT Express (Reference)', 'multivendorx'), value: 'tnt_express' },
                { key: 'fedex_sameday', label: __('FedEx Sameday', 'multivendorx'), value: 'fedex_sameday' },
                { key: 'ups', label: __('UPS', 'multivendorx'), value: 'ups' },
                { key: 'usps', label: __('USPS', 'multivendorx'), value: 'usps' },
                { key: 'dhl_us', label: __('DHL US', 'multivendorx'), value: 'dhl_us' },
                { key: 'other_shipping', label: __('Other', 'multivendorx'), value: 'other_shipping' },
            ],
            dependent: {
                key: 'allow_shipment_tracking',
                set: true,
            },
        }        
    ],
};
