import React from "react";
import NavbarCompo from "./navbar";
import Footer from "./Footer";
import Homenavbar from "./Homenavbar";
import hbanner from "../../src/assests/hbanner.jpg";
import offer1 from "../../src/assests/offer1.jpg";
import { useLocation } from "react-router-dom";

function Bolgdetails() {
  const location = useLocation();

  const { blog } = location.state || {};

  console.log("blog", blog);
  return (
    <div>
      <NavbarCompo />
      <Homenavbar />
      <div className="container">
        <div className="row">
          <h1 className="poppins-semibold mt-2 mb-3">Blogs Details</h1>
          <img
            src={blog.imagelink}
            alt="blog image"
            style={{ width: "100%", height: "500px", borderRadius: "10px" }}
          />

          <div
            className="blog-content mt-3"
            style={{}}
            dangerouslySetInnerHTML={{
              __html: blog.comment,
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bolgdetails;
