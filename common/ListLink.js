import React from "react";
import Link from "next/link";

export default function ListLink({ item: { title, slug } }) {
  return (
    <li>
      <Link href={`/${slug}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
}
