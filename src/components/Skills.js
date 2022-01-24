const Skills = () => {
  return (
      <>
      <h2  className="section_title">What can I do?</h2>
      <div id="skills" style={{display:"flex",justifyContent:"space-evenly"}}>
        <div className="skills_frontend">
          <h3>Front-End</h3>
          <ul>
              <li  style={{color:"#bc4749"}}><i className="fab fa-html5"></i>HTML</li>
              <li style={{color:"#3a86ff"}}><i className="fab fa-css3-alt"></i>CSS</li>
              <li style={{color:"#ffbe0b"}}><i className="fab fa-js-square"></i>JavaScript</li>
              <li style={{color:"#219ebc"}}><i className="fab fa-react"></i>React</li>
          </ul>
        </div>
        <div style={{textAlign:"center"}} className="ui_ux">
          <h3>UI/UX</h3>
          <p>Familiar with tools such as <span style={{color:"#6369F8"}}>Figma</span>,
          <span style={{color:"#D77ED9"}}> Adobe XD</span>, <span style={{color:"#f07167"}}>Elementor</span> and <span style={{color:"#219ebc"}}>Wordpress</span></p>
        </div>
      </div>
      <hr className="section_divider" style={{margin:"6rem auto"}}/>
      </>
  );
};

export default Skills;

