import React from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
// Components
import Toggle from "./Toggle";
import { ListLink } from "../../common";

export default function Accordian({ title, items }) {
  return (
    <Accordion>
      <Toggle eventKey="0">
        {" "}
        <h4>{title}</h4>
      </Toggle>

      <Accordion.Collapse eventKey="0">
        <ul>
          {items.map((item) => (
            <ListLink item={item} title={title} />
          ))}
        </ul>
      </Accordion.Collapse>
    </Accordion>
  );
}
