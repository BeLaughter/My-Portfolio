import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Body.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Body() {
  // Initialize AOS
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="body">
      <div className="flex-container">
        <div className="flex-itemb">
          <p className="bodyp1">Hi, </p>
          <h1 className="bodyh1">
            I'm
            <span
              className="orange"
              data-aos="zoom-in-right"
              data-aos-duration="500"
            >
              Benson <br></br>Iremide
            </span>
          </h1>
          <p className="bodyp2 " data-aos="fade-right" data-aos-duration="1000">
            I'm a Frontend Web Developer based in Lagos. With over 2 years of
            experience in creating responsive, user-friendly web applications, I
            specialize in React.js . Explore my portfolio to see my work and get
            to know more about my skills and projects.
          </p>
          <a href="http://Instagram.com/that.laughter" target="blank">
            <FaInstagram className="iconsz" />
          </a>
          <a href="https://wa.link/yxwwka" target="blank">
            <FaWhatsapp className="iconsz" />
          </a>
          <a href="#" target="blank">
            <FaLinkedin className="iconsz" />
          </a>
        </div>
        <div className="flex-itemb">
          <img
            src="https://i.ibb.co/q30G4jWC/IMG-6412.jpg"
            alt="Image 3"
            className="d-block w-100 imgh"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Body;
