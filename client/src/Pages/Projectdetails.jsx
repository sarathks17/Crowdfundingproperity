
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProjects } from '../context/ProjectContext'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { projects, investInProject, investorsCount } = useProjects()
  const [project, setProject] = useState(null)
  const [investmentAmount, setInvestmentAmount] = useState('')
  const [investmentPercent, setInvestmentPercent] = useState('0%')
  const [profitShare, setProfitShare] = useState('0%')

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id))
    if (foundProject) {
      setProject(foundProject)
    } else {
      navigate('/projects')
    }
  }, [id, projects, navigate])

  useEffect(() => {
    if (investmentAmount && project) {
      const amount = parseFloat(investmentAmount) || 0
      const percent = (amount / project.goal * 100).toFixed(2)
      const profit = (amount / project.goal * 90).toFixed(2)
      setInvestmentPercent(percent > 100 ? '100%' : `${percent}%`)
      setProfitShare(profit > 90 ? '90%' : `${profit}%`)
    }
  }, [investmentAmount, project])

  const handleInvestmentChange = (e) => {
    setInvestmentAmount(e.target.value)
  }

  const handleInvestmentSubmit = (e) => {
    e.preventDefault()
    if (!investmentAmount || parseFloat(investmentAmount) < 100) {
      alert("Minimum investment is 100 AED.")
      return
    }

    const amount = parseFloat(investmentAmount)
    investInProject(project.id, amount)
    
    alert(`Investment of ${amount} AED successful! You invested ${investmentPercent} with a profit share of ${profitShare}.`)
    setInvestmentAmount('')
  }

  const makePayment = (method) => {
    if (!investmentAmount || parseFloat(investmentAmount) < 100) {
      alert("Please enter a valid investment amount first (min 100 AED).")
      return
    }
    alert(`Payment of ${investmentAmount} AED processed via ${method}. Contact ceo@frshar.com for details.`)
  }

  if (!project) {
    return <div className="content-block">Loading...</div>
  }

  const progressPercent = (project.raised / project.goal * 100).toFixed(2)
  const amountNeeded = project.goal - project.raised > 0 ? project.goal - project.raised : 0

  return (
    <section id="project-details" className="section">
      <div className="content-block">
        <img src={project.banner_url} alt={`${project.name} Banner`} className="banner-image" />
        <img src={project.logo_url} alt={`${project.name} Logo`} className="logo-image" />
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333333] mb-2 text-center">{project.name}</h2>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center font-bold" id="details-equity">
          {project.name === "QiTaah" 
            ? "Verified project—10% equity dividends with returns in 45 days." 
            : "Verified project—10% equity dividends."}
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">{project.description}</p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Stage: <span>{project.funding_stage}</span> (Series A ~January 2, 2026)</p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Category: <span>{project.category}</span></p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Timeline: <span>{project.timeline}</span></p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Team: <span>{project.team}</span></p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Risks: <span>{project.risks}</span></p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Actual Invested: <span>457,000</span> AED</p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Funds Needed for Seed Launch: 250,000 AED (Immediate)</p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Raised: <span>{project.raised.toLocaleString()}</span> AED / Goal: {project.goal.toLocaleString()} AED</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent > 100 ? 100 : progressPercent}%` }}></div>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Percentage Invested: <span>{progressPercent > 100 ? 100 : progressPercent}%</span></p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Amount Needed: <span>{amountNeeded.toLocaleString()}</span> AED</p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Valuation (Series A): ~2.5M AED</p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Launch Date: October 2, 2025</p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Status: <span>{project.status}</span></p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Prepared by: Asif Azad, August 15, 2025</p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Contact: +971581677917 | Email: ceo@frshar.com</p>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Daily Meet: 7 PM at <a href="https://meet.google.com/qxd-hzxc-ggo" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline">Google Meet</a></p>
        
        <div className="mt-4">
          <h3 className="text-lg md:text-xl font-semibold text-[#333333] mb-2 text-center">Investment Options</h3>
          <form onSubmit={handleInvestmentSubmit} className="form-container">
            <label htmlFor="project-invest-amount" className="form-label">Investment Amount (min 100 AED)</label>
            <input 
              type="number" 
              id="project-invest-amount" 
              className="form-input" 
              min="100" 
              value={investmentAmount}
              onChange={handleInvestmentChange}
              required 
            />
            <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Your Contribution: <span>{investmentPercent}</span></p>
            <p className="text-sm md:text-base text-gray-600 mb-2 text-center">Profit Share: <span>{profitShare}</span> (after 10% equity)</p>
            <button type="submit" className="custom-button w-full mb-2" disabled={project.raised >= project.goal}>
              {project.raised >= project.goal ? 'Funding Complete' : 'Confirm Payment'}
            </button>
            <div>
              <p className="text-sm md:text-base text-gray-600">Payment Methods:</p>
              <button type="button" onClick={() => makePayment('bank')} className="custom-button w-full mt-2">Bank Transfer</button>
              <button type="button" onClick={() => makePayment('crypto')} className="custom-button w-full mt-2">Cryptocurrency</button>
              <button type="button" onClick={() => makePayment('paypal')} className="custom-button w-full mt-2">PayPal</button>
            </div>
          </form>
        </div>
        
        <div className="flex justify-center space-x-2 mt-4">
          <button className="custom-button">View Full Report</button>
          <button className="custom-button">Feedback</button>
          <button className="custom-button">Report Issue</button>
          <button className="custom-button">Toggle Live Status</button>
        </div>
        
        <h3 className="text-lg md:text-xl font-semibold text-[#333333] mb-2 text-center">Advanced Analytics</h3>
        <div className="analytics-grid">
          <div><strong>Total Raised:</strong> <span>{project.raised.toLocaleString()}</span> AED</div>
          <div><strong>Amount Needed:</strong> <span>{amountNeeded.toLocaleString()}</span> AED</div>
          <div><strong>Investors:</strong> <span>{investorsCount}</span></div>
          <div><strong>Average Investment:</strong> <span>{investorsCount > 0 ? (project.raised / investorsCount).toLocaleString() : '0'}</span> AED</div>
        </div>
        <div className="progress-bar mt-2">
          <div className="progress-fill" style={{ width: `${progressPercent > 100 ? 100 : progressPercent}%` }}></div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails