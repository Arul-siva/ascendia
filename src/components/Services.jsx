import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import {
  FaDesktop,
  FaCloud,
  FaPrint,
  FaVideo,
  FaDatabase,
  FaNetworkWired,
  FaGraduationCap,
} from 'react-icons/fa';
import trainingBanner from '../images/service_background.jpg'; // Adjust path as needed

const services = [
  {
    icon: <FaDesktop size={40} />,
    title: 'Hardware & Software Support',
    description:
      'We provide end-to-end hardware and software support, including installation, troubleshooting, maintenance, and upgrades for desktops, laptops, and enterprise software.',
  },
  {
    icon: <FaCloud size={40} />,
    title: 'Cloud & Infrastructure Solutions',
    description:
      'Scalable cloud migration, server management, and virtualization solutions to enhance performance, security, and scalability.',
  },
  {
    icon: <FaPrint size={40} />,
    title: 'Printer Support',
    description:
      'Setup, configuration, repair, and maintenance of all major printer brands to ensure smooth printing operations.',
  },
  {
    icon: <FaVideo size={40} />,
    title: 'CCTV Installation & Maintenance',
    description:
      'Complete CCTV surveillance setup, remote monitoring, and ongoing maintenance for all types of systems.',
  },
  {
    icon: <FaDatabase size={40} />,
    title: 'Data Recovery & Backup',
    description:
      'Secure data retrieval and customized backup strategies to protect against data loss and ensure business continuity.',
  },
  {
    icon: <FaNetworkWired size={40} />,
    title: 'Network Design & Implementation',
    description:
      'End-to-end network design, setup, and management to ensure secure, high-performance connectivity.',
  },
];

const courses = [
  'Red Hat Enterprise Linux 7 (RHCSA/RHCE)',
  'Microsoft Azure (Cloud Fundamentals & Administration)',
  'Amazon AWS (Solutions Architect & Cloud Practitioner)',
  'DevOps with Docker',
  'Kubernetes (Certified Kubernetes Administrator)',
  'DevOps Automation with Ansible',
  'VMware Virtualization & vSphere Administration',
  'Frontend Development: HTML, CSS, JavaScript',
  'Backend Development: PHP & MySQL',
  'React (Frontend Framework)',
  'System Analysis & Design',
  'IT Disaster Recovery Management',
  'ISO 22301:2019 – Business Continuity Management Systems (BCMS)',
];

function Services() {
  return (
    <section className="about-section">
      {/* Banner */}
          {/* <div className="text-center mb-4">
            <img
              src={trainingBanner}
              alt="Courses and Training Banner"
              className="img-fluid rounded-4"
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </div> */}
      <Container  className="py-5">
        <h2 className="mb-5 text-center">Our Services</h2>
        <Row className="g-5">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 text-center shadow rounded-4 p-3 border-0 hover-effect">
                <div className="text-danger mb-3">{service.icon}</div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text className="text-muted">
                  {service.description}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Courses & Training Section */}
        <div className="mt-5  p-4 rounded-4 shadow-sm service_bg">
          

          {/* Heading */}
          <h2 className="text-center mb-3 text-white">
            <FaGraduationCap className="text-primary me-2" />
            Courses & Training
          </h2>
          <p className="text-center text-white mb-4 px-3">
            Empower your future with in-demand tech skills. Whether you're
            starting out or upskilling, our training programs help you build a
            strong career in IT.
          </p>

          {/* Course Grid */}
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {courses.map((course, idx) => (
              <Col key={idx}>
                <Card className="h-100 shadow-sm border-0 hover-shadow rounded-4">
                  <Card.Body>
                    <Badge bg="info" className="mb-2">
                      Course #{idx + 1}
                    </Badge>
                    <Card.Title className="fs-6 ">
                      {course}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* CTA */}
          <div className="text-center mt-5">
            <p className="lead text-dark">
              📅 Interested candidates – block your calendars now!
            </p>
            <button className="btn btn-primary px-4 py-2 rounded-pill">
              Enroll Now
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
