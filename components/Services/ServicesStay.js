import React from "react";
import tent1 from "../../assets/images/outdoor-tent.jpg";
import Card from "./Card";
import styles from "./service.module.scss";

const data = [
  {
    id: 1,
    title: "Glamping Pods",
    description: "Glamping Pods",
    img: tent1,
    slug: "#",
    listItems: ["Access to outside water taps", "Sleeps: 4", "Communal Kitchen & toilet areas"],
    price: "From £150 per night",
    details: "More Details",
  },
  {
    id: 2,
    title: "Safari Lodges",
    description: "Safari Lodges",
    img: tent1,
    slug: "#",
    listItems: ["Views of the reservoir", "Sleeps: 6", "Self Catering & Private restrooms"],
    price: "From £150 per night",
    details: "More Details",
  },
  {
    id: 3,
    title: "Lake Pod",
    description: "Lake Pod",
    img: tent1,
    slug: "#",
    listItems: ["Double bed", "Sleeps: 2", "Kitchenette"],
    price: "From £80 per night",
    details: "More Details",
  },
  {
    id: 4,
    title: "House Boat",
    description: "House Boat",
    img: tent1,
    slug: "#",
    listItems: ["Roof Top Terrace", "Sleeps: 6", "Kitchen, Television, Wifi"],
    price: "From £250 per night",
    details: "More Details",
  },
  {
    id: 5,
    title: "IgluHut",
    description: "IgluHut",
    img: tent1,
    slug: "#",
    listItems: ["Private Stargazing Hot Tub", "Sleeps: 4", "BBQ Provided, Private Decking"],
    price: "From £250 per night",
    details: "More Details",
  },
  {
    id: 6,
    title: "Forest Domes",
    description: "Forest Domes",
    img: tent1,
    slug: "#",
    listItems: ["Camp Fire", "Sleeps: 4", "Ensuite with shower"],
    price: "From £200 per night",
    details: "More Details",
  },
  {
    id: 7,
    title: "Luxury Glamping Pods",
    description: "Luxury Glamping Pods",
    img: tent1,
    slug: "#",
    listItems: ["Perfect for couples", "Sleeps: 4", "Shared Hot tub & Sauna"],
    price: "From £100 per night",
    details: "More Details",
  },
  {
    id: 8,
    title: "Meadow Pods",
    description: "Meadow Pods",
    img: tent1,
    slug: "#",
    listItems: ["Private Stargazing Hot Tub", "Sleeps: 4", "BBQ Provided, Private Decking"],
    price: "From £60 per night",
    details: "More Details",
  },
  {
    id: 9,
    title: "Hedge Village Pods",
    description: "Hedge Village Pods",
    img: tent1,
    slug: "#",
    listItems: ["Camp Fire", "Sleeps: 4", "Ensuite with shower"],
    price: "From £60 per night",
    details: "More Details",
  },
  {
    id: 10,
    title: "Tree Garden Pods",
    description: "Tree Garden Pods",
    img: tent1,
    slug: "#",
    listItems: ["Roof Top Terrace", "Sleeps: 6", "Kitchen, Television, Wifi"],
    price: "From £60 per night",
    details: "More Details",
  },
  {
    id: 11,
    title: "Caravan Park",
    description: "Caravan Park",
    img: tent1,
    slug: "#",
    listItems: ["Private Stargazing Hot Tub", "Sleeps: 4", "BBQ Provided, Private Decking"],
    price: "From £50 per night",
    details: "More Details",
  },
  {
    id: 12,
    title: "Tent",
    description: "Tent",
    img: tent1,
    slug: "#",
    listItems: ["Camp Fire", "Sleeps: 4", "Ensuite with shower"],
    price: "From £80 per night",
    details: "More Details",
  },
];

const ServicesStay = () => {
  return (
    <React.Fragment>
      <section className={styles.services_area}>
        <div className="container">
          <div className="row">
            {data.map((activity) => (
              <Card activity={activity} type="stay" />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ServicesStay;
