import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import 'animate.css';

export default function Contact() {
  return (
    <section className="py-5 bg-light animate__animated animate__fadeIn">
      <br />
      <br />
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 animate__animated animate__fadeInLeft animate__slow">
            <h6 className="text-info fw-bold">Contact Us</h6>
            <h2 className="fw-bold text-dark">Get In Touch With Us</h2>
            <p className="text-secondary">
              Fill in the form below and we&apos;ll get back to you promptly.
            </p>

            <div className="mb-4">
              {[{ icon: faLocationDot, title: "Address", text: "Lahore, Pakistan" },
                { icon: faPhone, title: "Mobile", text: "+92316-1435800", delay: "1s" },
                { icon: faEnvelope, title: "Email", text: "TECHNOVA@gmail.com", delay: "2s" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`d-flex align-items-center mb-3 animate__animated animate__fadeInUp animate__delay-${item.delay || "0s"}`}
                >
                  <div
                    className="bg-info text-white rounded-circle d-flex justify-content-center align-items-center me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <FontAwesomeIcon icon={item.icon} size="lg" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="mb-0 text-secondary">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 animate__animated animate__fadeIn animate__delay-3s">
              {[faTwitter, faInstagram, faLinkedinIn].map((icon, index) => (
                <a key={index} href="#" className="btn btn-dark rounded-circle me-2">
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-6 animate__animated animate__fadeInRight animate__slow">
            <form>
              <div className="row g-3">
                {[{ type: "text", placeholder: "First Name" },
                  { type: "text", placeholder: "Last Name" },
                  { type: "email", placeholder: "Your Email" },
                  { type: "tel", placeholder: "Phone Number" },
                ].map((input, index) => (
                  <div key={index} className={`col-${index < 2 ? "md-6" : "12"}`}>
                    <input
                      type={input.type}
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder={input.placeholder}
                      required
                    />
                  </div>
                ))}

                <div className="col-12">
                  <textarea
                    rows="4"
                    className="form-control form-control-lg rounded-3 shadow-sm"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn w-100 rounded-3 py-3 shadow-sm animate__animated animate__pulse animate__infinite animate__slower"
                    style={{ backgroundColor: "#7ED6DF", color: "white" }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}