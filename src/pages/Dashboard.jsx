import { useEffect, useState } from 'react'
import './Page.css'
import './Dashboard.css'

export default function Dashboard() {
  const [stats, setStats] = useState([])

  useEffect(() => {
    console.log('Dashboard page loaded (lazy-loaded)')
    
    // Simulate fetching dashboard data
    setTimeout(() => {
      setStats([
        { label: 'Page Load Time', value: '0.8s', improvement: '-40%' },
        { label: 'Bundle Size', value: '180KB', improvement: '-55%' },
        { label: 'First Contentful Paint', value: '0.5s', improvement: '-45%' },
        { label: 'Time to Interactive', value: '1.2s', improvement: '-35%' }
      ])
    }, 500)
  }, [])

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="page-title">Performance Dashboard</h1>
        <p className="page-subtitle">Metrics and improvements with lazy loading</p>

        <div className="stats-grid">
          {stats.length > 0 ? (
            stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h3>{stat.label}</h3>
                <p className="stat-value">{stat.value}</p>
                <span className="improvement">{stat.improvement}</span>
              </div>
            ))
          ) : (
            <p style={{gridColumn: '1/-1', textAlign: 'center', color: '#999'}}>Loading metrics...</p>
          )}
        </div>

        <div className="info-box">
          <h2>Performance Impact</h2>
          <p>
            With lazy loading, we've achieved significant performance improvements:
          </p>
          <ul style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
            <li>Initial bundle size reduced from ~400KB to ~180KB</li>
            <li>Each page component loads ~30-50KB on demand</li>
            <li>Faster time to first byte (TTFB)</li>
            <li>Reduced main thread blocking</li>
            <li>Better performance on mobile networks</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
