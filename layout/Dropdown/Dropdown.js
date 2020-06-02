import React, { useState } from "react";
import Link from "next/link";
import DropdownItem from "./DropdownItem";
import { FaMapSigns, FaHome } from "react-icons/fa";
import OutsideAlerter from "../../components/ultils/OutsideAlerter";
const Dropdown = ({ items, title, subTitle }) => {
  const [open, setOpen] = useState(false);

  const display = open ? "inline-block !important" : "none !important";

  return (
    <div className="" onClick={() => setOpen(!open)}>
      <a
        id="basic-nav-dropdown"
        className="dropdown-toggle nav-link"
        role="button"
      >
        {title}
      </a>
      {open && (
        <OutsideAlerter open={open} trigger={setOpen}>
          <div className="nav-play" style={{ display: display }}>
            <div className="container flex-column text-left">
              <div className="row">
                <div className="col-1">
                  {title === "Play" ? (
                    <FaMapSigns size={30} color="white" />
                  ) : (
                    <FaHome size={30} color="white" />
                  )}
                </div>
                <div className="col-3">
                  <Link href={title.toLowerCase()}>
                    <a>
                      <h3>{title}</h3>
                    </a>
                  </Link>
                </div>
                <div className="col-4">
                  <p>{subTitle}</p>
                </div>
                <div className="col-3">
                  <Link href={title.toLowerCase()}>
                    <a>
                      <button type="button" className="btn btn-primary btn-sm">
                        Book Now
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column">
                  {items.map((item) => {
                    return (
                      <DropdownItem
                        setOpen={setOpen}
                        key={item.slug}
                        item={item}
                        title={title}
                        setOpen={setOpen}
                        open={open}
                      />
                    );
                  })}
                </div>
                <div className="col">
                  <h4>Group Package?</h4>
                  <h4>Birthday Party?</h4>
                  <p>Fill in this enquiry form</p>
                  <button type="button" className="btn btn-primary btn-sm">
                    Enquiry Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </OutsideAlerter>
      )}
    </div>
  );
};

export default Dropdown;
