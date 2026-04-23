import { Suspense, lazy } from 'react'

/**
 * Custom hook to track lazy component loading metrics
 * @param {Function} importFn - Dynamic import function
 * @param {string} name - Component name for logging
 * @returns {React.ComponentType} Lazy component
 */
export function useLazyComponent(importFn, name) {
  return lazy(() => {
    const startTime = performance.now()
    
    return importFn().then(module => {
      const loadTime = performance.now() - startTime
      console.log(`✅ Component "${name}" loaded in ${loadTime.toFixed(2)}ms`)
      
      // Send to analytics
      if (window.__analytics) {
        window.__analytics.trackChunkLoad(name, loadTime)
      }
      
      return module
    }).catch(error => {
      console.error(`❌ Failed to load component "${name}":`, error)
      throw error
    })
  })
}

/**
 * Wrapper component for better Suspense handling
 * Shows previous content while loading new content
 */
export function SmartSuspense({ children, fallback, delay = 200 }) {
  const [showFallback, setShowFallback] = Suspense.useState(false)
  
  // Delay fallback to avoid flickering for fast loads
  const timeoutRef = React.useRef()
  
  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowFallback(true)
    }, delay)
    
    return () => clearTimeout(timeoutRef.current)
  }, [delay])
  
  return (
    <Suspense fallback={showFallback ? fallback : null}>
      {children}
    </Suspense>
  )
}

/**
 * Error boundary for graceful error handling
 */
export class LazyLoadErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('LazyLoad Error:', error, errorInfo)
    
    // Send to error tracking
    if (window.__errorTracking) {
      window.__errorTracking.captureException(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          background: '#fee',
          borderRadius: '4px',
          color: '#c33'
        }}>
          <h2>Failed to load component</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

// React import must be available for LazyLoadErrorBoundary
import React from 'react'
