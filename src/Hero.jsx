import React from "react";
import Image from "./assets/airbnb hero.jpg";

export default function Hero() {
  return (
    <div className="heroContainer">
      <img className="heroImage" src={Image} width="40%" />
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
