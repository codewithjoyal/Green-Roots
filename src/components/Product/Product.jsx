import React from 'react'
import product from '../../assets/product-1.jpg'
import { CLIENT_NAME, WHATSAPP_NUMBER, PHONE_NUMBER } from "../../config/appConfig";
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
       <section className="section section-bg">
        <div className="container">
          <div className="text-center">
            <h1>Our Premium Herbal Hair Oil Collection</h1>
            <p className="lead">
              Discover the perfect hair oil for your specific needs. Each
              product is carefully crafted with nature&apos;s finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Product Filter */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Choose Your Perfect Hair Oil</h2>
            <p>
              Select from our range of specialized formulas designed for
              different hair concerns
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            <button className="btn btn-outline-primary filter-btn active" data-filter="all">
              All Products
            </button>
            <button className="btn btn-outline-primary filter-btn" data-filter="anti-fall">
              Anti Hair Fall
            </button>
            <button className="btn btn-outline-primary filter-btn" data-filter="growth">
              Hair Growth
            </button>
            <button className="btn btn-outline-primary filter-btn" data-filter="damage">
              Damage Repair
            </button>
            <button className="btn btn-outline-primary filter-btn" data-filter="premium">
              Premium Range
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section section-bg">
        <div className="container">
          <div className="product-grid">

            {/* Product 1 */}
            <div className="product-card" data-category="premium">
              <div className="discount-badge">25% OFF</div>
              <img src= {product}  alt="Classic Herbal Hair Oil" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Classic Herbal Hair Oil</h3>
                <p className="product-description">
                  Our signature blend with 15+ premium herbs for complete hair nourishment and strengthening.
                </p>
                <div className="pricing">
                  <span className="original-price">₹599</span>
                  <span className="offer-price">₹449</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Classic Herbal Hair Oil (₹449)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card" data-category="anti-fall">
              <div className="discount-badge">30% OFF</div>
              <img src= {product}  alt="Anti-Hair Fall Oil" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Anti-Hair Fall Formula</h3>
                <p className="product-description">
                  Specialized formula with Bhringraj and Amla to reduce hair fall and strengthen roots.
                </p>
                <div className="pricing">
                  <span className="original-price">₹699</span>
                  <span className="offer-price">₹489</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Anti-Hair Fall Formula (₹489)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card" data-category="growth">
              <div className="discount-badge">20% OFF</div>
              <img src= {product}  alt="Hair Growth Accelerator" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Hair Growth Accelerator</h3>
                <p className="product-description">
                  Stimulates follicles with Biotin-rich herbs and essential oils for faster hair growth.
                </p>
                <div className="pricing">
                  <span className="original-price">₹799</span>
                  <span className="offer-price">₹639</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Hair Growth Accelerator (₹639)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

            {/* Product 4 */}
            <div className="product-card" data-category="damage">
              <div className="discount-badge">35% OFF</div>
              <img src= {product}  alt="Damage Repair Oil" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Damage Repair Oil</h3>
                <p className="product-description">
                  Deep conditioning formula with Argan and Jojoba oil to repair damaged, brittle hair.
                </p>
                <div className="pricing">
                  <span className="original-price">₹649</span>
                  <span className="offer-price">₹421</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Damage Repair Oil (₹421)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

            {/* Product 5 */}
            <div className="product-card" data-category="premium">
              <div className="discount-badge">40% OFF</div>
              <img src= {product}  alt="Luxury Herbal Blend" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Luxury Herbal Blend</h3>
                <p className="product-description">
                  Premium blend of rare herbs and essential oils for ultimate hair luxury and care.
                </p>
                <div className="pricing">
                  <span className="original-price">₹999</span>
                  <span className="offer-price">₹599</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Luxury Herbal Blend (₹599)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

            {/* Product 6 */}
            <div className="product-card" data-category="anti-fall">
              <div className="discount-badge">28% OFF</div>
              <img src= {product}  alt="Root Strengthening Oil" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Root Strengthening Oil</h3>
                <p className="product-description">
                  Strengthens hair follicles with mineral-rich herbs and prevents premature graying.
                </p>
                <div className="pricing">
                  <span className="original-price">₹549</span>
                  <span className="offer-price">₹395</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Root Strengthening Oil (₹395)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

            {/* Product 7 */}
            <div className="product-card" data-category="growth">
              <div className="discount-badge">22% OFF</div>
              <img src= {product}  alt="Volume Boost Oil" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Volume Boost Oil</h3>
                <p className="product-description">
                  Adds volume and thickness to fine hair with lightweight, non-greasy formula.
                </p>
                <div className="pricing">
                  <span className="original-price">₹599</span>
                  <span className="offer-price">₹467</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Volume Boost Oil (₹467)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

            {/* Product 8 */}
            <div className="product-card" data-category="damage">
              <div className="discount-badge">32% OFF</div>
              <img src= {product}  alt="Split Ends Repair" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Split Ends Repair</h3>
                <p className="product-description">
                  Targets split ends and damaged hair with protein-rich herbs and natural sealants.
                </p>
                <div className="pricing">
                  <span className="original-price">₹679</span>
                  <span className="offer-price">₹461</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Split Ends Repair (₹461)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

            {/* Product 9 */}
            <div className="product-card" data-category="premium">
              <div className="discount-badge">15% OFF</div>
              <img src= {product}  alt="Ayurvedic Special" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Ayurvedic Special</h3>
                <p className="product-description">
                  Traditional Ayurvedic formulation with 21 herbs for complete hair wellness.
                </p>
                <div className="pricing">
                  <span className="original-price">₹849</span>
                  <span className="offer-price">₹722</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Ayurvedic Special (₹722)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

            {/* Product 10 */}
            <div className="product-card" data-category="anti-fall">
              <div className="discount-badge">38% OFF</div>
              <img src= {product}  alt="Stress Relief Hair Oil" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Stress Relief Hair Oil</h3>
                <p className="product-description">
                  Calming formula with Lavender and Chamomile to reduce stress-related hair loss.
                </p>
                <div className="pricing">
                  <span className="original-price">₹729</span>
                  <span className="offer-price">₹452</span>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}  className="whatsapp-btn order-btn" data-product="Stress Relief Hair Oil (₹452)">
                  <i className="fab fa-whatsapp"></i> Order Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Why Our Products Stand Out</h2>
            <p>Every bottle is crafted with care, quality, and effectiveness in mind</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 text-center mb-4">
              <div className="benefit-icon mb-3">
                <i className="fas fa-certificate"></i>
              </div>
              <h4>100% Pure</h4>
              <p>No synthetic chemicals, only natural ingredients</p>
            </div>

            <div className="col-lg-3 col-md-6 text-center mb-4">
              <div className="benefit-icon mb-3">
                <i className="fas fa-flask"></i>
              </div>
              <h4>Laboratory Tested</h4>
              <p>Quality tested in certified laboratories</p>
            </div>

            <div className="col-lg-3 col-md-6 text-center mb-4">
              <div className="benefit-icon mb-3">
                <i className="fas fa-truck"></i>
              </div>
              <h4>Fast Delivery</h4>
              <p>Quick and secure delivery across India</p>
            </div>

            <div className="col-lg-3 col-md-6 text-center mb-4">
              <div className="benefit-icon mb-3">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Money Back Guarantee</h4>
              <p>30-day satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-bg">
        <div className="container text-center">
          <h2>Ready to Transform Your Hair?</h2>
          <p className="mb-4">
            Choose your perfect hair oil and start your journey to healthier, more beautiful hair today!
          </p>
          <div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`} className="btn btn-primary-custom me-3 cta-whatsapp">
              <i className="fab fa-whatsapp"></i> Order Now
            </a>
            <Link to='/about' className="btn btn-secondary-custom">
              About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
