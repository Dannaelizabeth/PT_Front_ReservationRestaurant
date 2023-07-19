import React from 'react';
import { createBrowserRouter, Outlet, Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LandingPage from './view/LandingPage';
import './App.scss';
import Login from './view/Login';
import Dashboard from './view/Dashboard';
import Reservation from './view/Reservation.jsx'
import ReservationAdd from './components/ReservationAdd/ReservationAdd';

function App() {
  const Layout = ()=>{
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter ([
    {
      path:"/",
      element:<Layout />,
      children: [
        {
          path:"/",
          element: <LandingPage />
        }
      ]
    },
    {
      path:"/dashboard",
      element: <Dashboard />
    }, {
      path:'/login',
      element:<Login/>
    },{
      path:"/reservation",
      element: <Reservation />
    },{
      path:"/reservation/add/:userId",
      element: <ReservationAdd />
    }

  ])

  return <RouterProvider router={router} />
}

export default App;
