export default function Contact({ profile, onOpenModal }) {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div>
          <p className="contact-label">That&apos;s all for now.</p>
          <h2 className="contact-title">
            Got a project in mind?<br />
            Let&apos;s talk
          </h2>
          <div className="contact-info">
            <div className="contact-info-item">
              <span>Email</span>
              <span>{profile?.email || 'its.rudwin.23@gmail.com'}</span>
            </div>
            <div className="contact-info-item">
              <span>Phone</span>
              <span>{profile?.phone || '+91 8248069086'}</span>
            </div>
          </div>
        </div>
        <div className="contact-cta">
          <button className="contact-btn" onClick={onOpenModal}>
            <span>Get in touch</span>
          </button>
        </div>
      </div>
    </section>
  )
}
