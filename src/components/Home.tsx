import "./style.css";
import React from "react";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="header">
          <h1 className="title-header">SWAPI</h1>
          <p>Click on a movie to read more about it </p>
        </div>
      </div>
      <div className="home-movie-container">
        <Movies />
      </div>
    </>
  );
};
export default Home;
