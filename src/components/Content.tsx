import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageA from '../Pages/public/PageA'
import PageB from '../Pages/public/PageB'
import Home from '../Pages/public/Home'
import PrivateHome from '../Pages/Private/PrivateHome'

export default function Content() {
  const [text, setText] = useState("first");
  const isAuth = true;
  const routes = isAuth ? <ProtectedRouter /> : <PublicRouter/>;

  return (
    <div className='Content'>
        <BrowserRouter>
          { routes }
        </BrowserRouter>
    </div>
  )
}

function ProtectedRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/page1" element={<PageA />} />
      <Route path="/page2" element={<PageB />} />
    </Routes>
  )
}

function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<PrivateHome />} />
      <Route path="/home" element={<PrivateHome />} />
    </Routes>
  )
}