export function toggleMenu() {
    let navigation = document.querySelector(".navigation");
    navigation.classList.toggle('active')
}



const Header = () => {
    return (
        <header  style={{maxWidth:"1200px",margin:"0 auto"}}>
            <div className="name">
                <a href="/">Martin Lian Krane</a> 
            </div>    
            <div className="navigation">
                <a href="#projects_nav">Projects</a> 
                <a href="#footer_nav">Contact</a> 
                <a href="#about_section">About Me</a> 
            </div>    
            <div className="icons">
           <a href="https://www.linkedin.com/in/martin-lian-krane-b2bb19210/"><i className="fab fa-linkedin"></i></a>
           <a href="https://github.com/Krane96"><i className="fab fa-github"></i></a>
            </div>
            <div className="toggle_menu">
            <a href="#" onClick={toggleMenu}><i className="fas fa-bars"></i></a>
            </div>    
        </header>
    );
};

export default Header
