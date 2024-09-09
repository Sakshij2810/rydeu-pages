import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page-main-container">
      <ol>
        <li>
          {" "}
          <Link to="/home-page">Home Page</Link>
        </li>
        <li>
          {" "}
          <Link to="/city-page">City Page</Link>
        </li>
        <li>
          <Link to="/booking-request">Booking Request Page</Link>
        </li>
      </ol>
    </div>
  );
};

export default Home;
