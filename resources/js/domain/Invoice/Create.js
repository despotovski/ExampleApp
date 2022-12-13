import React from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft, LayoutAdmin } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '../../utils'
import { addDays } from 'date-fns'

const Create = () => {
  const { links, options } = usePage().props

  const formData = React.useMemo(
    () => ({
      form: {
        url: links.invoice.store,
        method: 'post'
      },
      fields: [
        {
          element: FORM_ELEMENT_TYPES.DATEPICKER,
          type: 'text',
          name: 'invoice_date',
          label: 'Датум',
          placeholder: 'Датум',
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
          placeholder: 'Купувач',
          options: options.customers,
          rules: 'required',
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
          placeholder: 'Продукт',
          options: options.products,
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
          label: 'Данок %',
          placeholder: 'Данок %',
          min: '1',
          step: '1',
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
          placeholder: 'Количина',
          min: '1',
          step: '1',
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
          placeholder: 'Датум на доспевање',
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
            type: 'button'
            // onClick: () => Inertia.visit(links.customer.index)
          }
        ]
      }
    }),
    []
  )
  return (
    <LayoutAdmin>

      <div className='container'>
        <h1 className='page-header mt-xxl'>Креирај фактура</h1>
        <div className='form-container'>

          <Link href={links.invoice.index} className='btn-back'>
            <IconChevronLeft />
            Назад кој ниста на фактури
          </Link>

          <FormBuilder
            formData={formData}
          />
        </div>
      </div>

    </LayoutAdmin>
  )
}

export default Create
