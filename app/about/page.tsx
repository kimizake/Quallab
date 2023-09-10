const About = () => {
  return (
    <div className="flex flex-col gap-5 py-5 px-10">
      <div className="flex flex-col gap-5">
        <h1>About Us</h1>
        <p className="px-5">
          <b>Quollab</b> is a collaboration platform designed exclusively for
          aspiring researchers
        </p>
        <p className="px-5">
          Our mission is to bridge the gap between the next generation of
          medical professionals and the world of research, enabling students to
          build their portfolios and contribute meaningfully to academia
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h1>Our Vision</h1>
        <p className="px-5">
          We envision a future where every student has the opportunity to
          actively engage in groundbreaking research, gain valuable hands-on
          experience, and make a lasting impact. We believe that connecting
          students with researchers is the key to nurturing talent, fostering
          innovation, and advancing science
        </p>
      </div>
    </div>
  );
};

export default About;
