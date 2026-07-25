import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Page content — Home renders first at "/" */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p className="mb-0">&copy; 2026 wxWeb. Built for duty</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
