import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageA from '../Pages/PageA'
import PageB from '../Pages/PageB'
import Home from '../Pages/Home'

export default function Content() {
  const [text, setText] = useState("first");
  
  return (
    <div className='Content'>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/page1" element={<PageA sendData={setText} />} />
              <Route path="/page2" element={<PageB />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}
