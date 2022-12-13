import React, { useMemo } from 'react'
import { FormBuilder } from '../../components'
import { route } from '../../utils'
import { usePage } from '@inertiajs/inertia-react'

const Remove = ({ cancelCallback, successCallback, productId }) => {
  const { links } = usePage().props
  const formData = useMemo(
    () => ({
      form: {
        url: route(links.product.destroy, { product: productId }),
        method: 'delete'
      },
      fields: [],
      buttons: {
        submit: {
          text: 'Confirm'
        },
        additional: [
          {
            class: 'btn btn-primary-ghost',
            text: 'Cancel',
            type: 'button',
            onClick: () => {
              cancelCallback()
            }
          }
        ]
      }
    }),
    []
  )
  return (
    <>
      <p>Are you sure that you want to delete this product?</p>

      <FormBuilder
        useInertia={false}
        formData={formData}
        successCallback={successCallback}
      />
    </>
  )
}
export default Remove
