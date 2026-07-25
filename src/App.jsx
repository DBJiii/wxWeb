import { Outlet, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './App.css'

const navItems = [
  { to: '/',        label: '首页' },
  { to: '/courses', label: '课程资源' },
  { to: '/deep',    label: '知识深入' },
  { to: '/news',    label: '科学资讯' },
  { to: '/qa',      label: '知识问答' },
]

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navigation */}
      <Navbar expand="md" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">wxWeb</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              {navItems.map(({ to, label }) => (
                <Nav.Link
                  key={to}
                  as={NavLink}
                  to={to}
                  end={to === '/'}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page content */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p className="mb-0">&copy; 2026 wxWeb. Built with ❤️</p>
        </Container>
      </footer>
    </div>
  )
}

export default App
