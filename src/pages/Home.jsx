import { useEffect } from 'react'
import './Page.css'

export default function Home() {
  useEffect(() => {
    // Simulate expensive component initialization
    console.log('Home page loaded')
  }, [])

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="page-title">Welcome to Lazy Loading SPA</h1>
        <p className="page-subtitle">
          Optimize your frontend performance with code-splitting and lazy-loaded components
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3>⚡ Code Splitting</h3>
            <p>Components are loaded only when needed, reducing initial bundle size</p>
          </div>
          <div className="feature-card">
            <h3>🚀 Performance</h3>
            <p>Faster initial page load and better user experience</p>
          </div>
          <div className="feature-card">
            <h3>📦 Smart Chunking</h3>
            <p>Automatic vendor and page-wise code splitting with Vite</p>
          </div>
          <div className="feature-card">
            <h3>🎯 On-Demand Loading</h3>
            <p>Components load dynamically as users navigate through pages</p>
          </div>
        </div>

        <div className="info-box">
          <h2>How Lazy Loading Works</h2>
          <ol>
            <li>React.lazy() creates a new component that loads the code dynamically</li>
            <li>Suspense component shows a fallback while the component is loading</li>
            <li>Once loaded, the component is cached in memory for faster access</li>
            <li>Vite's bundler automatically chunks code for optimal performance</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
