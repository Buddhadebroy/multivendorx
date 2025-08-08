import { __ } from '@wordpress/i18n';

export default {
    id: 'seo',
    priority: 1,
    name: __( 'Yoast SEO Support', 'mvx-pro' ),
    desc: __( 'Manage and Process vendor seo', 'mvx-pro' ),
    icon: 'adminlib-support',
    submitUrl: 'settings',
    modal: [
        {
            key: 'seo_support_for_vendors',
            type: 'checkbox',
            label: __( 'Enable SEO Support', 'mvx-pro' ),
            desc: __( 'Enable SEO support for vendors.', 'mvx-pro' ),
            options: [
                {
                    key: 'seo_support_for_vendors',
                    label: __( 'Allow vendors to use Yoast SEO features', 'mvx-pro' ),
                    value: 'seo_support_for_vendors',
                },
            ],
            look: 'toggle',
        },        
        {
            key: 'vendor_seo_options',
            type: 'radio',
            label: __( 'SEO Mode', 'mvx-pro' ),
            options: [
                {
                    key: 'yoast',
                    label: __( 'Yoast', 'mvx-pro' ),
                    value: 'yoast',
                },
                {
                    key: 'rank_math',
                    label: __( 'Rank Math', 'mvx-pro' ),
                    value: 'rank_math',
                },
            ],
            dependent: {
                key: 'seo_support_for_vendors',
                set: true,
            },
        },
    ],
};
