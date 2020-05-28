import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import moment from "moment";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/hydro-logo-blue.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 footer-logo">
              <img className="center" src={logo} alt="welcome1" />
            </div>
            <div className="col-sm-4 footer-socialmedia">
              <h4>
                <b>JOIN THE FUN</b>
              </h4>
              <p>
                <FaFacebookSquare size={25} /> <FaInstagram size={25} />{" "}
                <FaYoutube size={25} />
              </p>
            </div>

            {/*

               *** Use the Subscribe Component here***

          */}

            <div className="col-sm-4 footer-newsletter">
              <h4>
                <b>SIGN-UP FOR NEWSLETTER</b>
              </h4>

              <div className="col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue=""
                  placeholder="hello@letsgohydro.com"
                />
                <button type="button" className="btn btn-primary btn-sm">
                  Send
                </button>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <a href="maileto:info@letsgohydro.com" target="__blank">
                        <span>E - </span>info@letsgohydro.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:02895 920221">
                        <span>A - </span>02895 920221
                      </a>
                    </li>
                  </ul>

                  <br />
                  <h6>
                    Lets Go Hydro Limited
                    <br />
                    Mealough Road
                    <br />
                    Carryduff
                    <br />
                    Belfast, Co Down
                    <br />
                    BT8 8BP
                  </h6>
                  <br />
                  <button type="button" className="btn btn-secondary btn-sm">
                    Get Directions
                  </button>
                </div>
                <div className="col-sm-3">
                  <h4>Play</h4>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Aqua Park</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Hydro Climb</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Waterboard & Kneeboard</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Tubing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Puddle Park</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Aqua Rugby</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Open Water Swim</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>BBQ Pods</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Stand Up Paddle Boarding</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Kayaking</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <h4>Stay</h4>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Glamping Pods</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Safari Lodges</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Lake Pod</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Houseboat</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>IgluHut</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Forest Domes</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Luxury Glamping Pods</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Meadow Pods</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Hedge Village Pods</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Tree Garden Pods</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Caravan Park</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Tents</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <h4>Explore</h4>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Towpath</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Playpark</a>
                      </Link>
                    </li>
                  </ul>
                  <br />
                  <h4>About Us</h4>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>History</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                  <br />
                  <h4>Important Links</h4>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Opening Times</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Health & Safety</a>
                      </Link>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="ml p-1">
              <p>{`Copyright @ ${moment().format(
                "YYYY"
              )} Let's Go Hydro All rights reserved`}</p>
            </div>

            <div className="ml-auto p-1 created">
              <p>Created By Big House Creative Web Design Belfast</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
Footer.PropsTypes = {
  copyrightText: PropTypes.string,
  footercopyrightText1: PropTypes.string,
};
export default Footer;
