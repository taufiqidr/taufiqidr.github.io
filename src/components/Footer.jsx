import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaBootstrap,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div>
      <footer className="p-xxl-5 static-bottom border-top bg-primary fs-5">
        <div className="container">
          <div className="nav justify-content-center mb-3 mt-3">
            <span className="text-light">
              A portfolio website by taufiqidr &copy; 2022{" "}
            </span>
          </div>
          <ul className="nav justify-content-center pb-3 mb-3 text-center">
            <li className="nav-item me-3">
              <a
                className="text-light"
                href="https://github.com/taufiqidr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className="text-light"
                href="https://www.linkedin.com/in/taufiqidr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-light"
                href="https://twitter.com/taufiqidr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="nav-item ms-3 me-3">
              <a
                className="text-light"
                href="https://www.instagram.com/taufiqidr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-light"
                href="https://www.facebook.com/taufiqidr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="nav-item ms-3">
              <a
                className="text-light"
                href="mailto:taufiqmck@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
          <div className="row">
            <p className="text-center fs-6">
              <a
                href="https://www.flaticon.com/free-icons/t"
                className="text-light text-decoration-none"
              >
                T icons created by Freepik - Flaticon
              </a>
            </p>
          </div>
          <div className="row">
            <p className="text-center">
              <a
                href="https://getbootstrap.com/"
                className="text-light text-decoration-none"
              >
                Made with React + Bootstrap
                <br />
                <span className="fs-1">
                  <FaReact />
                </span>
                <span className="fs-1 me-2 ms-2">+</span>
                <span className="fs-1">
                  <FaBootstrap />
                </span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
