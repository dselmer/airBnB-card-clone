import React from "react";
import Image from "./assets/airbnb hero.jpg";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div>
        <div>
          <img className="heroImage" src="https://images.unsplash.com/photo-1627595237973-79a55d966743?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGNvbGxhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"  />
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
