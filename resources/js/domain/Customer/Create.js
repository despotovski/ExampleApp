import React from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft, LayoutAdmin } from '../../components'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '../../utils'
import { Inertia } from '@inertiajs/inertia'

const Create = () => {
  const { links, options } = usePage().props

  const formData = React.useMemo(
    () => ({
      form: {
        url: links.customer.store,
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
          placeholder: 'Телефонски број',
          rules: 'required',
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
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        }
      ],
      buttons: {
        submit: {
          text: 'Сочувај'
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
        <h1 className='page-header mt-xxl'>Креирај купувач</h1>
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

export default Create
