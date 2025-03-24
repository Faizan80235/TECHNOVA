import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import team1 from "./Images/Team-1.jpeg";
import team2 from "./Images/Team-2.jpeg";
import team3 from "./Images/Team-3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

export default function Team() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-2 text-dark">Our Bytix Solutions Company</h2>
        <h4 className="fw-bold text-dark mb-4">Dedicated Team Member</h4>

        <div className="row justify-content-center g-4">
          {/* Team Member 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow border-0 rounded-3">
              <div className="position-relative">
                <Image
                  src={team1}
                  alt="Yasir Mahmood"
                  className="card-img-top rounded-top"
                />
                <div
                  className="position-absolute top-0 end-0 m-2 bg-info text-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "30px", height: "30px" }}
                >
                  <FontAwesomeIcon icon={faShareAlt} />
                </div>
              </div>
              <div className="card-body bg-dark text-white rounded-bottom">
                <h6 className="fw-bold mb-1">Faizan</h6>
                <p className="mb-0 small">Co-Founder</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow border-0 rounded-3">
              <div className="position-relative">
                <Image
                  src={team2}
                  alt="Adeel Ahmad"
                  className="card-img-top rounded-top"
                />
                <div
                  className="position-absolute top-0 end-0 m-2 bg-info text-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "30px", height: "30px" }}
                >
                  <FontAwesomeIcon icon={faShareAlt} />
                </div>
              </div>
              <div className="card-body bg-dark text-white rounded-bottom">
                <h6 className="fw-bold mb-1">Hanzla</h6>
                <p className="mb-0 small">Co-Founder</p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow border-0 rounded-3">
              <div className="position-relative">
                <Image
                  src={team3}
                  alt="Usman Asghar"
                  className="card-img-top rounded-top"
                />
                <div
                  className="position-absolute top-0 end-0 m-2 bg-info text-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "30px", height: "30px" }}
                >
                  <FontAwesomeIcon icon={faShareAlt} />
                </div>
              </div>
              <div className="card-body bg-dark text-white rounded-bottom">
                <h6 className="fw-bold mb-1"> Ogeze</h6>
                <p className="mb-0 small">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
