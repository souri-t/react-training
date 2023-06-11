import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import PageA from '../Pages/public/PageA'
import PageB from '../Pages/public/PageB'
import Home from '../Pages/public/Home'

export default function RouteComponent() {
    const location = useLocation();
    const [text, setText] = useState("first");
    return (
        <>
            {text}
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/page1" element={<PageA sendData={setText} />} />
                <Route path="/page2" element={<PageB />} />
            </Routes>
        </>
    )
}

