import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css'
import Sidebar from './components/Sidebar.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Transactions from './pages/Transactions.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>

      <Routes>
        <Route element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions/>}/>
          <Route path="*" element={<Dashboard />} />
        </Route>
      </  Routes>
    </Router>
  </StrictMode >,
)
