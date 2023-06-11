import React from 'react'

function PageA(props : any) {
  return (
    <div>
      PageA
      <br/>
      <button onClick={() => props.sendData("second")}>button</button>
    </div>
  )
}

export default PageA