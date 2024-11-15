import React from "react";
import vhslogo from "../../src/assets1/vhs-lgo.png";
import { Link } from "react-router-dom";

function Pmobileheader() {
  return (
    <div
      className="d-flex p-mobile-header"
      style={{
        backgroundColor: "aliceblue",
        padding: "10px",
        justifyContent: "space-between",
      }}
    >
      <div className="">
        <img
          src={vhslogo}
          alt="vhs logo"
          style={{ width: "40px", height: "40px" }}
        />
        <span className="poppins-black mx-3">Vijay Home Services</span>
      </div>
      <div className="">
        <Link
          to="/myorders"
          style={{
            // border: "1px solid lightgrey",
            // padding: "7px 13px",
            // borderRadius: "5px",
            textDecoration: "none",
            color: "darkred",
          }}
          className="poppins-black text-end ms-auto"
        >
          My Bookings
        </Link>
      </div>
    </div>
  );
}
export default Pmobileheader;
