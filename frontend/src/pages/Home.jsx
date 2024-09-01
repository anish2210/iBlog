import React from "react";
import "./Home.css";
import NavBar from "../components/NavBar";
import Content from "../components/Content";

const Home = () => {
  return (
    <div className="homeMain">
      <div className="navBar">
        <NavBar />
      </div>
      <Content />
    </div>
  );
};

export default Home;
