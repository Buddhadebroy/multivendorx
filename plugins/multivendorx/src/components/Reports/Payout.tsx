import React, { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { CalendarInput, getApiLink, Table, TableCell } from "zyra";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'react-leaflet';
import axios from 'axios';
import { PaginationState, RowSelectionState } from '@tanstack/react-table';

const overview = [
  {
    id: 'sales',
    label: 'Active Stores',
    count: 15,
    icon: 'adminlib-star red',
  },
  {
    id: 'earnings',
    label: 'Stores with Sales',
    count: 625,
    icon: 'adminlib-support green',
  },
  {
    id: 'Vendors',
    label: 'New Stores',
    count: 8,
    icon: 'adminlib-global-community blue',
  },
  {
    id: 'free',
    label: 'Pending Store',
    count: 758,
    icon: 'adminlib-global-community yellow',
  },
];
type StoreRow = {
  id: number;
  vendor: string;
  amount: string;
  commission: string;
  date: string;
  status: "Paid" | "Unpaid";
};
const pieData = [
  { name: "Store 1(300)", value: 300 },
  { name: "Store 2(2400)", value: 2400 },
  { name: "Store 3(800)", value: 800 },
  { name: "Store 4(200)", value: 200 },
  { name: "Store 5(400)", value: 400 },
];

const COLORS = ["#5007aa", "#00c49f", "#ff7300", "#d400ffff", "#00ff88ff"];

export interface RealtimeFilter {
  name: string;
  render: (
    updateFilter: (key: string, value: any) => void,
    filterValue: any
  ) => React.ReactNode;
}
type StoreStatus = {
  key: string;
  name: string;
  count: number;
};
type FilterData = {
  typeCount?: any;
  searchField?: any;
  orderBy?: any;
  order?: any;
};
const Transactions: React.FC = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [storeStatus, setStoreStatus] = useState<StoreStatus[] | null>(null);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [totalRows, setTotalRows] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  // Fetch total rows on mount
  useEffect(() => {
    axios({
      method: 'GET',
      url: getApiLink(appLocalizer, 'store'),
      headers: { 'X-WP-Nonce': appLocalizer.nonce },
      params: { count: true },
    })
      .then((response) => {
        setTotalRows(response.data || 0);
        setPageCount(Math.ceil(response.data / pagination.pageSize));
      })
      .catch(() => {
        setError(__('Failed to load total rows', 'multivendorx'));
      });
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
    orderBy = '',
    order = '',
    startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
    endDate = new Date()
  ) {
    setData(null);
    axios({
      method: 'GET',
      url: getApiLink(appLocalizer, 'store'),
      headers: { 'X-WP-Nonce': appLocalizer.nonce },
      params: {
        page: currentPage,
        row: rowsPerPage,
        filter_status: typeCount === 'all' ? '' : typeCount,
        searchField,
        orderBy,
        order,
        startDate,
        endDate
      },
    })
      .then((response) => {
        setData(response.data.stores || []);
        setStoreStatus([
          {
            key: 'all',
            name: 'All',
            count: response.data.all || 0,
          },
          {
            key: 'active',
            name: 'Active',
            count: response.data.active || 0,
          },
          {
            key: 'pending',
            name: 'Pending',
            count: response.data.pending || 0,
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
      filterData?.orderBy,
      filterData?.order,
      filterData?.date?.start_date,
      filterData?.date?.end_date,
    );
  };

  const searchFilter: RealtimeFilter[] = [
    {
      name: 'searchField',
      render: (updateFilter, filterValue) => (
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
      ),
    },
  ];

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

  const currencySymbol = appLocalizer?.currency_symbol;

  const columns: ColumnDef<StoreRow>[] = [
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
      id: 'store_name',
      accessorKey: 'store_name',
      enableSorting: true,
      header: __('Store', 'multivendorx'),
      cell: ({ row }) => {
        const status = row.original.status || '';
        const rawDate = row.original.applied_on;
        let formattedDate = '-';
        if (rawDate) {
          const dateObj = new Date(rawDate);
          formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }).format(dateObj);
        }

        return (
          <TableCell title={row.original.store_name || ''}>
            <a
              onClick={() => {
                window.location.href = `?page=multivendorx#&tab=stores&view&id=${row.original.id}`;
              }}
              className="product-wrapper"
            >
              {row.original.image ? (
                <img
                  src={row.original.image}
                  alt={row.original.store_name}
                />
              ) : (
                <i className="adminlib-store-inventory"></i>
              )}

              <div className="details">
                <span className="title">{row.original.store_name || '-'}</span>
                <span>Since {formattedDate}</span>
              </div>
            </a>
          </TableCell>
        );
      },
    },
    {
      header: __('Contact', 'multivendorx'),
      cell: ({ row }) => (
        <TableCell title={row.original.email || ''}>
          <div className="table-content">
            {row.original.email && (
              <div>
                <b><i className="adminlib-mail"></i></b> {row.original.email}
              </div>
            )}
            {row.original.phone && (
              <div>
                <b><i className="adminlib-form-phone"></i></b>
                {row.original.phone ? row.original.phone : '-'}
              </div>
            )}
          </div>
        </TableCell>
      ),
    },
    {
      id: 'primary_owner',
      accessorKey: 'primary_owner',
      enableSorting: true,
      accessorFn: (row) => row.primary_owner?.name || row.primary_owner?.email || '',
      header: __('Primary Owner', 'multivendorx'),
      cell: ({ row }) => {
        const primaryOwner = row.original.primary_owner;
        return (
          <TableCell title={primaryOwner?.name || primaryOwner?.email || ''}>
            {primaryOwner ? (
              <a
                href={`/wp-admin/user-edit.php?user_id=${primaryOwner.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/wp-admin/user-edit.php?user_id=${primaryOwner.id}`;
                }}
              >
                {primaryOwner.name || primaryOwner.email}
              </a>
            ) : (
              <span>-</span>
            )}
          </TableCell>
        );
      },
    },
    {
      id: 'status',
      header: __('Status', 'multivendorx'),
      cell: ({ row }) => {
        const status = row.original.status || '';
        const rawDate = row.original.applied_on;
        let formattedDate = '-';
        if (rawDate) {
          const dateObj = new Date(rawDate);
          formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }).format(dateObj);
        }

        const getStatusBadge = (status: string) => {
          switch (status) {
            case 'active':
              return <span className="admin-badge green">Active</span>;
            case 'pending':
              return <span className="admin-badge yellow">Pending</span>;
            case 'rejected':
              return <span className="admin-badge red">Rejected</span>;
            case 'locked':
              return <span className="admin-badge blue">Locked</span>;
            default:
              return <span className="admin-badge gray">{status}</span>;
          }
        };

        return (
          <TableCell title={`${status} - ${formattedDate}`}>
            {getStatusBadge(status)}
          </TableCell>
        );
      },
    },
    {
      header: __('Order Total', 'multivendorx'),
      cell: ({ row }) => (
        <TableCell title={`${currencySymbol}${row.original.commission.total_order_amount || ''}`}>
          {row.original.commission.total_order_amount
            ? `${currencySymbol}${row.original.commission.total_order_amount}`
            : '-'}
        </TableCell>
      ),
    },
    {
      header: __('Shipping', 'multivendorx'),
      cell: ({ row }) => (
        <TableCell title={`${currencySymbol}${row.original.commission.shipping_amount || ''}`}>
          {row.original.commission.shipping_amount
            ? `${currencySymbol}${row.original.commission.shipping_amount}`
            : '-'}
        </TableCell>
      ),
    },
    {
      header: __('Tax', 'multivendorx'),
      cell: ({ row }) => (
        <TableCell title={`${currencySymbol}${row.original.commission.tax_amount || ''}`}>
          {row.original.commission.tax_amount
            ? `${currencySymbol}${row.original.commission.tax_amount}`
            : '-'}
        </TableCell>
      ),
    },
    {
      header: __('Store Commission', 'multivendorx'),
      cell: ({ row }) => (
        <TableCell title={`${currencySymbol}${row.original.commission.commission_total || ''}`}>
          {row.original.commission.commission_total
            ? `${currencySymbol}${row.original.commission.commission_total}`
            : '-'}
        </TableCell>
      ),
    },
    {
      header: __('Admin Earnings', 'multivendorx'),
      cell: ({ row }) => {
        const adminEarnings =
          (Number(row.original.commission.total_order_amount || 0) -
            Number(row.original.commission.commission_total || 0)) || 0;

        return (
          <TableCell title={`${currencySymbol}${adminEarnings}`}>
            {`${currencySymbol}${adminEarnings}`}
          </TableCell>
        );
      },
    },
  ];



  return (
    <>
      <div className="row">
        <div className="column">
          <div className="card-header">
            <div className="left">
              <div className="title">
                Account Overview
              </div>
            </div>
            <div className="right">
              <span>Updated 1 month ago</span>
            </div>
          </div>
          <div className="card-body">
            <div className="analytics-container">
              {overview.map((item, idx) => (
                <div key={idx} className="analytics-item">
                  <div className="analytics-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="details">
                    <div className="number">{item.count}</div>
                    <div className="text">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card-header">
            <div className="left">
              <div className="title">
                Top revenue-generating stores
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="card-header">
            <div className="left">
              <div className="title">
                Account Overview
              </div>
            </div>
            <div className="right">
              <span>Updated 1 month ago</span>
            </div>
          </div>
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
            typeCounts={storeStatus as StoreStatus[]}
            totalCounts={totalRows}
            searchFilter={searchFilter}
            realtimeFilter={realtimeFilter}
          />
        </div>
      </div>
    </>
  );
};

export default Transactions;
