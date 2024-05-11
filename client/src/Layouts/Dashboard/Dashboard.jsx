import React, { useState } from 'react'
import axios from 'axios'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Card from '../../Components/Card/Card';
import './Dashboard.css'


const Dashboard = () => {

  const content = [{
    place: 'Mumbai',
    malls: 7,
    total: 210,
    active: 190,
    idle: 15,
    broken: 0,
    alert: 5,
    power: '4,000',
    status: 'Optional'
  },{
    place: 'Agra',
    malls: 1,
    total: 210,
    active: 160,
    idle: 15,
    broken: 0,
    alert: 20,
    power: '3,500',
    status: 'Critical'
  },{
    place: 'Ahmadabad',
    malls: 1,
    total: 890,
    active: 820,
    idle: 60,
    broken: 10,
    alert: 0,
    power: '4,000',
    status: 'Optional'
  },{
    place: 'Bareilly',
    malls: 7,
    total: 890,
    active: 820,
    idle: 60,
    broken: 10,
    alert: 0,
    power: '4,000',
    status: 'Optional'
  },{
    place: 'Bangalore',
    malls: 4,
    total: 210,
    active: 160,
    idle: 15,
    broken: 0,
    alert: 35,
    power: '3,500',
    status: 'Optional'
  },{
    place: 'Chennai',
    malls: 4,
    total: 210,
    active: 160,
    idle: 15,
    broken: 0,
    alert: 35,
    power: '3,500',
    status: 'Optional'
  },{
    place: 'Indore',
    malls: 1,
    total: 210,
    active: 160,
    idle: 15,
    broken: 0,
    alert: 35,
    power: '3,500',
    status: 'Critical'
  },{
    place: 'Kolkata',
    malls: 1,
    total: 890,
    active: 820,
    idle: 60,
    broken: 10,
    alert: 0,
    power: '4,000',
    status: 'Moderate'
  },{
    place: 'Lucknow',
    malls: 2,
    total: 890,
    active: 820,
    idle: 60,
    broken: 10,
    alert: 0,
    power: '4,000',
    status: 'Moderate'
  },{
    place: 'Pune',
    malls: 5,
    total: 890,
    active: 820,
    idle: 60,
    broken: 10,
    alert: 0,
    power: '4,000',
    status: 'Optional'
  }]

  return (
    <div className='dashboard-body'>
      <h6>Dashboard</h6>
      <div className='dashboard-path'><MdOutlineSpaceDashboard /> Dashboard</div>
      <div className='dashboard-filter'>
        Location
        <input type="checkbox"
          id="switch"
          className="checkbox" />
        <label htmlFor="switch"
          className="toggle">
        </label>
        Asset
      </div>
      <div className="dashboard-cards">
        {content.map((item) => {
          return(
            <Card content={item} />
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard