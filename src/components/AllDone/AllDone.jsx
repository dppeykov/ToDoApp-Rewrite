import React from "react";

const AllDone = () => (
  <div className="container">
    <div
      className="alert alert-success d-flex flex-column text-center mt-4"
      style={{ height: "50vh", padding: "9vh 0" }}
    >
      <div>
        <h3>
          All done! <br /> No more tasks today!
        </h3>
      </div>

      <div>
        <img
          className="mt-4"
          src="https://img.icons8.com/officel/80/000000/checked.png"
          alt="All done"
        />
      </div>
    </div>
  </div>
);

export default AllDone;
