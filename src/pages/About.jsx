import { useEffect } from 'react'
import './Page.css'

export default function About() {
  useEffect(() => {
    console.log('About page loaded (lazy-loaded)')
  }, [])

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="page-title">About This Project</h1>
        <p className="page-subtitle">Understanding Lazy Loading and Code Splitting</p>

        <div className="info-box">
          <h2>What is Lazy Loading?</h2>
          <p>
            Lazy loading is a technique where components or resources are loaded asynchronously 
            only when they are needed, rather than loading everything upfront. This significantly 
            improves the initial page load time and reduces the bundle size.
          </p>
        </div>

        <div className="info-box">
          <h2>Benefits of Lazy Loading</h2>
          <ul style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
            <li><strong>Reduced Initial Load Time:</strong> Users see content faster</li>
            <li><strong>Lower Bandwidth Usage:</strong> Only load what users actually visit</li>
            <li><strong>Better Performance:</strong> Faster route transitions and smoother UX</li>
            <li><strong>Scalability:</strong> Easier to add new pages without impacting initial bundle</li>
            <li><strong>Improved SEO:</strong> Faster page loads improve search rankings</li>
          </ul>
        </div>

        <div className="info-box">
          <h2>Implementation Details</h2>
          <p>
            This project uses:
          </p>
          <ul style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
            <li><strong>React.lazy():</strong> Code-splitting at the component level</li>
            <li><strong>Suspense:</strong> Boundary component for handling loading states</li>
            <li><strong>React Router:</strong> Navigation between lazy-loaded pages</li>
            <li><strong>Vite:</strong> Modern bundler with automatic code-splitting</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
