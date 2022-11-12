import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] text-white scroll-mt-16 flex flex-col"
    >
      <div className="">
        <h1 className="text-5xl font-bold text-center my-4">Contacts</h1>
        <p className="text-xl text-center my-4">
          I'm still open to job opportunities and collaboration. If you are
          interested in working with me, feel free to contact me on my social
          media account
        </p>
      </div>
      <div className="flex justify-center items-center h-screen">
        <ul className="grid grid-cols-3 gap-x-10 gap-y-10 sm:flex sm:flex-row sm:justify-evenly">
          <li className="text-7xl hover:text-blue-500">
            <a
              className="text-white hover:text-blue-500"
              href={"https://github.com/taufiqidr"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="text-7xl hover:text-blue-500">
            <a
              className="text-white hover:text-blue-500"
              href={"https://www.linkedin.com/in/taufiqidr/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="text-7xl hover:text-blue-500">
            <a
              className="text-white hover:text-blue-500"
              href={"https://twitter.com/taufiqidr"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="text-7xl hover:text-blue-500">
            <a
              className="text-white hover:text-blue-500"
              href={"https://www.instagram.com/taufiqidr/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="text-7xl hover:text-blue-500">
            <a
              className="text-white hover:text-blue-500"
              href={"https://www.facebook.com/taufiqidr/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li className="text-7xl hover:text-blue-500">
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
      </div>
    </section>
  );
};

export default Contact;
