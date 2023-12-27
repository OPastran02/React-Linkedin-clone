import { Avatar } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* TOP */}
      <div className='sidebar__top'>
        <img src='' alt='' />
        <Avatar className='sidebar__avatar'/>
        <h2>Oscar Marcelo Pastran</h2>
        <h4>ompastran@gmail.com</h4>
      </div>
      {/* STATS */}
      <div className='sidebar__stats'>
        <div className='sidebar_stat'>
            <p>Who viewed you</p> 
            <p className='sidebar_statNumber'>2.543</p>
        </div>
        <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar_statNumber'>843</p>       
        </div>          
      </div>
      {/* BOTTOM */}
      <div className='sidebar__bottom'>
        <p>Who viewed you</p>         
      </div>
    </div>
  )
}

export default Sidebar
