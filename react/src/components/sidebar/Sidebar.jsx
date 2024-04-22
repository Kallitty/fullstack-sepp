import React from 'react'
import './sidebar.scss'
import {
  BiBookAlt,
  BiHome,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiFolder,
  BiTask,
  BiLogOut,
} from 'react-icons/bi'
import { DiAptana } from 'react-icons/di'

const Sidebar = () => {
  return (
    <div className='sepp__sidebar-grand'>
      <div className='sepp__sidebar-left__menu'>
        <div className='sepp__sidebar-left-menu--logo'>
          <BiBookAlt className='sepp__sidebar-left__logo-icon' />
          <h3>My SEPP</h3>
        </div>

        <div className='sepp__sidebar-left-menu--list'>
          <a href='#' className='sepp__sidebar-left__items'>
            <BiHome className='sepp__sidebar-left__icon' />
            Dashboard
          </a>
          <a href='#' className='sepp__sidebar-left__items'>
            <BiSolidReport className='sepp__sidebar-left__icon' />
            Results
          </a>
          <a href='#' className='sepp__sidebar-left__items'>
            <BiFolder className='sepp__sidebar-left__icon' />
            Report card
          </a>
          <a href='#' className='sepp__sidebar-left__items'>
            <BiStats className='sepp__sidebar-left__icon' />
            Stats
          </a>
          <a href='#' className='sepp__sidebar-left__items'>
            <BiMessage className='sepp__sidebar-left__icon' />
            Message
          </a>
          <a href='#' className='sepp__sidebar-left__items'>
            <BiTask className='sepp__sidebar-left__icon' />
            Help
          </a>
          <a href='#' className='sepp__sidebar-left__items'>
            <DiAptana className='sepp__sidebar-left__icon' />
            Settings
          </a>
        </div>
      </div>
      <a href='#' className='sepp__sidebar-left__logout'>
        <BiLogOut className='sepp__sidebar-left__logouticon' />
        Logout
      </a>
    </div>
  )
}

export default Sidebar
