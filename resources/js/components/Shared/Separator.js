import React from 'react'

const Separator = ({ height, type, children }) => {
  return (
    <div style={{ height: height ?? '1px' }} className={`separator ${type ?? 'separator__primary'}`}>{children}</div>
  )
}

export default Separator
