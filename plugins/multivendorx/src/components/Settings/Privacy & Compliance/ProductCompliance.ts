import { __ } from '@wordpress/i18n';

export default {
    id: 'product-compliance',
    priority: 5,
    name: __('Product Compliance', 'mvx-pro'),
    desc: __('All product listings must follow platform content guidelines and avoid prohibited categories. Branded or regulated products must include authenticity certificates. Optional safety certifications may be uploaded for regulated items.', 'mvx-pro'),
    icon: 'adminlib-wholesale',
    submitUrl: 'settings',
    modal: [
        {
            key: 'prohibited_product_categories',
            type: 'multi-string',
            label: __('Prohibited Product Categories', 'multivendorx'),
            placeholder: __('Add prohibited product category', 'multivendorx'),
            settingDescription: __(
                'Define one or more product categories that are not allowed to be listed on your marketplace.',
                'multivendorx'
            ),
            defaultValues: [
                { value: "Weapons & ammunition", locked: true, iconClass: "adminlib-check", description: "", tag:"Primary",required: true },
                { value: "Illegal drugs & substances", locked: true, iconClass: "adminlib-clock", description: "",tag:"Primary",required: true },
                { value: "Counterfeit products", locked: true, iconClass: "adminlib-clock", description: "",tag:"Primary",required: true },
                { value: "Stolen goods", locked: true, iconClass: "adminlib-clock", description: "",tag:"Primary",required: true },
            ],
            desc: __(
                '<b>Note:</b> Ensure sellers are informed about disallowed items before publishing. Violations may result in product removal or account penalties.',
                'multivendorx'
            ),
            name: 'prohibited_product_categories',
        },
        {
            key: 'required_store_uploads',
            type: 'checkbox',
            label: __('Required Store Uploads', 'mvx-pro'),
            desc: __('Select which documents or files stores must upload for compliance verification.', 'mvx-pro'),
            options: [
                {
                    key: 'product_authenticity_certificates',
                    label: __('Product Authenticity Certificates', 'mvx-pro'),
                    value: 'product_authenticity_certificates',
                },
                {
                    key: 'product_images_descriptions',
                    label: __('Product Images & Descriptions', 'mvx-pro'),
                    value: 'product_images_descriptions',
                },
                {
                    key: 'safety_certifications',
                    label: __('Safety Certifications', 'mvx-pro'),
                    value: 'safety_certifications',
                },
            ],
            selectDeselect: true,
        },

        {
            key: 'section',
            type: 'section',
            desc: __('Set rules and options for product abuse reporting.', 'multivendorx'),
            hint: __(
                'Product Report Abuse',
                'multivendorx'
            ),
        },
        {
            key: 'who_can_report',
            type: 'setting-toggle',
            label: __('Who can report', 'multivendorx'),
            settingDescription: __('Decide if only logged-in customers can submit abuse reports, or if reporting is open to everyone.', 'multivendorx'),
            desc: __('<ul><li>logged-in customers - Only registered and logged-in customers can report products.This helps prevent spam and ensures accountability.</li><li>Guests - Visitors who are not logged in can submit reports. Useful if you want to make reporting quick and easy without requiring sign-up.</li><li>Anyone - Both logged-in customers and guests can report products. This gives the widest access but may increase the risk of spam submissions.</li></ul>', 'multivendorx'),
            options: [
                {
                    key: 'logged_in',
                    label: __('logged-in customers', 'multivendorx'),
                    value: 'logged_in',
                },
                {
                    key: 'guests',
                    label: __('Guests', 'multivendorx'),
                    value: 'guests',
                },
                {
                    key: 'anyone',
                    label: __('Anyone', 'multivendorx'),
                    value: 'anyone',
                },
            ],
            look: 'toggle',
        },
        {
            key: 'abuse_report_reasons',
            type: 'multi-string',
            label: __('Reasons for abuse report', 'multivendorx'),
            placeholder: __('Add a reason for reporting a product', 'multivendorx'),
            defaultValues: [
                { value: "Product not received" },
                { value: "Product not as described" },
                { value: "Product damaged/defective" },
                { value: "Wrong item received" },
                { value: "Order arrived late" },
            ],            
            settingDescription: __(
                'Define one or more preset reasons that stores can choose from when submitting an abuse report.',
                'multivendorx'
            ),
            desc: __(
                '<b>Note</b>: Users can report products for various issues. When enabling logged-in user restriction, anonymous reports will be blocked. Abuse reports are reviewed by administrators who can take appropriate action including product removal or store penalties.',
                'multivendorx'
            ),
            name: 'abuse_report_reasons',
        }
    ],
};
