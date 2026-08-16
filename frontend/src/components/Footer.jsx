export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a
            href={profile?.github || 'https://github.com/rudrasalokhe'}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Rudra Salokhe. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
