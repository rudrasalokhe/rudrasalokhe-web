import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import FloatingNav from './components/FloatingNav'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import { motion, AnimatePresence } from 'framer-motion'

const API_BASE = 'http://localhost:5000/api'

function App() {
  const [profile, setProfile] = useState(null)
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [showContactModal, setShowContactModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, projectsRes, skillsRes] = await Promise.all([
          fetch(`${API_BASE}/profile`),
          fetch(`${API_BASE}/projects`),
          fetch(`${API_BASE}/skills`),
        ])
        const profileData = await profileRes.json()
        const projectsData = await projectsRes.json()
        const skillsData = await skillsRes.json()
        setProfile(profileData)
        setProjects(projectsData)
        setSkills(skillsData)
      } catch (err) {
        console.error('Failed to fetch data from backend:', err)
        // Fallback data if backend is not running
        setProfile({
          name: 'Rudra Salokhe',
          title: 'Creative Developer & Designer',
          bio: 'Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. Currently pursuing MBA Tech at NMIMS, I\'m always learning and exploring new ideas.',
          bio_extended: 'The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital landscape. As an MBA Tech student at NMIMS, I combine technical expertise with business acumen.',
          email: 'its.rudwin.23@gmail.com',
          phone: '+91 8248069086',
          github: 'https://github.com/rudrasalokhe',
          linkedin: 'https://www.linkedin.com/in/rudra-salokhe-12196b250/',
          avatar: '/rudra.jpg',
        })
        setProjects([
          { id: 1, title: 'DealsInBox', description: 'A modern deal-finding web application', tech: ['JavaScript', 'React', 'Vercel'], github: 'https://github.com/rudrasalokhe/dealinbox', live: 'https://dealsinbox.in', color: '#6C5CE7' },
          { id: 2, title: 'PaySlot', description: 'A sleek payment slot application', tech: ['JavaScript', 'Node.js', 'MongoDB'], github: 'https://github.com/rudrasalokhe/payslot', live: 'https://payslot.in', color: '#00B894' },
          { id: 3, title: 'WorkMate', description: 'Productivity and project management tool', tech: ['JavaScript', 'React', 'Flask'], github: 'https://github.com/rudrasalokhe/workmate', live: null, color: '#E17055' },
          { id: 4, title: 'DocDrop', description: 'Document sharing and management platform', tech: ['CSS', 'HTML', 'JavaScript'], github: 'https://github.com/rudrasalokhe/docdrop', live: null, color: '#0984E3' },
        ])
        setSkills([
          { category: 'Front-End Development', description: 'Building engaging and user-friendly web interfaces using modern frameworks.', items: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Vite'] },
          { category: 'Styling & Design', description: 'Crafting beautiful and responsive designs with advanced styling tools.', items: ['Tailwind CSS', 'Bootstrap', 'Sass', 'Figma', 'Material UI'] },
          { category: 'Back-End Development', description: 'Building robust server-side logic and APIs for dynamic web apps.', items: ['Node.js', 'Express.js', 'Flask', 'Python', 'REST APIs'] },
          { category: 'Database Management', description: 'Designing databases for secure and efficient data storage.', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'] },
          { category: 'Programming Languages', description: 'Proficient in multiple languages for efficient implementations.', items: ['JavaScript', 'Python', 'Java', 'C++', 'Kotlin'] },
          { category: 'Version Control', description: 'Industry-standard tools for collaborative development.', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
          { category: 'Cloud & Deployment', description: 'Deploying and managing applications on modern cloud platforms.', items: ['Vercel', 'Netlify', 'AWS', 'Docker'] },
          { category: 'Mobile App Development', description: 'Creating cross-platform mobile applications.', items: ['React Native', 'Kotlin', 'Android Studio'] },
        ])
      } finally {
        setTimeout(() => setLoading(false), 800)
      }
    }
    fetchData()
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPos = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (loading) {
    return (
      <div className="page-loader">
        <motion.div
          className="loader-spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
    )
  }

  return (
    <>
      <FloatingNav
        activeSection={activeSection}
        avatar={profile?.avatar}
      />
      <Hero profile={profile} />
      <About profile={profile} />
      <Projects projects={projects} />
      <Skills skills={skills} profile={profile} />
      <Contact
        profile={profile}
        onOpenModal={() => setShowContactModal(true)}
      />
      <Footer profile={profile} />

      <AnimatePresence>
        {showContactModal && (
          <ContactModal
            onClose={() => setShowContactModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default App
