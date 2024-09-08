import "./Footer.css";
import React from "react";
import Rydeu from "../../assets/rydeu.png";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="left-footer">
          <div className="rydeu-img-footer">
            <img src={Rydeu} alt="rydeu" />
          </div>
          <p className="fp1">Solution for all ground transfers</p>
          <p className="fp2">Connect with us</p>
        </div>
        <div className="middle1-footer">
          <p className="fp3">Company</p>
          <p className="fp4">
            About us <br /> Privacy Policy <br /> Terms and conditions
            <br /> Imprint
            <br /> Careers / Jobs
            <br />
            Sitemap
          </p>
        </div>
        <div className="middle2-footer">
          <p className="fp5">Help Center</p>
          <p className="fp6">
            Contact us
            <br /> Customer FAQs <br />
            Business FAQs <br />
            Supplier FAQs
          </p>
        </div>
        <div className="right-footer">
          <p className="fp7">Our Services</p>
          <p className="fp8">
            Airport Transfer <br />
            City Transfer
            <br />
            Hourly Transfer
            <br />
            Business
            <br />
            Supplier
          </p>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="footer-line"></div>
        <p className="copyright-text">
          Copyright ©️ 2020 rydeu.com All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
