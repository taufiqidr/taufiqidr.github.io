import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import Icon from "./Icon";
const Contact = () => {
  return (
    <section id="contact" className="bg-dark container content">
      <h1 className="display-1 text-light text-center">Contacts</h1>
      <h1 className="display-6 text-light text-center">
        I'm still open to job opportunities and collaboration. If you are
        interested in working with me, feel free to contact me on my social
        media account
      </h1>
      <ul className="nav container-fluid justify-content-center pb-3 mb-3 text-center mt-5">
        <li className="nav-item me-5 display-1">
          <Icon icon={<FaGithub />} link={"https://github.com/taufiqidr"} />
        </li>
        <li className="nav-item me-5 display-1">
          <Icon
            icon={<FaLinkedin />}
            link={"https://www.linkedin.com/in/taufiqidr/"}
          />
        </li>
        <li className="nav-item display-1">
          <Icon icon={<FaTwitter />} link={"https://twitter.com/taufiqidr"} />
        </li>
        <li className="nav-item ms-5 me-5 display-1">
          <Icon
            icon={<FaInstagram />}
            link={"https://www.instagram.com/taufiqidr/"}
          />
        </li>
        <li className="nav-item display-1">
          <Icon
            icon={<FaFacebook />}
            link={"https://www.facebook.com/taufiqidr/"}
          />
        </li>
        <li className="nav-item ms-5 display-1">
          <Icon icon={<FaEnvelope />} link={"mailto:taufiqmck@gmail.com"} />
        </li>
      </ul>
    </section>
  );
};

export default Contact;
