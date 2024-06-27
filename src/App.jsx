import { useState } from "react";
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
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import Value from "./components/Value/Value";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {

  const [playState, setPlayState] = useState(false)

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>

      <Title subTitle="Our Services" title="Comprehensive IVF Solutions" />
      <Services />
      <About setPlayState={setPlayState} />
      {/* <Title
        subTitle="Our Products"
        title="Discover Advanced Tools for Optimal IVF Outcomes"
      /> */}
      <Residencies />
      <Value />
      <Title
        subTitle="Why Choose LiSam"
        title="Trusted by Professionals, Loved by Clients"
      />
      <Testimonials />
      <Title subTitle="Contact Us" title="Get in Touch" />
      <Contact />
      <Companies />

      <Footer />

      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
