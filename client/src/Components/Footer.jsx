
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <footer className="footer">
      <p className="text-sm text-center">&copy; 2025 Crowdfunding. All rights reserved.</p>
      <div className="footer-links">
        <a href="#" onClick={() => handleNavigation('/about')}>About</a>
        <a href="#" onClick={() => handleNavigation('/terms')}>Terms</a>
        <a href="#" onClick={() => handleNavigation('/privacy')}>Privacy</a>
        <a href="#" onClick={() => handleNavigation('/accessibility')}>Accessibility</a>
      </div>
    </footer>
  )
}

export default Footer