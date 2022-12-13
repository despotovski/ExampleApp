import React, { useRef } from 'react'
import { DataTable, IconDelete, IconEyeVisibility, IconToolsEdit, LayoutAdmin, ReactModal } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { Link, route } from '../../utils'
import Remove from './Remove'
import { useToasts } from 'react-toast-notifications'

const Index = () => {
  const { links } = usePage().props
  const tableRef = useRef()
  const modalRef = useRef()
  const { addToast } = useToasts()

  const columns = React.useMemo(
    () => [

      {
        id: 'name',
        Header: 'Име',
        accessor: 'name',
        name: 'name',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' }
      },
      {
        id: 'address',
        Header: 'Адреса',
        accessor: 'address',
        name: 'address',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' }
      },
      {
        id: 'postcode',
        Header: 'Поштенски број',
        accessor: 'postcode',
        name: 'postcode',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' }
      },
      {
        id: 'city',
        Header: 'Град',
        accessor: 'city',
        name: 'city',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' }
      },
      {
        id: 'phone',
        Header: 'Телефонски број',
        accessor: 'phone',
        name: 'phone',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' }
      },
      {
        id: 'email',
        Header: 'E-mail',
        accessor: 'email',
        name: 'email',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' }
      },
      {
        id: 'country_id',
        Header: 'Држава',
        accessor: 'country.title',
        name: 'country_id',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' }
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
                <Link href={route(links.customer.show, { customer: row.original.id })}>
                  <IconEyeVisibility />
                </Link>
                <Link href={route(links.customer.edit, { customer: row.original.id })}>
                  <IconToolsEdit />
                </Link>
                <button onClick={() => handleDeleteCustomer(row.original.id)}>
                  <IconDelete />
                </button>
              </>
            </div>
          )
        }
      }
    ],
    []
  )

  const handleDeleteCustomer = (customerId) => {
    const title = 'Избриши купувач'
    const body = (
      <Remove
        customerId={customerId}
        cancelCallback={handleDeleteCustomerCancelCallback}
        successCallback={handleDeleteCustomerSuccessCallback}
      />
    )
    modalRef.current.setContent(title, body)
  }

  const handleDeleteCustomerCancelCallback = () => {
    modalRef.current.close()
  }

  const handleDeleteCustomerSuccessCallback = (res) => {
    addToast(res.data.message, res.data.appearance ? { appearance: res.data.appearance } : { appearance: 'success' })
    modalRef.current.close()
    tableRef.current.reload()
  }

  return (
    <LayoutAdmin>

      <div className='container mt-xxl'>
        <div className='flex-space-between'>
          <h1 className='page-header mt-xxl'>Купувачи</h1>
          <a href={links.customer.create} type='button' className='btn btn-primary mh-xs'>
            Create Customer
          </a>
        </div>
      </div>

      <div>
        <DataTable
          ref={tableRef}
          columns={columns}
          fetchUrl={links.customer.get}
          initialState={{
            pageSize: 10,
            sortBy: [
              //
            ]
          }}
        />
      </div>
      <ReactModal ref={modalRef} className='ReactModal__Content--Medium' />
    </LayoutAdmin>
  )
}

export default Index
