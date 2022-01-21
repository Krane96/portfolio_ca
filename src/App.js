import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer";
import About from "./components/About";
import Timeline from "./components/Timeline";


function App() {
  return(
        <div className="container" style={{maxWidth:"1200px",margin:"0 auto"}}>
            <Header/>
            <div className="max_width" style={{maxWidth:"1100px",margin:"0 auto"}}>
            <Hero/>
            <Projects/>
            <Skills/>
            <About/>
            </div>
            <Timeline/>
            <Footer/>
        </div>
  )
};

export default App;
