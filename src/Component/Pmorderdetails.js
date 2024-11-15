import React from "react";
import Footer from "./Footer";
import Pheader from "./Pheader";
import Pmobileheader from "./Pmobileheader";
import { useLocation } from "react-router-dom";
import pcity from "../../src/assets1/pcity.jpg";
import deliverytruck from "../../src/assets1/deliverytruck.png";
import axios from "axios";

function Pmorderdetails() {
  const location = useLocation();
  const { order } = location.state || {};

  const amt =
    order?.paymentStatus === "online" ? order?.amount - 99 : order?.amount;

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://pm.vijayhomeservice.in/api/CCAvenue/CCAvenueAfterBookpaymentwebsite",
        { serviceId: order?._id, amount: amt }
      );

      if (response && response.data && response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error(
        "Error initiating payment:",
        error.response || error.message || error
      );
    }
  };
  return (
    <div className="">
      <Pheader />
      <Pmobileheader />
      {/* <img src={pcity} alt="loading..." style={{ width: "100%" }} /> */}

      <div className="container mt-4 mb-5">
        <div className="row" style={{ justifyContent: "center" }}>
          <div
            className="col-md-7 shadow-sm p-4 mt-3 mb-3"
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <div className="d-flex">
              <div className="d-flex" style={{ alignItems: "center" }}>
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ fontSize: "18px", color: "green" }}
                ></i>
              </div>
              <div className="poppins-black mx-3">{order.bookingDate}</div>
            </div>

            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <div className="col-md-2">
                <img
                  src={deliverytruck}
                  style={{ width: "50px", height: "50px" }}
                  alt="loading..."
                />
              </div>
              <div className="col-md-7 " style={{ alignItems: "center" }}>
                <div className="poppins-regular" style={{ color: "green" }}>
                  Service Date : {order.serviceDate}
                </div>
                <div
                  className="poppins-regular pt-1"
                  style={{ color: "green" }}
                >
                  Distance : {Math.round(order.distance)} km
                </div>
              </div>
              <div
                className="col-md-4 d-flex"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <div
                  className="poppins-regular mt-1"
                  style={{
                    textAlign: "center",
                    padding: "3px 15px",
                    backgroundColor:
                      order.jobStatus === "Pending"
                        ? "#ffe0a86b"
                        : order.jobStatus === "Completed"
                        ? "#a6ffa663"
                        : order.jobStatus === "In Progress"
                        ? "#b0b0ff59"
                        : "gray",

                    borderRadius: "5px",
                    color:
                      order.jobStatus === "Pending"
                        ? "orange"
                        : order.jobStatus === "Completed"
                        ? "green"
                        : order.jobStatus === "In Progress"
                        ? "blue"
                        : "black",
                  }}
                >
                  {order.jobStatus || "Status Unknown"}
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <div
                className="col-md-1 d-flex"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <i
                  className="fa-solid fa-location-crosshairs"
                  style={{ fontSize: "20px", color: "green" }}
                ></i>
              </div>
              <div className="col-md-11 px-1">
                <div
                  className="poppins-regular"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "grey",
                  }}
                >
                  {order.pickupLocation}
                </div>
              </div>
            </div>

            <div
              className=""
              style={{
                borderLeft: "1px solid grey",
                height: "31px",
                borderLeftStyle: "dashed",
                marginLeft: "25px",
                position: "absolute",
              }}
            ></div>

            <div className="d-flex mt-4 pt-2">
              <div
                className="col-md-1 d-flex"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <i
                  className="fa-solid fa-location-crosshairs"
                  style={{ fontSize: "20px", color: "red" }}
                ></i>
              </div>
              <div className="col-md-11 px-1">
                <div
                  className="poppins-regular"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "grey",
                  }}
                >
                  {order.dropLocation}
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-4"
              style={{ justifyContent: "space-between" }}
            >
              <div className="poppins-black">Items</div>
              <div className="poppins-black">Qty</div>
            </div>

            {order?.Items?.map((item) => (
              <div
                className="d-flex mt-2"
                style={{ justifyContent: "space-between" }}
              >
                <div
                  className="poppins-regular"
                  style={{
                    color: "#333",
                  }}
                >
                  {item.itemname}
                </div>
                <div
                  className="poppins-regular"
                  style={{
                    color: "#333",
                  }}
                >
                  {item.qty}
                </div>
              </div>
            ))}

            <div className="poppins-black mt-3">Bill Details</div>

            <div
              className="d-flex mt-2"
              style={{
                justifyContent: "space-between",
                borderBottom: "1px solid black",
                borderColor: "lightgrey",
              }}
            >
              <div className="poppins-regular pb-2">
                Packers and Movers Service
              </div>
              <div className="poppins-regular pb-2">{order.baseAmount}</div>
            </div>

            {order?.paymentStatus === "online" ? (
              <div
                className="d-flex mt-3"
                style={{
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="poppins-regular"
                  style={{
                    color: "#333",
                  }}
                >
                  Advance
                </div>
                <div
                  className="poppins-regular"
                  style={{
                    color: "#333",
                  }}
                >
                  ₹ 99
                </div>
              </div>
            ) : (
              <></>
            )}

            <div
              className="d-flex mt-2"
              style={{ justifyContent: "space-between" }}
            >
              <div className="poppins-regular ">Total Payable</div>
              <div className="poppins-regular ">{order.amount}</div>
            </div>

            {order.fullPaymentStatus === "online" ? (
              <div
                className="poppins-black mt-3"
                style={{
                  color: "white",
                  textAlign: "center",
                  backgroundColor: "green",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              >
                Payment Successful
              </div>
            ) : (
              <div
                onClick={handleSubmit1}
                className="poppins-black mt-3"
                style={{
                  color: "white",
                  textAlign: "center",
                  backgroundColor: "darkred",
                  padding: "7px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Pay Now
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pmorderdetails;
