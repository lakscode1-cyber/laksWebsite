import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './global.css';
import './components/Navbar.css';
import './pages/Home.css';
import './pages/Services.css';
import './pages/Contact.css';
import './pages/Portfolio.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
