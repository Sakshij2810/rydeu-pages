import "./Header.css";
import React from "react";

import Navbar from "../Navbar/Navbar";
import Dusseldolf from "../../assets/Dusseldolf_cover 1.png";
import BookingForm from "../BookingForm/BookingForm";
import a10 from "../../assets/a10.png";
import c2 from "../../assets/c2.png";

const Header = () => {
  return (
    <header>
      <div className="top-header-content">
        <Navbar />
      </div>

      <div className="bottom-header-content">
        <div className="text-content-header">
          <p className="private">Private Transfer & Taxi services in Geneva</p>
          <p className="book-airport">
            Book airport transfers, city transfers and hourly disposal services
            with driver
          </p>
        </div>
        <div className="card-1">
          <div className="ellipse"></div>
          <div className="ellipse2"></div>
          <div className="b1"></div>
          <div className="b2"></div>
          <p className="mini-bus-text">
            <span>Hire</span> MiniBus <span>&</span> Coach/Bus
          </p>
          <div className="book-now-button">
            <p className="book-now-text">Book Now</p>
            <img src={a10} alt="a10" />
          </div>
        </div>
        <div className="card-2">
          <img src={c2} alt="c2" />
          <p className="b1--text">Book & Pay Later</p>
          <p className="b2--text">Book your ride now and pay only on arrival</p>
          <div className="book-now-button">
            <p className="book-now-text">Book Now</p>
            <img src={a10} alt="a10" />
          </div>
        </div>
        <div className="booking-form-container">
          <BookingForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
