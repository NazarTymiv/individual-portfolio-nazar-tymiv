import React, { useEffect, useState } from 'react'

import { BtnGitHub } from 'components/ui/btnGitHub/BtnGitHub'

import { useParams } from 'react-router-dom'

import { projectsList } from 'helpers/projectsList'
import { BtnWebsite } from 'components/ui/btnWebsite/BtnWebsite'
import opacityTransition from 'utils/opacityTransition'

const ProjectPage = () => {
  const [project, setProject] = useState({})

  const { id } = useParams()

  useEffect(() => {
    setProject(projectsList.find((item) => item.id === id))
  }, [id])

  return (
    <main className="section">
      <div className="container">
        {Object.keys(project).length > 0 ? (
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>

            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />

            <h2 className="title-2">Description</h2>

            <div className="project-details__desc">
              <p style={{ fontSize: '20px', fontWeight: '400' }}>
                {project.description}
              </p>
            </div>

            <h2 className="title-2">Tech Stack</h2>

            <div className="project-details__techStack">
              {project.skills.map((skill) => (
                <>{skill}</>
              ))}
            </div>

            <BtnGitHub link={project.gitHubLink} />

            <BtnWebsite link={project.linkWebsite} />
          </div>
        ) : (
          <h2 className="title-2">Loading...</h2>
        )}
      </div>
    </main>
  )
}

export default opacityTransition(ProjectPage)
