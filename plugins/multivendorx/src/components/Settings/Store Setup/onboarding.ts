import { __ } from '@wordpress/i18n';

export default {
    id: 'onboarding',
    priority: 2,
    name: 'Onboarding',
    desc: __(
        'Customise personalised store registration form for marketplace.',
        'multivendorx'
    ),
    icon: 'adminlib-form-section',
    submitUrl: 'settings',
    modal: [
        {
            key: 'approve_store',
            type: 'setting-toggle',
            label: __( 'Approve Store', 'multivendorx' ),
            desc: __(
                'Decide how you want to approve new stores for your marketplace: <li>Manual Approval: Review and approve stores manually. <li>Automatic Approval: Automatically approve stores without review.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'manually',
                    label: __( 'Manually', 'multivendorx' ),
                    value: 'manually',
                },
                {
                    key: 'automatically',
                    label: __( 'Automatically', 'multivendorx' ),
                    value: 'automatically',
                },
            ],
        },
        {
            key: 'store_backend_access',
            type: 'checkbox',
            label: __( "Store's Backend Access", 'multivendorx' ),
            desc: __(
                'Allow stores to access the full WordPress backend with an integrated dashboard to manage products, orders, and more from one place.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'store_backend_access',
                    value: 'store_backend_access',
                },
            ],
            look: 'toggle',
            proSetting: true,
        },

        {
            key: 'disable_setup_wizard',
            type: 'checkbox',
            label: __( 'Disable Wizard', 'multivendorx' ),
            desc: __(
                'Enable this to disable the setup wizard for stores. When disabled, stores will not be shown the onboarding steps after registration or login.',
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
                'Store Setup wizard Introduction Message',
                'multivendorx'
            ),
            desc: __(
                'Welcome stores with creative onboard messages',
                'multivendorx'
            ),
        },
    ],
};
