import React, { useRef } from 'react'
import { DataTable, IconDelete, IconEyeVisibility, IconToolsEdit, LayoutAdmin, ReactModal } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { Link, route } from '../../utils'
import { useToasts } from 'react-toast-notifications'
import Remove from './Remove'

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
        id: 'price',
        Header: 'Цена',
        accessor: 'price',
        name: 'price',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: true,
        search: { value: '', regex: 'true' },
        Cell: ({ value, row }) => {
          return row.original.price + ' ' + '€'
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
                <Link href={route(links.product.show, { product: row.original.id })}>
                  <IconEyeVisibility />
                </Link>
                <Link href={route(links.product.edit, { product: row.original.id })}>
                  <IconToolsEdit />
                </Link>
                <button onClick={() => handleDeleteProduct(row.original.id)}>
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

  const handleDeleteProduct = (productId) => {
    const title = 'DELETE Product'
    const body = (
      <Remove
        productId={productId}
        cancelCallback={handleDeleteProductCancelCallback}
        successCallback={handleDeleteProductSuccessCallback}
      />
    )
    modalRef.current.setContent(title, body)
  }

  const handleDeleteProductCancelCallback = () => {
    modalRef.current.close()
  }

  const handleDeleteProductSuccessCallback = (res) => {
    addToast(res.data.message, res.data.appearance ? { appearance: res.data.appearance } : { appearance: 'success' })
    modalRef.current.close()
    tableRef.current.reload()
  }

  return (
    <LayoutAdmin>

      <div className='container mt-xxl'>
        <div className='flex-space-between'>
          <h1 className='page-header mt-xxl'>Продукти</h1>
          <a href={links.product.create} type='button' className='btn btn-primary mh-xs'>
            Create Product
          </a>
        </div>
      </div>

      <div>
        <DataTable
          ref={tableRef}
          columns={columns}
          fetchUrl={links.product.get}
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
