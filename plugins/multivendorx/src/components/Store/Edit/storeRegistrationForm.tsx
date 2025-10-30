import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextArea, getApiLink, SuccessNotice } from 'zyra';

const StoreRegistration = ({ id }: { id: string|null }) => {
	const [formData, setFormData] = useState<{ [key: string]: string }>({});
	const [successMsg, setSuccessMsg] = useState<string | null>(null);

	useEffect(() => {
		if (!id) return;

		axios({
			method: 'GET',
			url: getApiLink(appLocalizer, `store/${id}`),
			headers: { 'X-WP-Nonce': appLocalizer.nonce, "registrations": 'registrations' },
		}).then((res) => {
			const data = res.data || {};
			setFormData((prev) => ({ ...prev, ...data }));
		});
	}, [id]);

	useEffect(() => {
		if (successMsg) {
			const timer = setTimeout(() => setSuccessMsg(null), 3000);
			return () => clearTimeout(timer);
		}
	}, [successMsg]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			const updated = {
				...(prev || {}),
				[name]: value ?? '',
			};
			autoSave(updated);
			return updated;
		});
	};

	const autoSave = (updatedData: { [key: string]: string }) => {
		axios({
			method: 'PUT',
			url: getApiLink(appLocalizer, `store/${id}`),
			headers: { 'X-WP-Nonce': appLocalizer.nonce },
			data: updatedData,
		}).then((res) => {
			if (res.data.success) {
				setSuccessMsg('Store saved successfully!');
			}
		});
	};

	const handleSubmit = (status: 'approve' | 'rejected') => {
		const updatedData = { ...formData, status };
		axios({
			method: 'PUT',
			url: getApiLink(appLocalizer, `store/${id}`),
			headers: { 'X-WP-Nonce': appLocalizer.nonce },
			data: updatedData,
		}).then((res) => {
			if (res.data.success) {
				setSuccessMsg(
					status === 'approve'
						? 'Store approved successfully!'
						: 'Store rejected successfully!'
				);
				setFormData(updatedData); // update local state
			}
		});
	};
	return (
		<>
			<SuccessNotice message={successMsg} />

			<div className="container-wrapper">
				<div className="card-wrapper w-65">
					<div className="card-content">
						<div className="card-title">Store Details</div>

						{/* Core Data */}
						{formData.core_data &&
							Object.entries(formData.core_data).map(([label, value]) => (
								<div className="form-details" key={label}>
									<label className="label">{label} :</label>
									<div className="value">{value || "[Not Provided]"}</div>
								</div>
							))}

						{/* Registration Data */}
						{formData.registration_data &&
							Object.entries(formData.registration_data).map(([label, value]) => (
								<div className="form-details" key={label}>
									<label className="label">{label} :</label> 
									<div className="value">{value || "[Not Provided]"}</div>
								</div>
							))}
					</div>
				</div>


				<div className="card-wrapper w-35">
					<div className="card-content">
						<div className="card-title">
							Note
						</div>

						<div className="form-group-wrapper">
							<div className="form-group">
								<TextArea name="store_application_note" wrapperClass="setting-from-textarea"
									placeholder='Optional note for approval or rejection'
									inputClass="textarea-input"
									descClass="settings-metabox-description" value={formData.store_application_note} onChange={handleChange} />
							</div>
						</div>

						<div className="buttons-wrapper" >
							<button
								className="admin-btn btn-green"
								onClick={() => handleSubmit('approve')}
							>
								Approve
							</button>

							<button
								className="admin-btn btn-red"
								onClick={() => handleSubmit('rejected')}
							>
								Reject
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StoreRegistration;