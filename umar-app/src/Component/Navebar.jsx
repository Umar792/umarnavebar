import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navebar() {
  const [showmenu, setshowmenu] = useState(false);
  const humbugershow = () => {
    setshowmenu(!showmenu);
  };
  return (
    <>
      <div className="main-div">
        <div className="logo">
          <h2>
            <span>U</span>mar
            <span>T</span>echnical
          </h2>
        </div>
        <div className="menus">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul>
            <li>
              <a href="#" className="face">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#" className="insta">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#" className="you">
                <FaYoutubeSquare />
              </a>
            </li>
          </ul>
          <div className="hamburger">
            <a href="#" onClick={humbugershow}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </div>

      <div className={showmenu ? "menu mobile-menus" : "menu"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* hero section */}
      <section className="hero">
        <p>Welcome To</p>
        <h1>Umar Technical</h1>
      </section>
    </>
  );
}

export default Navebar;
