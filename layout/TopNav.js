import React from "react";
import Link from "next/link";
import userIcon from "../assets/images/user-icon.svg";
import calenderIcon from "../assets/images/calendar-icon.svg";
import { FiShoppingCart } from "react-icons/fi";
import { GiTicket } from "react-icons/gi";
import { FaRegClock, FaHome } from "react-icons/fa";
export default function TopNav() {
  return (
    <div className="top-nav">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-3 opening">
            <h6>
              <FaRegClock size={17} /> &nbsp; Open Today: 9:00am - 6:00pm
            </h6>
          </div>
          <div className="col-6 d-flex justify-content-between">
            <Link href="/">
              <a>
                <GiTicket size={17} /> Gift Vouchers
              </a>
            </Link>

            <Link href="/">
              <a>Jobs</a>
            </Link>

            <Link href="/">
              <a>Memberships</a>
            </Link>

            <Link href="/">
              <a>Contact</a>
            </Link>

            <Link href="/">
              <a>Help & Rules</a>
            </Link>
          </div>
          <div className="col-1 d-flex justify-content-between">
            <div className="top-user-icon">
              <Link href="/">
                <a>
                  <img src={userIcon} alt="usericon" />
                </a>
              </Link>
            </div>
            <div className="top-basket-icon">
              <Link href="/">
                <a>
                  <FiShoppingCart size={22} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
