import React from 'react';
import aboutImage from '../images/about_us.jpg'; // Replace with your actual image path

function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold text-primary mb-4">About Us </h2>
            <p className="text-muted mb-3">
              <strong>Ascendia Infotech Services Pvt Ltd</strong> is a trusted provider of comprehensive IT outsourcing solutions, helping businesses scale efficiently by leveraging specialized technology expertise.
            </p>
            <p className="text-muted mb-3">
              With a focus on reliability, innovation, and cost-effectiveness, we deliver end-to-end services including IT support, infrastructure management, network design, cloud solutions, and managed services.
            </p>
            <p className="text-muted">
              We serve clients across industries — from startups to enterprises — with a strong commitment to quality, performance, and long-term partnerships. At Ascendia, we believe outsourcing isn’t just about reducing costs, but about enhancing capability, agility, and focus.
            </p>
          </div>

          {/* Right: Image */}
          <div className="col-md-6 text-center">
            <img 
              src={aboutImage} 
              alt="About Ascendia Infotech" 
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
