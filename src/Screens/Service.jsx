import "../Styles/Services.css";

function Services() {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-overlay">
          <h1>Our Services</h1>
          <p>
            Delivering innovative construction and interior design
            solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro">
        <h2>What We Offer</h2>
        <p>
          We provide comprehensive construction and interior services
          from planning and design to project completion.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid">

        <div className="service-card">
          <div className="icon">🏠</div>
          <h3>Residential Construction</h3>
          <p>
            Custom homes, villas, renovations, and home expansions.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🏢</div>
          <h3>Commercial Construction</h3>
          <p>
            Office buildings, retail stores, warehouses, and more.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🎨</div>
          <h3>Interior Design</h3>
          <p>
            Luxury and modern interiors designed for comfort and beauty.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🔨</div>
          <h3>Renovation & Remodeling</h3>
          <p>
            Complete transformation of existing spaces and structures.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🧱</div>
          <h3>Flooring & Finishing</h3>
          <p>
            High-quality flooring, painting, ceilings, and finishes.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">💡</div>
          <h3>Space Planning</h3>
          <p>
            Smart layouts and design strategies for maximum efficiency.
          </p>
        </div>

      </section>

      {/* PROCESS */}
      <section className="work-process">

        <h2>How We Work</h2>

        <div className="process-grid">

          <div className="process-card">
            <span>01</span>
            <h3>Consultation</h3>
            <p>
              Understanding your goals and project requirements.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Design</h3>
            <p>
              Creating concepts and plans tailored to your vision.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Construction</h3>
            <p>
              Executing the project with quality craftsmanship.
            </p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Delivery</h3>
            <p>
              Final inspection and successful project handover.
            </p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">

        <h2>Why Choose Us?</h2>

        <div className="why-grid">

          <div>
            <h3>✔ Experienced Team</h3>
            <p>Industry professionals with years of expertise.</p>
          </div>

          <div>
            <h3>✔ Quality Materials</h3>
            <p>Only premium materials and trusted suppliers.</p>
          </div>

          <div>
            <h3>✔ On-Time Delivery</h3>
            <p>Projects completed within agreed timelines.</p>
          </div>

          <div>
            <h3>✔ Competitive Pricing</h3>
            <p>Outstanding quality at reasonable cost.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="service-cta">

        <h1>Ready To Start Your Project?</h1>

        <p>
          Let's discuss your construction and interior design goals.
        </p>

        <button>Request Free Quote</button>

      </section>

    </div>
  );
}

export default Services;