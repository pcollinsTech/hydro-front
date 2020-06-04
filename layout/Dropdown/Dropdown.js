import React, { useState } from "react";
import Link from "next/link";
import DropdownItem from "./DropdownItem";
import { FaMapSigns, FaHome } from "react-icons/fa";
import OutsideAlerter from "../../components/ultils/OutsideAlerter";
const Dropdown = ({ items, title, subTitle }) => {
  const [open, setOpen] = useState(false);

  const display = open ? "inline-block !important" : "none !important";

  const list = () => {
    if (items.length > 6) {
      var first = items.slice(0, 5);
      var second = items.slice(5 + 1);
      return (
        <>
          <div className="col ">
            {first.map((item) => (
              <DropdownItem
                setOpen={setOpen}
                key={item.slug}
                item={item}
                title={title}
                setOpen={setOpen}
                open={open}
              />
            ))}
          </div>
          <div className="col ">
            {second.map((item) => (
              <DropdownItem
                setOpen={setOpen}
                key={item.slug}
                item={item}
                title={title}
                setOpen={setOpen}
                open={open}
              />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="col ">
            {items.map((item) => (
              <DropdownItem
                setOpen={setOpen}
                key={item.slug}
                item={item}
                title={title}
                setOpen={setOpen}
                open={open}
              />
            ))}
          </div>
          <div className="col"></div>
        </>
      );
    }
  };

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
            <div className="container">
              <div className="row my-4">
                <div className="col-1">
                  {title === "Play" ? (
                    <FaMapSigns size={30} color="white" />
                  ) : (
                    <FaHome size={30} color="white" />
                  )}
                </div>
                <div className="col-2">
                  <Link href={title.toLowerCase()}>
                    <a>
                      <h3>{title}</h3>
                    </a>
                  </Link>
                </div>
                <div className="col-2">
                  <p>{subTitle}</p>
                </div>
                <div className="col-1">
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
                {list()}
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
