import React from 'react'
import Icon from '../images/icon.png'
import { styled } from 'styled-components'


const SidebarIconStyle = styled.div`
  padding-top: 20%;
  padding-bottom: 15px;
  text-align: center;
  p{
    color: white;
    font-weight: 600;
    font-size: 13px;
  },
  img{
    width: 100px;
  }
`;


function SidebarIcon() {
  return (
    <SidebarIconStyle>
        <img src={Icon} /> 
        <p>hogehoge</p>     
    </SidebarIconStyle>
  )
}

export default SidebarIcon