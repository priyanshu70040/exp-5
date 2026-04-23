import { useEffect } from 'react'
import './Page.css'

export default function Profile() {
  useEffect(() => {
    console.log('Profile page loaded (lazy-loaded)')
  }, [])

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="page-title">User Profile</h1>
        <p className="page-subtitle">View your optimization details</p>

        <div className="info-box">
          <h2>Profile Information</h2>
          <p>
            <strong>Name:</strong> Performance Optimizer<br />
            <strong>Status:</strong> Active<br />
            <strong>Optimization Level:</strong> Advanced<br />
            <strong>Member Since:</strong> 2024
          </p>
        </div>

        <div className="info-box">
          <h2>Your Achievements</h2>
          <ul style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
            <li>✅ Implemented Lazy Loading</li>
            <li>✅ Optimized Bundle Size</li>
            <li>✅ Improved Time to Interactive</li>
            <li>✅ Set up Code Splitting</li>
            <li>✅ Configured Performance Monitoring</li>
          </ul>
        </div>

        <div className="info-box">
          <h2>Code Example: Using Lazy Loading</h2>
          <pre style={{
            background: '#f5f5f5',
            padding: '1rem',
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '0.9rem'
          }}>
{`import { lazy, Suspense } from 'react'

// Lazy load component
const MyComponent = lazy(() => 
  import('./MyComponent')
)

// Use with Suspense
<Suspense fallback={<Loading />}>
  <MyComponent />
</Suspense>`}
          </pre>
        </div>
      </div>
    </div>
  )
}
