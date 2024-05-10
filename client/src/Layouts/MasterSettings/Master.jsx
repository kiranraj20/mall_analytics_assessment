import React, { useState } from 'react'
import './Master.css'

import { FaUser } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbSettingsCode } from "react-icons/tb";
import { MdBeachAccess } from "react-icons/md";
import { TbStackFilled } from "react-icons/tb";
import { MdOutlineCreditCard } from "react-icons/md";
import MasterComponents from './MasterComponents';



const Master = () => {

  const [masterComponentsValue, setMasterComponentsValue] = useState('machines')
  const handleMenu = (value) => {
    const menu = document.querySelectorAll('.master-menu div');
    menu.forEach((item) => {
      if (item.id === value) {
        setMasterComponentsValue(value)
        item.classList.add('menu-clicked')
      }else {
        item.classList.remove('menu-clicked')
      }
    })
  }

  return (
    <div className='master-bar'>
      <div className="master-profile">
        <div className="master-profile-icon"><FaUser className='icon fs-6' /></div>
        <div className="master-profile-text">Admin Panel</div>
        <div className="master-bell-icon"><BsFillBellFill className='icon' /></div>
      </div>
      <div className="master-settings">
        <h5>Settings</h5>
        <p className='settings-path'><MdOutlineSpaceDashboard /> Dashboard / <TbSettingsCode /> Master Settings</p>
      </div>
      <div className="master-menu">
        <div className="threshold" id='threshold' onClick={() => {handleMenu('threshold')}}>
          <MdBeachAccess className='icon' /> 
          <p className='threshold-text'>THRESHOLD VALUES</p>
        </div>
        <div className="machines menu-clicked" id='machines' onClick={() => {handleMenu('machines')}}>
          <TbStackFilled className='icon' /> 
          <p className="machines-text">ADD MACHINES</p>
        </div>
        <div className="billing" id='billing' onClick={() => {handleMenu('billing')}}>
          <MdOutlineCreditCard className='icon' /> 
          <p className="billing-text">BILLING</p>
        </div>
      </div>
      <div className="">
        <MasterComponents value={masterComponentsValue} />
      </div>
    </div>
  )
}

export default Master