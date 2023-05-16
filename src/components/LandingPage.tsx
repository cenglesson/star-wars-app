import React, { useEffect } from "react";

import "./style.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 4000);
  }, [navigate]);

  return (
    <div className="starwars-demo">
      <img
        src="//cssanimation.rocks/demo/starwars/images/star.svg"
        alt="Star"
        className="star"
      />
      <img
        src="//cssanimation.rocks/demo/starwars/images/wars.svg"
        alt="Wars"
        className="wars"
      />
      <h2 className="byline" id="byline">
        The Force Awakens
      </h2>
    </div>
  );
};

export default LandingPage;
