import "./LeftSidebar.css";
import React from "react";

import RLogo from "../../../assets/RLogo.png";
import Bell from "../../../assets/bell.png";
import Car from "../../../assets/car.png";
import Bill from "../../../assets/bill.png";
import Account from "../../../assets/account.png";
import Police from "../../../assets/police.png";
import Car2 from "../../../assets/car2.png";

const LeftSidebar = () => {
  return (
    <div className="leftsidebar-main-container">
      <img className="r-logo" src={RLogo} alt="r-logo" />

      <div className="active-tab-booking">
        <div className="r135"></div>
        <div className="r227"></div>
        <img className="bell-logo" src={Bell} alt="bell-logo" />
      </div>

      <img className="car-logo" src={Car} alt="car-logo" />
      <img className="car2-logo" src={Car2} alt="car2-logo" />
      <img className="police-logo" src={Police} alt="police-logo" />
      <img className="account-logo" src={Account} alt="account-logo" />
      <img className="bill-logo" src={Bill} alt="bill-logo" />
    </div>
  );
};

export default LeftSidebar;
