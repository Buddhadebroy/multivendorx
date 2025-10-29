import { __ } from '@wordpress/i18n';

export default {
    id: 'facilitator',
    priority: 7,
    name: __('Facilitator', 'mvx-pro'),
    desc: __('Facilitators are users who assist stores and earn a commission or fee for their role. You can define a global facilitator, assign store-specific facilitators, and configure payment rules for each.', 'mvx-pro'),
    icon: 'adminlib-facilitator',
    submitUrl: 'settings',
    moduleEnabled: 'min-max',
    modal: [
         {
            key: 'facilitator',
            type: 'select',
            label: __( 'Facilitators', 'multivendorx' ),
           settingDescription: __('Assign a user as a facilitator who will receive the facilitator fee', 'multivendorx'),
           desc: __('Configure the facilitator fee structure directly from <a href="#">this section</a>.', 'multivendorx'),
           moduleEnabled: 'facilitator',
           className:"select-class",
           size: "40%",
            options: appLocalizer.facilitators_list,
        },
    ],
};
