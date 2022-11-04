import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="container bg-dark h-auto">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal text-light">Skills and Tools</h1>
        <p class="fs-5 text-light">
          As a software engineer, I have some skills that I possess and tools
          that I use to get my job done. I decided to divide it into 3
          categories:{" "}
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Frequently Used</h4>
            </div>
            <div className="card-body">
              <h1 className="fs-5 text-decoration-underline">
                Frontend Development
              </h1>
              <ul className="list-unstyled">
                <li>React JS</li>
                <li>Bootstrap</li>
              </ul>
              <h1 className="fs-5 text-decoration-underline">
                Backend Development
              </h1>
              <ul className="list-unstyled mt-3">
                <li>Express JS</li>
                <li>Mongoose</li>
                <li>Sequelize</li>
              </ul>
              <h1 className="fs-5 text-decoration-underline">Tools</h1>
              <ul className="list-unstyled mt-3">
                <li>Visual Studio Code</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-info">
            <div className="card-header py-3 text-bg-info border-info">
              <h4 className="my-0 fw-normal">Used Sometimes</h4>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-secondary">
            <div className="card-header py-3 text-bg-secondary border-secondary">
              <h4 className="my-0 fw-normal">Rarely Used</h4>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
