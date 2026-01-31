import React from 'react'

const ContactUs = () => {
  return (
    <>
      <section className="section section-bg">
        <div className="container">
          <div className="text-center">
            <h1>Contact Us</h1>
            <p className="lead">
              We're here to help you on your hair care journey. Get in touch with
              us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="benefit-card text-center h-100">
                <div className="benefit-icon mb-3">
                  <i className="fab fa-whatsapp fa-2x"></i>
                </div>
                <h4>WhatsApp</h4>
                <p>Instant support and quick responses</p>
                <p className="mb-3">
                  <strong>+91 98765 43210</strong>
                </p>
                <a href="#" className="whatsapp-btn">
                  <i className="fab fa-whatsapp"></i> Message Us
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="benefit-card text-center h-100">
                <div className="benefit-icon mb-3">
                  <i className="fas fa-phone fa-2x"></i>
                </div>
                <h4>Phone</h4>
                <p>Call us for immediate assistance</p>
                <p className="mb-3">
                  <strong>+91 98765 43210</strong>
                </p>
                <a
                  href="tel:+919876543210"
                  className="btn btn-primary-custom"
                >
                  <i className="fas fa-phone"></i> Call Now
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="benefit-card text-center h-100">
                <div className="benefit-icon mb-3">
                  <i className="fas fa-envelope fa-2x"></i>
                </div>
                <h4>Email</h4>
                <p>Send us detailed inquiries</p>
                <p className="mb-3">
                  <strong>info@herbalhairoil.com</strong>
                </p>
                <a
                  href="mailto:info@herbalhairoil.com"
                  className="btn btn-primary-custom"
                >
                  <i className="fas fa-envelope"></i> Email Us
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="benefit-card text-center h-100">
                <div className="benefit-icon mb-3">
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                </div>
                <h4>Office</h4>
                <p>Visit our headquarters</p>
                <p className="mb-3">
                  <strong>Mumbai, Maharashtra</strong>
                </p>
                <a href="#contact-form" className="btn btn-primary-custom">
                  <i className="fas fa-directions"></i> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h2>Send us a Message</h2>
              <p className="mb-4">
                Have a question about our products, need hair care advice, or
                want to place an order? We'd love to hear from you!
              </p>

              <form id="contactForm" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <select
                    className="form-control"
                    id="subject"
                    name="subject"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-support">Order Support</option>
                    <option value="hair-care-advice">Hair Care Advice</option>
                    <option value="partnership">
                      Partnership Opportunities
                    </option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                  />
                  <label className="form-check-label" htmlFor="newsletter">
                    Subscribe to our newsletter for hair care tips and product
                    updates
                  </label>
                </div>

                <button type="submit" className="btn-submit">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>

            <div className="col-lg-6">
              <h2>Visit Our Office</h2>
              <p className="mb-4">
                Located in the heart of Mumbai, our office is easily accessible
                by public transport and offers ample parking.
              </p>

              <div className="ratio ratio-4x3 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5!2d72.8777!3d19.0760"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Herbal Hair Oil Office Location"
                ></iframe>
              </div>

              <div className="benefit-card">
                <h4>Office Hours</h4>
                <div className="row">
                  <div className="col-6">
                    <p className="mb-1">
                      <strong>Monday - Friday:</strong>
                    </p>
                    <p className="mb-1">
                      <strong>Saturday:</strong>
                    </p>
                    <p className="mb-1">
                      <strong>Sunday:</strong>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="mb-1">9:00 AM - 6:00 PM</p>
                    <p className="mb-1">9:00 AM - 4:00 PM</p>
                    <p className="mb-1">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="benefit-card mb-3">
                <h5>
                  <i className="fas fa-question-circle text-primary me-2"></i>{" "}
                  How long does shipping take?
                </h5>
                <p>
                  Most orders are delivered within 3-5 business days within
                  India.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="benefit-card mb-3">
                <h5>
                  <i className="fas fa-question-circle text-primary me-2"></i>{" "}
                  Can I track my order?
                </h5>
                <p>
                  Yes, you'll receive tracking information via email and
                  WhatsApp once your order is shipped.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-bg">
        <div className="container text-center">
          <h2>Ready to Start Your Hair Care Journey?</h2>
          <p className="mb-4">
            Browse our products and experience the difference that natural,
            effective hair care can make.
          </p>
          <div>
            <a href="products.html" className="btn btn-primary-custom me-3">
              Shop Products
            </a>
            <a href="#" className="btn btn-secondary-custom cta-whatsapp">
              <i className="fab fa-whatsapp"></i> Quick Order
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
