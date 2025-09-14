
import { useState } from 'react'
import { useProjects } from '../context/ProjectContext'
import ProjectCard from '../Components/Projectcard'

const Projects = () => {
  const { projects } = useProjects()
  const [filterStage, setFilterStage] = useState('')

  const filteredProjects = filterStage 
    ? projects.filter(p => p.funding_stage === filterStage)
    : projects

  return (
    <section id="projects" className="section">
      <div className="content-block">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 text-center">Explore Opportunities</h2>
        <div className="flex flex-col md:flex-row gap-2 mb-4 justify-center items-center">
          <select 
            id="filter-stage" 
            className="p-2 border rounded-lg w-full md:w-1/3 text-sm" 
            value={filterStage}
            onChange={(e) => setFilterStage(e.target.value)}
          >
            <option value="">All Stages</option>
            <option value="Ideation">Ideation</option>
            <option value="Pre-Seed">Pre-Seed</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
            <option value="Series B">Series B</option>
            <option value="Series C">Series C</option>
            <option value="IPO">IPO</option>
          </select>
          <p className="text-sm md:text-base text-gray-600 text-center w-full md:w-2/3">Verified projects for profitable investments</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center" id="project-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-gray-600 text-sm text-center col-span-full">No projects available.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects