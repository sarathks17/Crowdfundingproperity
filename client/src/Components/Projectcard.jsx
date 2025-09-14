// components/ProjectCard.jsx
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()

  const goToProjectDetails = () => {
    navigate(`/project/${project.id}`)
  }

  return (
    <div className="premium-card cursor-pointer">
      <img src={project.banner_url} alt={`${project.name} Banner`} className="w-full h-32 object-cover rounded-t-md" />
      <h3 className="text-base md:text-lg font-semibold text-[#333333] mt-2 text-center">{project.name}</h3>
      <p className="text-gray-600 text-xs md:text-sm text-center">Starting at 100 AED</p>
      <p className="text-gray-600 text-xs md:text-sm text-center">
        Raised: {project.raised.toLocaleString()} AED / Goal: {project.goal.toLocaleString()} AED
      </p>
      <div className="progress-bar mt-1">
        <div 
          className="progress-fill" 
          style={{ width: `${(project.raised / project.goal * 100).toFixed(2)}%` }}
        ></div>
      </div>
      <p className="text-gray-600 text-xs md:text-sm text-center">{project.category}</p>
      {project.name === "QiTaah" && (
        <button onClick={goToProjectDetails} className="custom-button w-full mt-2">
          View Details & Invest
        </button>
      )}
    </div>
  )
}

export default ProjectCard