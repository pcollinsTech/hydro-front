import React from "react";
import Link from "next/link";

const CardButton = ({ type, slug }) => {
  return (
    <>
      {type === "home" && (
        <Link href={slug}>
          <button type="button" className="btn btn-primary btn-sm">
            View
          </button>
        </Link>
      )}
      {type === "stay" && (
        <Link href={`stay/${slug}`}>
          <button type="button" className="btn btn-primary btn-sm">
            {price}
            <span className="divider">|</span>
            {details}
          </button>
        </Link>
      )}
      {type === "play" && (
        <Link href={`play/${slug}`}>
          <button type="button" className="btn btn-primary btn-sm">
            {price}
            <span className="divider">|</span>
            {details}
          </button>
        </Link>
      )}
    </>
  );
};

export default CardButton;
