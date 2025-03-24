import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Image from 'next/image';
import service1 from "./Images/service-1.jpg";
import service2 from "./Images/service-2.jpg";
import service3 from "./Images/service-3.jpg";
import service4 from "./Images/service-4.jpg";

export default function Service() {
  return (
    <section className="py-5 bg-light animate__animated animate__fadeIn">
      <br />
      <br />
      <br />
      <div className="container text-center">
        <h2 className="fw-bold display-5 mb-4 text-info animate__animated animate__zoomInDown">
          Our Premium Technology & Creative Services
        </h2>
        <div className="row g-4">
          {[
            { img: service2, title: "App Development", text: "We build innovative mobile apps tailored to your business, ensuring exceptional performance.", delay: "1s" },
            { img: service1, title: "AI Automation", text: "Optimize operations with cutting-edge AI automation to boost efficiency.", delay: "2s" },
            { img: service3, title: "Web Development", text: "Create responsive and visually stunning websites to enhance your online presence.", delay: "3s" },
            { img: service4, title: "Graphics Design", text: "Captivating graphic designs that effectively communicate your brand message.", delay: "4s" },
          ].map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className={`card shadow-lg rounded-4 h-100 custom-hover animate__animated animate__fadeInUp animate__delay-${service.delay}`}>
                <Image src={service.img} className="card-img-top rounded-top-4" alt={service.title} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}