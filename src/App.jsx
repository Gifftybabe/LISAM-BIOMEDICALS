import "./App.css";
import About from "./components/About/About";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Services from "./components/Services/Services";
import Title from "./components/Title/Title";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Title subTitle='Our Servives' title='Comprehensive IVF Solutions'/>
      <Services />
      <About />
      <Title subTitle='Our Products' title='Discover Advanced Tools for Optimal IVF Outcomes'/>
      <Residencies/>
      <Companies />
      
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
