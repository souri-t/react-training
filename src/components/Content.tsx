import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageA from '../Pages/public/PageA'
import PageB from '../Pages/public/PageB'
import Home from '../Pages/public/Home'
import PrivateHome from '../Pages/Private/PrivateHome'
import { TestProvider } from '../Pages/providers/TestProvider'
import { Provider } from 'react-redux'
import { store, useSelector } from './redux/store'
import TestPage from '../Pages/public/TestPage'
// import { styled } from '@mui/material'
import styled from "styled-components";

const ContentStyle = styled.div`
  flex: 1
`;
// const ContentStyle2 = styled('div')({
//   flex: 1,
// });

export default function Content() {
  // const isAuth = false;
  // const [isAuth, setIsAuth] = useState(false);
  // const user = cognito.getCurrentUser()
  const count = useSelector((state) => state.counter.count);
  // const [routes, setRoutes] = useState();

  const routes = (count > 0) ? <ProtectedRouter /> : <PublicRouter/>;

  return (
    <ContentStyle>
      <h1>Count: {count}</h1>
      <BrowserRouter>
        { routes }
      </BrowserRouter>
    </ContentStyle>
  )
}

function ProtectedRouter() {
  return (
    <TestProvider>
      <Routes>
        <Route path="/" element={<PrivateHome />} />
        <Route path="/home" element={<PrivateHome />} />
        <Route path="/page1" element={<PageA />} />
      </Routes>
    </TestProvider>
  )
}

function PublicRouter() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page2" element={<PageB />} />
      </Routes>
  )
}