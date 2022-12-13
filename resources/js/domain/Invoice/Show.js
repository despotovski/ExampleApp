import React from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft, LayoutAdmin } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { formatDate, Link, route } from '../../utils'
import { format } from 'date-fns'

const Show = () => {
  const { links, invoice } = usePage().props

  const formData = React.useMemo(
    () => ({
      form: {
        url: '',
        method: 'post'
      },
      fields: [
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'number',
          label: 'Број на фактура',
          value: invoice.invoice_number,
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'date',
          label: 'Датум на фактура',
          value: format(formatDate(invoice.invoice_date), 'dd-MM-yyyy'),
          placeholder: 'Price',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'customer',
          label: 'Купувач',
          value: invoice.customer.name,
          placeholder: 'Price',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'date_of_pay',
          label: 'Датум на доспевање',
          value: format(formatDate(invoice.date_of_pay), 'dd-MM-yyyy'),
          placeholder: 'Price',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'product',
          label: 'Продукт',
          value: invoice.product.name,
          placeholder: 'Price',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'tax',
          label: 'Данок',
          value: invoice.tax_percent + ' ' + '%',
          placeholder: 'Price',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'total',
          label: 'За наплата',
          value: invoice.total + ' ' + '€',
          placeholder: 'Price',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        }
      ]
    }),
    []
  )
  return (
    <LayoutAdmin>
      <div className='container mt-xxl'>
        <div className='flex-space-between'>
          <h1 className='page-header mt-xxl'>Фактура број - {invoice.invoice_number}</h1>
          <a href={route(links.invoice.print, { invoice: invoice.id })} type='button' className='btn btn-primary mh-xs'>
            Принтај фактура
          </a>
        </div>

        <Link href={links.invoice.index} className='btn-back'>
          <IconChevronLeft />
          Назад кој ниста на фактури
        </Link>

        <FormBuilder
          formData={formData}
          showOnly
        />
      </div>

    </LayoutAdmin>
  )
}

export default Show
