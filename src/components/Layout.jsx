import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

export default function Layout() {
  return (
    <div className="app">
      <Navbar />

      <main className="page-container">
        <Outlet />
      </main>
    </div>
  )
}
