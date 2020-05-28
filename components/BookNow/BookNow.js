import React from "react";
import background from "../../assets/images/splash-graphic-footer.png";

const BookNow = () => {
  return (
    <React.Fragment>
      <div
        className="book-background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="book-now">
          <div className="container">
            <div className="section-title">
              <div className="row">
                <div className="col">
                  <br />
                  <h2>
                    <b>Book Your Adventure Now</b>
                  </h2>
                  <br />
                  <button type="button" className="btn btn-primary btn-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookNow;
