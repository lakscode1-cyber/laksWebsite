import React, { useState } from 'react';
import './Contact.css';

const contactInfo = [
  {
    icon: '📧',
    title: 'Email Us',
    detail: 'contact@lakscode.com',
    description: 'Send us an email anytime',
    action: 'mailto:contact@lakscode.com'
  },
  {
    icon: '📞',
    title: 'Call Us',
    detail: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
    action: 'tel:+15551234567'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    detail: 'Connect with us',
    description: 'Professional networking',
    action: '#'
  }
];

const socialLinks = [
  { name: 'LinkedIn', icon: '💼', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'GitHub', icon: '💻', url: '#' },
  { name: 'Facebook', icon: '📘', url: '#' }
];

const faqs = [
  {
    question: 'How quickly can you start on our project?',
    answer: 'We can typically begin new projects within 1-2 weeks, depending on scope and requirements.'
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes, we provide comprehensive ongoing support and maintenance packages for all our solutions.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in cloud technologies including AWS, Azure, React, Node.js, Python, and modern DevOps practices.'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="hero-content">
            <h1>Let's Build Something Amazing Together</h1>
            <p>Ready to transform your business with cutting-edge IT solutions? We're here to help you succeed.</p>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">24hrs</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="content-container">
        {/* Contact Form and Info */}
        <section className="contact-main">
          <div className="contact-form-section">
            <div className="form-header">
              <h2>Get in Touch</h2>
              <p>Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="consulting">Software Consulting</option>
                    <option value="outsourcing">IT Manpower Outsourcing</option>
                    <option value="development">Cloud Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, timeline, and requirements..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="contact-methods-section">
          <h2>Get in Touch</h2>
          <div className="contact-methods-grid">
            {contactInfo.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="contact-method-card"
                target={method.title === 'LinkedIn' ? '_blank' : '_self'}
                rel={method.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              >
                <div className="method-icon">
                  <span>{method.icon}</span>
                </div>
                <div className="method-content">
                  <h3>{method.title}</h3>
                  <p className="method-detail">{method.detail}</p>
                  <p className="method-description">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="office-locations">
          <h2>Our Offices</h2>
          <div className="offices-grid">
            <div className="office-card">
              <div className="office-header">
                <span className="office-icon">🏢</span>
                <h3>Corporate Office</h3>
              </div>
              <div className="office-address">
                <p>Plot no 156, Bharathi Nagar,</p>
                <p>8th cross Street,</p>
                <p>Thanjavur - 613010,</p>
                <p>Tamil Nadu, India.</p>
              </div>
            </div>
            
            <div className="office-card">
              <div className="office-header">
                <span className="office-icon">📍</span>
                <h3>Regional Office</h3>
              </div>
              <div className="office-address">
                <p>No : 32, Third Street,</p>
                <p>Lakshmi Nagar,</p>
                <p>Porur, Chennai - 600116,</p>
                <p>Tamil Nadu - India.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Schedule a free consultation to discuss your requirements and get a custom solution.</p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Contact;
