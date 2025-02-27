import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />,
    },
    {
      path: '/echolounge',
      element: <LocationEvents index={'echolounge'} />,
    },
    {
      path: '/houseofblues',
      element: <LocationEvents index={'houseofblues'} />,
    },
    {
      path: '/pavilion',
      element: <LocationEvents index={'pavilion'} />,
    },
    {
      path: '/americanairlines',
      element: <LocationEvents index={'americanairlines'} />,
    },
    {
      path: '/events',
      element: <Events />,
    },
  ])

  return (
    <div className="app">
      <header className="main-header">
        <h1>UnityGrid Plaza</h1>

        <div className="header-buttons">
          <Link to="/" role="button">
            Home
          </Link>
          <Link to="/events" role="button">
            Events
          </Link>
        </div>
      </header>

      <main>{element}</main>
    </div>
  )
}

export default App
