import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaBootstrap,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaGithub,
  FaWind,
  FaPlus,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bottom-0 z-10 bg-slate-700 text-white flex flex-col items-center gap-y-3"
      id="footer"
    >
      <p className="text-base mt-3">
        A portfolio website by taufiqidr &copy; 2022
      </p>
      <ul className="flex flex-row justify-between gap-x-3">
        <li className="text-base hover:text-blue-500">
          <a
            className="text-white hover:text-blue-500"
            href={"https://github.com/taufiqidr"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="text-base hover:text-blue-500">
          <a
            className="text-white hover:text-blue-500"
            href={"https://www.linkedin.com/in/taufiqidr/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="text-base hover:text-blue-500">
          <a
            className="text-white hover:text-blue-500"
            href={"https://twitter.com/taufiqidr"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li className="text-base hover:text-blue-500">
          <a
            className="text-white hover:text-blue-500"
            href={"https://www.instagram.com/taufiqidr/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="text-base hover:text-blue-500">
          <a
            className="text-white hover:text-blue-500"
            href={"https://www.facebook.com/taufiqidr/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li className="text-base hover:text-blue-500">
          <a
            className="text-white hover:text-blue-500"
            href={"mailto:taufiqmck@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </li>
      </ul>
      <p className="text-center text-base">
        <a
          href="https://www.flaticon.com/free-icons/t"
          className="text-light text-decoration-none"
        >
          T icons created by Freepik - Flaticon
        </a>
      </p>
      <div className="flex flex-col ">
        <a href="https://getbootstrap.com/" className="text-center text-base">
          Made with React + Taildwind CSS
          <div className="flex flex-row justify-center my-3 gap-x-3">
            {<FaReact />} {<FaPlus />} {<FaWind />}
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
