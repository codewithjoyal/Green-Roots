import React from 'react'
import { Link } from 'react-router-dom'
import slider1 from '../../assets/oil-slider-1.jpg'
import slider2 from '../../assets/oil-slider-2.jpg'
import slider3 from '../../assets/oil-slider-3.jpg'
import ctaimg from '../../assets/cta-image.jpg'
import { CLIENT_NAME, WHATSAPP_NUMBER } from "../../config/appConfig";

const Home = () => {
  return (
    <>
            <section id="home" className="hero Gr-block">
        <div className="container">
          <div className="hero-content">
            <h1>Nature&apos;s Gift for Healthy, Beautiful Hair</h1>
            <p className="lead">
              Experience the power of premium {CLIENT_NAME} ingredients that nourish
              your hair from root to tip. Our Ayurvedic formula reduces hair
              your hair from root to tip. Our Ayurvedic formula reduces hair
              your hair from root to tip. Our Ayurvedic formula reduces hair
              fall, strengthens follicles, and promotes natural hair growth.
            </p>
            <div className="cta-buttons d-flex flex-wrap justify-content-center gap-3">
              <Link to="/products" className="btn btn-primary-custom">
                Explore Products
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`} className="btn btn-secondary-custom cta-whatsapp">
                <i className="fab fa-whatsapp"></i> Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Carousel */}
      <section className="section section-bg Gr-block">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Premium Collection</h2>
            <p>
              Discover our range of {CLIENT_NAME} crafted with traditional
              wisdom and modern science
            </p>
          </div>

          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide-to="2"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={slider1}
                  className="d-block w-100"
                  alt="Premium Green Root Oil"
                />
              </div>

              <div className="carousel-item">
                <img
                  src={slider2}
                  className="d-block w-100"
                  alt="Green Root"
                />
              </div>

              <div className="carousel-item">
                <img
                  src={slider3}
                  className="d-block w-100"
                  alt="Green Root"
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Video Section */}
      <section className="section section-dark Gr-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>See Our Products in Action</h2>
              <p>
                Watch how our {CLIENT_NAME} transforms dull, damaged hair into
                healthy, shiny locks. Experience the difference with our 100%
                natural ingredients.
              </p>
              <div className="mt-4">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`} className="btn btn-primary-custom cta-whatsapp">
                  <i className="fab fa-whatsapp"></i> Order Your Bottle Today
                </a>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={`${CLIENT_NAME} Hair Oil Product Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-bg Gr-block">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Why Choose Our {CLIENT_NAME}?</h2>
            <p>Experience the transformative power of nature&apos;s finest ingredients</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>100% Natural</h3>
              <p>
                Crafted from premium herbs, essential oils, and natural extracts
                with no harmful chemicals
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Reduces Hair Fall</h3>
              <p>
                Strengthens hair follicles and reduces breakage by up to 80%
                within 30 days
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-tint"></i>
              </div>
              <h3>Promotes Growth</h3>
              <p>
                Stimulates natural hair growth and increases hair thickness and
                volume
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-spa"></i>
              </div>
              <h3>Deep Conditioning</h3>
              <p>
                Deeply nourishes scalp and hair, restoring natural shine and
                softness
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Stress Relief</h3>
              <p>
                Aromatic essential oils provide relaxation and reduce
                stress-related hair loss
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Ayurvedic Formula</h3>
              <p>
                Based on 5000+ years of Ayurvedic wisdom, perfected with modern
                research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-dark Gr-block">
        <div className="container">
          <div className="text-center mb-5">
            <h2>What Our Customers Say</h2>
            <p>
              Join thousands of satisfied customers who have transformed their
              hair health
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-text">
                  &quot;I&apos;ve been using this ${CLIENT_NAME} oil for 3 months now,
                  and my hair fall has reduced dramatically.&quot;
                </div>
                <div className="testimonial-author">
                  - Priya Sharma, Mumbai
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-text">
                  &quot;The natural scent is amazing, and the results are
                  incredible.&quot;
                </div>
                <div className="testimonial-author">
                  - Rahul Kumar, Delhi
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-text">
                  &quot;This oil is gentle yet effective. Highly recommend!&quot;
                </div>
                <div className="testimonial-author">
                  - Anjali Patel, Ahmedabad
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`} className="btn btn-primary-custom cta-whatsapp">
              <i className="fab fa-whatsapp"></i> Start Your Hair Transformation
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section section-bg Gr-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>Ready to Transform Your Hair?</h2>
              <p>
                Join thousands of happy customers who have discovered the secret
                to healthy, beautiful hair.
              </p>
              <div className="mt-4">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`} className="btn btn-primary-custom me-3 cta-whatsapp">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
                <Link to="/products" className="btn btn-secondary-custom">
                  View All Products
                </Link>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="text-center">
                <img
                  src={ctaimg}
                  alt="Beautiful Healthy Hair"
                  className="img-fluid Gr-homebottomctabtn shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
