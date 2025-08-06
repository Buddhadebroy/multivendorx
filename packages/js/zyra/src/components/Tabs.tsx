/**
 * External dependencies
 */
import { LinkProps } from 'react-router-dom';
import { useState, useEffect, ReactNode } from 'react';

/**
 * Internal dependencies
 */
import AdminFooter, { SupportLink } from './AdminFooter';
import '../styles/web/Tabs.scss';

// Types
type TabContent = {
    id: string;
    name: string;
    desc?: string;
    icon?: string;
    link?: string;
    proDependent?: boolean;
};

type TabData = {
    name?: string; // For folder tabs
    type: 'file' | 'folder';
    content: TabContent | TabData[];
};

type TabsProps = {
    tabData: TabData[];
    currentTab: string;
    getForm: (currentTab: string) => ReactNode;
    prepareUrl: (tabId: string) => string;
    HeaderSection?: () => JSX.Element;
    BannerSection?: () => JSX.Element;
    horizontally?: boolean;
    appLocalizer: any;
    brandImg: string;
    smallbrandImg: string;
    supprot: SupportLink[];
    Link: React.ElementType<LinkProps>;
};

const Tabs: React.FC<TabsProps> = ({
    tabData,
    currentTab,
    getForm,
    prepareUrl,
    HeaderSection,
    BannerSection,
    horizontally,
    appLocalizer,
    brandImg,
    smallbrandImg,
    supprot,
    Link,
}) => {
    const [menuCol, setMenuCol] = useState(false);

    const [activeTab, setActiveTab] = useState<string>(currentTab);

    const [menuStack, setMenuStack] = useState<TabData[][]>([tabData]);
    const [folderStack, setFolderStack] = useState<string[]>([]); // Breadcrumb path

    const handleMenuShow = () => {
        setMenuCol(!menuCol);
    };

    const findFirstFile = (items: TabData[]): TabContent | null => {
        for (const item of items) {
            if (item.type === 'file') {
                return item.content as TabContent;
            } else if (item.type === 'folder') {
                const found = findFirstFile(item.content as TabData[]);
                if (found) return found;
            }
        }
        return null;
    };

    const openSubmenu = (folderName: string, items: TabData[]) => {
        setMenuStack((prev) => [...prev, items]);
        setFolderStack((prev) => [...prev, folderName]);

        // Auto select first file inside submenu
        const firstFile = findFirstFile(items);
        if (firstFile) {
            setActiveTab(firstFile.id);
        }
    };

    const goToBreadcrumb = (index: number) => {
        setMenuStack((prev) => prev.slice(0, index + 1));
        setFolderStack((prev) => prev.slice(0, index + 1));

        // Auto select first file of that level
        const firstFile = findFirstFile(menuStack[index]);
        if (firstFile) {
            setActiveTab(firstFile.id);
        }
    };

    // ✅ Current menu items
    const currentMenuItems = menuStack[menuStack.length - 1];

    // ✅ Recursive Tab Description
    const getTabDescription = (tabDataVal: TabData[]): JSX.Element[] => {
        return tabDataVal?.flatMap(({ content, type }) => {
            if (type === 'file') {
                const tab = content as TabContent;
                return tab.id === activeTab && tab.id !== 'support' ? (
                    <div className="tab-description-header" key={tab.id}>
                        <div className="child">
                            <div>
                                <div className="tab-name">{tab.name}</div>
                                <div className="tab-desc">{tab.desc}</div>
                            </div>
                        </div>
                    </div>
                ) : [];
            } else if (type === 'folder') {
                return getTabDescription(content as TabData[]);
            }
            return [];
        });
    };

    // ✅ Dynamic Breadcrumb
    const renderBreadcrumb = () => {
        const fullPath = folderStack.length > 0 ? folderStack : ['All Settings'];
        return fullPath.map((name, index) => (
            <span key={index}>
                {index > 0 && " / "}
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        goToBreadcrumb(index);
                    }}
                >
                    {name}
                </a>
            </span>
        ));
    };

    // ✅ Render Menu Items
    const renderMenuItems = (items: TabData[]) => {
        console.log(items)
        return items.map(({ type, content, name }, idx) => {
            if (type === 'file') {
                const tab = content as TabContent;
                return (
                    <div
                        key={idx}
                        className={`menu-item ${activeTab === tab.id ? 'active-current-tab' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <Link to={prepareUrl(tab.id)}>
                            <p className="menu-name">{menuCol ? null : tab.name}</p>
                        </Link>
                    </div>
                );
            }

            if (type === 'folder') {
                return (
                    <div
                        key={`folder-${name}-${idx}`}
                        className="menu-item folder"
                        onClick={() => openSubmenu(name ?? '', content as TabData[])}
                    >
                        <p className="menu-name">{menuCol ? null : name}</p>
                        {!menuCol && (
                            <span className="submenu-arrow">
                                <i className="admin-font adminlib-keyboard-arrow-right"></i>
                            </span>
                        )}
                    </div>
                );
            }
            return null;
        });
    };

    useEffect(() => {
        // Ensure a valid tab is always selected
        if (!activeTab) {
            const first = findFirstFile(menuStack[0]);
            if (first) setActiveTab(first.id);
        }
    }, []);

    return (
        <>
            <div className="top-header">
                <div className="left-section">
                    <img
                        className="brand-logo"
                        src={menuCol ? smallbrandImg : brandImg}
                        alt="Logo"
                    />
                </div>
                <div className="right-section">
                    <div className="search-field">
                        <i className="adminlib-search"></i>
                        <input type="text" className="basic-input" placeholder="Search Here" />
                    </div>
                </div>
            </div>

            {/* -------- Breadcrumbs -------- */}
            <div className="admin-breadcrumbs">
                <div className="breadcrumbs-title">
                    {folderStack.length > 0 ? folderStack[folderStack.length - 1] : 'All Settings'}
                </div>
                <p className="breadcrumbs-menu">{renderBreadcrumb()}</p>
            </div>

            {/* -------- Main Wrapper -------- */}
            <div className="general-wrapper">
                {HeaderSection && <HeaderSection />}
                {BannerSection && <BannerSection />}

                <div className={`middle-container-wrapper ${horizontally ? 'horizontal-tabs' : 'vertical-tabs'}`}>
                    <div className={`${menuCol ? 'show-menu' : ''} middle-child-container`}>
                        <div id="current-tab-lists" className="current-tab-lists">
                            <div className="current-tab-lists-container">
                                {renderMenuItems(currentMenuItems)}
                            </div>
                        </div>

                        {/* -------- Tab Content -------- */}
                        <div className="tab-content">
                            {getTabDescription(tabData)}
                            {getForm(activeTab)}
                        </div>
                    </div>
                </div>

                <AdminFooter supportLink={supprot} />
            </div>
        </>
    );
};

export default Tabs;
