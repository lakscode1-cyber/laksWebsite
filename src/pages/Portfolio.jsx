import React, { useState } from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Cloud ERP for Retail',
    description: 'Lakscode developed a scalable cloud-based ERP system for a retail chain, enabling real-time inventory management and analytics across multiple locations.',
    category: 'Cloud Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=800&q=80',
    technologies: ['AWS', 'React', 'Node.js', 'MongoDB', 'Docker'],
    duration: '8 months',
    client: 'RetailCorp Inc.',
    results: ['40% faster inventory processing', '60% reduction in stock-outs', '25% increase in sales efficiency'],
    status: 'Completed'
  },
  {
    id: 2,
    title: 'IT Staff Augmentation for Fintech',
    description: 'Provided a team of skilled developers to a fintech company, accelerating their product roadmap and ensuring on-time delivery of critical features.',
    category: 'IT Consulting',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&w=800&q=80',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
    duration: '12 months',
    client: 'FinanceFlow Ltd.',
    results: ['50% faster development cycle', '99.9% system uptime', '30% cost reduction'],
    status: 'Ongoing'
  },
  {
    id: 3,
    title: 'Healthcare Data Migration',
    description: 'Lakscode led a secure migration of sensitive healthcare data to the cloud, ensuring compliance and seamless access for medical professionals.',
    category: 'Cloud Development',
    image: 'https://i.ibb.co/b5x7yHww/e2f3d75b76e11917db684eff6f41d997.jpg',
    technologies: ['AWS', 'Azure', 'HIPAA Compliance', 'Data Security', 'Python'],
    duration: '6 months',
    client: 'MedTech Solutions',
    results: ['100% data integrity maintained', 'Zero security incidents', '70% faster data access'],
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Custom CRM Solution',
    description: 'Designed and implemented a custom CRM platform for a growing business, improving client engagement and automating sales workflows.',
    category: 'Software Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=800&q=80',
    technologies: ['JavaScript', 'Python', 'PostgreSQL', 'UX Design', 'API Integration'],
    duration: '5 months',
    client: 'GrowthCorp',
    results: ['35% increase in lead conversion', '50% time saved on reporting', '90% user satisfaction'],
    status: 'Completed'
  },
  {
    id: 5,
    title: 'E-commerce Platform Modernization',
    description: 'Complete overhaul of legacy e-commerce platform with modern microservices architecture and improved user experience.',
    category: 'Software Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=800&q=80',
    technologies: ['Microservices', 'React', 'Node.js', 'Redis', 'MongoDB'],
    duration: '10 months',
    client: 'ShopSmart',
    results: ['300% improvement in page load speed', '45% increase in conversions', '80% reduction in downtime'],
    status: 'Completed'
  },
  {
    id: 6,
    title: 'DevOps Transformation',
    description: 'Implemented comprehensive DevOps practices and CI/CD pipelines for a enterprise software company.',
    category: 'IT Consulting',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&w=800&q=80',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
    duration: '4 months',
    client: 'TechFlow Enterprise',
    results: ['75% faster deployment cycles', '90% reduction in manual errors', '60% improvement in system reliability'],
    status: 'Completed'
  }
];

const categories = ['All', 'Cloud Development', 'IT Consulting', 'Software Development'];

const stats = [
  { number: '50+', label: 'Projects Delivered', icon: '🚀' },
  { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
  { number: '25+', label: 'Technologies Used', icon: '💻' },
  { number: '15+', label: 'Industries Served', icon: '🏢' }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-overlay">
          <div className="hero-content">
            <h1>Our Portfolio</h1>
            <p>Showcasing successful IT transformations and innovative solutions that drive business growth</p>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-container">
        {/* Introduction */}
        <div className="portfolio-intro">
          <h2>Featured <span className="highlight">Success Stories</span></h2>
          <p>
            Explore our portfolio of successful IT consulting, software outsourcing, and cloud development 
            projects. Each solution was tailored to meet specific business challenges and deliver measurable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="filter-section">
          <h3>Filter by Category</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="view-details">View Details</span>
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="project-meta">
                  <span className="duration">📅 {project.duration}</span>
                  <span className="client">🏢 {project.client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="portfolio-cta">
          <div className="cta-content">
            <h2>Ready to Create Your Success Story?</h2>
            <p>Let's discuss how we can help transform your business with innovative IT solutions.</p>
          </div>
        </section>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="modal-header-content">
                <div className="project-category">{selectedProject.category}</div>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h3>Project Details</h3>
                <div className="project-details">
                  <div className="detail-item">
                    <strong>Duration:</strong> {selectedProject.duration}
                  </div>
                  <div className="detail-item">
                    <strong>Client:</strong> {selectedProject.client}
                  </div>
                  <div className="detail-item">
                    <strong>Status:</strong> 
                    <span className={`status-badge ${selectedProject.status.toLowerCase()}`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="modal-section">
                <h3>Key Results</h3>
                <ul className="results-list">
                  {selectedProject.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
