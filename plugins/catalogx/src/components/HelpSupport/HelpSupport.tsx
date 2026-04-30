import React from 'react';
import { __ } from '@wordpress/i18n';
import { Card, Column, Container, NavigatorHeader } from 'zyra';

const HelpSupport: React.FC = () => {
	const videos = [
		{
			link: 'https://youtu.be/fL7wPVYopTU?si=zbX9j87shmQ3i-wl',
			title: __('How to Set Up catalogx Marketplace', 'catalogx'),
			des: __(
				'A step-by-step guide to setting up your multivendor marketplace.',
				'catalogx'
			),
		},
        {
			link: 'https://youtu.be/fL7wPVYopTU?si=zbX9j87shmQ3i-wl',
			title: __('How to Set Up catalogx Marketplace', 'catalogx'),
			des: __(
				'A step-by-step guide to setting up your multivendor marketplace.',
				'catalogx'
			),
		},
        {
			link: 'https://youtu.be/fL7wPVYopTU?si=zbX9j87shmQ3i-wl',
			title: __('How to Set Up catalogx Marketplace', 'catalogx'),
			des: __(
				'A step-by-step guide to setting up your multivendor marketplace.',
				'catalogx'
			),
		},
	];
	const supportItems = [
		{
			icon: 'facebook-fill',
			name: __('Facebook community', 'catalogx'),
			description: __(
				'Connect with other store owners, share tips, and get quick solutions.',
				'catalogx'
			),
			link: 'https://www.facebook.com/groups/226246620006065/',
		},
		{
			icon: 'wordpress',
			name: __('WordPress support forum', 'catalogx'),
			description: __(
				'Ask questions and get expert guidance from the WordPress community.',
				'catalogx'
			),
			link: 'https://wordpress.org/support/plugin/dc-woocommerce-multi-vendor/',
		},
		{
			icon: 'forum',
			name: __('Our forum', 'catalogx'),
			description: __(
				'Discuss catalogx features, report issues, and collaborate with other users.',
				'catalogx'
			),
			link: 'https://catalogx.com/support-forum/',
		},
		{
			icon: 'live-chat',
			name: __('Live chat', 'catalogx'),
			description: __(
				'Get real-time support from our team for setup, troubleshooting, and guidance.',
				'catalogx'
			),
			link: 'https://tawk.to/chat/5d2eebf19b94cd38bbe7c9ad/1fsg8cq8n',
		},
	];
	const DocumentationItems = [
		{
			icon: 'document',
			name: __('Official documentation', 'catalogx'),
			description: __(
				'Step-by-step guides for every catalogx feature.',
				'catalogx'
			),
			link: 'https://catalogx.com/docs/knowledgebase/',
		},
		{
			icon: 'youtube',
			name: __('YouTube tutorials', 'catalogx'),
			description: __(
				'Watch videos on marketplace setup, store management, payments, and more.',
				'catalogx'
			),
			link: 'https://www.youtube.com/@catalogx/videos',
		},
		{
			icon: 'faq',
			name: __('FAQs', 'catalogx'),
			description: __(
				'Quick answers to the most common questions about features and troubleshooting.',
				'catalogx'
			),
			link: 'https://catalogx.com/docs/faqs/',
		},
		{
			icon: 'coding',
			name: __('Coding support', 'catalogx'),
			description: __(
				'Professional help for customizations, integrations, and technical issues.',
				'catalogx'
			),
			link: 'https://discord.com/channels/1376811097134469191/1376811102020829258',
		},
	];
	return (
		<>
			<NavigatorHeader
				headerIcon="customer-support"
				headerTitle={__('Help & Support', 'catalogx')}
				headerDescription={__(
					'Get fast help, expert guidance, and easy-to-follow resources - all in one place.',
					'catalogx'
				)}
			/>

			<Container general>
				<Column row>
					<Card title={__('Community & forums', 'catalogx')}>
						<div className="support-wrapper">
							{supportItems.map((item, index) => (
								<div className="support-item" key={index}>
									<div className="image">
										<i
											className={`adminfont-${item.icon}`}
										/>
									</div>
									<div className="details">
										<div className="name">
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.name}
											</a>
										</div>
										<div className="des">
											{' '}
											{item.description}{' '}
										</div>
									</div>
								</div>
							))}
						</div>
					</Card>
					<Card
						title={__('Documentation & Learning', 'catalogx')}
					>
						<div className="support-wrapper">
							{DocumentationItems.map((item, index) => (
								<div className="support-item" key={index}>
									<div className="image">
										<i
											className={`adminfont-${item.icon}`}
										/>
									</div>
									<div className="details">
										<div className="name">
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.name}
											</a>
										</div>
										<div className="des">
											{item.description}
										</div>
									</div>
								</div>
							))}
						</div>
					</Card>
				</Column>

				<Column>
					<Card>
						<div className="video-section">
							<div className="details-wrapper">
								<div className="title">
									{__(
										'Master catalogx in minutes!',
										'catalogx'
									)}
								</div>
								<div className="des">
									{__(
										'Watch our top tutorial videos and learn how to set up your marketplace, manage stores, and enable subscriptions - all in just a few easy steps.',
										'catalogx'
									)}
								</div>
								<a
									href="https://www.youtube.com/@catalogx/videos"
									target="_blank"
									rel="noopener noreferrer"
									className="admin-btn btn-purple"
								>
									<i className="adminfont-eye" />{' '}
									{__('Watch All Tutorials', 'catalogx')}
								</a>
							</div>

							<div className="video-section">
								{videos.map((video, index) => {
									const videoId = new URL(
										video.link
									).searchParams.get('v');
									return (
										<div
											key={index}
											className="video-wrapper"
										>
											<iframe
												src={`https://www.youtube.com/embed/${videoId}`}
												title={video.title}
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											></iframe>

											<div className="title">
												{__(
													video.title,
													'catalogx'
												)}
											</div>
											<div className="des">
												{__(video.des, 'catalogx')}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</Card>
				</Column>
			</Container>
		</>
	);
};

export default HelpSupport;
