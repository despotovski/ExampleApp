import React from 'react'
import ToastMessages from '../../ToastMessages'
import { usePage } from '@inertiajs/inertia-react'

const LayoutAuthTest = ({ children }) => {
s
  return (
    <div id='main-layout' className='auth-page'>
      <div className='container auth-container' id='main-container'>
        {children}
      </div>

      <ToastMessages />
    </div>
  )
}

export default LayoutAuthTest
