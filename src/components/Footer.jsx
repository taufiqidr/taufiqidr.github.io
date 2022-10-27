const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a className="nav-link text-muted" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </footer>
      <p className="text-center">
        <a href="https://www.flaticon.com/free-icons/t">
          T icons created by Freepik - Flaticon
        </a>
      </p>
    </div>
  );
};

export default Footer;
