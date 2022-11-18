const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black h-auto min-h-[calc(100vh-4rem)] text-white scroll-mt-16  flex flex-col justify-center mx-4"
    >
      <div className="mx-4 mb-4 justify-center ">
        <h1 className="text-5xl font-bold text-center sm:mb-10 mb-4">
          Projects
        </h1>
        <p className="text-xl text-center">
          I have worked with a number of projects. Mostly are a web page that I
          build on my own. Some of them are live and some are still in
          development.
        </p>
      </div>
      <div className="flex justify-center flex-col sm:flex-row sm:justify-evenly space-y-4 sm:space-y-0">
        <div className="bg-white text-black rounded-xl mx-4 sm:w-72 h-96 shadow-md shadow-white">
          <div className="rounded-t-xl h-40 border-b">
            <a href="https://cuapan.github.io/" className="" target={"_blank"}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/Screenshot_127.png?alt=media&token=ec74130c-da78-4c05-8f95-a45e1fa5afc3"
                alt="Cuapan homepage screenshot"
                className="rounded-t-xl object-fill"
              />
            </a>
          </div>
          <div className="text-left">
            <p className="font-semibold underline m-2">Cuapan App</p>
            <p className="font-base m-2">
              A Twitter-like social media app. This is my first project that I
              developed with the MERN stack. App is build with Vite and deployed
              to Github pages.
            </p>
            <strong className="font-bold m-2 my-auto">Status: Live 🔴</strong>
          </div>
        </div>
        <div className="bg-white text-black rounded-xl mx-4 sm:w-72 h-96 shadow-md shadow-white">
          <div className="rounded-t-xl h-40 border-b">
            <a
              href="https://colab.research.google.com/drive/10xa9-qA4rYnIhtTL8QCOAX9ImNKj1Twy?usp=sharing"
              className=""
              target={"_blank"}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/Screenshot_128.png?alt=media&token=c4abccd1-862a-4894-af22-359c83d22109"
                alt="Apple Plant Disease Identification"
                className="rounded-t-xl object-fill"
              />
            </a>
          </div>
          <div className="text-left">
            <p className="font-semibold underline m-2">
              Apple Plant Disease Identification
            </p>
            <p className="font-base m-2">
              In this project I write a ML model that can identify a disease in
              Manalagi apple plant. The model is written in Python with
              Tensorflow and Keras as the framework.
            </p>
            <strong className="font-bold m-2">Status: Live 🔴</strong>
          </div>
        </div>
        <div className="bg-white text-black rounded-xl mx-4 sm:w-72 h-96 shadow-md shadow-white">
          <div className="rounded-t-xl h-40 border-b">
            <a
              href="https://taufiqidr.github.io/"
              className=""
              target={"_blank"}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/Screenshot_132.png?alt=media&token=059043cf-7c6f-4ddf-a96e-626b4154c1e6"
                alt="Personal portfolio web page"
                className="rounded-t-xl object-fill"
              />
            </a>
          </div>
          <div className="text-left">
            <p className="font-semibold underline m-2">
              Personal portfolio web page
            </p>
            <p className="font-base m-2">
              This is the very page you are seeing this content right now. This
              site is developed using React and Bootstrap, build with Vite, and
              deployed to GitHub Pages.
            </p>
            <strong className="font-bold m-2">Status: Live 🔴</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
