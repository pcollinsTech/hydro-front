import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../assets/images/hydro-logo.png";
import { FaRegCalendarAlt, FaMapSigns } from "react-icons/fa";
import { NavDropdown, Navbar, Container, Nav, NavItem } from "react-bootstrap";
import Dropdown from "./Dropdown/Dropdown";
import TopNav from "./TopNav";
import activitiesData from "../assets/data/play";
import staysData from "../assets/data/stay";

const MainNav = () => {
  const router = useRouter();

  return (
    <div>
      <TopNav />
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
                items={activitiesData}
              />
              <Dropdown
                title="Stay"
                subTitle="Relax & Unwind"
                items={staysData}
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
                  <NavDropdown.Item href="/">Schools & Groups</NavDropdown.Item>

                  <NavDropdown.Item href="/">Team Building</NavDropdown.Item>
                  <NavDropdown.Item href="/">Birthday Parties</NavDropdown.Item>

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
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default MainNav;
