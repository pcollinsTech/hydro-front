import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import moment from "moment";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { ListLink } from "../common";
import logo from "../assets/images/hydro-logo-blue.png";
import Accordian from "../components/Accordian";
import activitiesData from "../assets/data/play";
import staysData from "../assets/data/stay";
import { Subscribe } from "../components";
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
              <Subscribe />
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
                    {activitiesData.map((item) => (
                      <ListLink item={item} />
                    ))}
                  </ul>
                </div>
                <div className="col-sm-3">
                  <h4>Stay</h4>
                  <ul>
                    {staysData.map((item) => (
                      <ListLink item={item} />
                    ))}
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
