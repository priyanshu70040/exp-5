import './LoadingSpinner.css'

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading component...</p>
    </div>
  )
}
