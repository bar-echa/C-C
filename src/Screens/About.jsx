import "../Styles/About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>ABOUT OUR COMPANY</span>
          <h1>Building Excellence, Creating Value</h1>
          <p>
            We are a trusted construction and interior design company
            committed to delivering quality, innovation, and customer
            satisfaction in every project we undertake.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="company-story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
            alt="Construction Team"
          />
        </div>

        <div className="story-content">
          <h2>Our Story</h2>

          <p>
            Since our founding, we have successfully completed a wide
            range of residential, commercial, and interior design
            projects. Our dedication to quality workmanship and
            innovative design has helped us earn the trust of clients
            across the region.
          </p>

          <p>
            From concept development to project completion, our team
            ensures every detail is handled with professionalism and
            care.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">

        <div className="mission-card">
          <h2 style={{ color: '#050504' }}>🎯 Mission</h2>
          <p>
            To deliver exceptional construction and interior design
            solutions that exceed client expectations while maintaining
            the highest standards of quality, integrity, and safety.
          </p>
        </div>

        <div className="mission-card">
          <h2 style={{ color: '#050504' }}>👁 Vision</h2>
          <p>
            To be recognized as a leading construction and design
            company known for innovation, sustainability, and
            excellence.
          </p>
        </div>

      </section>

      {/* VALUES */}
      <section className="values-section">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card">
            <h3>Quality</h3>
            <p>
              We never compromise on materials, craftsmanship,
              or service.
            </p>
          </div>

          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              Honest communication and transparency.
            </p>
          </div>

          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Modern solutions for modern spaces.
            </p>
          </div>

          <div className="value-card">
            <h3>Safety</h3>
            <p>
              Protecting people and projects at every stage.
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="about-stats">

        <div className="stat-box">
          <h1>250+</h1>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <h1>15+</h1>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h1>50+</h1>
          <p>Professionals</p>
        </div>

        <div className="stat-box">
          <h1>100%</h1>
          <p>Client Satisfaction</p>
        </div>

      </section>

      {/* TEAM */}
      <section className="team-section">

        <h2>Meet Our Team</h2>

        <div className="team-grid">

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
            <h3>John Peterson</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt=""
            />
            <h3>Sarah Taylor</h3>
            <p>Lead Interior Designer</p>
          </div>

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt=""
            />
            <h3>David Wilson</h3>
            <p>Project Manager</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <h1>Let's Build Something Great Together</h1>

        <p>
          Whether you're planning a new construction project or
          redesigning your interior space, our team is ready to help.
        </p>

        <button>Get Free Consultation</button>

      </section>

    </div>
  );
}

export default About;