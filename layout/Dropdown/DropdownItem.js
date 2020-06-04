import React from "react";
import Link from "next/link";

const DropdownItem = ({ item, title, setOpen, open }) => {
  return (
    <div onClick={() => setOpen(!open)}>
      <Link
        as={`/${title.toLowerCase()}/${item.slug}`}
        href={`/${title.toLowerCase()}/[slug]`}
      >
        <a>{item.title}</a>
      </Link>
    </div>
  );
};

export default DropdownItem;
