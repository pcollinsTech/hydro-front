import React from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
export default function Toggle({ children, eventKey, callback }) {
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  return <div onClick={decoratedOnClick}>{children}</div>;
}
