import "./Header.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Header() {
  // Initialize AOS
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="head">
      <div className="flex-container">
        <div className="flex-item2">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
              <a
                className="navbar-brand orange"
                data-aos="flip-right"
                data-aos-duration="1000"
                id="nav"
                href="#"
              >
                BENSON
              </a>
              <button
                className="navbar-toggler-light hiddenonlap"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#project">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
