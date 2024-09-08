import "./BookingForm.css";
import React from "react";

const BookingForm = () => {
  return (
    <div className="booking-form-main-container">
      <div className="Rectangle-737">
        <div className="Rectangle-738">
          <p className="one-way">One way</p>
          <p className="round-trip">Round Trip</p>
          <p className="hourly">Hourly</p>
        </div>
      </div>
      <p className="from-text">
        From <span>(airport, hotel, address)</span>
      </p>
      <div className="Line-153"></div>
      <p className="to-text">
        To <span>(airport, hotel, address)</span>
      </p>
      <div className="arrow-svg">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13"
            cy="13"
            r="12.4"
            transform="rotate(90 13 13)"
            fill="white"
            stroke="#FF2D5C"
            stroke-width="1.2"
          />
          <path
            d="M9.33337 5.63784L9.33337 18.1307L8.13802 16.987C7.87768 16.7379 7.45567 16.7379 7.19534 16.987C7.065 17.1117 7 17.2747 7 17.438C7 17.6013 7.065 17.7642 7.19534 17.8889L9.5287 20.1214C9.78904 20.3705 10.211 20.3705 10.4714 20.1214L12.8047 17.8889C13.0651 17.6399 13.0651 17.2361 12.8047 16.987C12.5444 16.7379 12.1224 16.7379 11.8621 16.987L10.6667 18.1307L10.6667 5.63784C10.6667 5.28575 10.368 5 10 5C9.63204 5 9.33337 5.28575 9.33337 5.63784Z"
            fill="#FF2D5C"
          />
          <path
            d="M15.9445 19.6707L15.9445 7.17792L14.9483 8.32158C14.7314 8.57065 14.3797 8.57065 14.1628 8.32158C14.0542 8.19688 14 8.03391 14 7.87062C14 7.70733 14.0542 7.54436 14.1628 7.41966L16.1073 5.18721C16.3242 4.93813 16.6759 4.93813 16.8928 5.18721L18.8373 7.41966C19.0542 7.66874 19.0542 8.0725 18.8373 8.32158C18.6203 8.57065 18.2687 8.57065 18.0517 8.32158L17.0556 7.17792L17.0556 19.6707C17.0556 20.0228 16.8067 20.3086 16.5 20.3086C16.1934 20.3086 15.9445 20.0228 15.9445 19.6707Z"
            fill="#FF2D5C"
          />
        </svg>
      </div>

      <div className="Line-155"></div>

      <div className="calender-svg">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2005 4.29288C15.9746 4.29288 16.608 3.65951 16.608 2.88538V1.4075C16.608 0.633376 15.9746 0 15.2005 0C14.4263 0 13.793 0.633376 13.793 1.4075V2.88538C13.793 3.65951 14.4263 4.29288 15.2005 4.29288Z"
            fill="#DFDFDF"
          />
          <path
            d="M20.268 2.46491H17.3826V3.16866C17.3826 4.36504 16.3974 5.35029 15.201 5.35029C14.0046 5.35029 13.0194 4.36504 13.0194 3.16866V2.46491H7.24862V3.16866C7.24862 4.36504 6.26337 5.35029 5.06699 5.35029C3.87061 5.35029 2.88538 4.36504 2.88538 3.16866V2.46491L0 2.39453V20.4809H1.47788H18.7901H20.1976L20.268 2.46491ZM18.8605 19.0734H1.54824V7.53192H18.8605V19.0734Z"
            fill="#DFDFDF"
          />
          <path
            d="M5.13794 4.29288C5.91207 4.29288 6.54544 3.65951 6.54544 2.88538V1.4075C6.54544 0.633376 5.91207 0 5.13794 0C4.36381 0 3.73044 0.633376 3.73044 1.4075V2.88538C3.66006 3.65951 4.29344 4.29288 5.13794 4.29288Z"
            fill="#DFDFDF"
          />
          <path
            d="M9.57086 9.0769H7.31885V11.1178H9.57086V9.0769Z"
            fill="#DFDFDF"
          />
          <path
            d="M13.2305 9.0769H10.9785V11.1178H13.2305V9.0769Z"
            fill="#DFDFDF"
          />
          <path
            d="M16.6094 9.0769H14.3574V11.1178H16.6094V9.0769Z"
            fill="#DFDFDF"
          />
          <path
            d="M9.57086 12.3857H7.31885V14.4266H9.57086V12.3857Z"
            fill="#DFDFDF"
          />
          <path
            d="M13.2305 12.3857H10.9785V14.4266H13.2305V12.3857Z"
            fill="#DFDFDF"
          />
          <path
            d="M16.6094 12.3857H14.3574V14.4266H16.6094V12.3857Z"
            fill="#DFDFDF"
          />
          <path
            d="M9.57086 15.7637H7.31885V17.8046H9.57086V15.7637Z"
            fill="#DFDFDF"
          />
          <path
            d="M5.91168 12.3857H3.65967V14.4266H5.91168V12.3857Z"
            fill="#DFDFDF"
          />
          <path
            d="M5.91168 15.7637H3.65967V17.8046H5.91168V15.7637Z"
            fill="#DFDFDF"
          />
          <path
            d="M13.2305 15.7637H10.9785V17.8046H13.2305V15.7637Z"
            fill="#DFDFDF"
          />
          <path
            d="M16.6094 15.7637H14.3574V17.8046H16.6094V15.7637Z"
            fill="#DFDFDF"
          />
        </svg>
      </div>
      <p className="pickup-date">Pickup Date</p>

      <div className="calender-svg-2">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2005 4.29288C15.9746 4.29288 16.608 3.65951 16.608 2.88538V1.4075C16.608 0.633376 15.9746 0 15.2005 0C14.4263 0 13.793 0.633376 13.793 1.4075V2.88538C13.793 3.65951 14.4263 4.29288 15.2005 4.29288Z"
            fill="#DFDFDF"
          />
          <path
            d="M20.268 2.46491H17.3826V3.16866C17.3826 4.36504 16.3974 5.35029 15.201 5.35029C14.0046 5.35029 13.0194 4.36504 13.0194 3.16866V2.46491H7.24862V3.16866C7.24862 4.36504 6.26337 5.35029 5.06699 5.35029C3.87061 5.35029 2.88538 4.36504 2.88538 3.16866V2.46491L0 2.39453V20.4809H1.47788H18.7901H20.1976L20.268 2.46491ZM18.8605 19.0734H1.54824V7.53192H18.8605V19.0734Z"
            fill="#DFDFDF"
          />
          <path
            d="M5.13794 4.29288C5.91207 4.29288 6.54544 3.65951 6.54544 2.88538V1.4075C6.54544 0.633376 5.91207 0 5.13794 0C4.36381 0 3.73044 0.633376 3.73044 1.4075V2.88538C3.66006 3.65951 4.29344 4.29288 5.13794 4.29288Z"
            fill="#DFDFDF"
          />
          <path
            d="M9.57086 9.0769H7.31885V11.1178H9.57086V9.0769Z"
            fill="#DFDFDF"
          />
          <path
            d="M13.2305 9.0769H10.9785V11.1178H13.2305V9.0769Z"
            fill="#DFDFDF"
          />
          <path
            d="M16.6094 9.0769H14.3574V11.1178H16.6094V9.0769Z"
            fill="#DFDFDF"
          />
          <path
            d="M9.57086 12.3857H7.31885V14.4266H9.57086V12.3857Z"
            fill="#DFDFDF"
          />
          <path
            d="M13.2305 12.3857H10.9785V14.4266H13.2305V12.3857Z"
            fill="#DFDFDF"
          />
          <path
            d="M16.6094 12.3857H14.3574V14.4266H16.6094V12.3857Z"
            fill="#DFDFDF"
          />
          <path
            d="M9.57086 15.7637H7.31885V17.8046H9.57086V15.7637Z"
            fill="#DFDFDF"
          />
          <path
            d="M5.91168 12.3857H3.65967V14.4266H5.91168V12.3857Z"
            fill="#DFDFDF"
          />
          <path
            d="M5.91168 15.7637H3.65967V17.8046H5.91168V15.7637Z"
            fill="#DFDFDF"
          />
          <path
            d="M13.2305 15.7637H10.9785V17.8046H13.2305V15.7637Z"
            fill="#DFDFDF"
          />
          <path
            d="M16.6094 15.7637H14.3574V17.8046H16.6094V15.7637Z"
            fill="#DFDFDF"
          />
        </svg>
      </div>
      <p className="pickup-time">Pickup Time</p>
      <div className="Line-150"></div>

      <div className="passengers-2">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_799_144)">
            <path
              d="M18.3434 13.0567V13.5567H18.8434H20.1586C20.8978 13.5567 21.4999 14.1587 21.4999 14.898V20.1588C21.4999 20.8981 20.8977 21.5001 20.1586 21.5001H11.7412C11.002 21.5001 10.3999 20.8981 10.3999 20.1588V14.898C10.3999 14.1587 11.002 13.5567 11.7412 13.5567H13.0564H13.5564V13.0567V10.8175C13.5564 10.5877 13.744 10.4001 13.9738 10.4001H17.926C18.1558 10.4001 18.3434 10.5877 18.3434 10.8175V13.0567ZM14.6347 10.9784H14.1347V11.4784V13.0567V13.5567H14.6347H17.2651H17.7651V13.0567V11.4784V10.9784H17.2651H14.6347Z"
              stroke="#DFDFDF"
            />
            <path
              d="M6.16016 2.57812C6.16016 3.72364 5.22755 4.65625 4.08203 4.65625C2.93651 4.65625 2.00391 3.72364 2.00391 2.57812C2.00391 1.43261 2.93651 0.5 4.08203 0.5C5.22755 0.5 6.16016 1.43261 6.16016 2.57812Z"
              fill="#DFDFDF"
              stroke="#DFDFDF"
            />
            <path
              d="M1.78906 14.2667V13.7667H1.28906H0.644531C0.564671 13.7667 0.5 13.702 0.5 13.6221V8.37994C0.5 7.47595 0.836489 6.64911 1.39222 6.01747C2.13367 6.59859 3.06793 6.94635 4.08203 6.94635C5.09613 6.94635 6.0304 6.59859 6.77184 6.01747C7.32757 6.64911 7.66406 7.47595 7.66406 8.37994V13.6221C7.66406 13.702 7.59939 13.7667 7.51953 13.7667H6.875H6.375V14.2667V21.3565C6.375 21.4364 6.31033 21.501 6.23047 21.501H1.93359C1.85373 21.501 1.78906 21.4364 1.78906 21.3565V14.2667Z"
              fill="#DFDFDF"
              stroke="#DFDFDF"
            />
          </g>
          <defs>
            <clipPath id="clip0_799_144">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="passengers-text">Add Passenger & Baggage</p>
      <div className="down-svg-arrow">
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="#848484"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="Line-156"></div>
      <div className="email-svg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_799_151)">
            <path
              d="M15.9097 12.123L24.0007 17.238V6.79199L15.9097 12.123Z"
              fill="#DFDFDF"
            />
            <path
              d="M0 6.79199V17.238L8.091 12.123L0 6.79199Z"
              fill="#DFDFDF"
            />
            <path
              d="M22.4994 3.75H1.49943C0.750934 3.75 0.156934 4.308 0.0444336 5.0265L11.9994 12.903L23.9544 5.0265C23.8419 4.308 23.2479 3.75 22.4994 3.75Z"
              fill="#DFDFDF"
            />
            <path
              d="M14.5353 13.0276L12.4128 14.4256C12.2868 14.5081 12.1443 14.5486 12.0003 14.5486C11.8563 14.5486 11.7138 14.5081 11.5878 14.4256L9.46534 13.0261L0.0483398 18.9826C0.16384 19.6951 0.75484 20.2486 1.50034 20.2486H22.5003C23.2458 20.2486 23.8368 19.6951 23.9523 18.9826L14.5353 13.0276Z"
              fill="#DFDFDF"
            />
          </g>
          <defs>
            <clipPath id="clip0_799_151">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="email-text">Email</p>
      <div className="Line-157"></div>
      <div className="america-flg-svg">
        <div className="arrow-america">
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L4 4L7 1"
              stroke="#848484"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="phone-text">Phone Number</p>
      <div className="Line-159"></div>
      <div className="rectangle-shape "></div>
      <p className="additional-text">Additional Requirements</p>
      <div className="Line-161"></div>
      <div className="Rectangle-14">
        <p className="search">Search</p>
      </div>
    </div>
  );
};

export default BookingForm;
