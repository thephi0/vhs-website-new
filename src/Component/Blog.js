import React, { useState, useEffect } from "react";
import NavbarCompo from "./navbar";
import Footer from "./Footer";
import Homenavbar from "./Homenavbar";
import hbanner from "../../src/assests/hbanner.jpg";
import hbanner1 from "../../src/assests/hbanner1.jpg";
import hbanner2 from "../../src/assests/hbanner2.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function Blog() {
  const [blogdata, setblogdata] = useState([]);

  useEffect(() => {
    getallblogs();
  }, []);

  const getallblogs = async () => {
    try {
      const res = await axios.get(
        "https://api.vijayhomeservice.com/api/blogs/getallblogs"
      );
      setblogdata(res.data.data);
    } catch (error) {
      console.log("Error in getcategory:", error);
    }
  };

  return (
    <div className="">
      <NavbarCompo />
      <Homenavbar />
      <div className="container">
        <h1 className="poppins-semibold mt-2 mb-3">Blogs</h1>
        <div className="row p-2 mb-3">
          {blogdata.map((item) => (
            <div className="col-md-4 pb-3">
              <Link
                to="/blogdetails"
                state={{ blog: item }}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={item?.imagelink}
                  alt="blog images"
                  style={{ width: "100%", height: "200px" }}
                />

                <div
                  className="poppins-regular pt-1"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  {item.title}
                </div>
                <div className="poppins-regular b-desc">{item.desc}</div>
                <div className="d-flex pt-2" style={{}}>
                  <div
                    className="poppins-regular"
                    style={{ color: "darkred", fontWeight: "bold" }}
                  >
                    Read More
                  </div>
                  <i
                    className="fa-solid fa-arrow-right mx-2 pt-1"
                    style={{ fontSize: "15px", color: "black" }}
                  ></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="row p-2 mb-3">
          <div className="col-md-4">
            <Link to="/blogdetails" style={{ textDecoration: "none" }}>
              <img
                src={hbanner}
                alt="blog images"
                style={{ width: "100%", height: "200px" }}
              />

              <div className="poppins-black pt-1" style={{ color: "black" }}>
                Why culture is the mediator for all things business
              </div>
              <div className="poppins-regular b-desc">
                A paradigm shift occurs when our understanding of a phenomenon
                changes radically, often by altering some fundamental
                assumption. This shift can lead to significant advancements in
                the field, as seen when Copernicus proposed that the Earth
                revolves around the sun.
              </div>
              <div className="d-flex pt-2" style={{}}>
                <div className="poppins-black" style={{ color: "darkred" }}>
                  Read More
                </div>
                <i
                  className="fa-solid fa-arrow-right mx-2 pt-1"
                  style={{ fontSize: "19px", color: "black" }}
                ></i>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link to="/blogdetails" style={{ textDecoration: "none" }}>
              <img
                src={hbanner1}
                alt="blog images"
                style={{ width: "100%", height: "200px" }}
              />

              <div className="poppins-black pt-1" style={{ color: "black" }}>
                Why culture is the mediator for all things business
              </div>
              <div className="poppins-regular b-desc">
                A paradigm shift occurs when our understanding of a phenomenon
                changes radically, often by altering some fundamental
                assumption. This shift can lead to significant advancements in
                the field, as seen when Copernicus proposed that the Earth
                revolves around the sun.
              </div>
              <div className="d-flex pt-2" style={{}}>
                <div className="poppins-black" style={{ color: "darkred" }}>
                  Read More
                </div>
                <i
                  className="fa-solid fa-arrow-right mx-2 pt-1"
                  style={{ fontSize: "19px", color: "black" }}
                ></i>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link to="/blogdetails" style={{ textDecoration: "none" }}>
              <img
                src={hbanner2}
                alt="blog images"
                style={{ width: "100%", height: "200px" }}
              />

              <div className="poppins-black pt-1" style={{ color: "black" }}>
                Why culture is the mediator for all things business
              </div>
              <div className="poppins-regular b-desc">
                A paradigm shift occurs when our understanding of a phenomenon
                changes radically, often by altering some fundamental
                assumption. This shift can lead to significant advancements in
                the field, as seen when Copernicus proposed that the Earth
                revolves around the sun.
              </div>
              <div className="d-flex pt-2" style={{}}>
                <div className="poppins-black" style={{ color: "darkred" }}>
                  Read More
                </div>
                <i
                  className="fa-solid fa-arrow-right mx-2 pt-1"
                  style={{ fontSize: "19px", color: "black" }}
                ></i>
              </div>
            </Link>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
