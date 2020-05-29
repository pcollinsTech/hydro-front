import React from "react";
import Link from "next/link";

const DropdownItem = ({ item: { activity, slug }, title, setOpen, open }) => {
  return (
    <div onClick={() => setOpen(!open)}>
      <Link
        as={`/${title.toLowerCase()}/${slug}`}
        href={`/${title.toLowerCase()}/[slug]`}
      >
        <a>{activity}</a>
      </Link>
    </div>
  );
};

export default DropdownItem;
