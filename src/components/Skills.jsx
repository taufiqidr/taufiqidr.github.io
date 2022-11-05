import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="container bg-dark h-auto">
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-bold text-light">Skills and Tools</h1>
        <p className="fs-5 text-light">
          As a software engineer, I have some skills that I possess and tools
          that I use to get my job done. I decided to divide it into 3
          categories:{" "}
        </p>
      </div>
      <div className="row mb-3 text-center">
        <div className="col ">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Programming Language</h4>
            </div>
            <div className="card-body h-auto">
              <h1 className="fs-5 text-decoration-underline">
                Frequently Used
              </h1>
              <ul className="list-unstyled">
                <li>Javascript</li>
                <li>Python</li>
              </ul>
              <h1 className="fs-5 text-decoration-underline">Rarely Used</h1>
              <ul className="list-unstyled mt-3">
                <li>Java</li>
                <li>PHP</li>
                <li>C/C++</li>
                <li>Go</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-info h-auto">
            <div className="card-header py-3 text-bg-info border-info">
              <h4 className="my-0 fw-normal">Frameworks</h4>
            </div>
            <div className="card-body ">
              <h1 className="fs-5 text-decoration-underline">
                Frequently Used
              </h1>
              <ul className="list-unstyled">
                <li>React JS</li>
                <li>Express JS</li>
                <li>Bootstrap</li>
              </ul>
              <h1 className="fs-5 text-decoration-underline">Rarely Used</h1>
              <ul className="list-unstyled mt-3">
                <li>Keras/Tensorflow</li>
                <li>CodeIgniter</li>
                <li>Laravel</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-secondary">
            <div className="card-header py-3 text-bg-secondary border-secondary">
              <h4 className="my-0 fw-normal">Tools</h4>
            </div>
            <div className="card-body border border-primary">
              <h1 className="fs-5 text-decoration-underline">
                Frequently Used
              </h1>
              <ul className="list-unstyled mt-3">
                <li>Git</li>
                <li>Github</li>
                <li>Postman</li>
                <li>Google Chrome</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
