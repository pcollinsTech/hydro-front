import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars, FaWindowClose } from "react-icons/fa";
import logo from "../assets/images/hydro-logo.png";
const MobileMenu = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div className="main-nav">
      <Navbar
        sticky="top-fixed"
        id="navbar"
        className="navbar navbar-expand-lg"
      >
        <Container className="d-flex justify-content-between">
          <Navbar.Brand>
            <Link href="/">
              <a>
                <img height="80" width="130" src={logo} alt="Hydro" href="/" />
              </a>
            </Link>
          </Navbar.Brand>

          <div className="FaBars">
            <div>
              <div>
                <FiShoppingCart size={20} /> &nbsp;
                <button type="button" className="btn btn-secondary btn-sm">
                  Book Now
                </button>{" "}
                &nbsp;
                <icon onClick={setMenuShow(!menuShow)}>
                  <FaBars />
                </icon>
              </div>
              {menuShow && (
                <div className="MobileMenu">
                  <div className="container">
                    <div className="mobile-top-nav  ">
                      <div className="row d-flex justify-content-between py-5">
                        <div>
                          <FiShoppingCart size={50} />
                        </div>
                        <div className="mr-5" onClick={setMenuShow(!menuShow)}>
                          <FaWindowClose size={50} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mobile-inner">
                    <ul>
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <br />
                      <li>
                        <Link href="/">
                          <a>Play</a>
                        </Link>
                      </li>
                      <br />
                      <li>
                        <Link href="/">
                          <a>Stay</a>
                        </Link>
                      </li>
                      <br />
                      <li>
                        <Link href="/">
                          <a>Explore</a>
                        </Link>
                      </li>
                      <br />
                      <li>
                        <Link href="/">
                          <a>Events</a>
                        </Link>
                      </li>
                      <br />
                      <li>
                        <Link href="/">
                          <a>Groups</a>
                        </Link>
                      </li>
                      <br />
                      <li>
                        <Link href="/">
                          <a>Contact</a>
                        </Link>
                      </li>
                      <br />
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default MobileMenu;
