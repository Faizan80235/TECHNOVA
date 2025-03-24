import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";

export default function UnderConstruction() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (showPopup) {
      // Reload the page after 5 seconds (adjust as needed)
      const timer = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    showPopup && (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
        style={{ zIndex: "9999" }}
      >
        <div className="bg-white rounded-4 p-4 text-center shadow-lg" style={{ maxWidth: "400px" }}>
          <h4 className="fw-bold text-warning mb-3">🚧 Under Construction</h4>
          <p className="mb-3 text-secondary">
            This project section is currently under construction.<br />
            Please check back later!
          </p>
          <button
            className="btn btn-info text-white fw-bold px-4 py-2 rounded-pill shadow"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}
