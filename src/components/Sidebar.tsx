import React from 'react'
import { SidebarData } from './SidebarData'
import SidebarIcon from './SidebarIcon'

const Headings = () => {
    const list = SidebarData.map((value, index)=>
      <li key={index}>{value.title}</li>)
    return list
}
  
function Sidebar() {
  return (
      <div className='Sidebar'>
          <SidebarIcon />
          <ul className='SidebarList'>
              {
                  SidebarData.map((value, index) => (
                      <li key={index} id={ window.location.pathname === value.link ? "active" : "" } className='row' onClick={() => {
                          window.location.pathname = value.link
                      }}>
                        <div id="icon">{value.icon}</div>
                        <div id="title">{value.title}</div>
                      </li>
                )
            )}
          </ul>
      </div>
  )
}

export default Sidebar