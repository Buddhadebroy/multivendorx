import { __ } from '@wordpress/i18n';

export default {
    id: 'store-capability',
    priority: 1,
    name: __('Store Capability', 'mvx-pro'),
    desc: __('Manage access permissions for different store roles.', 'mvx-pro'),
    icon: 'adminlib-wholesale',
    submitUrl: 'settings',
    modal: [  
        {
            key: 'separator_content',
            type: 'section',
            desc: __( 'Product Permission Options', 'multivendorx' ),
            hint: __(
                'Control how stores can submit and manage their products',
                'multivendorx'
            ),
        },
        {
            key: 'product_permission_options',
            type: 'checkbox',
            label: __( 'Product Permission Options', 'multivendorx' ),
            desc: __( 'Manage the permissions stores have for product submission, publishing, and editing.', 'multivendorx' ),
            options: [
                {
                    key: 'is_submit_product',
                    label: __( 'Submit Products for Approval', 'multivendorx' ),
                    value: 'is_submit_product',
                },
                {
                    key: 'is_published_product',
                    label: __( 'Publish Products Directly', 'multivendorx' ),
                    value: 'is_published_product',
                },
                {
                    key: 'is_edit_delete_published_product',
                    label: __( 'Edit/Delete Published Products', 'multivendorx' ),
                    value: 'is_edit_delete_published_product',
                },
                {
                    key: 'publish_and_submit_products',
                    label: __( 'Publish & Submit Edited Products', 'multivendorx' ),
                    value: 'publish_and_submit_products',
                },
            ],
            selectDeselect: true,
        },
        {
            key: 'separator_content',
            type: 'section',
            desc: __( 'Coupon Management', 'multivendorx' ),
            hint: __(
                'Give stores control over their discount coupons.',
                'multivendorx'
            ),
        },
        {
            key: 'coupon_management_options',
            type: 'checkbox',
            label: __( 'Coupon Management Options', 'multivendorx' ),
            desc: __( 'Manage the permissions stores have for creating, publishing, and editing coupons.', 'multivendorx' ),
            options: [
                {
                    key: 'is_submit_coupon',
                    label: __( 'Create Coupons', 'multivendorx' ),
                    value: 'is_submit_coupon',
                },
                {
                    key: 'is_published_coupon',
                    label: __( 'Publish Coupons', 'multivendorx' ),
                    value: 'is_published_coupon',
                },
                {
                    key: 'is_edit_delete_published_coupon',
                    label: __( 'Edit/Delete Published Coupons', 'multivendorx' ),
                    value: 'is_edit_delete_published_coupon',
                },
            ],
            selectDeselect: true,
        },
        {
            key: 'separator_content',
            type: 'section',
            desc: __( 'Media Management', 'multivendorx' ),
            hint: __(
                'Manage the media files stores can upload.',
                'multivendorx'
            ),
        },
        {
            key: 'media_management_options',
            type: 'checkbox',
            label: __( 'Media Management Options', 'multivendorx' ),
            desc: __(
                'Select the permissions you want to grant stores for media file uploads.',
                'multivendorx'
            ),
            options: [
                {
                    key: 'is_upload_files',
                    label: __( 'Upload Media Files', 'multivendorx' ),
                    value: 'is_upload_files',
                },
            ],
            selectDeselect: true,
        },                   
    ],
};
