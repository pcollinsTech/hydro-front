import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavDropdown, Navbar, Container, Nav, NavItem } from "react-bootstrap";
import logo from "../assets/images/hydro-logo.jpeg";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaBars,
  FaWindowClose,
  FaMapSigns,
  FaHome,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiTicket } from "react-icons/gi";
import MobileMenu from "./MobileMenu";
import userIcon from "../assets/images/user-icon.svg";
import calenderIcon from "../assets/images/calendar-icon.svg";

const MainNav = ({ setMenuShow }) => {
  const router = useRouter();
  console.log("ROUTER", router);
  return (
    <div>
      <div className="top-nav">
        <div className="container">
          <div className="row">
            <div className="col-3 opening">
              <h6>
                <FaRegClock size={17} /> &nbsp; Open Today: 9:00am - 6:00pm
              </h6>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <Link href="/">
                <a>
                  <GiTicket size={17} /> Gift Vouchers
                </a>
              </Link>

              <Link href="/">
                <a>Jobs</a>
              </Link>

              <Link href="/">
                <a>Memberships</a>
              </Link>

              <Link href="/">
                <a>Contact</a>
              </Link>

              <Link href="/">
                <a>Help & Rules</a>
              </Link>
            </div>
            <div className="col-1 d-flex justify-content-between">
              <div className="top-user-icon">
                <Link href="/">
                  <a>
                    <img src={userIcon} alt="usericon" />
                  </a>
                </Link>
              </div>
              <div className="top-basket-icon">
                <Link href="/">
                  <a>
                    <FiShoppingCart size={22} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="container">
          <Navbar
            sticky="top-fixed"
            id="navbar"
            className="navbar navbar-expand-lg "
          >
            <Container className="d-flex justify-content-start">
              <Navbar.Brand>
                <Link href="/">
                  <a>
                    <img
                      height="80"
                      width="130"
                      src={logo}
                      alt="Hydro"
                      href="/"
                    />
                  </a>
                </Link>
              </Navbar.Brand>
              <Nav className="navbar-nav">
                <NavItem>
                  <Link href="/">
                    <a
                      className={
                        router.pathname === "/" ? "nav-link active" : "nav-link"
                      }
                    >
                      Home
                    </a>
                  </Link>
                </NavItem>
                <NavDropdown title="Play" id="basic-nav-dropdown">
                  <div className="container nav-play">
                    <div className="row">
                      <div className="col-1">
                        <FaMapSigns size={30} color="white" />
                      </div>
                      <div className="col-3">
                        <h3>Play</h3>
                      </div>
                      <div className="col-4">
                        <p>Action Packed Fun</p>
                      </div>
                      <div className="col-3">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <Link href="/">
                          <a>Aqua Park</a>
                        </Link>
                        <Link href="/">
                          <a>Hydro Climb</a>
                        </Link>
                        <Link href="/">
                          <a>Waterboard & Kneeboard</a>
                        </Link>
                        <Link href="/">
                          <a>Tubing</a>
                        </Link>
                        <Link href="/">
                          <a>Puddle Park</a>
                        </Link>
                      </div>
                      <div className="col">
                        <Link href="/">
                          <a>Aqua Rugby</a>
                        </Link>
                        <Link href="/">
                          <a>Open Water Swim</a>
                        </Link>
                        <Link href="/">
                          <a>BBQ Pods</a>
                        </Link>
                        <Link href="/">
                          <a>Stand Up Paddle Boarding</a>
                        </Link>
                        <Link href="/">
                          <a>Kayaking</a>
                        </Link>
                      </div>
                      <div className="col">
                        <h4>Group Package?</h4>
                        <h4>Birthday Party?</h4>
                        <p>Fill in this enquiry form</p>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Enquiry Form
                        </button>
                      </div>
                    </div>
                  </div>
                </NavDropdown>

                <NavDropdown title="Stay" id="basic-nav-dropdown">
                  <div className="container nav-stay">
                    <div className="row">
                      <div className="col-1">
                        <FaHome size={30} color="white" />
                      </div>
                      <div className="col-3">
                        <h3>Stay</h3>
                      </div>
                      <div className="col-4">
                        <p>Relax & Unwind</p>
                      </div>
                      <div className="col-3">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <Link href="/">
                          <a>Glamping Pods</a>
                        </Link>
                        <Link href="/">
                          <a>Safari Lodges</a>
                        </Link>
                        <Link href="/">
                          <a>Lake Pod</a>
                        </Link>
                        <Link href="/">
                          <a>Houseboat</a>
                        </Link>
                        <Link href="/">
                          <a>IgluHut</a>
                        </Link>
                      </div>
                      <div className="col">
                        <Link href="/">
                          <a>Forest Domes</a>
                        </Link>
                        <Link href="/">
                          <a>Luxury Glamping Pods</a>
                        </Link>
                        <Link href="/">
                          <a>Meadow Pods</a>
                        </Link>
                        <Link href="/">
                          <a>Hedge Village Pods</a>
                        </Link>
                        <Link href="/">
                          <a>Tree Garden Pods</a>
                        </Link>
                      </div>
                      <div className="col">
                        <h4>Special Enquiry?</h4>
                        <p>Fill in this enquiry form</p>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Enquiry Form
                        </button>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown title="Explore" id="basic-nav-dropdown">
                  <div className="nav-explore">
                    <NavDropdown.Item href="/">Towpath</NavDropdown.Item>

                    <NavDropdown.Item href="/">Playpark</NavDropdown.Item>
                    <NavDropdown.Item href="/">Memberships</NavDropdown.Item>

                    <button type="button" className="btn btn-primary btn-sm">
                      Buy Pass
                    </button>
                  </div>
                </NavDropdown>
                <NavDropdown title="Groups" id="basic-nav-dropdown">
                  <div className="nav-groups">
                    <NavDropdown.Item href="/">
                      Schools & Groups
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/">Team Building</NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      Birthday Parties
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/">BBQ Pods</NavDropdown.Item>
                  </div>
                </NavDropdown>
                <Link href="/">
                  <a className="nav-link">Events</a>
                </Link>
                <button type="button" className="btn btn-primary btn-sm">
                  <FaRegCalendarAlt /> &nbsp; Book Now
                </button>
              </Nav>

              <div className="FaBars">
                <MobileMenu
                  render={({ on, toggle }) => (
                    <div>
                      <div>
                        {" "}
                        <FiShoppingCart size={20} /> &nbsp;
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                        >
                          Book Now
                        </button>{" "}
                        &nbsp;
                        <icon onClick={toggle}>
                          <FaBars />
                        </icon>
                      </div>
                      {on && (
                        <div className="MobileMenu">
                          <div className="container">
                            <div className="mobile-top-nav  ">
                              <div className="row d-flex justify-content-between py-5">
                                <div>
                                  <FiShoppingCart size={50} />
                                </div>
                                <div className="mr-5" onClick={toggle}>
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
                  )}
                />
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
