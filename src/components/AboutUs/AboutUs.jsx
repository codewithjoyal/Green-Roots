import React from 'react'
import ourbrandstory from '../../assets/brand-story.jpg'
import { Link } from 'react-router-dom'
import { CLIENT_NAME, WHATSAPP_NUMBER, PHONE_NUMBER } from "../../config/appConfig";

const AboutUs = () => {
  return (
    <>
      <section className="section section-bg">
        <div className="container">
          <div className="text-center">
            <h1>About Herbal Hair Oil</h1>
            <p className="lead">
              Bringing nature's wisdom to modern hair care, one drop at a time
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Our Story</h2>
              <p>
                In 2018, our founder discovered the transformative power of
                traditional Ayurvedic herbs while battling severe hair loss.
                Frustrated with chemical-laden products that promised miracles
                but delivered disappointment, they turned to ancient wisdom
                passed down through generations.
              </p>

              <p>
                What started as a personal quest became a mission to share these
                time-tested remedies with the world. After extensive research
                and collaboration with Ayurvedic experts, we developed our first
                herbal hair oil formulation that combined 15+ premium herbs in
                perfect harmony.
              </p>

              <p>
                Today, thousands of customers across India trust our products
                for their hair care needs. Each bottle represents our commitment
                to quality, effectiveness, and the belief that nature holds the
                key to healthy, beautiful hair.
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src={ourbrandstory}
                alt="Our Brand Story"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Mission & Vision</h2>
            <p>Guiding principles that drive everything we do</p>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="benefit-card text-center h-100">
                <div className="benefit-icon mb-3">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower individuals with natural, effective hair care
                  solutions that restore confidence and promote hair health
                  using time-tested Ayurvedic wisdom combined with modern
                  scientific validation.
                </p>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="benefit-card text-center h-100">
                <div className="benefit-icon mb-3">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become India's leading herbal hair care brand, making
                  natural hair wellness accessible to every household while
                  preserving and promoting traditional Ayurvedic knowledge for
                  future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Core Values</h2>
            <p>The principles that guide our every decision</p>
          </div>

          <div className="benefits-grid">
            {[
              ["fa-seedling", "Natural First", "We believe in the power of nature. Every ingredient is carefully selected from natural sources, ensuring purity and effectiveness."],
              ["fa-microscope", "Science-Backed", "Traditional wisdom meets modern science. We validate our formulations through rigorous testing and research."],
              ["fa-heart", "Customer-Centric", "Your satisfaction and hair health are our top priorities. We're committed to delivering exceptional results."],
              ["fa-balance-scale", "Ethical Practices", "We maintain transparency in sourcing, sustainable practices, and honest marketing throughout our operations."],
              ["fa-users", "Community Focus", "We support local communities by working with traditional herb growers and Ayurvedic practitioners."],
              ["fa-infinity", "Continuous Innovation", "We constantly research and develop new formulations while staying true to our natural, herbal roots."]
            ].map((item, index) => (
              <div className="benefit-card text-center" key={index}>
                <div className="benefit-icon">
                  <i className={`fas ${item[0]}`}></i>
                </div>
                <h4>{item[1]}</h4>
                <p>{item[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2>Join Our Family</h2>
          <p className="mb-4">
            Experience the difference that natural, effective hair care can make
            in your life. We're here to support your hair health journey every
            step of the way.
          </p>
          <div>
            <Link to='/products' className="btn btn-primary-custom me-3">
              Explore Products
            </Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`} className="btn btn-secondary-custom cta-whatsapp">
              <i className="fab fa-whatsapp"></i> Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
