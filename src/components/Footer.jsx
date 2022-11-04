import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaBootstrap,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="p-xxl-5 static-bottom border-top bg-primary fs-4">
        <div className="container">
          <div className="nav justify-content-center mb-3 mt-3">
            <span className="text-light">Made by taufiqidr &copy; 2022 </span>
          </div>
          <ul class="nav justify-content-center pb-3 mb-3 text-center">
            <li class="nav-item me-5">
              <a
                className="text-light"
                href="https://www.linkedin.com/in/taufiqidr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li class="nav-item">
              <a
                className="text-light"
                href="https://twitter.com/taufiqidr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li class="nav-item ms-5 me-5">
              <a
                className="text-light"
                href="https://www.instagram.com/taufiqidr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li class="nav-item">
              <a
                className="text-light"
                href="https://www.facebook.com/taufiqidr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li class="nav-item ms-5">
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
            <p className="text-center">
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
                Made with Bootstrap 5{" "}
                <h2>
                  <FaBootstrap />
                </h2>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
