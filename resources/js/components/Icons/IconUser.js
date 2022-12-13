import React from 'react'

const IconUser = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'>
      <path d='M12.6,13.4c2.3,0,4.2,1.9,4.2,4.2v1.7h-1.7v-1.7c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5v1.7H3.4v-1.7
        c0-2.3,1.9-4.2,4.2-4.2H12.6z M10.1,1.7c2.8,0,5,2.2,5,5s-2.2,5-5,5c-1.8,0-3.4-1-4.3-2.5s-0.9-3.5,0-5S8.3,1.7,10.1,1.7z M10.1,3.4
        c-1.8,0-3.3,1.5-3.3,3.3S8.2,10,10.1,10s3.3-1.5,3.3-3.3S11.9,3.4,10.1,3.4z'
      />
    </svg>
  )
}
export default IconUser
