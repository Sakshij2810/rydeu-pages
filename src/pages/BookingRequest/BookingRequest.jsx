import LeftSidebar from "../../components/BookingComponents/Leftsidebar/LeftSidebar";
import "./BookingRequest.css";
import React from "react";

import Vector from "../../assets/Vector.png";

const BookingRequest = () => {
  return (
    <div className="booking-main-container">
      <div className="booking-request-content">
        <div className="leftsidebar-content-container">
          <LeftSidebar />
        </div>
        <div className="right-content-container">
          <div className="topbar-booking">
            <div className="rightmost-username">
              <div className="booking-ellipse-round"></div>
              <p className="u-text">U</p>
              <p className="uername-text">Username</p>
              <img className="a9-img" src={Vector} alt="a9" />
              <div className="arrow-div-booking">
                <svg
                  width="25"
                  height="14"
                  viewBox="0 0 25 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4865 7.10864H1.34473"
                    stroke="black"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.36407 13.128L1.34473 7.1087L7.36407 1.08936"
                    stroke="black"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="requests-text">Requests</p>
            </div>
          </div>
          <div className="middle-booking-container"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequest;
