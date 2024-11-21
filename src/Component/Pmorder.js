import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Pheader from "./Pheader";
import Pmobileheader from "./Pmobileheader";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import deliverytruck from "../../src/assets1/deliverytruck.png";
import { Link } from "react-router-dom";
import pmmobile from "../../src/assets1/pmmobile.jpg";
import moment from "moment/moment";

function Pmorder() {
  const [orderdata, setorderdata] = useState([]);
  const [allenquirydata, setallenquirydata] = useState([]);
  const [data, setdata] = useState([]);

  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  console.log("user", user._id);

  useEffect(() => {
    getallorderdata();
  }, []);

  const getallorderdata = async () => {
    try {
      let res = await axios.get(
        `https://pm.vijayhomeservice.in/api/order/getuserOrderId/${user?._id}`
      );
      if (res.status === 200) {
        setorderdata(res.data.data);
      }
    } catch (er) {
      console.log(er, "err while fetching data");
    }
  };

  useEffect(() => {
    getallenquirydata();
  }, []);

  const getallenquirydata = async () => {
    try {
      let res = await axios.get(
        `https://pm.vijayhomeservice.in/api/enquiry/findbyuser/${user?._id}`
      );
      if (res.status === 200) {
        setallenquirydata(res.data);
      }
    } catch (er) {
      console.log(er, "err while fetching data");
    }
  };

  useEffect(() => {
    getallquotationsdata();
  }, [user]);

  const getallquotationsdata = async () => {
    try {
      let res = await axios.get(
        `https://pm.vijayhomeservice.in/api/enquiry/findbyuser/${user?._id}`
      );
      if (res.status === 200) {
        setdata(res.data);
      }
    } catch (er) {
      console.log(er, "err while fetching data");
    }
  };

  console.log("data", data);

  return (
    <div className="">
      <Pheader />
      <Pmobileheader />
      <div className="container">
        <div className="row mt-4 mb-4" style={{ justifyContent: "center" }}>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            style={{
              backgroundColor: "white",
              border: "none",
              justifyContent: "center",
            }}
          >
            <Tab
              eventKey="home"
              title="Ongoing"
              style={{ marginRight: "20px" }} // Add space between the tabs
            >
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-10">
                  <div className="row">
                    {orderdata.map((item, index) => (
                      <div className="col-md-6">
                        <Link
                          to="/pmorderdetails_page"
                          state={{ order: item }}
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            className="shadow-sm p-3 mt-3"
                            style={{ backgroundColor: "aliceblue" }}
                          >
                            <div className="d-flex">
                              <div className="col-md-1">
                                <img
                                  src={deliverytruck}
                                  style={{ width: "30px", height: "30px" }}
                                  alt="loading..."
                                />
                              </div>
                              <div className="col-md-11 mx-1">
                                <div
                                  className="poppins-black"
                                  style={{ color: "black" }}
                                >
                                  {item.bookingDate}
                                </div>
                              </div>
                            </div>

                            <div className="d-flex mt-3">
                              <div
                                className="col-md-1 d-flex"
                                style={{ alignItems: "center" }}
                              >
                                <i
                                  className="fa-solid fa-location-crosshairs"
                                  style={{ fontSize: "20px", color: "green" }}
                                ></i>
                              </div>
                              <div className="col-md-11">
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
                                  {item.pickupLocation}
                                </div>
                              </div>
                            </div>

                            <div
                              className=""
                              style={{
                                borderLeft: "1px solid grey",
                                height: "31px",
                                borderLeftStyle: "dashed",
                                marginLeft: "10px",
                                position: "absolute",
                              }}
                            ></div>

                            <div className="d-flex mt-4 pt-2">
                              <div
                                className="col-md-1 d-flex"
                                style={{ alignItems: "center" }}
                              >
                                <i
                                  className="fa-solid fa-location-crosshairs"
                                  style={{ fontSize: "20px", color: "red" }}
                                ></i>
                              </div>
                              <div className="col-md-11">
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
                                  {item.dropLocation}
                                </div>
                              </div>
                            </div>

                            <div
                              className="poppins-regular mt-3"
                              style={{
                                color: "white",
                                backgroundColor: "orange",
                                width: "100px",
                                textAlign: "center",
                                padding: "3px",
                                borderRadius: "5px",
                              }}
                            >
                              {item.jobStatus || "Status Unknown"}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="quotations"
              title="Quotations"
              style={{ marginLeft: "20px" }} // Add space between the tabs
            >
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-10">
                  <div className="row">
                    {data.map((item, index) => (
                      <div className="col-md-6">
                        <div
                          onClick={() => {
                            const quoteId = item?.quoteData[0]?._id; // Get the quote ID safely
                            if (quoteId) {
                              window.open(
                                `https://pmadmin.vijayhomeservice.in/quoteView/${quoteId}`,
                                "_blank"
                              );
                            } else {
                              console.log("Quote ID not available");
                            }
                          }}
                          className="shadow-sm p-3 mt-3"
                          style={{
                            backgroundColor: "aliceblue",
                            cursor: "pointer",
                          }}
                        >
                          <div className="d-flex">
                            <div className="col-md-1">
                              <img
                                src={deliverytruck}
                                style={{ width: "30px", height: "30px" }}
                                alt="loading..."
                              />
                            </div>
                            <div className="col-md-11 mx-1">
                              <div
                                className="poppins-black"
                                style={{ color: "black" }}
                              >
                                {moment(item.bookingDate).format("lll")}
                              </div>
                            </div>
                          </div>

                          <div className="d-flex mt-3">
                            <div
                              className="col-md-1 d-flex"
                              style={{ alignItems: "center" }}
                            >
                              <i
                                className="fa-solid fa-location-crosshairs"
                                style={{ fontSize: "20px", color: "green" }}
                              ></i>
                            </div>
                            <div className="col-md-11">
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
                                {item.pickupLocation}
                              </div>
                            </div>
                          </div>

                          <div
                            className=""
                            style={{
                              borderLeft: "1px solid grey",
                              height: "31px",
                              borderLeftStyle: "dashed",
                              marginLeft: "10px",
                              position: "absolute",
                            }}
                          ></div>

                          <div className="d-flex mt-4 pt-2">
                            <div
                              className="col-md-1 d-flex"
                              style={{ alignItems: "center" }}
                            >
                              <i
                                className="fa-solid fa-location-crosshairs"
                                style={{ fontSize: "20px", color: "red" }}
                              ></i>
                            </div>
                            <div className="col-md-11">
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
                                {item.dropLocation}
                              </div>
                            </div>
                          </div>

                          {item?.quoteData ? (
                            <div
                              className="poppins-regular mt-3"
                              style={{
                                color: "white",
                                backgroundColor: "green",
                                width: "150px",
                                textAlign: "center",
                                padding: "3px",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}
                            >
                              View Quotation
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="profile"
              title="History"
              style={{ marginLeft: "20px" }} // Add space between the tabs
            >
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-10">
                  <div className="row">
                    {orderdata.map((item, index) => (
                      <div className="col-md-6">
                        <Link
                          to="/pmorderdetails_page"
                          state={{ order: item }}
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            className="shadow-sm p-3 mt-3"
                            style={{ backgroundColor: "aliceblue" }}
                          >
                            <div className="d-flex">
                              <div className="col-md-1">
                                <img
                                  src={deliverytruck}
                                  style={{ width: "30px", height: "30px" }}
                                  alt="loading..."
                                />
                              </div>
                              <div className="col-md-11 mx-1">
                                <div
                                  className="poppins-black"
                                  style={{ color: "black" }}
                                >
                                  {item.bookingDate}
                                </div>
                              </div>
                            </div>

                            <div className="d-flex mt-3">
                              <div
                                className="col-md-1 d-flex"
                                style={{ alignItems: "center" }}
                              >
                                <i
                                  className="fa-solid fa-location-crosshairs"
                                  style={{ fontSize: "20px", color: "green" }}
                                ></i>
                              </div>
                              <div className="col-md-11">
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
                                  {item.pickupLocation}
                                </div>
                              </div>
                            </div>

                            <div
                              className=""
                              style={{
                                borderLeft: "1px solid grey",
                                height: "31px",
                                borderLeftStyle: "dashed",
                                marginLeft: "10px",
                                position: "absolute",
                              }}
                            ></div>

                            <div className="d-flex mt-4 pt-2">
                              <div
                                className="col-md-1 d-flex"
                                style={{ alignItems: "center" }}
                              >
                                <i
                                  className="fa-solid fa-location-crosshairs"
                                  style={{ fontSize: "20px", color: "red" }}
                                ></i>
                              </div>
                              <div className="col-md-11">
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
                                  {item.dropLocation}
                                </div>
                              </div>
                            </div>

                            <div
                              className="poppins-regular mt-3"
                              style={{
                                color: "white",
                                backgroundColor: "orange",
                                width: "100px",
                                textAlign: "center",
                                padding: "3px",
                                borderRadius: "5px",
                              }}
                            >
                              {item.jobStatus || "Status Unknown"}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Pmorder;