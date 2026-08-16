import { useEffect, useRef } from 'react'
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Projects({ projects }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const els = ref.current?.querySelectorAll('.fade-up')
    els?.forEach((el) => observer.observe(el))
    return () => els?.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="section-header fade-up">
        <h2 className="section-title">
          Projects
        </h2>
        <p className="section-subtitle">
          A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND
          DEVELOPMENT, INFUSING CREATIVITY AND INNOVATION.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card fade-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
            whileHover={{ y: -4 }}
          >
            <div className="project-card-image">
              <div
                className="project-card-gradient"
                style={{ background: project.color }}
              >
                {project.title}
              </div>
            </div>
            <div className="project-card-info">
              <span className="project-card-title">
                <FiExternalLink />
                {project.title}
              </span>
              <span className="project-card-arrow">
                <FiArrowUpRight />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <a
        href="https://github.com/rudrasalokhe?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="explore-btn fade-up"
      >
        ↗ Explore more
      </a>
    </section>
  )
}
