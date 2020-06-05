import React from "react";
import { useRouter } from "next/router";
// import "react-datepicker/dist/react-datepicker.css";
import splash from "../../assets/images/splash-graphic-1.png";
import splash1 from "../../assets/images/header-splash.png";
import playIcon from "../../assets/images/play-video-icon.svg";
import Form from "./Form";
const Banner = ({ bannerImage, title, subTitle }) => {
  const [startDate, setStartDate] = React.useState(new Date());
  const router = useRouter();
  return (
    <React.Fragment>
      <div
        className="banner mb-5"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="splash-header">
          {" "}
          <img src={splash1} alt="splash" />{" "}
        </div>

        <div className="banner-title">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-md-7">
                <h1 dangerouslySetInnerHTML={{ __html: title }} />

                <h4 dangerouslySetInnerHTML={{ __html: subTitle }} />
                <br />
                <br />
                <br />
                <div className="row">
                  <button type="button" className="btn btn-primary btn-sm">
                    <img src={playIcon} alt="playicon" /> &nbsp; Play Video
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    Short Breaks
                  </button>
                </div>
              </div>
              <div className="col-md-5">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
