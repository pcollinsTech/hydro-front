import React from "react";
import { useRouter } from "next/router";
import { FaMapSigns, FaRegCalendarAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import splash from "../../../assets/images/splash-graphic-1.png";
import DatePicker from "react-datepicker";
import QuantitySelector from "../../QuantitySelector/QuantitySelector";
const Form = () => {
  const [startDate, setStartDate] = React.useState(new Date());
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
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />{" "}
            &nbsp; &nbsp; &nbsp;
            <label htmlFor="stay">Stay </label>&nbsp;
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
          </div>
          <div className="input-fields">
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
