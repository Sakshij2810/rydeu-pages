import Header from "../../components/HomePageComponents/Header/Header";
import "./HomePage.css";
import React from "react";

const HomePage = () => {
  return (
    <div className="home-page-content-container">
      <div className="home-page-all-conetnt-div">
        <div className="header-container">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
