import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'

export default function Hero({ profile }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        {profile?.avatar ? (
          <img
            className="hero-bg-image"
            src={profile.avatar}
            alt="Background"
          />
        ) : (
          <div className="hero-bg-gradient" />
        )}
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="hero-badge-dot" />
          MBA Tech @ NMIMS · Crafting innovative digital experiences
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Creative{' '}
          <span className="hero-title-accent">Developer</span>
          {' '}& Designer
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Passionate about crafting immersive & beautiful, user-centric digital
          experiences through creative design and code.
        </motion.p>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href={profile?.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile?.linkedin || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={`mailto:${profile?.email || ''}`}
            className="hero-social-link"
            aria-label="Email"
          >
            <FiMail />
          </a>
          <a
            href="#"
            className="hero-social-link"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
