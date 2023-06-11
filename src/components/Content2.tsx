import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import PageA from '../Pages/PageA'
import PageB from '../Pages/PageB'
import Home from '../Pages/Home'

export default function Content2() {
  const isAuth = true;
  // const routes = isAuth ? protectedRoutes : publicRoutes;
  const routes = isAuth ? <AppRouter /> : <AppRouter2 />;

  return (
    <div className='Content'>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  )
}

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/Home',
      element: <Home />,
    },
    {
      path: 'page1',
      element: <PageA />,
    },
    {
      path: 'page2',
      element: <PageB />,
    },
    {
      path: '*',
      element: <>Not Found</>,
    },
  ])
  return <>{routes}</>
}

const AppRouter2 = () => {
  const routes = useRoutes([
    {
      path: '*',
      element: <>Not Found</>,
    },
  ])
  return <>{routes}</>
}

const AppRouter3 = () => {
  // const routes = useRoutes(protectedRoutes)
  return useRoutes(protectedRoutes)
}

const protectedRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: 'page1',
    element: <PageA />,
  },
  {
    path: 'page2',
    element: <PageB />,
  },
  {
    path: '*',
    element: <>Not Found</>,
  },
];

const publicRoutes = [
  {
    path: '*',
    element: <>Not Found</>,
  },
]