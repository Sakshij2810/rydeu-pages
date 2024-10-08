import "./Header.css";
import React, { useState } from "react";

import R431 from "../../../assets/R431.png";
import R423 from "../../../assets/R423.png";

import v1 from "../../../assets/v1.png";
import v2 from "../../../assets/v2.png";
import g1 from "../../../assets/Group1.png";
import g2 from "../../../assets/Group2.png";

import telegram from "../../../assets/telegram.png";
import whatsapp from "../../../assets/whatsapp.png";
import chat from "../../../assets/i1.png";
import facebook from "../../../assets/facebook.png";
import insta from "../../../assets/insta.png";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/linkedin.png";

import Navbar from "./Navbar/Navbar";

const Header = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  // Toggle visibility when the arrow is clicked
  const handleToggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };
  const handleToggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };
  const handleToggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };
  return (
    <div className="home-header-main-container">
      <img src={R423} alt="r423" />
      <img src={R431} alt="r431" />
      <div className="navbar-container">
        <Navbar />
      </div>
      <p className="hhp1">Hello, how can we help you?</p>
      <p className="hhp2">Find Travel guide, FAQ, chat,</p>
      <div className="home-header-card-1">
        <div className="c1-img">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 56C43.9117 56 56 43.9117 56 29C56 14.0883 43.9117 2 29 2C14.0883 2 2 14.0883 2 29C2 43.9117 14.0883 56 29 56Z"
              stroke="#FFA9BC"
              stroke-width="3"
              stroke-miterlimit="10"
            />
            <path
              d="M21.6527 15.9038C23.5237 13.9121 26.0922 12.916 29.358 12.916C32.3791 12.916 34.7982 13.768 36.6147 15.4718C38.4317 17.1763 39.3405 19.3535 39.3405 22.0041C39.3405 23.6097 39.0114 24.9121 38.3519 25.9122C37.6935 26.9118 36.343 28.3813 34.3013 30.3201C32.8163 31.7287 31.8495 32.9213 31.4014 33.8985C30.9533 34.8751 30.7293 36.3181 30.7293 38.2265H26.685C26.685 36.0602 26.9424 34.315 27.4582 32.9897C27.973 31.6638 29.119 30.146 30.8953 28.4341L32.7497 26.6389C33.3057 26.1242 33.7567 25.5865 34.1025 25.0252C34.7322 24.0412 35.0464 23.0186 35.0464 21.9581C35.0464 20.4737 34.5943 19.1863 33.6895 18.0954C32.7853 17.0051 31.2888 16.4593 29.2012 16.4593C26.6184 16.4593 24.8329 17.3986 23.8425 19.2765C23.2859 20.3215 22.9688 21.8289 22.8918 23.7982H18.8475C18.8464 20.5277 19.7816 17.8955 21.6527 15.9038ZM26.5942 41.9985H31.1159V46.7246H26.5942V41.9985Z"
              fill="#FF2D5C"
            />
          </svg>
        </div>
        <p className="faq-home">FAQ</p>
        <p className="lorem1">Lorem ipsum doolor sit amet</p>
      </div>
      <div className="home-header-card-2">
        <div className="c2-img">
          <svg
            width="44"
            height="56"
            viewBox="0 0 44 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.5777 0H4.97777C2.23999 0 0 2.23999 0 4.97777V51.0221C0 53.7599 2.23999 55.9999 4.97777 55.9999H38.5777C41.3155 55.9999 43.5555 53.7599 43.5555 51.0221V4.97777C43.5555 2.23999 41.3155 0 38.5777 0ZM6.22221 53.511H4.97777C3.60888 53.511 2.48888 52.391 2.48888 51.0221V4.97777C2.48888 3.60888 3.60888 2.48888 4.97777 2.48888H6.22221V53.511ZM41.0666 51.0221C41.0666 52.391 39.9466 53.511 38.5777 53.511H8.71109V2.48888H38.5777C39.9466 2.48888 41.0666 3.60888 41.0666 4.97777V51.0221Z"
              fill="#FFA9BC"
            />
            <path
              d="M25.4487 12.9421C25.0753 12.9421 24.702 12.9421 24.3287 12.9421C20.2842 13.1288 16.7376 15.431 14.9331 19.1021C13.0665 22.8977 13.3154 27.191 15.742 30.6754L23.8931 42.5598C24.142 42.871 24.5153 43.1198 24.9509 43.1198C25.3864 43.1198 25.7598 42.9332 26.0087 42.5598L34.1597 30.6754C36.5242 27.191 36.8353 22.8977 34.9686 19.1021C33.0397 15.431 29.4931 13.0666 25.4487 12.9421ZM32.0442 29.2443L24.8887 39.6354L17.7331 29.2443C15.8665 26.5065 15.6176 23.1466 17.1109 20.1599C18.542 17.2977 21.2798 15.4932 24.3909 15.3688C24.702 15.3688 25.0131 15.3688 25.3242 15.3688C28.4353 15.4932 31.1731 17.2977 32.6042 20.1599C34.0975 23.1466 33.9109 26.5065 32.0442 29.2443Z"
              fill="#FF2D5C"
            />
            <path
              d="M24.8889 19.2891C22.1511 19.2891 19.9111 21.5291 19.9111 24.2668C19.9111 27.0046 22.1511 29.2446 24.8889 29.2446C27.6267 29.2446 29.8667 27.0046 29.8667 24.2668C29.8667 21.5291 27.6267 19.2891 24.8889 19.2891ZM24.8889 26.7557C23.52 26.7557 22.4 25.6357 22.4 24.2668C22.4 22.8979 23.52 21.7779 24.8889 21.7779C26.2578 21.7779 27.3778 22.8979 27.3778 24.2668C27.3778 25.6357 26.2578 26.7557 24.8889 26.7557Z"
              fill="#FF2D5C"
            />
          </svg>
        </div>
        <p className="faq2-home">Travel Guide</p>
        <p className="lorem2">Lorem ipsum doolor sit amet</p>
      </div>

      <div className="3-divs-home">
        {isVisible1 ? (
          <div className="home-page-div-1">
            <img className="g1" src={g1} alt="g1" />
            <p className="chat-text">Chat</p>
            <p className="loremd1">Lorem ipsum doolor sit amet</p>
            <button
              className="arrow-home-svg"
              onClick={handleToggleVisibility1}
            >
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.30418 8.71165C7.69723 9.09963 8.33038 9.09551 8.71836 8.70245L15.0408 2.29721C15.4287 1.90415 15.4246 1.271 15.0316 0.883027C14.6385 0.495052 14.0054 0.499172 13.6174 0.892229L7.99746 6.58577L2.30392 0.96585C1.91086 0.577875 1.27771 0.581995 0.889736 0.975052C0.501761 1.36811 0.505881 2.00126 0.898938 2.38924L7.30418 8.71165ZM6.99367 6.00651L7.00669 8.00646L9.00665 7.99345L8.99363 5.99349L6.99367 6.00651Z"
                  fill="#777777"
                />
              </svg>
            </button>
          </div>
        ) : (
          // Div content when hidden
          <div className="home-page-div-1-hide">
            <img className="g1" src={g1} alt="g1" />
            <p className="chat-text">Chat</p>
            <p className="loremd1">Lorem ipsum doolor sit amet</p>
            <button
              className="arrow-home-svg"
              onClick={handleToggleVisibility1}
            >
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8849 1.11612C10.3967 0.627961 9.60525 0.627961 9.11709 1.11612L1.16214 9.07107C0.673986 9.55922 0.673986 10.3507 1.16214 10.8388C1.6503 11.327 2.44175 11.327 2.92991 10.8388L10.001 3.76777L17.072 10.8388C17.5602 11.327 18.3517 11.327 18.8398 10.8388C19.328 10.3507 19.328 9.55922 18.8398 9.07107L10.8849 1.11612Z"
                  fill="#777777"
                />
              </svg>
            </button>
            <div className="logos-home-container">
              <img className="telegarm" src={telegram} alt="telegarm" />
              <p className="tele1">Telegram</p>
              <img className="whatsapp" src={whatsapp} alt="whatsapp" />
              <p className="whatsapp1">whatsapp</p>
              <img className="chat" src={chat} alt="chat" />
              <p className="chat1">Live chat</p>
            </div>
          </div>
        )}

        {isVisible2 ? (
          <div className="home-page-div-2">
            <img className="g2" src={g2} alt="g2" />
            <p className="chat-text">Social</p>
            <p className="loremd1">Lorem ipsum doolor sit amet</p>
            <button
              className="arrow-home-svg"
              onClick={handleToggleVisibility2}
            >
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.30418 8.71165C7.69723 9.09963 8.33038 9.09551 8.71836 8.70245L15.0408 2.29721C15.4287 1.90415 15.4246 1.271 15.0316 0.883027C14.6385 0.495052 14.0054 0.499172 13.6174 0.892229L7.99746 6.58577L2.30392 0.96585C1.91086 0.577875 1.27771 0.581995 0.889736 0.975052C0.501761 1.36811 0.505881 2.00126 0.898938 2.38924L7.30418 8.71165ZM6.99367 6.00651L7.00669 8.00646L9.00665 7.99345L8.99363 5.99349L6.99367 6.00651Z"
                  fill="#777777"
                />
              </svg>
            </button>
          </div>
        ) : (
          // Div content when hidden
          <div className="home-page-div-2-hide">
            <img className="g2" src={g2} alt="g2" />
            <p className="chat-text">Social</p>
            <p className="loremd1">Lorem ipsum doolor sit amet</p>
            <button
              className="arrow-home-svg"
              onClick={handleToggleVisibility2}
            >
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8849 1.11612C10.3967 0.627961 9.60525 0.627961 9.11709 1.11612L1.16214 9.07107C0.673986 9.55922 0.673986 10.3507 1.16214 10.8388C1.6503 11.327 2.44175 11.327 2.92991 10.8388L10.001 3.76777L17.072 10.8388C17.5602 11.327 18.3517 11.327 18.8398 10.8388C19.328 10.3507 19.328 9.55922 18.8398 9.07107L10.8849 1.11612Z"
                  fill="#777777"
                />
              </svg>
            </button>
            <div className="logos-home2-container">
              <img className="facebook" src={facebook} alt="facebook" />
              <img className="insta" src={insta} alt="insta" />
              <img className="twitter" src={twitter} alt="twitter" />
              <img className="linkedin" src={linkedin} alt="linkedin" />
            </div>
          </div>
        )}

        {isVisible3 ? (
          <div className="home-page-div-3">
            <img className="v1" src={v1} alt="v1" />
            <img className="v2" src={v2} alt="v2" />
            <p className="chat-text">Send Query</p>
            <p className="loremd1">Lorem ipsum doolor sit amet</p>
            <button
              className="arrow-home-svg"
              onClick={handleToggleVisibility3}
            >
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.30418 8.71165C7.69723 9.09963 8.33038 9.09551 8.71836 8.70245L15.0408 2.29721C15.4287 1.90415 15.4246 1.271 15.0316 0.883027C14.6385 0.495052 14.0054 0.499172 13.6174 0.892229L7.99746 6.58577L2.30392 0.96585C1.91086 0.577875 1.27771 0.581995 0.889736 0.975052C0.501761 1.36811 0.505881 2.00126 0.898938 2.38924L7.30418 8.71165ZM6.99367 6.00651L7.00669 8.00646L9.00665 7.99345L8.99363 5.99349L6.99367 6.00651Z"
                  fill="#777777"
                />
              </svg>
            </button>
          </div>
        ) : (
          // Div content when hidden
          <div className="home-page-div-3-hide">
            <img className="v1" src={v1} alt="v1" />
            <img className="v2" src={v2} alt="v2" />
            <p className="chat-text">Send Query</p>
            <p className="loremd1">Lorem ipsum doolor sit amet</p>
            <button
              className="arrow-home-svg"
              onClick={handleToggleVisibility3}
            >
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8849 1.11612C10.3967 0.627961 9.60525 0.627961 9.11709 1.11612L1.16214 9.07107C0.673986 9.55922 0.673986 10.3507 1.16214 10.8388C1.6503 11.327 2.44175 11.327 2.92991 10.8388L10.001 3.76777L17.072 10.8388C17.5602 11.327 18.3517 11.327 18.8398 10.8388C19.328 10.3507 19.328 9.55922 18.8398 9.07107L10.8849 1.11612Z"
                  fill="#777777"
                />
              </svg>
            </button>
            <div className="form-home-container">
              <form>
                <div className="form-top-div">
                  <div className="lable-conatiner">
                    <label>Name</label>
                    <input type="text" />
                  </div>
                  <div className="lable-conatiner">
                    <label>Email</label>
                    <input type="email" />
                  </div>
                  <div className="lable-conatiner">
                    <label>Subject</label>
                    <input type="text" />
                  </div>
                  <div className="lable-conatiner">
                    <label>Order no.</label>
                    <input type="number" />
                  </div>
                </div>
                <div className="form-bottom-div">
                  <div className="lable-conatiner">
                    <label>Your Query</label>
                    <input className="long-input" type="number" />
                  </div>
                </div>
                <button>
                  <p>Submit</p>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
