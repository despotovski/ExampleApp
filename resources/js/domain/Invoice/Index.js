import React, { useRef } from 'react'
import { DataTable, IconDelete, IconEyeVisibility, IconToolsEdit, LayoutAdmin } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { formatDate, Link, route } from '../../utils'
import { format } from 'date-fns'
const Index = () => {
  const { links } = usePage().props
  const tableRef = useRef()

  const columns = React.useMemo(
    () => [

      {
        id: 'invoice_number',
        Header: 'Број на фактура',
        accessor: 'invoice_number',
        name: 'invoice_number',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: false,
        search: { value: '', regex: 'true' }
      },
      {
        id: 'invoice_date',
        Header: 'Датум',
        accessor: 'invoice_date',
        name: 'invoice_date',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' },
        Cell: ({ value, row }) => {
          return format(formatDate(row.original.invoice_date), 'dd-MM-yyyy')
        }
      },
      {
        id: 'customer',
        Header: 'Корисник',
        accessor: 'customer.name',
        name: 'customer',
        orderable: false,
        disableSortBy: true,
        searchable: false,
        disableFilters: true,
        search: { value: '', regex: 'true' }
      },
      {
        id: 'date_of_pay',
        Header: 'Датум на доспевање',
        accessor: 'date_of_pay',
        name: 'date_of_pay',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' },
        Cell: ({ value, row }) => {
          return format(formatDate(row.original.date_of_pay), 'dd-MM-yyyy')
        }
      },
      {
        id: 'product',
        Header: 'Продукт',
        accessor: 'product.name',
        name: 'product',
        orderable: false,
        disableSortBy: true,
        searchable: false,
        disableFilters: true,
        search: { value: '', regex: 'true' }
      },
      {
        id: 'tax_percent',
        Header: 'Данок',
        accessor: 'tax_percent',
        name: 'tax_percent',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' },
        Cell: ({ value, row }) => {
          return row.original.tax_percent + ' ' + '%'
        }
      },
      {
        id: 'total',
        Header: 'За наплата',
        accessor: 'total',
        name: 'total',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' },
        Cell: ({ value, row }) => {
          return row.original.total + ' ' + ' €'
        }
      },
      {
        id: 'actions',
        accessor: 'actions',
        name: 'edit',
        orderable: false,
        disableSortBy: true,
        searchable: false,
        disableFilters: true,
        search: { value: '', regex: 'false' },
        Cell: ({ value, row }) => {
          return (
            <div className='flex'>
              <>
                <Link href={route(links.invoice.show, { invoice: row.original.id })}>
                  <IconEyeVisibility />
                </Link>
                <Link href={route(links.invoice.edit, { invoice: row.original.id })}>
                  <IconToolsEdit />
                </Link>
                {/*<button onClick={() => handleDeleteCustomer(row.original.id)}>*/}
                {/*  <IconDelete />*/}
                {/*</button>*/}
              </>
            </div>
          )
        }
      }
    ],
    []
  )

  return (
    <LayoutAdmin>

      <div className='container mt-xxl'>
        <div className='flex-space-between'>
          <h1 className='page-header mt-xxl'>Фактури</h1>
          <a href={links.invoice.create} type='button' className='btn btn-primary mh-xs'>
            Креирај Фактура
          </a>
        </div>
      </div>

      <div>
        <DataTable
          ref={tableRef}
          columns={columns}
          fetchUrl={links.invoice.get}
          initialState={{
            pageSize: 10,
            sortBy: [
              { id: 'invoice_number', desc: false }
            ]
          }}
        />
      </div>
    </LayoutAdmin>
  )
}

export default Index
