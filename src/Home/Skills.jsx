import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black h-auto min-h-[calc(100vh-4rem)] text-white scroll-mt-16 flex flex-col justify-center mx-4"
    >
      <div className="mx-4 mb-4 justify-center ">
        <h1 className="text-5xl font-bold text-center sm:mb-10">
          Skills and Tools
        </h1>
        <p className="text-xl text-center">
          As a software engineer, I have some skills that I possess and tools
          that I use to get my job done. I decided to divide it into 3
          categories:
        </p>
      </div>
      <div className="flex justify-center flex-col sm:flex-row sm:justify-evenly space-y-4 sm:space-y-0">
        <div className="bg-white text-black rounded-xl mx-4 sm:w-64 h-72">
          <div className="bg-blue-700 p-3 rounded-t-xl">
            <h4 className="font-semibold text-center text-white">
              Programming Language
            </h4>
          </div>
          <div className="text-center space-y-1">
            <p className="font-semibold underline">Frequently Used</p>
            <ul className="">
              <li>Javascript</li>
              <li>Python</li>
            </ul>
            <p className="font-semibold underline">Rarely Used</p>
            <ul className="">
              <li>Java</li>
              <li>PHP</li>
              <li>C/C++</li>
              <li>Go</li>
            </ul>
          </div>
        </div>
        <div className="bg-white text-black rounded-xl mx-4 sm:w-64 h-72">
          <div className="bg-blue-500 p-3 rounded-t-xl">
            <h4 className="font-semibold text-center text-black">Frameworks</h4>
          </div>
          <div className="text-center space-y-1">
            <p className="font-semibold underline">Frequently Used</p>
            <ul className="">
              <li>React JS</li>
              <li>Express JS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
            <p className="font-semibold underline">Rarely Used</p>
            <ul className="">
              <li>Keras/Tensorflow</li>
              <li>CodeIgniter</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
        <div className="bg-white text-black rounded-xl mx-4 sm:w-64 h-72">
          <div className="bg-blue-300 p-3 rounded-t-xl">
            <h4 className="font-semibold text-center text-black">Tools</h4>
          </div>
          <div className="text-center space-y-1">
            <p className="font-semibold underline">Frequently Used</p>
            <ul className="">
              <li>Git</li>
              <li>Github</li>
              <li>Postman</li>
              <li>Google Chrome</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
