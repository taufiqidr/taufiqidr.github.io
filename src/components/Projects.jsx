import { FaLink, FaWrench } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="bg-dark container h-auto mb-3">
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-bold text-light">Highligted Projects</h1>
        <p className="fs-5 text-light">
          I have worked with a number of projects. Mostly are a web page that I
          build on my own. Some of them are live and some are still in
          development.
        </p>
      </div>
      <div className="album bg-dark">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <a
                  href="https://cuapan.github.io/"
                  className="text-decoration-none text-bg-light"
                  target={"_blank"}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/Screenshot_127.png?alt=media&token=ec74130c-da78-4c05-8f95-a45e1fa5afc3"
                    alt="Cuapan homepage screenshot"
                    width="100%"
                    height="225"
                    className="bd-placeholder-img card-img-top"
                  />
                </a>
                <div className="card-body">
                  <p className="card-text h6">
                    <a
                      href="https://cuapan.github.io/"
                      className="text-decoration-none text-bg-light"
                      target={"_blank"}
                    >
                      Cuapan App
                    </a>
                  </p>
                  <p className="card-text">
                    A Twitter-like social media app. This is my first project
                    that I developed with the MERN stack. App is build with Vite
                    and deployed to Github pages.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="">Status: Live 🔴</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <a
                  href="https://colab.research.google.com/drive/10xa9-qA4rYnIhtTL8QCOAX9ImNKj1Twy?usp=sharing"
                  className="text-decoration-none text-bg-light"
                  target={"_blank"}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/Screenshot_128.png?alt=media&token=c4abccd1-862a-4894-af22-359c83d22109"
                    alt="snippet of code from google colab"
                    width="100%"
                    height="225"
                    className="bd-placeholder-img card-img-top"
                  />
                </a>
                <div className="card-body">
                  <p className="card-text h6">
                    <a
                      href="https://colab.research.google.com/drive/10xa9-qA4rYnIhtTL8QCOAX9ImNKj1Twy?usp=sharing"
                      className="text-decoration-none text-bg-light"
                      target={"_blank"}
                    >
                      Apple Plant Disease Detection
                    </a>
                  </p>
                  <p className="card-text">
                    In this project I write a ML model that can identify a
                    disease in Manalagi apple plant. The model is written in
                    Python with Tensorflow and Keras as the framework. This
                    model achieved an average accuracy value of 88.60%, an
                    average sensitivity of 77.20% and an average specificity of
                    92.40%.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="">Status: Live 🔴</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <a
                  href="https://taufiqidr.github.io/"
                  className="text-decoration-none text-bg-light"
                  target={"_blank"}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/Screenshot_129.png?alt=media&token=d2a5791e-28c5-404c-b1b6-01457b064929"
                    alt="Personal portfolio web page"
                    width="100%"
                    height="225"
                    className="bd-placeholder-img card-img-top"
                  />
                </a>
                <div className="card-body">
                  <p className="card-text h6">
                    <a
                      href="https://taufiqidr.github.io/"
                      className="text-decoration-none text-bg-light"
                      target={"_blank"}
                    >
                      Personal portfolio web page
                    </a>
                  </p>
                  <p className="card-text">
                    This is the very page you are seeing this content right now.
                    This site is developed using React and Bootstrap, build with
                    Vite, and deployed to GitHub Pages.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="">Status: Live 🔴</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top "
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Tokofication
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text h6">Tokofication App</p>
                  <p className="card-text">
                    In this project I plan to build an E-commerce app. The app
                    is still using the MERN stack and build with Next JS
                    framework.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="">Status: In Development ⚪</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
