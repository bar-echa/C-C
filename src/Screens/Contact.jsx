import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Get In Touch</h1>
          <p>
            Let's discuss your next construction or interior design project.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="contact-container">

        <div className="contact-info">

          <span className="section-tag">
            CONTACT INFORMATION
          </span>

          <h2>Let's Build Something Amazing Together</h2>

          <p>
            Whether you're planning a new construction project,
            renovation, or interior design upgrade, our team is
            ready to help bring your vision to life.
          </p>

          <div className="info-card">
            <div className="icon">📍</div>
            <div>
              <h3>Office Location</h3>
              <p>Calgary, Alberta, Canada</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">📞</div>
            <div>
              <h3>Phone Number</h3>
              <p>+1 (403) 555-1234</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">✉️</div>
            <div>
              <h3>Email Address</h3>
              <p>info@constructionpro.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">⏰</div>
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>

        {/* FORM */}

        <div className="contact-form-container">

          <h2>Send Us A Message</h2>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />

            <select>
              <option>Select Service</option>
              <option>Residential Construction</option>
              <option>Commercial Construction</option>
              <option>Interior Design</option>
              <option>Renovation</option>
            </select>

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* MAP */}

      <section className="map-section">

        <h2>Find Us</h2>

        <div className="map-placeholder">
          📍 Google Map Location
        </div>

      </section>

      {/* CTA */}

      <section className="contact-cta">

        <h1>
          Ready To Start Your Dream Project?
        </h1>

        <p>
          Contact us today and receive a free consultation
          from our experts.
        </p>

        <button>
          Request Free Quote
        </button>

      </section>

    </div>
  );
}

export default Contact;