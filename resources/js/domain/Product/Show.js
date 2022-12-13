import React from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft, LayoutAdmin } from '../../components'
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '../../utils'

const Show = () => {
  const { links, product } = usePage().props

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
          name: 'name',
          label: 'Име',
          value: product.name,
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
          value: product.price + ' ' + '€',
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

      <div className='container'>
        <h1 className='page-header mt-xxl'>Продукт - {product.name}</h1>
        <div className='form-container'>

          <Link href={links.product.index} className='btn-back'>
            <IconChevronLeft />
            Назад кон листа на продукти
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
