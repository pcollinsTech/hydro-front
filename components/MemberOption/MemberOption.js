import React from "react";
import oval from "../../assets/images/splash_picture.png";
import splash from "../../assets/images/splash.png";

const MemberOption = () => {
  return (
    <React.Fragment>
      <div className="member-option">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="section-title text-left">
                <h2>
                  <b>GET YOUR HYDRO PASS TODAY</b>
                </h2>
                <br />
                <p>
                  Get Access to all our hydro activities for one year including
                  wet suit hire
                </p>
                <br />
                <p>Prices Start from just £99 per year</p>
                <br />
                <button type="button" className="btn btn-primary btn-sm">
                  See Member Options
                </button>
              </div>
            </div>

            <div className="member-image-mobile">
              <div className="col">
                <img src={oval} alt="Group waving" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="section-title-mobile">
                  <h2>
                    <b>GET YOUR HYDRO PASS TODAY!</b>
                  </h2>
                  <br />
                  <button type="button" className="btn btn-primary btn-sm">
                    See Member Options
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="member-image">
                <img src={oval} alt="Group waving" />
              </div>
            </div>
            <div className="col">
              <div className="splash-image">
                <img src={splash} alt="splash" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemberOption;
