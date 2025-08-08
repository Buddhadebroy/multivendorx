import { __ } from '@wordpress/i18n';

export default {
    id: 'onboarding',
    priority: 2,
    name: 'Onboarding',
    desc: __(
        'Customise personalised seller registration form for marketplace.',
        'multivendorx'
    ),
    icon: 'adminlib-form-section',
    submitUrl: 'settings',
    modal: [
        {
            key: 'vendor_url',
            type: 'text',
            desc: __(
                'Define the custom slug for the vendor store URL. For example, in the URL: https://yourdomain.com/store/[this-text]/[vendor-name], "[this-text]" will be replaced by the slug you set here.',
                'multivendorx'
            ),
            label: __('Vendor Store URL', 'multivendorx'),
        },
        {
            key: 'disable_setup_wizard',
            type: 'checkbox',
            label: __( 'Disable Wizard', 'multivendorx' ),
            desc: __(
                'Enable this to disable the setup wizard for vendors. When disabled, vendors will not be shown the onboarding steps after registration or login.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'disable_setup_wizard',
                    value: 'disable_setup_wizard',
                },
            ],
            look: 'toggle',
        },        
        {
            key: 'setup_wizard_introduction',
            type: 'textarea',
            label: __(
                'Vendor Setup wizard Introduction Message',
                'multivendorx'
            ),
            desc: __(
                'Welcome vendors with creative onboard messages',
                'multivendorx'
            ),
        },
    ],
};
