import React, { useState } from 'react'
import './Sidebar.css'
import Body from '../Body/Body';

import { IoMdClose } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsTextLeft } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { TbSettingsCode } from "react-icons/tb";
import { MdLogout } from "react-icons/md";



const Sidebar = () => {

  const [bodyElement, setBodyElement] = useState('Dashboard')

  const handleDashboard = ( value ) => {
    const elements = document.querySelectorAll(".access-bar div");
    elements.forEach(element => {
      if (element.id === value) {
        setBodyElement(value);
        element.classList.add('option-clicked');
      }else{
        element.classList.remove('option-clicked');
      }
    });
  }

  return (
    <div  className='d-flex'>
      <div className='sidebar'>
        <div className="logo">Logo</div>
        <div className="access-bar">
          <p className="access-bar-text">Access Bar <IoMdClose className='icon' /></p>
          <div className="dashboard option-clicked" id="dashboard" onClick={() => {handleDashboard('dashboard')}}>
            <MdOutlineSpaceDashboard className='icon'/>
            <p className="dashboard-text">Dashboard</p>
          </div>
          <div className="analytics" id="analytics" onClick={() => {handleDashboard('analytics')}}>
            <BsTextLeft className='icon'/>
            <p className="analytics-text">Analytics</p>
          </div>
          <div className="asset" id="asset"onClick={() => {handleDashboard('asset')}}>
            <IoMdCloseCircleOutline className='icon'/>
            <p className="asset-text">Asset Not Working</p>
          </div>
          <div className="user" id="user" onClick={() => {handleDashboard('user')}}>
            <FaRegUserCircle className='icon'/>
            <p className="user-text">User Settings</p>
          </div>
          <div className="master" id="master" onClick={() => {handleDashboard('master')}}>
            <TbSettingsCode className='icon'/>
            <p className="master-text">Master Settings</p>
          </div>
          <div className="logout" id="logout" onClick={() => {handleDashboard('logout')}}>
            <MdLogout className='icon'/>
            <p  className="logout-text">Logout</p>
          </div>
        </div>
      </div>
      <div className="body">
        <Body value={bodyElement} />
      </div>
    </div>
  )
}

export default Sidebar