import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="flex-container foot pt10">
        <div className="flex-item">
          <ul>
            <li>
              <h1> Contact</h1>
            </li>
            <li>Email: Laughteriremide@gmail.com</li>
            <li>Contact: 08069374133</li>
            <li>
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
            </li>
          </ul>
        </div>
        <div className="flex-item">
          <ul>
            <li>
              <h1>Skills</h1>
            </li>
            <li>
              <p>-Html & Css</p>
            </li>
            <li>
              <p>-Javascript </p>
            </li>
            <li>
              <p>-Bootstrap & Tailwind Css </p>
            </li>
            <li>
              <p>-React,Vite </p>
            </li>
            <li>
              <p>-Mongodb, Express </p>
            </li>
          </ul>
        </div>
        <div className="flex-item4">
          <h1 className="pfoot">NEWS LETTER</h1>
          <p className="">Stay updated with my latest projects and news</p>
          <div className="d-flex">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Email"
            ></input>
            <button className="btn btn-primary bgorange " type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}

export default Footer;
