import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { CLIENT_NAME, WHATSAPP_NUMBER, PHONE_NUMBER } from "../../config/appConfig";
const Footer = () => {
  return (
    <>
          <footer className="footer Gr-block">
      <div className="container">
        {/* Full Footer for Desktop */}
        <div className="footer-content">
          <div className="footer-section">
            <h4>
              <i className="fas fa-leaf"></i> Green Roots
            </h4>
            <p>
              Nature&apos;s finest solution for healthy, beautiful hair. Crafted
              with traditional wisdom and modern science for remarkable results.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Products'>Products</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Customer Care</h4>
            <ul className="footer-links">
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <a  href={`tel:91${PHONE_NUMBER}`}><p><i className="fas fa-phone"></i> +91 {PHONE_NUMBER}</p></a>
            <p><i className="fas fa-envelope"></i> info@greenroots.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Kochi, Kerala, India</p>
            <a  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`} className="whatsapp-btn mt-3">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Minimal Footer for Mobile */}
        <div className="footer-minimal" style={{ display: "none" }}>
          <div className="text-center">
            <div className="mb-2">
              <strong>
                <i className="fas fa-leaf"></i> Green Roots
              </strong>
            </div>

            <div className="social-icons mb-2">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

            <div className="mb-2" style={{ fontSize: "0.8rem" }}>
              <i className="fas fa-phone"></i> +91 {PHONE_NUMBER}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 Green Roots. All rights reserved. | Made with codewithjoyal
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
