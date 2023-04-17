import React from "react";
import Image from "./assets/airbnb hero.jpg";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div>
        <div>
          <img className="heroImage" src={Image}  />
        </div>
        <div>
          <img />
        </div>
        <div>
          <img />
        </div>
        <div>
          <img />
        </div>
        <div>
          <img />
        </div>
      </div>
      <div className="textContent">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
