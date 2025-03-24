import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 w-100 position-relative">

      <div className="container">
        <div className="row gy-4">
          {/* Newsletter Section */}
          <div className="col-md-3">
            <h5 className="fw-bold">Newsletter</h5>
            <p className="text-white">
              Stay informed with the latest updates, insights, and trends delivered straight. Subscribe to our newsletter.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control rounded-pill shadow-sm"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="btn btn-info text-white rounded-pill ms-2 shadow-sm">
                SignUp
              </button>
            </div>
          </div>

          {/* Explore Section */}
          <div className="col-md-3">
            <h5 className="fw-bold">Explore</h5>
            <ul className="list-unstyled">
              <li>➤ Home</li>
              <li>➤ Services</li>
              <li>➤ About Us</li>
              <li>➤ Latest Projects</li>
              <li>➤ Testimonials</li>
              <li>➤ Our Team</li>
              <li>➤ Contact Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="fw-bold">Contact Info</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faLocationDot} className="me-2 text-info" />
                Lahore, Pakistan
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-info" />
                TEACHNOVA@gmail.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2 text-info" />
                +923 161435800
              </li>
            </ul>
            <div className="mt-3">
              <a href="#" className="text-info me-3">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="#" className="text-info me-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="text-info me-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="text-info">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </div>

          {/* Popular Services */}
          <div className="col-md-3">
            <h5 className="fw-bold">Popular Services</h5>
            <p>
              <a href="#" className="text-info fw-bold text-decoration-none">
                WEB DEVELOPMENT
              </a>
              <br />
              <span className="text-white">
                Essential Web Development Strategies for Modern Businesses
              </span>
            </p>
            <p>
              <a href="#" className="text-info fw-bold text-decoration-none">
                MOBILE APP DEVELOPMENT
              </a>
              <br />
              <span className="text-white">
                Innovating Mobile Experiences
              </span>
            </p>
            <button className="btn btn-info text-white rounded-pill shadow-sm">
              View All Posts ➡️
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="text-muted">
            <FontAwesomeIcon icon={faCopyright} />{" "}
            <a href="#" className="text-white text-decoration-none">
            TEACHNOVA ALL RIGHT RESERVE
            </a>{" "}
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="btn btn-info rounded-circle shadow position-fixed bottom-0 end-0 m-4 p-3"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆️
      </button>
    </footer>
  );
}
