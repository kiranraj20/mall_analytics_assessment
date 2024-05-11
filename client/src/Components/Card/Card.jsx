import React from 'react'
import './Card.css'
import { IoMdStar } from "react-icons/io";
import { GiIndianPalace } from "react-icons/gi";



const Card = ({content}) => {

  return (
    <div className='dashboard-card'>
      <div className="card-head">
        <div className="card-text">{content.place} - {content.malls} Malls</div>
        <div className="star"><IoMdStar /></div>
      </div>
      <div className="card-body">
        <div className="card-logo"><GiIndianPalace className='card-icon' /></div>
        <div className="card-details">
          <div className="des">Machines Active: {content.active}/{content.total}</div>
          <div className="des">Machines Idle: {content.idle}</div>
          <div className="des text-danger">{content.broken? `Not Working: ${content.broken}`: `Alert: ${content.alert}`}</div>
          <div className="des text-danger">Power Con : {content.power}kW</div>
        </div>
      </div>
      <div className="card-menu">
        <div className="card-overview">DETAILED OVERVIEW</div>
        <div className="card-report">DOWNLOAD REPORT</div>
      </div>
      <div className={`card-status ${content.status}`}>
        <div className={`circle ${content.status === "Critical"? `white`:`red`}`}></div>
        <div className="status">{content.status} Condition</div>
      </div>
    </div>
  )
}

export default Card