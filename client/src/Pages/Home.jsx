
import { useEffect } from 'react'
import { useProjects } from '../context/ProjectContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { projects, investorsCount } = useProjects()

  useEffect(() => {
    // GSAP animations can be implemented here
  }, [])

  const donate = () => {
    window.open('https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R', '_blank')
  }

  return (
    <section id="home" className="section">
      <div className="content-block">
        <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">Crowdfunding Prosperity</h1>
        <p className="text-base md:text-lg text-gray-600 mb-4 text-center">Empower founders with a vision, supporting startups from Ideation to IPO with verified projects—100% non-profit.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="premium-card">
            <h2 className="text-lg md:text-xl font-semibold text-[#333333] mb-2 text-center">For Founders</h2>
            <p className="text-gray-600 mb-2 text-center">Launch verified projects and share 10% equity with the platform—no personal funding loss.</p>
            <div className="flex justify-center space-x-2">
              <a href="https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R" target="_blank" rel="noopener noreferrer" className="custom-button">Join Group</a>
              <Link to={'/start-project'} className="custom-button">Start Project</Link>
             
            </div>
          </div>
          
          <div className="premium-card">
            <h2 className="text-lg md:text-xl font-semibold text-[#333333] mb-2 text-center">For Investors</h2>
            <p className="text-gray-600 mb-2 text-center">Invest from 100 AED in verified projects and earn dividends with up to 90% profit share annually.</p>
            <div className="flex justify-center space-x-2">
              <Link to={'/projects'} className="custom-button">Invest Now</Link>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[#333333] mb-2 text-center">Funding Stages</h2>
          <div className="stage-grid">
            <div className="premium-card"><p className="text-sm text-center">Ideation</p></div>
            <div className="premium-card"><p className="text-sm text-center">Pre-Seed</p></div>
            <div className="premium-card"><p className="text-sm text-center">Seed</p></div>
            <div className="premium-card"><p className="text-sm text-center">Series A</p></div>
            <div className="premium-card"><p className="text-sm text-center">Series B</p></div>
            <div className="premium-card"><p className="text-sm text-center">Series C</p></div>
            <div className="premium-card"><p className="text-sm text-center">IPO</p></div>
          </div>
        </div>
        
        <p className="text-sm md:text-base text-gray-600 mb-4 text-center italic">A 100 AED investment can transform a startup and yield rich returns.</p>
        <div className="flex justify-center">
          <button onClick={donate} className="custom-button mb-4">Donate</button>
        </div>
        <p className="text-xs text-gray-600 mb-4 text-center">Via WhatsApp: <a href="https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline">Join</a></p>
      </div>

      <div className="content-block">
        <h2 className="text-xl md:text-2xl font-semibold text-[#333333] mb-2 text-center">Platform Statistics</h2>
        <div className="stats-grid">
          <div className="premium-card">
            <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center">1</h3>
            <p className="text-gray-600 text-sm text-center">Founders</p>
          </div>
          <div className="premium-card">
            <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center">{investorsCount}</h3>
            <p className="text-gray-600 text-sm text-center">Investors</p>
          </div>
          <div className="premium-card">
            <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center">
              {projects.reduce((sum, project) => sum + project.raised, 0).toLocaleString()} AED
            </h3>
            <p className="text-gray-600 text-sm text-center">Raised</p>
          </div>
          <div className="premium-card">
            <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center">
              {projects.filter(p => p.status === 'Live').length}
            </h3>
            <p className="text-gray-600 text-sm text-center">Live</p>
          </div>
          <div className="premium-card">
            <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center">
              {projects.reduce((sum, project) => sum + project.raised, 0).toLocaleString()} AED
            </h3>
            <p className="text-gray-600 text-sm text-center">Funds</p>
          </div>
          <div className="premium-card">
            <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] text-center">
              {projects.filter(p => p.status === 'Live' || p.status === 'Pending').length}
            </h3>
            <p className="text-gray-600 text-sm text-center">Running</p>
          </div>
        </div>
      </div>

      <div className="content-block">
        <h2 className="text-xl md:text-2xl font-semibold text-[#333333] mb-2 text-center">Join the Movement</h2>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">The platform takes 10% equity, enabling investor dividends from profits.</p>
        <div className="flex justify-center space-x-2">
          <Link to={'/projects'} className="custom-button">Invest </Link>
          <Link to={'/login'} className="custom-button">Launch </Link>
        </div>
      </div>

      <div className="content-block leadership-spacing">
        <h2 className="text-xl md:text-2xl font-semibold text-[#333333] mb-2 text-center">Leadership</h2>
        <div className="leadership-grid">
          <div className="leadership-card">
            <h3 className="text-md md:text-lg font-semibold text-[#333333] mb-1 text-center">For Founders</h3>
            <p className="text-gray-600 mb-1 text-center">Led by CEO Asif Azad, grow your business with 10% equity partnership.</p>
            <div className="flex justify-center">
               <Link to={'/projects'} className="custom-button">Start </Link>
            </div>
          </div>
          <div className="leadership-card">
            <h3 className="text-md md:text-lg font-semibold text-[#333333] mb-1 text-center">For Investors</h3>
            <p className="text-gray-600 mb-1 text-center">Earn dividends from curated startups via 10% platform equity with annual returns.</p>
            <div className="flex justify-center">
         <Link to={'/login'} className="custom-button">Invest</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home