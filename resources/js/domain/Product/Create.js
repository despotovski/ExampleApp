import React from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft, LayoutAdmin } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '../../utils'
import { Inertia } from '@inertiajs/inertia'

const Create = () => {
  const { links } = usePage().props

  const formData = React.useMemo(
    () => ({
      form: {
        url: links.product.store,
        method: 'post'
      },
      fields: [
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
          name: 'price',
          label: 'Цена',
          placeholder: 'Цена',
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
        <h1 className='page-header mt-xxl'>Креирај продукт</h1>
        <div className='form-container'>

          <Link href={links.product.index} className='btn-back'>
            <IconChevronLeft />
            Назад кон листа на продукти
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
