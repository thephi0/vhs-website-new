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
            className="poppins-regular"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
            }}
            dangerouslySetInnerHTML={{
              __html: blog.comment,
            }}
          />

          <div className="poppins-black pt-2" style={{ color: "black" }}>
            Why culture is the mediator for all things business
          </div>

          <div className="">
            <div className="poppins-black pt-2" style={{ color: "black" }}>
              1. Introduction
            </div>
            <ul className="">
              <li className="poppins-regular pt-1">
                A paradigm shift occurs when our understanding of a phenomenon
                changes radically, often by altering some fundamental
                assumption.
              </li>
              <li className="poppins-regular pt-2">
                This shift can lead to significant advancements in the field, as
                seen when Copernicus proposed that the Earth revolves around the
                sun.
              </li>
              <li className="poppins-regular pt-2">
                A similar shift is unfolding in business, though it is often
                poorly accepted. (It took centuries to accept Copernicus's
                heliocentric model fully.)
              </li>
            </ul>
          </div>

          <div className="">
            <div className="poppins-black pt-2" style={{ color: "black" }}>
              The New Model
            </div>
            <div className="poppins-regular pt-2">
              In this article, I present a holistic business model in which
              culture plays a central role in driving growth and success. This
              model transcends the superficial discussions on culture often
              heard in leadership meetings and goes beyond token gestures like
              employee satisfaction surveys and recognitions. Instead, they
              should embrace culture as the very core of their business, not a
              peripheral concern relegated to HR.
            </div>
            <div className="poppins-regular pt-3">
              A great culture doesn't necessarily mean keeping employees
              comfortable and happy. Not all successful cultures include
              comfortable employees, but they do include proud participants. A
              truly successful culture unites the firm's goals, resources, and
              strategies into a comprehensive and formidable system. As such,
              culture is a unified set of beliefs and behaviours that
              harmoniously drive toward business objectives.
            </div>
            <ul className="mt-2">
              <li className="poppins-regular pt-1">
                A paradigm shift occurs when our understanding of a phenomenon
                changes radically, often by altering some fundamental
                assumption.
              </li>
              <li className="poppins-regular pt-2">
                This shift can lead to significant advancements in the field, as
                seen when Copernicus proposed that the Earth revolves around the
                sun.
              </li>
              <li className="poppins-regular pt-2">
                A similar shift is unfolding in business, though it is often
                poorly accepted. (It took centuries to accept Copernicus's
                heliocentric model fully.)
              </li>
            </ul>
          </div>

          <div className="row mt-2 ">
            <div className="col-md-5">
              <img
                src={hbanner}
                alt="blog image"
                className="mb-3"
                style={{ width: "100%", height: "250px" }}
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              {/* <video
                src={
                  "https://iframe.mediadelivery.net/play/212658/5eaf80ca-b2d9-41e8-bef6-fff856bb9885"
                }
                // width="200px"
                // height="300px"
                style={{ borderRadius: "10px" }}
                autoPlay
                muted
                loop
                playsInline
                className="thoughtfull-img"
              ></video> */}
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/vcyN5bY6Kh8?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
                className="mb-3"
              ></iframe>
            </div>
          </div>
          <div className="poppins-regular pt-2">
            In this article, I present a holistic business model in which
            culture plays a central role in driving growth and success. This
            model transcends the superficial discussions on culture often heard
            in leadership meetings and goes beyond token gestures like employee
            satisfaction surveys and recognitions. Instead, they should embrace
            culture as the very core of their business, not a peripheral concern
            relegated to HR.
          </div>
          <div className="poppins-regular pt-3">
            A great culture doesn't necessarily mean keeping employees
            comfortable and happy. Not all successful cultures include
            comfortable employees, but they do include proud participants. A
            truly successful culture unites the firm's goals, resources, and
            strategies into a comprehensive and formidable system. As such,
            culture is a unified set of beliefs and behaviours that harmoniously
            drive toward business objectives.
          </div>

          <div
            className="d-flex mt-3 mb-3"
            style={{ justifyContent: "center" }}
          >
            <div
              className="poppins-medium"
              style={{
                backgroundColor: "lightblue",
                padding: "8px",
                width: "250px",
                borderRadius: "20px",
              }}
            >
              Book Now
            </div>
          </div>
          <div
            className="poppins-regular pb-3"
            style={{ borderBottom: "1px solid lightgrey" }}
          >
            A great culture doesn't necessarily mean keeping employees
            comfortable and happy. Not all successful cultures include
            comfortable employees, but they do include proud participants. A
            truly successful culture unites the firm's goals, resources, and
            strategies into a comprehensive and formidable system. As such,
            culture is a unified set of beliefs and behaviours that harmoniously
            drive toward business objectives.
          </div>

          <div className="poppins-black pt-3">Conclusion</div>
          <div className="poppins-regular pt-2 pb-3">
            Today's most successful companies proudly exhibit distinctive
            cultures. Consider Amazon, Google, Bumble, Godrej, Southwest,
            Netflix, Infosys, and Mu Sigma — each has a unique and strong
            cultural identity. Culture transforms work groups into teams and
            goals into results. A study by James L. Heskett and John P. Kotter
            found that companies with strong corporate cultures that aligned
            with their business objectives achieved revenue growth of 682
            percent, employment growth of 282 percent, stock price growth of 901
            percent, and net income growth of 756 percent over eleven years. My
            proposed holistic business model, called C-PLOS (Comprehensive
            Professional Leadership Operating System), is a conceptual path
            analysis of how things happen in business. For example, it includes
            over 50 strategic moves a leader can deploy to control business
            outcomes better. However, any detailed discussions are beyond this
            article's scope. The key point, nevertheless, is that it is
            important to recognise that strategy, staffing, execution, systems,
            and innovation can all fail within a poor culture.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bolgdetails;
