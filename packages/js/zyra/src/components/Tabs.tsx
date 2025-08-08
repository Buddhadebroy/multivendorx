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

    const findFirstFile = (items: TabData[]): TabContent | null => {
        for (const item of items) {
            if (item.type === 'file') return item.content as TabContent;
            if (item.type === 'folder') {
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
                    return { path: [...path, { name: file.name, id: file.id, type: 'file' }], stack };
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
        const hasValidChildren = items.some(item => item.type === 'file' || (item.type === 'folder' && (item.content as TabData[]).length > 0));
        if (!hasValidChildren) return;

        setMenuStack((prev) => [...prev, items]);
        const firstFile = findFirstFile(items);
        if (firstFile) {
            setActiveTab(firstFile.id);
            window.history.pushState(null, '', prepareUrl(firstFile.id));
            const result = buildPathToTab(tabData, firstFile.id);
            if (result) {
                setBreadcrumbPath([{ name: 'All Settings', id: 'all-settings', type: 'root' }, ...result.path]);
            }
        }
    };

    const goToBreadcrumb = (index: number) => {
        const crumb = breadcrumbPath[index];
        if (!crumb) return;

        if (crumb.type === 'root') {
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
                    if (item.type === 'folder' && item.name === name) return item.content as TabData[];
                    if (item.type === 'folder') {
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

    const renderBreadcrumb = () =>
        breadcrumbPath.map((crumb, index) => (
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

    function renderMenuItems(items: TabData[], isTopLevel: boolean = false) {
        return items.map((item, i) => {
            if (item.type === 'file') {
                const tab = item.content as TabContent;
                return (
                    <div
                        key={tab.id}
                        className={`menu-item ${activeTab === tab.id ? 'active-current-tab' : ''}`}
                        onClick={() => {
                            setActiveTab(tab.id);
                            window.history.pushState(null, '', prepareUrl(tab.id));
                            const result = buildPathToTab(tabData, tab.id);
                            if (result) {
                                const isTopLevelFile = tabData.some(topItem => topItem.type === 'file' && (topItem.content as TabContent).id === tab.id);
                                setMenuStack(isTopLevelFile ? [tabData] : result.stack);
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
            } else if (item.type === 'folder') {
                const folderName = item.name ?? '';
                const folderContent = item.content as TabData[];

                const isCurrentFolderOpen = menuStack.length > 1 && menuStack[menuStack.length - 1] === folderContent;

                const folderHasActiveTab = (() => {
                    const check = (items: TabData[]): boolean => {
                        for (const i of items) {
                            if (i.type === 'file' && (i.content as TabContent).id === activeTab) return true;
                            if (i.type === 'folder' && check(i.content as TabData[])) return true;
                        }
                        return false;
                    };
                    return check(folderContent);
                })();

                const isActiveFolder = isCurrentFolderOpen || folderHasActiveTab;

                return (
                    <div
                        key={`folder-${folderName}-${i}`}
                        className={`menu-item ${isActiveFolder ? 'active-current-tab' : ''}`}
                        onClick={() => openSubmenu(folderName, folderContent)}
                    >
                        <p className="menu-name">{menuCol ? null : folderName}</p>
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
    }

    const getTabDescription = (tabDataVal: TabData[]): JSX.Element[] => {
        return tabDataVal.flatMap(({ content, type }) => {
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
                    <i className="adminlib-cart"></i>
                    {parentTabName}
                </div>
                <p className="breadcrumbs-menu">{renderBreadcrumb()}</p>

                <div id="top-level-tab-lists" className="current-tab-lists">
                    <div className="current-tab-lists-container">
                        {renderMenuItems(tabData, true)}
                    </div>
                </div>
            </div>

            <div className="general-wrapper">
                {HeaderSection && <HeaderSection />}
                {BannerSection && <BannerSection />}

                <div className={`middle-container-wrapper ${horizontally ? 'horizontal-tabs' : 'vertical-tabs'}`}>
                    <div className={`${menuCol ? 'show-menu' : ''} middle-child-container`}>
                        {/* Conditionally render submenu */}
                        {menuStack.length > 1 && (
                            <div id="current-tab-lists" className="current-tab-lists">
                                <div className="current-tab-lists-container">
                                    {renderMenuItems(currentMenuItems)}
                                </div>
                            </div>
                        )}

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
