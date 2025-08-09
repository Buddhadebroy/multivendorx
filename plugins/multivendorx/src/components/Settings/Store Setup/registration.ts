import { __ } from '@wordpress/i18n';

export default {
    id: 'store-registration-form',
    priority: 1,
    name: 'Store Registration Form',
    desc: __(
        'Customise personalised store registration form for marketplace.',
        'multivendorx'
    ),
    icon: 'adminlib-form-section',
    submitUrl: 'settings',
    modal: [
        {
            key: 'registration page',
            type: 'blocktext',
            label: __( 'no_label', 'multivendorx' ),
            blocktext: __(
                'Username and Password fileds display as per WooCommerce settings',
                'multivendorx'
            ),
        },
        {
            key: 'store_registration_from',
            type: 'form-builder',
            desc: 'Customise personalised store registration form for marketplace.',
        },
    ],
};
