import { FiHome, FiTerminal, FiGrid, FiFileText, FiGithub, FiUser } from 'react-icons/fi'

const navItems = [
  { id: 'home', icon: FiHome, label: 'Home' },
  { id: 'about', icon: FiTerminal, label: 'About' },
  { id: 'projects', icon: FiGrid, label: 'Projects' },
  { id: 'skills', icon: FiFileText, label: 'Skills' },
  { id: 'contact', icon: FiUser, label: 'Contact' },
]

export default function FloatingNav({ activeSection, avatar }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="floating-nav" id="floating-nav">
      {navItems.slice(0, 3).map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => scrollTo(item.id)}
          aria-label={item.label}
        >
          <item.icon />
          <span className="nav-tooltip">{item.label}</span>
        </button>
      ))}

      {/* Center avatar */}
      <div className="nav-avatar">
        {avatar ? (
          <img src={avatar} alt="Rudra Salokhe" />
        ) : (
          <span style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #22d3ee, #818cf8)',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '1px',
          }}>RS</span>
        )}
      </div>

      {navItems.slice(3).map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => scrollTo(item.id)}
          aria-label={item.label}
        >
          <item.icon />
          <span className="nav-tooltip">{item.label}</span>
        </button>
      ))}

      <a
        href="https://github.com/rudrasalokhe"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
        aria-label="GitHub"
      >
        <FiGithub />
        <span className="nav-tooltip">GitHub</span>
      </a>
    </nav>
  )
}
