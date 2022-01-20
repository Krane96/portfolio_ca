import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
  return(
        <div className="container" style={{maxWidth:"1200px",margin:"0 auto"}}>
            <Header/>
            <Hero/>
            <Projects/>
            <Skills/>
        </div>
  )
};

export default App;
