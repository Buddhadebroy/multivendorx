/* global appLocalizer */
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import axios from 'axios';
import { __ } from '@wordpress/i18n';
import { Table, getApiLink, TableCell, AdminBreadcrumbs, BasicInput, TextArea, CommonPopup, ToggleSetting, CalendarInput } from 'zyra';
import { ColumnDef, RowSelectionState, PaginationState } from '@tanstack/react-table';
import "../Announcements/announcements.scss";

type KBRow = {
    date: any;
    id?: number;
    title?: string;
    content?: string;
    status?: 'publish' | 'pending' | string;
};

type KBForm = {
    title: string;
    content: string;
    status?: 'publish' | 'pending' | 'draft';
};

type AnnouncementStatus = {
    key: string;
    name: string;
    count: number;
};
type FilterData = {
    typeCount?: any;
    searchField?: any;
};
export interface RealtimeFilter {
    name: string;
    render: (updateFilter: (key: string, value: any) => void, filterValue: any) => ReactNode;
}

export const KnowledgeBase: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);
    const [data, setData] = useState<KBRow[] | null>(null);
    const [addEntry, setAddEntry] = useState(false);
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });
    const [announcementStatus, setAnnouncementStatus] = useState<AnnouncementStatus[] | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [editId, setEditId] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<KBForm>({
        title: '',
        content: '',
        status: 'draft',
    });
    const bulkSelectRef = useRef<HTMLSelectElement>(null);
    const [totalRows, setTotalRows] = useState<number>(0);
    const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const errors: { [key: string]: string } = {};

        if (!formData.title.trim()) {
            errors.title = __('Title is required', 'multivendorx');
        }

        if (!formData.content.trim()) {
            errors.content = __('Content is required', 'multivendorx');
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleCloseForm = () => {
        setAddEntry(false);
        setFormData({ title: '', content: '', status: 'pending' }); // reset form
        setEditId(null); // reset edit mode
        setError(null); // clear any error
        setValidationErrors({});
    };
    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear field error when user types
        if (validationErrors[name]) {
            setValidationErrors((prev) => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            });
        }
    };

    const handleBulkAction = async () => {
        const action = bulkSelectRef.current?.value;
        const selectedIds = Object.keys(rowSelection).map((key) => {
            const index = Number(key);
            return data && data[index] ? data[index].id : null;
        }).filter((id): id is number => id !== null);

        if (!selectedIds.length) {
            setModalDetails('Select rows.');
            setOpenModal(true);
            return;
        }

        if (!action) {
            setModalDetails('Please select an action.');
            setOpenModal(true);
            return;
        }

        setData(null);

        try {
            await axios({
                method: 'PUT',
                url: getApiLink(appLocalizer, 'knowledge'),
                headers: { 'X-WP-Nonce': appLocalizer.nonce },
                data: { bulk: true, action, ids: selectedIds },
            });
            await fetchTotalRows();
            requestData(pagination.pageSize, pagination.pageIndex + 1);
            setRowSelection({});
        } catch (err) {
            setError(__('Failed to perform bulk action', 'multivendorx'));
        }
    };

    // Open edit modal
    const handleEdit = async (id: number) => {
        try {
            const response = await axios.get(getApiLink(appLocalizer, `knowledge/${id}`), {
                headers: { 'X-WP-Nonce': appLocalizer.nonce },
            });
            if (response.data) {
                setFormData({
                    title: response.data.title || '',
                    content: response.data.content || '',
                    status: response.data.status || 'draft',
                });
                setEditId(id);
                setAddEntry(true);
            }
        } catch {
            setError(__('Failed to load entry', 'multivendorx'));
        }
    };

    // Submit form
    const handleSubmit = async (status: 'publish' | 'pending' | 'draft') => {
        if (submitting) return;
        if (!validateForm()) {
            return; // Stop submission if errors exist
        }
        setSubmitting(true);

        try {
            const endpoint = editId
                ? getApiLink(appLocalizer, `knowledge/${editId}`)
                : getApiLink(appLocalizer, 'knowledge');

            const method = editId ? 'PUT' : 'POST';
            const payload = { ...formData, status };

            const response = await axios({
                method,
                url: endpoint,
                headers: { 'X-WP-Nonce': appLocalizer.nonce },
                data: payload,
            });

            if (response.data.success) {
                handleCloseForm();
                await fetchTotalRows();
                requestData(pagination.pageSize, pagination.pageIndex + 1);
            } else {
                setError(__('Failed to save entry', 'multivendorx'));
            }
        } catch {
            setError(__('Failed to save entry', 'multivendorx'));
        } finally {
            setSubmitting(false);
        }
    };


    const fetchTotalRows = async () => {
        try {
            const response = await axios.get(getApiLink(appLocalizer, 'knowledge'), {
                headers: { 'X-WP-Nonce': appLocalizer.nonce },
                params: { count: true },
            });
            const total = response.data || 0;
            setTotalRows(total);
            setPageCount(Math.ceil(total / pagination.pageSize));
        } catch {
            setError(__('Failed to load total rows', 'multivendorx'));
        }
    };

    // Fetch total rows on mount
    useEffect(() => {
        fetchTotalRows();
    }, []);


    useEffect(() => {
        const currentPage = pagination.pageIndex + 1;
        const rowsPerPage = pagination.pageSize;
        requestData(rowsPerPage, currentPage);
        setPageCount(Math.ceil(totalRows / rowsPerPage));
    }, [pagination]);

    // Fetch data from backend.
    function requestData(
        rowsPerPage = 10,
        currentPage = 1,
        typeCount = '',
        searchField = '',
        startDate = new Date(0),
        endDate = new Date(),
    ) {
        setData(null);
        axios({
            method: 'GET',
            url: getApiLink(appLocalizer, 'knowledge'),
            headers: { 'X-WP-Nonce': appLocalizer.nonce },
            params: {
                page: currentPage,
                row: rowsPerPage,
                status: typeCount === 'all' ? '' : typeCount,
                startDate,
                endDate,
                searchField
            },
        })
            .then((response) => {
                setData(response.data.items || []);
                setAnnouncementStatus([
                    {
                        key: 'all',
                        name: 'All',
                        count: response.data.all || 0,
                    },
                    {
                        key: 'publish',
                        name: 'Publish',
                        count: response.data.publish || 0,
                    },
                    {
                        key: 'pending',
                        name: 'Pending',
                        count: response.data.pending || 0,
                    },
                    {
                        key: 'draft',
                        name: 'Draft',
                        count: response.data.draft || 0,
                    },
                ]);
            })
            .catch(() => {
                setError(__('Failed to load stores', 'multivendorx'));
                setData([]);
            });
    }

    // Handle pagination and filter changes
    const requestApiForData = (
        rowsPerPage: number,
        currentPage: number,
        filterData: FilterData
    ) => {
        setData(null);
        requestData(
            rowsPerPage,
            currentPage,
            filterData?.typeCount,
            filterData?.searchField,
            filterData?.date?.start_date,
            filterData?.date?.end_date,

        );
    };

    const realtimeFilter: RealtimeFilter[] = [
        {
            name: 'date',
            render: (updateFilter) => (
                <div className="right">
                    <CalendarInput
                        wrapperClass=""
                        inputClass=""
                        onChange={(range: any) => {
                            updateFilter('date', {
                                start_date: range.startDate,
                                end_date: range.endDate,
                            });
                        }}
                    />
                </div>
            ),
        },
    ];

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return '-';
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    // Columns
    const columns: ColumnDef<KBRow>[] = [
        {
            id: 'select',
            header: ({ table }) => (
                <input
                    type="checkbox"
                    checked={table.getIsAllRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                />
            ),
            cell: ({ row }) => (
                <input
                    type="checkbox"
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                />
            ),
        },
        {
            header: __('Title', 'multivendorx'),
            cell: ({ row }) => (
                <TableCell title={row.original.title || ''}>
                    {truncateText(row.original.title || '', 30)} {/* truncate to 30 chars */}
                </TableCell>
            ),
        },
        {
            header: __('Content', 'multivendorx'),
            cell: ({ row }) => (
                <TableCell title={row.original.content || ''}>
                    {truncateText(row.original.content || '', 50)} {/* truncate to 50 chars */}
                </TableCell>
            ),
        },
        {
            id: 'date',
            accessorKey: 'date',
            enableSorting: true,
            header: __('Date', 'multivendorx'),
            cell: ({ row }) => {
                const rawDate = row.original.date;
                let formattedDate = '-';
                if (rawDate) {
                    const dateObj = new Date(rawDate);
                    formattedDate = new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    }).format(dateObj);
                }
                return <TableCell title={formattedDate}>{formattedDate}</TableCell>;
            },
        },
        {
            header: __('Status', 'multivendorx'),
            cell: ({ row }) => (
                <TableCell title={row.original.status || ''}>
                    {row.original.status ? (
                        <>
                            {row.original.status === 'publish' && <span className="admin-badge green">Publish</span>}
                            {row.original.status === 'pending' && <span className="admin-badge yellow">Pending</span>}
                            {row.original.status === 'draft' && <span className="admin-badge blue">Draft</span>}
                        </>
                    ) : (
                        '-'
                    )}
                </TableCell>
            ),
        },
        {
            id: 'action',
            header: __('Action', 'multivendorx'),
            cell: ({ row }) => (
                <TableCell
                    type="action-dropdown"
                    rowData={row.original}
                    header={{
                        actions: [
                            {
                                label: __('Edit', 'multivendorx'),
                                icon: 'adminlib-create',
                                onClick: (rowData) => handleEdit(rowData.id),
                                hover: true,
                            },
                            {
                                label: __('Delete', 'multivendorx'),
                                icon: 'adminlib-delete',
                                onClick: async (rowData) => {
                                    if (!rowData.id) return;
                                    if (!confirm(__('Are you sure you want to delete this entry?', 'multivendorx'))) return;

                                    try {
                                        await axios({
                                            method: 'DELETE',
                                            url: getApiLink(appLocalizer, `knowledge/${rowData.id}`),
                                            headers: { 'X-WP-Nonce': appLocalizer.nonce },
                                        });
                                        await fetchTotalRows();
                                        requestData(pagination.pageSize, pagination.pageIndex + 1);
                                    } catch {
                                        setError(__('Failed to delete entry', 'multivendorx'));
                                    }
                                },
                                hover: true,
                            },
                        ],
                    }}
                />
            ),
        },
    ];

    const searchFilter: RealtimeFilter[] = [
        {
            name: 'searchField',
            render: (updateFilter, filterValue) => (
                <>
                    <div className="search-section">
                        <input
                            name="searchField"
                            type="text"
                            placeholder={__('Search', 'multivendorx')}
                            onChange={(e) => {
                                updateFilter(e.target.name, e.target.value);
                            }}
                            value={filterValue || ''}
                        />
                        <i className="adminlib-search"></i>
                    </div>
                </>
            ),
        },
    ];

    const BulkAction: React.FC = () => (
        <div className=" bulk-action">
            <select name="action" className="basic-select" ref={bulkSelectRef} onChange={handleBulkAction}>
                <option value="">{__('Bulk actions')}</option>
                <option value="publish">{__('Publish', 'multivendorx')}</option>
                <option value="pending">{__('Pending', 'multivendorx')}</option>
                <option value="delete">{__('Delete', 'multivendorx')}</option>
            </select>
        </div>
    );

    return (
        <>
            <AdminBreadcrumbs
                activeTabIcon="adminlib-book"
                tabTitle="Knowledge Base"
                description={"Build your knowledge base: add new guides or manage existing ones in one place."}
                buttons={[
                    <div className="admin-btn btn-purple" onClick={() => {
                        setValidationErrors({});
                        setAddEntry(true);
                    }}>
                        <i className="adminlib-plus-circle-o"></i>
                        Add New
                    </div>,
                ]}
            />

            {addEntry && (
                <CommonPopup
                    open={addEntry}
                    onClose={handleCloseForm}
                    width="700px"
                    height='80%'
                    header={
                        <>
                            <div className="title">
                                <i className="adminlib-book"></i>
                                {editId ? __('Edit Knowledgebase', 'multivendorx') : __('Add Knowledgebase', 'multivendorx')}
                            </div>
                            <p>Write and publish a new knowledge base article to help stores navigate their dashboard.</p>
                            <i
                                onClick={handleCloseForm}
                                className="icon adminlib-close"
                            ></i>
                        </>
                    }
                    footer={
                        <>
                            <div
                                onClick={handleCloseForm}
                                className="admin-btn btn-red"
                            >
                                Cancel
                            </div>
                            <button
                                type="button"
                                onClick={() => handleSubmit(formData.status || 'draft')}
                                className="admin-btn btn-purple"
                                disabled={submitting}
                            >
                                {submitting ? 'Saving...' : 'Save'}
                            </button>
                        </>
                    }
                >
                    <div className="content">
                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <BasicInput type="text" name="title" value={formData.title} onChange={handleChange} />
                                {validationErrors.title && <p className="invalid-feedback">{validationErrors.title}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <TextArea
                                    name="content"
                                    inputClass="textarea-input"
                                    value={formData.content}
                                    onChange={handleChange}
                                />
                                {validationErrors.content && <p className="invalid-feedback">{validationErrors.content}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Status</label>
                                <ToggleSetting
                                    value={formData.status}
                                    options={[
                                        { label: 'Draft', value: 'draft' },
                                        { label: 'Pending', value: 'pending' },
                                        { label: 'Publish', value: 'publish' },
                                    ]}
                                    onChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                                />

                            </div>
                        </div>
                    </div>
                </CommonPopup>
            )}
            <div className="general-wrapper bg-wrapper">
                <div className="admin-table-wrapper">
                    <Table
                        data={data}
                        columns={columns as ColumnDef<Record<string, any>, any>[]}
                        rowSelection={rowSelection}
                        onRowSelectionChange={setRowSelection}
                        defaultRowsPerPage={10}
                        pageCount={pageCount}
                        pagination={pagination}
                        onPaginationChange={setPagination}
                        handlePagination={requestApiForData}
                        perPageOption={[10, 25, 50]}
                        typeCounts={announcementStatus as AnnouncementStatus[]}
                        bulkActionComp={() => <BulkAction />}
                        totalCounts={totalRows}
                        realtimeFilter={realtimeFilter}
                        searchFilter={searchFilter}
                    />
                </div>
            </div>
        </>
    );
};

export default KnowledgeBase;
