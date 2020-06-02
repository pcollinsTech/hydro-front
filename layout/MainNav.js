import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../assets/images/hydro-logo.png";
import {
  FaRegCalendarAlt,
  FaBars,
  FaWindowClose,
  FaMapSigns,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import { NavDropdown, Navbar, Container, Nav, NavItem } from "react-bootstrap";
import Dropdown from "./Dropdown/Dropdown";
import TopNav from "./TopNav";

const icon = () => <FaMapSigns size={30} color="white" />;
const playItems = [
  {
    activity: "Aqua Park",
    slug: "aqua-park",
  },
  {
    activity: "Hydro Climb",
    slug: "hydro-climb",
  },
  {
    activity: "Wakeboard & Kneeboard",
    slug: "wakeboard-kneeboard",
  },
  {
    activity: "Tubing",
    slug: "tubing",
  },
  {
    activity: "Aqua Rugby",
    slug: "aqua-rugby",
  },
  {
    activity: "Open Water Swim",
    slug: "open-water-swim",
  },
  {
    activity: "BBQ Pods",
    slug: "bbq-pods",
  },
  {
    activity: "Stand Up Paddle Boarding",
    slug: "stand-up-paddle-boarding",
  },
  {
    activity: "Kayaking",
    slug: "kayaking",
  },
];
const MainNav = ({ setMenuShow }) => {
  const router = useRouter();
  return (
    <div>
      <TopNav />
      <div className="main-nav">
        <div className="container">
          <Navbar
            sticky="top-fixed"
            id="navbar"
            className="navbar navbar-expand-lg"
          >
            <Container className="d-flex justify-content-between">
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
                <Dropdown
                  title="Play"
                  subTitle="Action Pack Fun"
                  items={playItems}
                />
                <Dropdown
                  title="Stay"
                  subTitle="Relax & Unwind"
                  items={playItems}
                />

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
