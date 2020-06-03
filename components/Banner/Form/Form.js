import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaMapSigns, FaRegCalendarAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import splash from "../../../assets/images/splash-graphic-1.png";
import DatePicker from "react-datepicker";
import QuantitySelector from "../../QuantitySelector/QuantitySelector";
const Form = () => {
  const [type, setType] = useState("play");
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter();
  return (
    <div className="availability">
      <div className="container">
        <div className="col">
          <div className="title">
            <h5>Select Play or Stay</h5>
          </div>

          <div className="play-stay">
            <label htmlFor="play">Play </label> &nbsp;
            <input
              type="radio"
              id="play"
              name="play"
              className="mr-4"
              value={type}
              onChange={() => setType("play")}
              checked={type === "play"}
            />
            <label htmlFor="stay">Stay </label>&nbsp;
            <input
              type="radio"
              id="stay"
              name="stay"
              value={type}
              onChange={() => setType("stay")}
              checked={type === "stay"}
            />
          </div>
          <div className="input-fields">
            {type === "play" && (
              <div className="items">
                <label htmlFor="people" className="label">
                  Activity
                </label>
                <br />
                <div className="controls">
                  <FaMapSigns /> &nbsp;
                  <select className="floatLabel">
                    <option value="0">Aqua Park</option>
                    <option value="1">Hydro Climb</option>
                    <option value="2">Waterboard & Kneeboard</option>
                    <option value="3">Tubing</option>
                    <option value="4">Puddle Park</option>
                    <option value="5">Aqua Rugby</option>
                    <option value="6">Open Water Swim</option>
                    <option value="7">BBQ Pods</option>
                    <option value="8">Stand up Paddle Boarding</option>
                    <option value="9">Kayaking</option>
                  </select>
                </div>
              </div>
            )}
            {type === "stay" && (
              <div className="items">
                <label htmlFor="people" className="label">
                  Stay
                </label>
                <br />
                <div className="controls">
                  <FaMapSigns /> &nbsp;
                  <select className="floatLabel">
                    <option value="0">Glamping Pods</option>
                    <option value="1">Safari Lodge</option>
                    <option value="2">Lake Pod</option>
                    <option value="3">House Boat</option>
                    <option value="4">IgluHut</option>
                    <option value="5">Forest Dome</option>
                    <option value="6">Luxury Glamping Pod</option>
                    <option value="7">Meadow Pods</option>
                    <option value="8">Hedge Village Pods</option>
                  </select>
                </div>
              </div>
            )}
            <div className="date-picker">
              <label htmlFor="dates" className="label">
                Dates
              </label>
              <br />
              <div className="date-border">
                <FaRegCalendarAlt /> &nbsp;
                <DatePicker
                  className="datePicker"
                  showPopperArrow={false}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
          <div className="items">
            <label htmlFor="people" className="label">
              People
            </label>
            <br />
            <div className="controls d-flex">
              <FiUsers /> &nbsp;
              <QuantitySelector />
            </div>
          </div>
          <br />
          <button type="button" className="btn btn-success btn-sm">
            Check Availability
          </button>
        </div>
      </div>
      <div className="splash-banner">
        {" "}
        <img src={splash} alt="splash" />{" "}
      </div>
    </div>
  );
};

export default Form;
