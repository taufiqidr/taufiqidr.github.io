import React from "react";

const About = () => {
  return (
    <section id="about" className="container bg-dark h-auto col-xxl-8 px-4">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/IMG_20220607_113010.jpg?alt=media&token=317d7603-963c-4ee8-a66f-ba54c5fbda08"
            className="d-block mx-lg-auto img-fluid rounded-circle"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 text-light">About Me</h1>
          <p className="lead  text-light">
            I am a fresh graduate with a bachelor's degree in Computer Science
            (S.Kom) from UIN Maulana Malik Ibrahim Malang. I love to code and
            solve problems. My main interest is in web development, more
            specifically in backend service. I mainly code in Javascript with
            Express framework for backend development. I am actively looking for
            a job to start my career in the IT world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
