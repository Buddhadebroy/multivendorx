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
    name?: string;
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
    const [breadcrumbPath, setBreadcrumbPath] = useState<{ name: string; id: string; type: string }[]>([
        { name: 'All Settings', id: 'all-settings', type: 'root' },
    ]);

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

    const buildPathToTab = (
        data: TabData[],
        tabId: string,
        path: { name: string; id: string; type: string }[] = [],
        stack: TabData[][] = [data]
    ): { path: { name: string; id: string; type: string }[]; stack: TabData[][] } | null => {
        for (const item of data) {
            if (item.type === 'file') {
                const file = item.content as TabContent;
                if (file.id === tabId) {
                    return {
                        path: [...path, { name: file.name, id: file.id, type: 'file' }],
                        stack,
                    };
                }
            } else if (item.type === 'folder') {
                const folderItems = item.content as TabData[];
                const result = buildPathToTab(
                    folderItems,
                    tabId,
                    [...path, { name: item.name ?? '', id: item.name ?? '', type: 'folder' }],
                    [...stack, folderItems]
                );
                if (result) return result;
            }
        }
        return null;
    };

    const openSubmenu = (folderName: string, items: TabData[]) => {
        setMenuStack((prev) => [...prev, items]);
        const firstFile = findFirstFile(items);
        if (firstFile) {
            setActiveTab(firstFile.id);
            window.history.pushState(null, '', prepareUrl(firstFile.id));
            const result = buildPathToTab(tabData, firstFile.id);
            if (result) {
                setBreadcrumbPath([
                    { name: 'All Settings', id: 'all-settings', type: 'root' },
                    ...result.path,
                ]);
            }
        }
    };

    const goToBreadcrumb = (index: number) => {
        const crumb = breadcrumbPath[index];
        if (!crumb) return;

        if (crumb.type === 'root' && crumb.id === 'all-settings') {
            setMenuStack([tabData]);
            setBreadcrumbPath([{ name: 'All Settings', id: 'all-settings', type: 'root' }]);

            const firstFile = findFirstFile(tabData);
            if (firstFile) {
                setActiveTab(firstFile.id);
                window.history.pushState(null, '', prepareUrl(firstFile.id));
            } else {
                setActiveTab('');
                window.history.pushState(null, '', prepareUrl(''));
            }
            return;
        }

        if (crumb.type === 'folder') {
            const findFolder = (items: TabData[], name: string): TabData[] | null => {
                for (const item of items) {
                    if (item.type === 'folder' && item.name === name) {
                        return item.content as TabData[];
                    } else if (item.type === 'folder') {
                        const result = findFolder(item.content as TabData[], name);
                        if (result) return result;
                    }
                }
                return null;
            };

            const folderItems = findFolder(tabData, crumb.id);
            if (folderItems) {
                setMenuStack((prev) => [...prev.slice(0, index), folderItems]);
                const firstFile = findFirstFile(folderItems);
                if (firstFile) {
                    setActiveTab(firstFile.id);
                    window.history.pushState(null, '', prepareUrl(firstFile.id));
                    const result = buildPathToTab(tabData, firstFile.id);
                    if (result) {
                        setBreadcrumbPath([
                            { name: 'All Settings', id: 'all-settings', type: 'root' },
                            ...result.path,
                        ]);
                    }
                }
            }
        } else {
            setActiveTab(crumb.id);
            window.history.pushState(null, '', prepareUrl(crumb.id));
            const result = buildPathToTab(tabData, crumb.id);
            if (result) {
                setMenuStack(result.stack);
                setBreadcrumbPath([
                    { name: 'All Settings', id: 'all-settings', type: 'root' },
                    ...result.path,
                ]);
            }
        }
    };

    const renderBreadcrumb = () => {
        return breadcrumbPath.map((crumb, index) => (
            <span key={index}>
                {index > 0 && ' / '}
                <Link
                    to={crumb.type === 'file' ? prepareUrl(crumb.id) : '#'}
                    onClick={(e) => {
                        e.preventDefault();
                        goToBreadcrumb(index);
                    }}
                >
                    {crumb.name}
                </Link>
            </span>
        ));
    };

    const renderMenuItems = (items: TabData[]) => {
        return items.map(({ type, content, name }, idx) => {
            if (type === 'file') {
                const tab = content as TabContent;
                return (
                    <div
                        key={tab.id}
                        className={`menu-item ${activeTab === tab.id ? 'active-current-tab' : ''}`}
                        onClick={() => {
                            setActiveTab(tab.id);
                            window.history.pushState(null, '', prepareUrl(tab.id));
                            const result = buildPathToTab(tabData, tab.id);
                            if (result) {
                                setMenuStack(result.stack);
                                setBreadcrumbPath([
                                    { name: 'All Settings', id: 'all-settings', type: 'root' },
                                    ...result.path,
                                ]);
                            }
                        }}
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

    useEffect(() => {
        if (currentTab) {
            setActiveTab(currentTab);
            const result = buildPathToTab(tabData, currentTab);
            if (result) {
                setMenuStack(result.stack);
                setBreadcrumbPath([
                    { name: 'All Settings', id: 'all-settings', type: 'root' },
                    ...result.path,
                ]);
            }
        } else {
            const firstFile = findFirstFile(tabData);
            if (firstFile) setActiveTab(firstFile.id);
        }
    }, [currentTab, tabData]);

    const currentMenuItems = menuStack[menuStack.length - 1];
    const parentTabName = breadcrumbPath.length > 1 ? breadcrumbPath[breadcrumbPath.length - 2]?.name : '';

    return (
        <>
            <div className="top-header">
                <div className="left-section">
                    <img className="brand-logo" src={menuCol ? smallbrandImg : brandImg} alt="Logo" />
                </div>
                <div className="right-section">
                    <div className="search-field">
                        <i className="adminlib-search"></i>
                        <input type="text" className="basic-input" placeholder="Search Here" />
                    </div>
                </div>
            </div>

            <div className="admin-breadcrumbs">
                <div className="breadcrumbs-title">
                    {parentTabName || (breadcrumbPath.length > 0 ? breadcrumbPath[breadcrumbPath.length - 1].name : '')}
                </div>
                <p className="breadcrumbs-menu">{renderBreadcrumb()}</p>
            </div>

            <div className="general-wrapper">
                {HeaderSection && <HeaderSection />}
                {BannerSection && <BannerSection />}

                <div className={`middle-container-wrapper ${horizontally ? 'horizontal-tabs' : 'vertical-tabs'}`}>
                    <div className={`${menuCol ? 'show-menu' : ''} middle-child-container`}>
                        <div id="current-tab-lists" className="current-tab-lists">
                            <div className="current-tab-lists-container">{renderMenuItems(currentMenuItems)}</div>
                        </div>

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
