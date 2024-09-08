import "./MiddleContent.css";
import React from "react";

import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Florance from "../../assets/Florance.png";
import Napples from "../../assets/Napples.png";

const MiddleContent = () => {
  return (
    <div className="middle-content-main-container">
      <div className="left-middle-content-div">
        <div className="home-cities-rome-text">
          <p>Home</p>
          <p>Cities</p>
          <span>Rome</span>
        </div>
        <div className="orange-txt">
          <div className="orange-circle"></div>
          <p className="glance-text">At a Glance</p>
        </div>
        <ul className="first-ul">
          <li className="li1">Transportation in Rome</li>
          <li className="li2">Airport Transfers in Rome</li>
          <li className="li3">Sightseeing Transportation</li>
        </ul>
      </div>
      <div className="right-middle-content-div">
        <p className="p1">
          Nestled in the heart of Italian Peninsula, Rome is the capital of the
          country and one of the most populated cities in Italy. From its rich
          architecture to rare artefacts, this city is known to possess a
          history like none other. The picturesque atmosphere, the cold wind
          blowing and the serene atmosphere is what makes Rome a must visit
          place for all the travel fanatics out there.
        </p>
        <p className="p2">
          A perfect blend of gothic ruins, jaw dropping art and lively nights,
          Rome sets an exemplary example for a place about how it should
          entertain its travellers. The city wholeheartedly welcomes travellers
          from a wide array of interests, from awe inspiring monuments to living
          life at its best, Rome will never fail to surprise you with a new
          place to explore.
        </p>
        <p className="p3">
          A perfect blend of gothic ruins, jaw dropping art and lively nights,
          Rome sets an exemplary example for a place about how it should
          entertain its travellers. The city wholeheartedly welcomes travellers
          from a wide array of interests, from awe{" "}
        </p>
        <p className="p4">
          inspiring monuments to living life at its best, Rome will never fail
          to surprise you with a new place to explore.
        </p>
        <p className="p5">
          The Roman Empire has been an icon when it comes to historical
          importance. The Roman Empire had cut the ribbons when Augustus Caesar
          announced to be the first emperor of Rome in 31BC and ended with the
          fall of Constantinople in 1453CE. Known to be the centre of the Roman
          Empire, Rome attracts the majority of the crowd due to its rich
          history and politics.
        </p>
        <p className="p6">
          Referred to as ‘An Eternal City’ in the beginning of the history, Rome
          is seen to be a dream for music lovers due to the Parco Della Musica
          which is known to be one of the largest music venues in the world. Not
          only music, Rome has also set itself in the most wanted places to
          visit in the world and is the third most visited places in the entire
          Europe. This place has experienced arts from different periods and
          became a home for some of the most renowned artists such as Borromini,
          Bernini, Carracci and Cortona.
        </p>
        <p className="p7">
          Embracing the ancient art, Rome has now decided to use its innovation
          to give birth to contemporary art to keep enhancing their love for art
          and architecture, National Museum of the 21st Century Arts is a live
          example of that. The Italian cuisine has somehow managed to be a king
          of all cuisines, from the Carciofi alla romana to the Spaghetti alla
          carbonara- Delicious spaghetti topped with bacon, smokey eggs and
          pecorino is what makes it mouth watering. Rome has a series of reasons
          to attract you and slip you into its warm arms to rejuvenate your soul
          with its authentic art, awe-inspiring architecture and mouth-watering
          food.
        </p>
        <div className="img1">
          <img src={Img2} alt="img-1" />
        </div>
        <div className="img2">
          <img src={Img1} alt="img-2" />
        </div>
        <p className="p8">Rome Civitavecchia</p>
        <p className="line-p10">|</p>
        <p className="p9">Image by Alejandro Picasso</p>
        <p className="p11">
          Image by <span>VIA DEI MONTI PARIOLI</span>
        </p>
        <div className="p12"></div>
        <p className="p13">Other cities </p>

        <div className="grid-middle-container">
          <div className="g1">
            <img src={Napples} alt="nap1" />
          </div>
          <div className="g2">
            <img src={Florance} alt="flo1" />
          </div>
          <div className="g3">
            <img src={Napples} alt="nap2" />
          </div>
          <div className="g4">
            <img src={Florance} alt="flo2" />
          </div>
          <div className="g5">
            <img src={Napples} alt="nap3" />
          </div>
          <div className="g6">
            <img src={Florance} alt="flo3" />
          </div>
          <div className="g7">
            <img src={Napples} alt="nap4" />
          </div>
          <div className="g8">
            <img src={Florance} alt="flo4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
