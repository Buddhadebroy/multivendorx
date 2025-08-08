import { __ } from '@wordpress/i18n';

export default {
    id: 'store-account',
    priority: 4,
    name: __( 'Store Account', 'multivendorx' ),
    desc: __(
        'Store owner’s control over their account lifecycle',
        'multivendorx'
    ),
    icon: 'adminlib-storefront',
    submitUrl: 'settings',
    modal: [
        {
            key: 'enable_profile_deactivation_request',
            type: 'checkbox',
            label: __( 'Profile Deactivation Request', 'multivendorx' ),
            desc: __( 'Allow vendors to request temporary deactivation of their store from their dashboard.', 'multivendorx' ),
            options: [
                {
                    key: 'enable_profile_deactivation_request',
                    value: 'enable_profile_deactivation_request',
                },
            ],
            look: 'toggle',
        }              
    ]    
};