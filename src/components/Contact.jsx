import React from 'react';
import contact from '../images/contact.jpg'
function Contact() {
  return (
    <>
 <section className="contact-hero position-relative text-white text-center d-flex align-items-center justify-content-center">
      <div className="overlay"></div>
      <h1 className="z-1 fw-bold display-5">Contact Us</h1>
    </section>
    <section className="d-flex justify-content-center align-items-center py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="d-flex flex-column flex-md-row shadow border rounded overflow-hidden bg-white">
              
              {/* Left: Form */}
              <div className="p-4 flex-fill" style={{ minWidth: "300px" }}>
                <h4 className="mb-4">Contact us</h4>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="What is it about?" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <button type="submit" className="btn btn-dark w-100">SEND</button>
                </form>
              </div>

              {/* Right: Image */}
              <div className="d-none d-md-block" style={{ minWidth: "250px" }}>
                <img
                  src={contact}
                  alt="Contact"
                  className="h-100 w-100 object-fit-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    </>
    
  );
}

export default Contact;
