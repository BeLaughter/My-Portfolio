import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Body.css";
import { useEffect } from "react";
import mypic2 from "../assets/mypic2.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Body() {
  // Initialize AOS
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="body">
      <div className="flex-containerz">
        <div className="flex-itemb">
          <p
            className="bodyp1"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            Hi,{" "}
          </p>
          <h1
            className="bodyh1"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            I'm
            <span className="orange">
              Benson <br></br>Iremide
            </span>
          </h1>
          <p className="bodyp2 " data-aos="fade-right" data-aos-duration="1500">
            I'm a Frontend Web Developer based in Lagos. <br></br>With over 2
            years of experience in creating responsive, user-friendly web
            applications, I specialize in React.js . Explore my portfolio to see
            my work and get to know more about my skills and projects.
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
          <div className="img-body bouncing-circle">
            <img
              src={mypic2}
              alt="Image 3"
              className="d-block w-100 imgh"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
