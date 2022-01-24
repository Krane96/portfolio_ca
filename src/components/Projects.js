const Projects = () => {
    return (
        <>
            <h2 className="section_title">Projects</h2>
            <div className="project_container grid" id="projects_nav">
                <div className="project_card">
                    <div className="project_image">
                        <img src="../../images/boostcraft.jpg" alt="website"></img>
                    </div>
                <div className="project_content">
                    <h3>World of Boostcraft</h3>
                    <p>E-commerce site made by with vanilla JavaScript, HTML and CSS.
                    This was a school project and has some features missing that were not part of the tasks.
                    Strapi was used as an API to get products/users and local storage to save it.
                    </p>
                    <h4>Stack</h4>
                    <div className="stack">
                        <span><p>JavaScript</p></span>
                        <span><p>HTML</p></span>
                        <span><p>CSS</p></span>
                        <span><p>Strapi</p></span>
                    </div>
                        <div className="project_links">
                            <a href="https://github.com/Krane96/martin-lk-semester-project-2">Code</a>
                        </div>
                    </div>
                </div>
                
                <div className="project_card">
                    <div className="project_image">
                        <img src="../../images/yaythings.jpg" alt="website"></img>
                    </div>
                <div className="project_content">
                    <h3>The Yay Company</h3>
                    <p>
                     News website, this was a react project from school where they provided the design and we had to replicate
                     the best we could. it was made with react bootstrap and sass as CSS framework <br></br><br></br><br></br>
                    </p>
                    <h4>Stack</h4>
                    <div className="stack">
                        <span><p>JavaScript</p></span>
                        <span><p>HTML</p></span>
                        <span><p>CSS</p></span>
                        <span><p>React</p></span>
                    </div>
                        <div className="project_links">
                            <a href="https://github.com/Noroff-Fagskole/brg_feu2_cssframeworks_ca-Krane96">Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="section_divider" style={{margin:"2rem auto"}}/>
        </>
    );
};

export default Projects
