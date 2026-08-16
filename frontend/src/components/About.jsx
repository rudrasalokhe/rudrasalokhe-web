import { useEffect, useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function About({ profile }) {
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
      { threshold: 0.2 }
    )

    const els = ref.current?.querySelectorAll('.fade-up')
    els?.forEach((el) => observer.observe(el))
    return () => els?.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-grid">
        <div className="about-left fade-up">
          <h2>
            Driven by curiosity and a love for design, I create simple,
            functional, and visually striking digital experiences.
          </h2>
          <p style={{ marginTop: '16px' }}>
            {profile?.bio ||
              "As a student, I'm always learning and exploring new ideas."}
          </p>
        </div>
        <div className="about-right fade-up" style={{ transitionDelay: '0.2s' }}>
          <p>
            {profile?.bio_extended ||
              'The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital landscape.'}
          </p>
          <a href="#skills" className="more-about-btn">
            More about me <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
