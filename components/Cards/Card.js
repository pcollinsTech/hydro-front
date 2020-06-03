import React from "react";
import Link from "next/link";
import CardButton from "./CardButton";
export default function Card({ type, data }) {
  const { icon, featuredImage, title, slug, listItems, price, details } = data;
  return (
    <div className="col-sm-4 mb-5">
      <div className="services d-flex justify-content-around">
        <div className="service_card">
          <img src={featuredImage} alt="welcome1" />
          <h5>
            <span>{icon}</span> {title}
          </h5>
          {listItems && (
            <ul>
              {listItems.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          )}

          <CardButton type={type} slug={slug} />
        </div>
      </div>
    </div>
  );
}
