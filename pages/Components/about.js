import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import about1 from "./Images/about-2.jpg";
import about2 from "./Images/about-3.png";
import Footer from "./footer";
import about3 from "./Images/add.jpg"
export default function About() {
  return (
    <div className=" py-5">
      {/* Top Section */}
      <div className="row align-items-center container">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="mb-3 shadow rounded overflow-hidden">
            <Image src={about3} alt="Meeting" className="img-fluid w-100" />
          </div>
          <div className="shadow rounded overflow-hidden mt-3">
            <Image src={about1} alt="Development" className="img-fluid w-100" />
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="text-primary">About Us</h2>
          <h3 className="display-5 fw-bold">
            Your Trusted Partner in Digital Transformation
          </h3>
          <p className="text-muted">
            At <strong>TechNova Solutions</strong>, we pride ourselves on delivering exceptional value and innovation to our
            global clientele. From crafting stunning websites to designing state-of-the-art mobile
            applications, we have built our reputation as a trusted leader in the technology and digital
            solutions industry.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Website Development
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Mobile App Development
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> AI Automation
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Graphic Design
            </li>
          </ul>

          {/* Styled Button */}
          <button className="btn btn-primary mt-3 shadow-lg rounded-pill px-4 py-2 fw-bold text-white border-0">
            <i className="fas fa-rocket me-2"></i> Discover More
          </button>
        </div>
      </div>

      {/* Trusted Customers */}
      <div className="text-center mt-4">
        <p className="text-muted">🌍 <strong>5m+ Trusted Global Customers</strong></p>
      </div>

      {/* Mission & Vision Section */}
      <div className="w-100 bg-light shadow-lg rounded-3 mt-5 py-5">
        <div className="container">
          <div className="row">
            {/* Mission Section */}
            <div className="col-md-6 p-4">
              <h2 className="text-primary fw-bold mb-3">🚀 Our Mission</h2>
              <p className="text-muted fs-5">
                Our mission is to empower businesses by providing innovative digital solutions that drive growth,
                efficiency, and success in the ever-evolving technological landscape.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                  Excellence in Execution
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                  Sustainable Growth
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                  Customer-Centric Approach
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                  Ethical Practices
                </li>
              </ul>
            </div>

            {/* Vision Section */}
            <div className="col-md-6 p-4 border-start">
              <h2 className="text-primary fw-bold mb-3">🌟 Our Vision</h2>
              <p className="text-muted fs-5">
                Our vision is to be the global leader in digital transformation, inspiring innovation and setting
                new standards in technology solutions for businesses of all sizes.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                  Innovation at the Core
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                  Collaborative Global Network
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                  Social Responsibility
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                  Continuous Improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
