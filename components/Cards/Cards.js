import React from "react";
import welcome1 from "../../assets/images/pexels-photo-2.jpg";
import splash from "../../assets/images/splash-graphic-2.png";
import Card from "./Card";
import { FaMapSigns, FaHome } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import styles from "./service.module.scss";

const data = [
  {
    id: 1,
    icon: <FaMapSigns size={35} />,
    title: "Play",
    description: "play",
    slug: "#",
    img: welcome1,
  },
  {
    id: 2,
    icon: <FaHome size={35} />,
    title: "Stay",
    description: "stay",
    slug: "/stay",
    img: welcome1,
  },
  {
    id: 3,
    icon: <FiMap size={35} />,
    title: "Explore",
    description: "explore",
    slug: "#",
    img: welcome1,
  },
  {
    id: 4,
    icon: <FaMapSigns size={35} />,
    title: "Events",
    description: "events",
    slug: "#",
    img: welcome1,
  },
  {
    id: 5,
    icon: <FaHome size={35} />,
    title: "Groups",
    description: "groups",
    slug: "#",
    img: welcome1,
  },
  {
    id: 6,
    icon: <FiMap size={35} />,
    title: "Memberships",
    description: "membership",
    slug: "#",
    img: welcome1,
  },
];

const Services = () => {
  return (
    <React.Fragment>
      <section className={styles.services_area}>
        <div className="splash-service">
          {" "}
          <img src={splash} alt="splash" />{" "}
        </div>
        <div className="container">
          <div className="section-title">
            <h2>
              <b>PLAY - STAY - EXPLORE</b>
            </h2>
            <h3>
              <b>AT LET'S GO HYDRO!</b>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {data.map((activity) => (
              <Card key={activity.id} data={activity} type="home" />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
