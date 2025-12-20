import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import Sidebar from './components/Sidebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>

      <Sidebar>
        <Routes>
          <Route path='/' element={<App />} />
        </  Routes>
      </Sidebar>
    </Router>
  </StrictMode >,
)
