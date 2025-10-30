import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextArea, getApiLink, ToggleSetting, SuccessNotice } from 'zyra';

const AdditionalInformation = () => {
    const id = appLocalizer.store_id;
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    const [stateOptions, setStateOptions] = useState<{ label: string; value: string }[]>([]);

    // Fetch store data
    useEffect(() => {
        if (!id) return;
        axios({
            method: 'GET',
            url: getApiLink(appLocalizer, `store/${id}`),
            headers: { 'X-WP-Nonce': appLocalizer.nonce },
        }).then((res) => {
            const data = res.data || {};
            setFormData((prev) => ({ ...prev, ...data }));
        });
    }, [id]);

    // Auto clear success message
    useEffect(() => {
        if (successMsg) {
            const timer = setTimeout(() => setSuccessMsg(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [successMsg]);

    // Fetch states when country changes
    useEffect(() => {
        if (formData.country) fetchStatesByCountry(formData.country);
    }, [formData.country]);

    const fetchStatesByCountry = (countryCode: string) => {
        axios({
            method: 'GET',
            url: getApiLink(appLocalizer, `states/${countryCode}`),
            headers: { 'X-WP-Nonce': appLocalizer.nonce },
        }).then((res) => {
            setStateOptions(res.data || []);
        });
    };

    // Handle text input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updated = { ...prev, [name]: value };
            autoSave(updated);
            return updated;
        });
    };

    // Handle toggle changes (always save yes/no string)
    const handleToggleChange = (field: string, val: any) => {
        const newValue = typeof val === "string" ? val : val?.value || "no";
        setFormData((prev) => {
            const updated = { ...prev, [field]: newValue };
            autoSave(updated);
            return updated;
        });
    };

    // Auto-save to backend
    const autoSave = (updatedData: { [key: string]: any }) => {
        axios({
            method: 'PUT',
            url: getApiLink(appLocalizer, `store/${id}`),
            headers: { 'X-WP-Nonce': appLocalizer.nonce },
            data: updatedData,
        }).then((res) => {
            if (res.data.success) setSuccessMsg('Store saved successfully!');
        });
    };

    return (
        <>
            <SuccessNotice message={successMsg} />

            <div className="page-title-wrapper">
                <div className="page-title">
                    <div className="title">Additional Information</div>
                    <div className="des">Manage your store information and preferences</div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="card-wrapper w-65">
                    {/* Message to Buyer */}
                    <div className="card-content">
                        <div className="card-title">Message to Buyer</div>
                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <TextArea
                                    name="messageToBuyer"
                                    wrapperClass="setting-from-textarea"
                                    inputClass="textarea-input"
                                    descClass="settings-metabox-description"
                                    value={formData.messageToBuyer || ''}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Privacy Controls */}
                    <div className="card-content">
                        <div className="card-title">Privacy Controls</div>

                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <label>Hide Address</label>
                                <ToggleSetting
                                    wrapperClass="setting-form-input"
                                    options={[
                                        { key: "yes", value: "yes", label: "Yes" },
                                        { key: "no", value: "no", label: "No" },
                                    ]}
                                    value={formData.hideAddress || 'no'}
                                    onChange={(val: any) => handleToggleChange("hideAddress", val)}
                                />
                            </div>
                        </div>

                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <label>Hide Phone</label>
                                <ToggleSetting
                                    wrapperClass="setting-form-input"
                                    options={[
                                        { key: "yes", value: "yes", label: "Yes" },
                                        { key: "no", value: "no", label: "No" },
                                    ]}
                                    value={formData.hidePhone || 'no'}
                                    onChange={(val: any) => handleToggleChange("hidePhone", val)}
                                />
                            </div>
                        </div>

                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <label>Hide Email</label>
                                <ToggleSetting
                                    wrapperClass="setting-form-input"
                                    options={[
                                        { key: "yes", value: "yes", label: "Yes" },
                                        { key: "no", value: "no", label: "No" },
                                    ]}
                                    value={formData.hideEmail || 'no'}
                                    onChange={(val: any) => handleToggleChange("hideEmail", val)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdditionalInformation;
