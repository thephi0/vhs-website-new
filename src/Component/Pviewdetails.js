import React, { useEffect, useState } from "react";
import Pheader from "./Pheader";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import YouTube from "react-youtube";
import Pmobileheader from "./Pmobileheader";

function Pviewdetails() {
  const location = useLocation();
  const { service } = location.state || {};
  console.log("service", service);
  const [testi, settesti] = useState([]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize2 = () => {
      if (window.innerWidth <= 768) {
        settesti(1);
      } else {
        settesti(3);
      }
    };

    handleResize2();

    window.addEventListener("resize", handleResize2);

    return () => window.removeEventListener("resize", handleResize2);
  }, []);

  const opts = {
    height: "250",
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };

  const testimonialdata = [
    { videoimg: "https://www.youtube.com/watch?v=W54nhpMuhvE" },

    { videoimg: "https://www.youtube.com/watch?v=BpC76AnEkds" },
    { videoimg: "https://www.youtube.com/watch?v=cNtoymcg154" },
  ];

  const getEmbedUrl = (videoUrl) => {
    if (videoUrl.includes("youtube.com/shorts")) {
      const videoId = videoUrl.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (videoUrl.includes("youtube.com/watch")) {
      const videoId = new URLSearchParams(new URL(videoUrl).search).get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return videoUrl;
  };

  return (
    <div className="">
      <Pheader />
      <Pmobileheader />
      <div className="container">
        <div className="row">
          <img
            src={`https://pm.vijayhomeservice.in/ServiceImage/${service?.Serviceimg}`}
            alt="Packers & Movers Images"
            style={{
              width: "100%",
              height: "250px",
              borderRadius: "10px",
            }}
          />
          <div
            className="poppins-regular mt-2 mb-2"
            style={{
              color: "red",
            }}
          >
            Up to 20% Off
          </div>
          <div className="poppins-black mb-2" style={{}}>
            {service.servicename}
          </div>
          <div className="d-flex mb-2">
            <i
              className="fa-solid fa-star"
              style={{ color: "gold", fontSize: "14px" }}
            ></i>
            <div className="poppins-regular mx-1">
              4.3 (1.3M Shiftings Completed)
            </div>
          </div>

          <div className="poppins-black mt-2">Description</div>
          <div className="poppins-regular pt-1">{service.desc}</div>

          <div className="row">
            <div className="col-md-6">
              <div className="poppins-black mt-2">Service Includes</div>
              {service.includes.map((include, index) => (
                <div
                  className="poppins-regular mt-2"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: include }}
                />
              ))}
            </div>
            <div className="col-md-6">
              <div className="poppins-black mt-2">Service Excludes</div>
              {service.exludes.map((exludes, index) => (
                <div
                  className="poppins-regular mt-2"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: exludes }}
                />
              ))}
            </div>
          </div>

          <div className="poppins-black">Testimonial Video</div>
          <div className="mt-2"></div>
          <Swiper
            slidesPerView={testi}
            spaceBetween={40}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper mb-3"
          >
            {testimonialdata.map((testimonial) => (
              <SwiperSlide
                key={testimonial._id}
                style={{
                  // height: "500px",
                  // width: "500px",
                  backgroundColor: "white",
                  padding: "0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <iframe
                  width="100%"
                  height="200"
                  src={getEmbedUrl(testimonial.videoimg)}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Pviewdetails;
