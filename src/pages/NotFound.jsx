import { Link } from 'react-router-dom'
import './Page.css'

export default function NotFound() {
  return (
    <div className="page-container">
      <div className="hero-section" style={{textAlign: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h1 className="page-title" style={{fontSize: '4rem', color: '#667eea'}}>404</h1>
        <p className="page-subtitle" style={{fontSize: '1.3rem', marginBottom: '2rem'}}>Page not found</p>
        
        <p style={{color: '#666', marginBottom: '2rem'}}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          style={{
            display: 'inline-block',
            backgroundColor: '#667eea',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            textDecoration: 'none',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#764ba2'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#667eea'}
        >
          Go back to Home
        </Link>
      </div>
    </div>
  )
}
