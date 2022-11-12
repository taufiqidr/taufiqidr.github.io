import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black h-auto min-h-[calc(100vh-4rem)] text-white scroll-mt-16 flex flex-col sm:flex-row-reverse sm:items-center mx-4"
    >
      <div className="mx-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/IMG_20220607_113010.jpg?alt=media&token=317d7603-963c-4ee8-a66f-ba54c5fbda08"
          className="rounded-full"
          alt="taufiq"
          loading="lazy"
        />
      </div>
      <div className="mx-4">
        <h1 className="text-5xl font-bold text-center sm:mb-10">About Me</h1>
        <p className="sm:text-xl text-base text-justify">
          I am a fresh graduate with a bachelor's degree in Computer Science
          (S.Kom) from UIN Maulana Malik Ibrahim Malang. I love to code and
          solve problems. My main interest is in web development, more
          specifically in backend service. I mainly code in Javascript with
          Express framework for backend development. I am actively looking for a
          job to start my career in the IT world.
        </p>
      </div>
    </section>
  );
};

export default About;
