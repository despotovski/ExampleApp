import React, { useMemo } from 'react'
import { FormBuilder } from '../../components'
import { route } from '../../utils'
import { usePage } from '@inertiajs/inertia-react'

const Remove = ({ cancelCallback, successCallback, customerId }) => {
  const { links } = usePage().props
  const formData = useMemo(
    () => ({
      form: {
        url: route(links.customer.destroy, { customer: customerId }),
        method: 'delete'
      },
      fields: [],
      buttons: {
        submit: {
          text: 'Избриши'
        },
        additional: [
          {
            class: 'btn btn-primary-ghost',
            text: 'Откажи',
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
      <p>Дали сте сигурни дека сакате да го избришете овој купувач?</p>

      <FormBuilder
        useInertia={false}
        formData={formData}
        successCallback={successCallback}
      />
    </>
  )
}
export default Remove
