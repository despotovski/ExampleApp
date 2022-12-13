import React from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft, LayoutAdmin } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '../../utils'

const Show = () => {
  const { links, customer } = usePage().props

  const formData = React.useMemo(
    () => ({
      form: {
        url: links.customer.store,
        method: 'post'
      },
      fields: [
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'country_id',
          label: 'Држава',
          value: customer.country.title,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'name',
          label: 'Име',
          value: customer.name,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'postcode',
          label: 'Поштенски број',
          value: customer.postcode,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'city',
          label: 'Град',
          value: customer.city,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'state',
          label: 'Општина',
          value: customer.state,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'phone',
          label: 'Телефонски број',
          value: customer.phone,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'address',
          label: 'Адреса',
          value: customer.address,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'email',
          label: 'E-mail',
          value: customer.email,
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

      <div className='container'>
        <h1 className='page-header mt-xxl'>Customer - {customer.name}</h1>
        <div className='form-container'>

          <Link href={links.customer.index} className='btn-back'>
            <IconChevronLeft />
            Назад кон листа на купувачи
          </Link>

          <FormBuilder
            formData={formData}
            showOnly
          />

        </div>
      </div>

    </LayoutAdmin>
  )
}

export default Show
