import React from "react";
import Link from "next/link";

export default function ListLink({ item, title }) {
  return (
    <li>
      <Link
        as={`/${title.toLowerCase()}/${item.slug}`}
        href={`/${title.toLowerCase()}/[slug]`}
      >
        <a>{item.title}</a>
      </Link>
    </li>
  );
}
