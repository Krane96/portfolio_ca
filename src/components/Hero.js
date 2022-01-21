

const Hero = () => {
    return (
        <div className="hero_section" style={{display:"flex",justifyContent:"space-evenly"}}>
            <div className="left_div">
                <h1>Welcome To <br/>My Personal Portfolio</h1>
                <p>Hey, My name is Martin Lian Krane.<br/> I'm currently a student at Noroff Vocational School in Bergen.<br/> Here I am studying Front-End Development for 2 years.</p>
                <a href="#about_section">More About Me</a>
                <hr className="section_divider"/>
            </div>
            <div className="right_div">
            <img src="../../images/hero.svg"></img>
            </div>
           
        </div>
    );
};

export default Hero;
