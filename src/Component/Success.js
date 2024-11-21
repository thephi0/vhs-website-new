import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../src/assets1/carouselbanner1.jpeg';
import banner2 from   '../../src/assets1/carouselbanner2.jpeg';
import banner3 from   '../../src/assets1/carouselbanner3.jpeg';
import banner4 from '../../src/assets1/carouselbanner4.jpeg';
import banner5 from '../../src/assets1/carouselbanner5.jpeg';
import winterSaleVideo from '../../src/assets1/wintersale.webm';

function Success() {
  const location = useLocation();
  const { data } = location.state || {};
  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5
  ];
  console.log("data", data);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6" style={{ padding: "20px" }}>
          <div className="d-flex" style={{ justifyContent: "center" }}>
            <video
              className="p-0"
              style={{ objectFit: "cover", width: "200px", height: "200px" }}
              autoPlay
              loop
              src={require("../Assets/Images/a.mp4")}
            ></video>
          </div>

          {/* Category */}
          <div className="row">
            <div className="col-md-4">
              <div className="">Category</div>
            </div>
            <div className="col-md-8">
              <div className="">{data.category}</div>
            </div>
          </div>

          {/* Other details */}
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="">Service</div>
            </div>
            <div className="col-md-8">
              <div className="">{data.service}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <div className="">Description</div>
            </div>
            <div className="col-md-8">
              <div className="">{data.desc}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <div className="">Payment Mode</div>
            </div>
            <div className="col-md-8">
              <div className="">{data.paymentMode}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <div className="">Selected Slot Text</div>
            </div>
            <div className="col-md-8">
              <div className="">{data.selectedSlotText}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <div className="">Date</div>
            </div>
            <div className="col-md-8">
              <div className="">{data.date}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <div className="">City</div>
            </div>
            <div className="col-md-8">
              <div className="">{data.city}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <div className="">Contract Type</div>
            </div>
            <div className="col-md-8">
              <div className="">{data.contractType}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <div className="">Service Charge</div>
            </div>
            <div className="col-md-8">
              <div className="">{data.serviceCharge}</div>
            </div>
          </div>

          {/* Success Button */}
          <div
            onClick={() => window.location.assign("/")}
            className="mt-5"
            style={{
              backgroundColor: "darkred",
              padding: "8px",
              color: "white",
              fontSize: "14px",
              textAlign: "center",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Success
          </div>

          {/* Winter Sale Banner and Video */}
          <div style={{ maxWidth: '343px', margin: '2rem auto' }}>
            {/* Winter Sale Banner */}
            <div style={{
              backgroundColor: 'darkred',
              color: 'white',
              textAlign: 'center',
              padding: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              width: '100%',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              marginBottom: '0'
            }}>
              WINTER SALE IS NOW LIVE!
            </div>

            {/* Video Container */}
            <div style={{
              width: '100%',
              margin: '0',
              padding: '0',
              background: 'transparent',
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
              overflow: 'hidden'
            }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderBottomLeftRadius: '5px',
                  borderBottomRightRadius: '5px'
                }}
              >
                <source src={winterSaleVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Winter Sale Banner and Carousel */}
          <div style={{ maxWidth: '343px', margin: '2rem auto' }}>
            {/* Winter Sale Banner */}
            <div style={{
              backgroundColor: 'darkred',
              color: 'white',
              textAlign: 'center',
              padding: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              width: '100%',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              marginBottom: '0'
            }}>
              WINTER SALE IS NOW LIVE!
            </div>

            {/* Carousel Container */}
            <div className="carousel-container" style={{
              width: '100%',
              margin: '0',
              padding: '0',
              background: 'transparent'
            }}>
              <Carousel interval={3000} controls={false} indicators={false}>
                {banners.map((banner, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={banner}
                      alt={`Banner ${index + 1}`}
                      style={{
                        height: '300px',
                        objectFit: 'cover'
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
