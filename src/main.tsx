import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import Sidebar from './components/Sidebar.tsx'
import Dashboard from './pages/Dashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>

      <Routes>
        <Route element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<App />} />
        </Route>
      </  Routes>
    </Router>
  </StrictMode >,
)
