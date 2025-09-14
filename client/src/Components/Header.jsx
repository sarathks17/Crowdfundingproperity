// components/Header.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigation = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="logo" >Crowdfunding</div>
      <button className="menu-btn" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <div className="nav-item">
          <button onClick={() => handleNavigation('/')} className="custom-button">
            Home
          </button>
        </div>
        <div className="nav-item">
          <button onClick={() => handleNavigation('/projects')} className="custom-button">
            Projects
          </button>
        </div>
        <div className="nav-item">
          <button onClick={() => handleNavigation('/start-project')} className="custom-button">
            Start Project
          </button>
        </div>
        <div className="nav-item">
          <button onClick={() => handleNavigation('/dashboard')} className="custom-button">
            Dashboard
          </button>
        </div>
        <div className="nav-item">
          <button onClick={() => handleNavigation('/login')} className="custom-button">
            Login
          </button>
        </div>
        <div className="nav-item">
          <button className="custom-button" disabled>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header