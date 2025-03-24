import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is loaded
import 'animate.css';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 px-4 position-fixed w-100 animate__animated animate__fadeInDown animate__slower" style={{ zIndex: 1000 }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-primary fw-bold fs-2 animate__animated animate__zoomIn" href="/Components/about">
          TECHNOVA
        </Link>
        <button
          className="navbar-toggler animate__animated animate__pulse animate__infinite"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__lightSpeedInLeft" href="/Components/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__lightSpeedInRight" href="/Components/service">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__fadeIn animate__delay-1s" href="/Components/Team">Our Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__fadeIn animate__delay-2s" href="/Components/Project">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate__animated animate__fadeIn animate__delay-3s" href="/Components/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link href="/enroll" className="btn btn-info text-white rounded-pill px-3 animate__animated animate__heartBeat animate__infinite animate__slower">
                Enroll Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}