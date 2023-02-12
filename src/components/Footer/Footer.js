import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="icon">
        <a href="https://github.com" target="blank">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com" target="blank">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/5491121664771" target="blank">
          <FaWhatsappSquare />
        </a>
        <a href="mailto:hola@gmail.com">
          <ImMail />
        </a>
      </div>
      <div>
        <p className="text">Copyright © 2022 - All right reserved</p>
        <p className="text"> Beer&Burger </p>
      </div>
      <div>
        <p className="text">Ariel Gonzalez</p>
      </div>
    </footer>
  );
}
export default Footer;
