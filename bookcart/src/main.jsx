import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bottombar from './Components/Bottombar.jsx'
import Booklist from './Components/Booklist.jsx'
import Navbar from './Components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Booklist />
    <Bottombar />
  </StrictMode>,
)
