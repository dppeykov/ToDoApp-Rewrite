import React from "react";

const Alert = ({ empty }) => {
  return empty ? (
    <div className="container mt-3 alert alert-danger text-center">
      Ooops, no text provided! Please fill in the to do item field above!
    </div>
  ) : null;
};
export default Alert;
