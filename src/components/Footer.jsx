import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import logo from '../images/logo.png';


function Footer() {
  return (
    <footer
      className="footer-section text-black pt-4 "
      style={{ background: 'linear-gradient(to right,#f2f1ef,#f2f1ef)' }}
    >
      <Container>
        <Row className="gy-4">
          {/* Logo or Brand Name + Social */}
          <Col md={4} className="text-center text-md-start">
            <img src={logo} className="img-fluid" alt="logo"  />
            <div className="ms-3 d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white bg-primary p-2 rounded-circle"><FaFacebookF /></a>
              <a href="#" className="text-white bg-primary p-2 rounded-circle"><FaLinkedinIn /></a>
              <a href="#" className="text-white bg-primary p-2 rounded-circle"><FaInstagram /></a>
            </div>
          </Col>

          {/* Navigation Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link"> Home</a></li>
              <li><a href="/about" className="footer-link"> About</a></li>
              <li><a href="/services" className="footer-link"> Services</a></li>
              <li><a href="/careers" className="footer-link"> Careers</a></li>
              <li><a href="/clients" className="footer-link">Clients</a></li>
              <li><a href="/contact" className="footer-link"> Contact</a></li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled text-start">
              <li className="footer-contact">
                <FaEnvelope className="me-2" /> info@ascendiainfotech.com
              </li>
              <li className="footer-contact">
                <FaMapMarkerAlt className="me-2" /> 123 Tech Park, Chennai, India – 600001
              </li>
              <li className="footer-contact">
                <FaPhoneAlt className="me-2" /> +91-9876543210
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="text-white " />

        <div className="text-center small">
          <p>© 2025 Ascendia Infotech Services Pvt Ltd. All rights reserved.</p>
          <p>
            <a href="#" className="footer-link">Terms & Conditions</a> |{' '}
            <a href="#" className="footer-link">Privacy Policy</a> |{' '}
            <a href="#" className="footer-link">Grievance Redressal</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
