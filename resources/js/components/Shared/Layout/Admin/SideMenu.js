import React, { useState } from 'react'
import {
  IconUsers,
  IconMenu,
  IconClose,
  IconLogout,
  IconDollar
} from '../../../../components/Icons'
import { usePage } from '@inertiajs/inertia-react'
import IconList from '../../../Icons/IconList'

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { links, url } = usePage().props

  return (
    <aside onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className={`aside-menu ${isOpen ? 'is-open' : ''}`} id='side-nav'>
      <div>
        <nav className='aside-menu__nav'>
          <button onClick={() => setIsOpen(!isOpen)} className='aside-menu__burger'>
            {isOpen ? <IconClose className='text-19 text-white stroke-current' /> : <IconMenu className='text-19' />}
          </button>
        </nav>

        <nav className='aside-menu-navigation__main'>
          <ul className='aside-menu-navigation__list'>

            <li className='aside-menu-navigation__list-item'>
              <a href={links.customer.index} className={`aside-menu-navigation__anchor ${url.current_uri === links.customer.index ? 'active' : ''}`}>
                <IconUsers className='text-22' />
                <span className='aside-menu-navigation__text'>Купувачи</span>
              </a>
            </li>

            <li className='aside-menu-navigation__list-item'>
              <a href={links.product.index} className={`aside-menu-navigation__anchor ${url.current_uri === links.product.index ? 'active' : ''}`}>
                <IconList className='text-22' />
                <span className='aside-menu-navigation__text'>Продукти</span>
              </a>
            </li>

            <li className='aside-menu-navigation__list-item'>
              <a href={links.invoice.index} className={`aside-menu-navigation__anchor ${url.current_uri === links.product.index ? 'active' : ''}`}>
                <IconDollar className='text-22' />
                <span className='aside-menu-navigation__text'>Фактури</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className='aside-menu-link'>
        <a href='/' className='logout-btn'><IconLogout className='text-22' /></a>
      </nav>
    </aside>
  )
}

export default SideMenu
