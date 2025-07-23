import React from 'react';
import { Link } from 'react-router-dom';
import img1 from  '../images/1.png'
import img2 from  '../images/2.jpg'
import img3 from  '../images/img2.png'
import contact_us from '../images/contact_us.jpg'
function Home() {
  return (
    <div>
      <section className="banner d-flex align-items-center shadow" >
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <h4>Welcome to Ascendia</h4>
              <h1>IT SOLUTION FOR YOUR BUSINESS</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis recusandae autem iusto eos facilis sed cumque animi ullam deleniti ad nesciunt, aperiam corrupti eligendi voluptatem amet? Labore, dolores deserunt?</p>
              <Link to="/about" className="  btn btn-pr_org">Know More</Link>
            </div>
            <div className="col-md-6">
              <img src={img1} alt="Banner" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="about py-5 shadow">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>Ascendia Infotech Services Pvt Ltd is a trusted IT outsourcing partner delivering scalable and cost-effective technology solutions.</p>
              <p>We specialize in IT support, infrastructure management, cloud services, and network design, helping businesses enhance agility and performance.</p>
              <p>Backed by a skilled team and 24/7 support, we serve a diverse client base—from startups to enterprises—with a focus on innovation, reliability, and long-term collaboration.</p>
              <Link to="/about" className="  btn btn-pr_org">Read More</Link>
            </div>
            <div className="col-md-6">
              <img src={img2} alt="About" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="services py-5 bg_2 shadow bc_blue" >
        <div className="container">
          <div className="row align-items-center text-white">
            <div className="col-md-6">
              <img src={img3} alt="Services" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Our Services</h2>
              <p>We offer a broad range of IT services that help organizations modernize and streamline their operations...</p>
              <p>We deliver end-to-end IT solutions, from hardware support to advanced cloud infrastructure.
              Our services ensure secure networks, reliable data backup, and expert surveillance system setup.
              We also offer industry-leading training programs in Linux, Cloud, DevOps, Web Development, and more.</p>
              <Link to="/services" className="  btn btn-pr_org">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="clients py-5">
        <div className="container">
          <h2>Client Testimonials</h2>
          <div id="clientCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p>Client testimonial 1...</p>
                <p>Client testimonial 2...</p>
              </div>
              <div className="carousel-item">
                <p>Client testimonial 2...</p>
                <p>Client testimonial 3...</p>
              </div>
            </div>
            <a className="carousel-control-prev" href="#clientCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#clientCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section> */}

      <section className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Form */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-warning fw-bold mb-3">Let's Connect</h5>
            <h2 className="fw-bold mb-3">We’re here to help</h2>
            {/* <p className="mb-4 text-muted">
              Image from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
            </p> */}
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control shadow-sm"
                  placeholder="Enter a valid email address"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control shadow-sm"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning text-white px-4">Submit</button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="col-md-6 text-center">
            <img
              src={contact_us} // replace with your image path
              alt="Contact Support"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
