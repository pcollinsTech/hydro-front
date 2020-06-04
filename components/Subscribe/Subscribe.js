import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";
class Subscribe extends Component {
  state = {};
  render() {
    const url = "https://google.com";
    return (
      <React.Fragment>
        <h4>
          <b>SIGN-UP FOR NEWSLETTER</b>
        </h4>

        <div className="col">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default Subscribe;
