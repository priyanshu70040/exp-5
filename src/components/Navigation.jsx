import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/profile', label: 'Profile' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ⚡ LazyLoad SPA
        </Link>
        <ul className="nav-menu">
          {links.map(link => (
            <li key={link.path} className="nav-item">
              <Link to={link.path} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
