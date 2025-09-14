// context/ProjectContext.jsx
import { createContext, useContext, useState } from 'react'

const ProjectContext = createContext()

export const useProjects = () => {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider')
  }
  return context
}

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "QiTaah",
      description: "A revolutionary software application featuring free ERP and CRM with patented Spider Web and Spider Mapping technologies for real estate...",
      goal: 250000,
      raised: 0,
      category: "Tech",
      funding_stage: "Seed",
      timeline: "12 months from October 2, 2025",
      team: "Asif Azad (CEO, B-Tech Mechanical, M-Tech Mechatronics, AI expert), Rajila Beevi Kaseenkunju (Co-founder, major shareholder), Sabeel Basheer (Dentist, Seed investor)",
      risks: "Market competition",
      status: "Live",
      logo_url: "https://via.placeholder.com/150x150?text=QiTaah+Logo",
      banner_url: "https://emamirealty.com/wp-content/uploads/2023/07/The-Future-of-Real-Estate-Emerging-Technologies-and-Trends.png",
      report_text: "TOP SECRET & CONFIDENTIAL\n\nQiTaah Project Report\n\nPrepared by Asif Azad\n\nAugust 15, 2025\n\nContact: +971581677917 | Email: ceo@frshar.com\n\nRevolutionizing Innovation with AI-Driven Technology\n\nExecutive Summary: This document is TOP SECRET & CONFIDENTIAL. QiTaah is a software application with Spider Mapping technology for real estate, poised to transform the industry in the UAE and beyond. With 457,000 AED invested and 250,000 AED sought immediately for Seed funding, it offers 5% shares with royalty returns. Invested funds return in 45 days with annual dividends.\n\nBackground: Developed by Asif Azad and Rajila Beevi Kaseenkunju, QiTaah leverages proprietary Spider Web and Spider Mapping technologies.\n\nMarket Research: Identifies gaps in existing platforms, positioning QiTaah as a revolutionary alternative.\n\nKey Innovations: Spider Web Technology, Spider Mapping Technology, thousands of filters, and an integrated escrow system.\n\nPartners: Asif Azad, Rajila Beevi Kaseenkunju, Sabeel Basheer.\n\nFunding: 250,000 AED sought for launch with low operating costs.\n\nLaunch Plan: Launch on October 2, 2025, targeting users with a robust network.\n\nConclusion: QiTaah invites investors to join this ready-to-launch project with guaranteed returns."
    }
  ])

  const [investorsCount, setInvestorsCount] = useState(0)

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: projects.length + 1,
      raised: 0,
      status: 'Pending'
    }
    setProjects([...projects, newProject])
  }

  const updateProject = (id, updates) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, ...updates } : project
    ))
  }

  const investInProject = (id, amount) => {
    setProjects(projects.map(project => {
      if (project.id === id) {
        const newRaised = project.raised + amount
        return {
          ...project,
          raised: newRaised > project.goal ? project.goal : newRaised
        }
      }
      return project
    }))
    setInvestorsCount(prev => prev + 1)
  }

  const value = {
    projects,
    investorsCount,
    addProject,
    updateProject,
    investInProject
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  )
}