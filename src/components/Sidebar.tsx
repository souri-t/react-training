import React from 'react'
import { SidebarData } from './SidebarData'
import SidebarIcon from './SidebarIcon'
import { styled } from 'styled-components'
// import './Sidebar.module.css';


const Headings = () => {
    const list = SidebarData.map((value, index)=>
      <li key={index}>{value.title}</li>)
    return list
}

const SidebarStyle = styled.div`
  height:100%;
  width:250px;
  background-color: #2d445d;
  ul{
    width: 100%;
    height: auto;
    padding: 0;
  }
`;

const SidebarList = styled.div`
  width: 100%;
  height: auto;
  padding: 0;

  #active {
    width: 100%;
    background-color: #3b627a;
  }

  .row {
    width: 100%;
    height: 60px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: #3b627a;
    }
    #icon {
      flex: 30%;
      display: grid;
      place-items: center;
    }

    #title {
      flex: 70%;
    }
  }
`;


function Sidebar() {
  return (
      <SidebarStyle>
          <SidebarIcon />
          <SidebarList>
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
          </SidebarList>
      </SidebarStyle>
  )
}

export default Sidebar