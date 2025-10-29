import React, { useEffect, useState } from 'react';

interface ButtonConfig {
  label?: string;
  onClick?: () => void;
  iconClass?: string;
  className?: string;
  tooltip?: string;
}

interface AdminBreadcrumbsProps {
  activeTabIcon?: string;
  tabTitle?: string;
  submenuRender?: boolean;
  hideTitle?: boolean;
  hideBreadcrumb?: boolean;
  renderBreadcrumb?: () => React.ReactNode;
  renderMenuItems?: (items: any[]) => React.ReactNode;
  tabData?: any[];
  buttons?: any[];
  goPremium?: boolean;
  goPremiumLink?: string;
  description?: string;
  customContent?: React.ReactNode;
}

const AdminBreadcrumbs: React.FC<AdminBreadcrumbsProps> = ({
  activeTabIcon = '',
  tabTitle = '',
  submenuRender = false,
  renderBreadcrumb,
  renderMenuItems,
  tabData = [],
  buttons = [],
  goPremium = false,
  goPremiumLink,
  description,
  customContent ,
  hideBreadcrumb = false,
  hideTitle = false
}) => {
  const [notices, setNotices] = useState<string[]>([]);

  useEffect(() => {
    const captureNotices = () => {
      const noticeNodes = document.querySelectorAll(
        '#screen-meta + .wrap .notice, #wpbody-content .notice'
      );

      if (noticeNodes.length > 0) {
        const htmlArray: string[] = [];
        noticeNodes.forEach((node) => {
          htmlArray.push(node.outerHTML);
          node.remove(); // remove from DOM so we control rendering
        });
        setNotices(htmlArray);
      }
    };

    captureNotices();
  }, []);

  return (
    <>
      <div className={submenuRender ? "horizontal-title-section" : "title-section"}>
        {!submenuRender && (
          <>
            <div className={submenuRender ? "horizontal-title-wrapper" : "title-wrapper"}>
              {!hideTitle && (
                <div className="title">
                  {activeTabIcon && <i className={activeTabIcon}></i>}
                  {tabTitle}
                </div>
              )}
              <div className="buttons">
                {buttons.length > 0 &&
                  buttons.map((btn, index) => {
                    if (React.isValidElement(btn)) return <React.Fragment key={index}>{btn}</React.Fragment>;

                    const { label, onClick, iconClass, className, tooltip } = btn as ButtonConfig;
                    return (
                      <button
                        key={index}
                        className={`tooltip-btn ${className || ''}`}
                        onClick={onClick}
                      >
                        {iconClass && <i className={iconClass}></i>}
                        {label}
                        {tooltip && <span className="tooltip">{tooltip}</span>}
                      </button>
                    );
                  })}
              </div>

              {customContent && <div className="custom-content">{customContent}</div>}
            </div>

            {description && <div className="description">{description}</div>}
            {!hideBreadcrumb && (
              <>
                {renderBreadcrumb && <div className="breadcrumbs">{renderBreadcrumb()}</div>}
              </>
            )}
          </>
        )}


        {renderMenuItems && tabData.length > 0 && (
          <div className="tabs-wrapper">
            {submenuRender && (
              <>
                {activeTabIcon && <i className={activeTabIcon}></i>}
              </>
            )}
            <div className={submenuRender ? "horizontal-tabs-item" : "tabs-item"}>{renderMenuItems(tabData)}</div>
            {!submenuRender && goPremium && (
              <a href={goPremiumLink} className="menu-item pro-btn">
                <i className="adminlib-pro-tag"></i> Upgrade<i className="adminlib-arrow-right"></i>
              </a>
            )}

          </div>
        )}
      </div>

      {/* render multiple notices */}
      {notices.length > 0 &&
        notices.map((html, i) => (
          <div
            key={i}
            className="wp-admin-notice"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ))}
    </>
  );
};

export default AdminBreadcrumbs;