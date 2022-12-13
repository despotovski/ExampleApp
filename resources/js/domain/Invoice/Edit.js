import React from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft, LayoutAdmin } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { Link, route } from '../../utils'

import { Inertia } from '@inertiajs/inertia'
import { addDays } from 'date-fns'

const Show = () => {
  const { links, invoice, options, quantity } = usePage().props

  const formData = React.useMemo(
    () => ({
      form: {
        url: route(links.invoice.update, { invoice: invoice.id }),
        method: 'post'
      },
      fields: [
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'invoice_number',
          label: 'Број на фактура',
          value: invoice.invoice_number,
          rules: 'required',
          isDisabled: true,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.DATEPICKER,
          type: 'text',
          name: 'invoice_date',
          label: 'Датум на фактура',
          value: new Date(invoice.invoice_date),
          placeholder: 'Датум на фактура',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.SELECT,
          type: 'text',
          name: 'type_of_pay',
          label: 'Начин на плаќање',
          placeholder: 'Начин на плаќање',
          options: options.typeOfPay,
          value: invoice.type_of_pay,
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          },
          visible: (values) => {
            return values.invoice_date
          },
          callback: (value, values, setFieldValue) => {
            setFieldValue('date_of_pay', addDays(values.invoice_date, value))
          }
        },
        {
          element: FORM_ELEMENT_TYPES.SELECT,
          type: 'text',
          name: 'customer',
          label: 'Купувач',
          value: invoice.customer_id,
          options: options.customers,
          placeholder: 'Купувач',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.DATEPICKER,
          type: 'text',
          name: 'date_of_pay',
          label: 'Датум на доспевање',
          value: new Date(invoice.date_of_pay),
          placeholder: 'Датум на доспевање',
          rules: 'required',
          isDisabled: true,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.SELECT,
          type: 'text',
          name: 'product',
          label: 'Продукт',
          value: invoice.product_id,
          options: options.products,
          placeholder: 'Продукт',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'number',
          name: 'quantity',
          label: 'Количина',
          value: quantity,
          placeholder: 'Количина',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'number',
          name: 'tax_percent',
          label: 'Данок',
          value: invoice.tax_percent,
          placeholder: 'Данок',
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
          label: 'За наплата (без пресметан данок)',
          value: invoice.total + ' ' + '€',
          placeholder: 'За наплата',
          rules: 'required',
          isDisabled: true,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        }
      ],
      buttons: {
        submit: {
          text: 'Save'
        },
        additional: [
          {
            class: 'btn btn-primary-ghost',
            text: 'Cancel',
            type: 'button',
            onClick: () => Inertia.visit(links.invoice.index)
          }
        ]
      }
    }),
    []
  )
  return (
    <LayoutAdmin>
      <div className='container mt-xxl'>
        <div className='flex-space-between'>
          <h1 className='page-header mt-xxl'>Измени Фактура број - {invoice.invoice_number}</h1>
        </div>

        <Link href={links.invoice.index} className='btn-back'>
          <IconChevronLeft />
          Назад кој ниста на фактури
        </Link>

        <FormBuilder
          formData={formData}
        />
      </div>

    </LayoutAdmin>
  )
}

export default Show
