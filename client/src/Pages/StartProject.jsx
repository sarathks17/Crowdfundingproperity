// pages/StartProject.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProjects } from '../context/ProjectContext'
import { useAuth } from '../context/AuthContext'
import { toast } from "react-toastify";

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    goal: '',
    category: 'Tech',
    stage: 'Ideation',
    timeline: '',
    team: '',
    risks: '',
    vision: '',
    logo_url: '',
    banner_url: ''
  })

  const { addProject } = useProjects()
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!isLoggedIn) {
      navigate('/login')
      return
    }

    // Validate required fields
    if (!formData.name || !formData.description || !formData.goal || 
        !formData.timeline || !formData.team || !formData.risks || !formData.vision) {
      toast.error('Please fill in all required fields')
      return
    }

    const goal = parseFloat(formData.goal)
    if (goal < 10000 || goal > 15000000) {
      toast.error('Funding goal must be between 10,000 AED and 15,000,000 AED')
      return
    }

    const newProject = {
      name: formData.name,
      description: formData.description,
      goal: goal,
      category: formData.category,
      funding_stage: formData.stage,
      timeline: formData.timeline,
      team: formData.team,
      risks: formData.risks,
      vision: formData.vision,
      logo_url: formData.logo_url || 'https://via.placeholder.com/150x150?text=New+Project+Logo',
      banner_url: formData.banner_url || 'https://via.placeholder.com/800x200?text=New+Project+Banner',
      report_text: `Project Report for ${formData.name}\nPrepared by Asif Azad\n${new Date().toLocaleString()}\nContact: +971581677917 | Email: ceo@frshar.com\n${formData.description}\nVision: ${formData.vision}\nFunds will be used for launch, with annual dividends based on shares.`
    }

    addProject(newProject)
    
    toast.success(`Project "${formData.name}" submitted successfully!`)
    
    // Reset form
    setFormData({
      name: '',
      description: '',
      goal: '',
      category: 'Tech',
      stage: 'Ideation',
      timeline: '',
      team: '',
      risks: '',
      vision: '',
      logo_url: '',
      banner_url: ''
    })
    
    navigate('/projects')
  }

  return (
    <section id="start-project" className="section">
      <div className="content-block">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Launch Project</h2>
        <div className="flex flex-col md:flex-row gap-2 justify-center">
          <div className="w-full md:w-2/3 text-center">
            <p className="text-sm md:text-base text-gray-600 mb-4 font-bold">Free submission from Ideation to IPO.</p>
            <form onSubmit={handleSubmit} className="form-container">
              <label htmlFor="project-name" className="form-label">Project Name *</label>
              <input
                type="text"
                id="project-name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <label htmlFor="project-desc" className="form-label">Description *</label>
              <textarea
                id="project-desc"
                name="description"
                className="form-input"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              
              <label htmlFor="project-goal" className="form-label">Funding Goal (AED) *</label>
              <input
                type="number"
                id="project-goal"
                name="goal"
                className="form-input"
                value={formData.goal}
                onChange={handleChange}
                min="10000"
                max="15000000"
                required
              />
              
              <label htmlFor="project-logo" className="form-label">Logo URL</label>
              <input
                type="url"
                id="project-logo"
                name="logo_url"
                className="form-input"
                value={formData.logo_url}
                onChange={handleChange}
                placeholder="https://example.com/logo.png"
              />
              
              <label htmlFor="project-banner" className="form-label">Banner URL</label>
              <input
                type="url"
                id="project-banner"
                name="banner_url"
                className="form-input"
                value={formData.banner_url}
                onChange={handleChange}
                placeholder="https://example.com/banner.png"
              />
              
              <label htmlFor="project-category" className="form-label">Category *</label>
              <select
                id="project-category"
                name="category"
                className="form-input"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Tech">Tech</option>
                <option value="Retail">Retail</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Other">Other</option>
              </select>
              
              <label htmlFor="project-stage" className="form-label">Stage *</label>
              <select
                id="project-stage"
                name="stage"
                className="form-input"
                value={formData.stage}
                onChange={handleChange}
                required
              >
                <option value="Ideation">Ideation</option>
                <option value="Pre-Seed">Pre-Seed</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
                <option value="Series C">Series C</option>
                <option value="IPO">IPO</option>
              </select>
              
              <label htmlFor="project-timeline" className="form-label">Timeline (e.g., 12 months) *</label>
              <input
                type="text"
                id="project-timeline"
                name="timeline"
                className="form-input"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="12 months from launch"
                required
              />
              
              <label htmlFor="project-team" className="form-label">Team (e.g., John - CEO) *</label>
              <textarea
                id="project-team"
                name="team"
                className="form-input"
                rows="3"
                value={formData.team}
                onChange={handleChange}
                placeholder="Asif Azad - CEO, Rajila Beevi - Co-founder"
                required
              ></textarea>
              
              <label htmlFor="project-risks" className="form-label">Risks (e.g., market competition) *</label>
              <textarea
                id="project-risks"
                name="risks"
                className="form-input"
                rows="3"
                value={formData.risks}
                onChange={handleChange}
                placeholder="Market competition, regulatory changes, technology risks"
                required
              ></textarea>
              
              <label htmlFor="project-vision" className="form-label">Your Vision (e.g., Empowering youth) *</label>
              <textarea
                id="project-vision"
                name="vision"
                className="form-input"
                rows="3"
                value={formData.vision}
                onChange={handleChange}
                placeholder="Our vision is to revolutionize the industry by..."
                required
              ></textarea>
              
              <button type="submit" className="custom-button w-full">
                Submit Project
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/3 text-center">
            <div className="premium-card">
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Important Information</h3>
              <p className="text-sm text-gray-600 mb-2">
                • Projects require 10% equity share with the platform
              </p>
              <p className="text-sm text-gray-600 mb-2">
                • All projects go through a verification process
              </p>
              <p className="text-sm text-gray-600 mb-2">
                • Minimum funding goal: 10,000 AED
              </p>
              <p className="text-sm text-gray-600 mb-2">
                • Maximum funding goal: 15,000,000 AED
              </p>
              <p className="text-sm text-gray-600 mb-4">
                • Connect with investors daily at 7 PM
              </p>
              <a 
                href="https://meet.google.com/qxd-hzxc-ggo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="custom-button"
              >
                Join Google Meet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartProject