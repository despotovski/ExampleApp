import React from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft, LayoutAdmin } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { Link, route } from '../../utils'
import { Inertia } from '@inertiajs/inertia'

const Edit = () => {
  const { links, options, customer } = usePage().props
  const formData = React.useMemo(
    () => ({
      form: {
        url: route(links.customer.update, { customer: customer.id }),
        method: 'post'
      },
      fields: [
        {
          element: FORM_ELEMENT_TYPES.SELECT,
          type: 'text',
          name: 'country_id',
          label: 'Држава',
          placeholder: 'Држава',
          rules: 'required',
          value: customer.country_id,
          options: options.countries,
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
          placeholder: 'Име',
          rules: 'required',
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
          placeholder: 'Поштенски број',
          rules: 'required',
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
          placeholder: 'Град',
          rules: 'required',
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
          placeholder: 'Општина',
          rules: 'required',
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
          label: 'Телефонски Број',
          placeholder: 'Телефонски Број',
          rules: 'required',
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
          placeholder: 'Адреса',
          rules: 'required',
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
          placeholder: 'E-mail',
          rules: 'required',
          value: customer.email,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        }
      ],
      buttons: {
        submit: {
          text: 'Измени'
        },
        additional: [
          {
            class: 'btn btn-primary-ghost',
            text: 'Откажи',
            type: 'button',
            onClick: () => Inertia.visit(links.customer.index)
          }
        ]
      }
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
          />

        </div>
      </div>

    </LayoutAdmin>
  )
}

export default Edit
