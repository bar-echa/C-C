
import "../Styles/Home.css";

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">BUILDING THE FUTURE</span>

          <h1>
            Luxury Construction &
            <br />
            Interior Design
          </h1>

          <p>
            We transform ideas into exceptional spaces through
            craftsmanship, innovation, and world-class design.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Free Quote</button>
            <button className="btn-secondary">View Projects</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <h2>250+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h2>15+</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>Expert Workers</p>
        </div>
        <div className="stat">
          <h2>100%</h2>
          <p>Client Satisfaction</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="Construction"
          />
        </div>

        <div className="about-content">
          <h2>Building Excellence Since 2010</h2>
          <p>
            We specialize in high-end residential and commercial
            construction projects. Our experienced team combines
            quality craftsmanship with innovative interior design
            solutions to create stunning spaces.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="card">
            <h3>🏠 Residential Construction</h3>
            <p>Building dream homes with modern architecture.</p>
          </div>
          <div className="card">
            <h3>🏢 Commercial Buildings</h3>
            <p>Professional office and retail construction.</p>
          </div>
          <div className="card">
            <h3>🎨 Interior Design</h3>
            <p>Modern and luxury interior solutions.</p>
          </div>
          <div className="card">
            <h3>🔨 Renovation</h3>
            <p>Complete remodeling and upgrades.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury villa"
            />
            <div className="overlay">
              <h3>Luxury Villa</h3>
            </div>
          </div>

          <div className="project">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
              alt="Modern kitchen"
            />
            <div className="overlay">
              <h3>Modern Kitchen</h3>
            </div>
          </div>

          <div className="project">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156"
              alt="Executive office"
            />
            <div className="overlay">
              <h3>Executive Office</h3>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2>Our Process</h2>
        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Consultation</h3>
          </div>
          <div className="step">
            <span>02</span>
            <h3>Design</h3>
          </div>
          <div className="step">
            <span>03</span>
            <h3>Planning</h3>
          </div>
          <div className="step">
            <span>04</span>
            <h3>Construction</h3>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>Excellent workmanship and attention to detail.</p>
            <strong>John Smith</strong>
          </div>
          <div className="testimonial">
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>Delivered our project ahead of schedule.</p>
            <strong>Sarah Johnson</strong>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h1>Ready To Build Your Dream Project?</h1>
        <p>
          Contact our professional team today for a free consultation.
        </p>
        <button className="btn-primary">
          Request Consultation
        </button>
      </section>
    </div>
  );
}

export default Home;
