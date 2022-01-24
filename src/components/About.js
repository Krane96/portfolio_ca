const About = () => {
  return (
    <>
    <div id="about_section" style={{display:"flex",justifyContent:"space-evenly"}}>
        <div className="about_content">
            <h2>About Me</h2>
            <p>Hello My name is Martin Lian Krane, i'm a 25 year old boy living in Bergen, Norway.
                I am currently studying Frontend for two years and i'm done summer 2022. <br/><br/>
                I am a very active and nerdy person, I love everything from technology, gaming, tv and working out. <br/><br/>
                I have learned a lot from my short time as a programmer and am eager to learn more.
                Got a good eye for details and I am a fast learner.
            </p>
        </div>
        <div className="about_image">
            <img src="../../images/bitmoji_bg.png" alt="selfie"></img>
        </div>
    </div>
    </>
);
};

export default About;
