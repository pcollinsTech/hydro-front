import React from "react";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="newsletter-form row">
      <div className="col-8">
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="name@gmail.com"
          className="form-control"
          required
        />
      </div>
      <div className="col-4">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={submit}
        >
          {status === null && <div>Send</div>}
          {status === "sending" && (
            <div className="subs-sending-msg">sending...</div>
          )}
          {status === "error" && (
            <div
              className="subs-error-msg"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              className="subs-success-msg"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
