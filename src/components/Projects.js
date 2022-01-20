
const Projects = () => {
    return (
        <>
            <h2 className="section_title">Projects</h2>
            <div className="project_container grid">
                <div className="project_card">
                    <div className="project_image">
                        <img src="../../images/boostcraft.jpg"></img>
                    </div>
                <div className="project_content">
                    <h3>World of Boostcraft</h3>
                    <p>E-commerce site made by with vanilla JavaScript, html and css.
                    This was a school project and has some features missing that were not part of the tasks.
                    Strapi was used as an API to get products/a user and local storage to save it.
                    </p>
                    <h4>Stack</h4>
                    <div className="stack">
                        <span><p>JavaScript</p></span>
                        <span><p>Html</p></span>
                        <span><p>CSS</p></span>
                        <span><p>Strapi</p></span>
                    </div>
                        <div className="project_links">
                            <a>Source</a>
                            <a>Code</a>
                        </div>
                    </div>
                </div>
                
                <div className="project_card">
                    <div className="project_image">
                        <img src="../../images/boostcraft.jpg"></img>
                    </div>
                <div className="project_content">
                    <h3>World of Boostcraft</h3>
                    <p>E-commerce site made by with vanilla JavaScript, html and css.
                    This was a school project and has some features missing that were not part of the tasks.
                    Strapi was used as an API to get products/a user and local storage to save it.
                    </p>
                    <h4>Stack</h4>
                    <div className="stack">
                        <span><p>JavaScript</p></span>
                        <span><p>Html</p></span>
                        <span><p>CSS</p></span>
                        <span><p>Strapi</p></span>
                    </div>
                        <div className="project_links">
                            <a>Source</a>
                            <a>Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="section_divider"/>
        </>
    )
}

export default Projects
