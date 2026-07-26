import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './App.css'

function PageLoader() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">加载中…</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Page content — Home renders first at "/" */}
      <main className="flex-grow-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p className="mb-0">&copy; 2026 wxWeb. Built for duty</p>
        </Container>
      </footer>
    </div>
  )
}

export default App
