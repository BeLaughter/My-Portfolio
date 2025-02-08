import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="flex-container">
        <div className="flex-itemb">
          <p className="bodyp1">Hi, </p>
          <h1 className="bodyh1">
            I'm{" "}
            <span className="orange">
              Benson <br></br>Iremide
            </span>
          </h1>
          <p className="bodyp2">
            I'm a Frontend Web Developer based in Lagos. With over 2 years of
            experience in creating responsive, user-friendly web applications, I
            specialize in React.js . Explore my portfolio to see my work and get
            to know more about my skills and projects.
          </p>
          <a href="#" target="blank">
            <FaFacebook className="iconsz" />
          </a>
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
            src="https://cdn.pixabay.com/photo/2022/08/24/15/42/library-7408106_1280.jpg"
            alt="Image 3"
            className="d-block w-100"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Body;
