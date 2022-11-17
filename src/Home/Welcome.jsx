const Welcome = () => {
  return (
    <section
      id="welcome"
      className="min-h-[calc(100vh-4rem)] bg-black text-center text-white flex items-center justify-center"
    >
      <div className="mx-4">
        <h1 className="sm:text-8xl text-5xl font-mono mb-6">Hello World</h1>
        <p className="sm:text-4xl text-3xl">
          My name is Taufiqurrahman Idrus. I'm a full-stack web developer
        </p>
        <p className="sm:text-4xl text-3xl">and welcome to my portfolio page</p>
      </div>
    </section>
  );
};

export default Welcome;
