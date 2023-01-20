import React from "react";
import "../App.css";
import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import bgVideo from "../assets/bgVideo.mp4";

const Home = () => {
  return (
    <div className="App">
      <video className="video" src={bgVideo} autoPlay loop muted />
      <div className="homeMain">
        <Banner />
        {/* <Skills /> */}
        <Projects />
      </div>
    </div>
  );
};

export default Home;
