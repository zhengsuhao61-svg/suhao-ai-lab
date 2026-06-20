import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于我' },
  { to: '/projects', label: '项目展示' },
  { to: '/message', label: '留言板' },
  { to: '/admin/messages', label: '后台留言' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="site-title">
          <span className="site-logo">ZS</span>
          <span>郑苏昊的个人网站</span>
        </NavLink>

        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
