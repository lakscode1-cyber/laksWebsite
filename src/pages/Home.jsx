import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const features = [
  {
    icon: '💻',
    title: 'Software Consulting',
    description: 'Expert advice and solutions tailored to your business needs. Lakscode ensures your IT strategy is always ahead of the curve.',
    highlights: ['Strategic Planning', 'Technology Assessment', 'Best Practices']
  },
  {
    icon: '👥',
    title: 'Manpower Outsourcing',
    description: 'Flexible, skilled IT professionals from Lakscode to power your projects and support your growth.',
    highlights: ['Skilled Developers', 'Project Teams', 'Flexible Scaling']
  },
  {
    icon: '☁️',
    title: 'Cloud Software Development',
    description: 'Modern, scalable software built on the latest cloud technologies. Lakscode delivers innovation and reliability.',
    highlights: ['AWS/Azure/GCP', 'Microservices', 'DevOps Integration']
  }
];

const testimonials = [
  {
    quote: "Lakscode transformed our IT infrastructure with their expert consulting. Outstanding results!",
    author: "John Smith",
    company: "Tech Solutions Inc.",
    rating: 5
  },
  {
    quote: "Their cloud development team delivered exactly what we needed, on time and within budget.",
    author: "Sarah Johnson", 
    company: "Digital Innovations",
    rating: 5
  }
];

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
  <main className="home">
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Empower Your IT Journey</h1>
          <p>Lakscode delivers expert consulting, outsourcing, and cloud solutions for modern businesses.</p>
        </div>
        <div className="hero-floating-elements">
          <div className="floating-icon">💻</div>
          <div className="floating-icon">☁️</div>
          <div className="floating-icon">🚀</div>
        </div>
      </div>
    </section>
    
    <section className="content-container">
      {/* Main Introduction */}
      <section className="main-intro">
        <div className="intro-content">
          <h2>Empowering Your IT Success with <span className="highlight">Lakscode</span></h2>
          <p>
            Lakscode delivers expert software consulting, reliable IT manpower outsourcing, and cutting-edge software development in the latest cloud technologies. We help IT companies and businesses achieve their goals with modern, scalable, and secure solutions.
          </p>
          <div className="intro-badges">
            <span className="badge">Certified Experts</span>
            <span className="badge">24/7 Support</span>
            <span className="badge">Global Reach</span>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about">
        <div className="about-grid">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              At Lakscode, we are passionate about driving digital transformation. Our team specializes in software consulting, providing strategic guidance and technical expertise. We offer IT manpower outsourcing to help companies scale efficiently, and our software development services leverage the latest cloud technologies for robust, future-ready solutions.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <span className="feature-icon">🎯</span>
                <span>Strategic Focus</span>
              </div>
              <div className="about-feature">
                <span className="feature-icon">⚡</span>
                <span>Fast Delivery</span>
              </div>
              <div className="about-feature">
                <span className="feature-icon">🔒</span>
                <span>Secure Solutions</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>To empower businesses with innovative IT solutions that drive growth and success in the digital age.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="features-header">
          <h2>Our Core Services</h2>
          <p>Comprehensive IT solutions designed to accelerate your business growth</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <span className="icon-emoji">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-highlights">
                {feature.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-tag">{highlight}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <blockquote>"{testimonial.quote}"</blockquote>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join hundreds of companies that trust Lakscode for their IT solutions</p>
          <div className="cta-buttons">
            <button className="cta-btn secondary" onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>
      </section>
    </section>
  </main>
);
};

export default Home;
