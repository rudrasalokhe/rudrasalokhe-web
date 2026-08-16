import { useEffect, useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram } from 'react-icons/fi'
import {
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiBootstrap, SiSass, SiFigma,
  SiNodedotjs, SiExpress, SiFlask, SiPython,
  SiMongodb, SiMysql, SiPostgresql, SiFirebase,
  SiGit, SiGithub, SiPostman,
  SiVercel, SiNetlify, SiDocker,
  SiKotlin, SiAndroidstudio,
  SiCplusplus, SiVite
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { VscCode } from 'react-icons/vsc'

const techIcons = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'JavaScript': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3': SiCss,
  'Vite': SiVite,
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap': SiBootstrap,
  'Sass': SiSass,
  'Figma': SiFigma,
  'Material UI': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Flask': SiFlask,
  'Python': SiPython,
  'REST APIs': SiNodedotjs,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Firebase': SiFirebase,
  'Java': DiJava,
  'C++': SiCplusplus,
  'Kotlin': SiKotlin,
  'Git': SiGit,
  'GitHub': SiGithub,
  'VS Code': VscCode,
  'Postman': SiPostman,
  'Vercel': SiVercel,
  'Netlify': SiNetlify,
  'AWS': SiNodedotjs,
  'Docker': SiDocker,
  'React Native': SiReact,
  'Android Studio': SiAndroidstudio,
}

const categoryColors = {
  'Front-End Development': '#61dafb',
  'Styling & Design': '#ff6b9d',
  'Back-End Development': '#68d391',
  'Database Management': '#f6ad55',
  'Programming Languages': '#b794f4',
  'Version Control': '#63b3ed',
  'Cloud & Deployment': '#fc8181',
  'Mobile App Development': '#4fd1c5',
}

export default function Skills({ skills, profile }) {
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
      { threshold: 0.05 }
    )

    const els = ref.current?.querySelectorAll('.fade-up')
    els?.forEach((el) => observer.observe(el))
    return () => els?.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-inner">
        <h2 className="skills-title fade-up">
          Skills that fuel my passion
        </h2>
        <p className="skills-tagline fade-up">
          Technologies and tools I work with every day
        </p>

        <div className="skills-social fade-up">
          <a href={profile?.github || '#'} target="_blank" rel="noopener noreferrer" className="skills-social-icon" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile?.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="skills-social-icon" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile?.email || ''}`} className="skills-social-icon" aria-label="Email">
            <FiMail />
          </a>
          <a href="#" className="skills-social-icon" aria-label="Twitter">
            <FiTwitter />
          </a>
          <a href="#" className="skills-social-icon" aria-label="Instagram">
            <FiInstagram />
          </a>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const color = categoryColors[skill.category] || '#22d3ee'
            return (
              <div
                key={skill.category}
                className="skill-card fade-up"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="skill-card-icons">
                  {skill.items.slice(0, 4).map((item) => {
                    const Icon = techIcons[item]
                    return Icon ? (
                      <div key={item} className="skill-icon" style={{ color }}>
                        <Icon />
                      </div>
                    ) : null
                  })}
                </div>
                <h3 className="skill-card-title">{skill.category}</h3>
                <p className="skill-card-desc">{skill.description}</p>
                <div className="skill-tags">
                  {skill.items.map((item) => {
                    const Icon = techIcons[item]
                    return (
                      <span key={item} className="skill-tag">
                        {Icon && <Icon style={{ fontSize: '0.65rem' }} />}
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
