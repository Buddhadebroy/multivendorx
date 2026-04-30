import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import ShowProPopup from '../Popup/Popup';
import './wholesaleUser.scss';
import { __ } from '@wordpress/i18n';
import { AdminBreadcrumbs, PopupUI } from 'zyra';

const WholesaleUser = () => {
    const [openPopup, setopenPopup] = useState(false);

    return (
        <>
            <AdminBreadcrumbs
                activeTabIcon="adminlib-wholesale"
                tabTitle="Wholesale User"
            />
            <div id="wholesale-list-table">
                <Dialog
                    className="admin-module-popup"
                    open={ openDialog }
                    onClose={ () => {
                        setOpenDialog( false );
                    } }
                    aria-labelledby="form-dialog-title"
                >
                    <span
                        className="admin-font adminlib-cross"
                        onClick={ () => {
                            setOpenDialog( false );
                        } }
                    ></span>
                    { ! appLocalizer.khali_dabba ? (
                        <ShowPopup />
                    ) : (
                        <ShowPopup moduleName="wholesale" />
                    ) }
                </Dialog>
                <div
                    className="image-wrapper wholesale-user-image"
                    onClick={ () => {
                        setOpenDialog( true );
                    } }
                ></div>
            </div>
            {openPopup && (
                <PopupUI
                    position="lightbox"
                    open={openPopup}
                    onClose={() => setopenPopup(false)}
                    width={31.25}
                    height="auto"
                >
                    <ShowProPopup />
                </PopupUI>
            )}
            <NavigatorHeader
                headerIcon="cohort"
                headerDescription={__(
                    'Cohort information is presented with associated products and student enrollments to support administrative actions.',
                    'moowoodle'
                )}
                headerTitle={__('Cohorts', 'moowoodle')}
            />
            <div
                className="cohort-img image-wrapper"
                onClick={() => {
                    setopenPopup(true);
                }}
            ></div>
        </>
    );
};

export default WholesaleUser;
