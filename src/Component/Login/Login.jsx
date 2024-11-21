import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../assets1/carouselbanner1.jpeg';
import banner2 from '../../assets1/carouselbanner2.jpeg';
import banner3 from '../../assets1/carouselbanner3.jpeg';
import banner4 from '../../assets1/carouselbanner4.jpeg';
import banner5 from '../../assets1/carouselbanner5.jpeg';
import winterSaleVideo from '../../assets1/wintersale.webm';

function Signup() {
  const [mainContact, setMainContact] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const location = useLocation();
  const { city } = location.state || {};
  const [successMessage, setSuccessMessage] = useState("");
  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5
    ]; 
  console.log("city===21", city);

  const queryString = window.location.search;

  console.log("queryString", queryString);

  const getQueryParams = (queryString, param) => {
    const params = new URLSearchParams(queryString);
    return params.get(param);
  };

  const utmSource = getQueryParams(queryString, "utm_source");

  console.log("utmSource", utmSource);

  const utm_source = localStorage.getItem("utm_source");

  useEffect(() => {
    const fullQueryString = location.search;

    if (fullQueryString) {
      localStorage.setItem("fullQuery", fullQueryString);
      console.log("Stored full query string:", fullQueryString);
    }
  }, [location]);

  const storedQuery = localStorage.getItem("fullQuery");
  console.log("Retrieved query string:", storedQuery);

  useEffect(() => {
    if (utmSource) {
      localStorage.setItem("utm_source", utmSource);
    }
  }, [utmSource]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const sendOTP = async () => {
    const isValidMobile = /^\d{10}$/.test(mainContact);

    if (!isValidMobile) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    try {
      const response = await axios.post(
        "https://api.vijayhomeservicebengaluru.in/api/sendotp/sendByCartBook",
        {
          mainContact: mainContact,
          customerName: name,
          reference: utm_source ? utm_source : storedQuery,
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Logged in successfully!");
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        
        console.log("Previous path:", location.state?.from); // Debug log

        setTimeout(() => {
          setSuccessMessage("");
          // Check if we have a previous path and it's not the login page
          if (location.state?.from && !location.state.from.includes('login')) {
            navigate(location.state.from);
          } else if (location.state?.from) {
            // If we have a previous path but it's login, go back one step further
            navigate(-2);
          } else {
            // If no previous path, go back one step
            navigate(-1);
          }
        }, 1000);
        
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="container">
      <style>
        {`
          html, body, #root, .container, * {
            background-color: white !important;
          }

          .success-message {
            color: white !important;
            text-align: center !important;
            padding: 10px 20px !important;
            margin-top: 10px !important;
            font-size: 14px !important;
            position: fixed !important;
            top: 20px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 1000 !important;
            background-color: #28a745 !important;
            border: 1px solid #28a745 !important;
            border-radius: 5px !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
            min-width: 200px !important;
          }

          .custom-btn {
            background-color: darkred !important;
          }

          .next-button {
            background-color: darkred !important;
            text-align: center;
            color: white;
            font-size: 14px;
            padding: 5px;
            width: 60%;
            border-radius: 5px;
            cursor: pointer;
          }

          .sale-container {
            max-width: 343px;
            margin: 0 auto;
          }

          .sale-banner {
            background-color: darkred !important;
            color: white !important;
            text-align: center;
            padding: 10px;
            font-size: 18px;
            font-weight: bold;
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            display: block;
          }

          .carousel-container {
            max-width: 343px;
            margin: 0 auto;
            padding: 0;
            border-bottom-left-radius: 5px !important;
            border-bottom-right-radius: 5px !important;
            overflow: hidden;
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }

          .text-container {
            animation: pulse 1s infinite;
            will-change: transform;
          }

          @media (max-width: 767px) {
            .text-container {
              font-size: 20px;
              animation: pulse 1.5s infinite;
            }
          }
        `}
      </style>

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      <div className="row">
        {/* Login Form */}
        <div className="col-md-12">
          <div className="row" style={{ justifyContent: "center", alignItems: "center" }}>
            <div className="col-md-5" style={{
              marginTop: "10%",
              border: "1px solid grey",
              padding: "20px",
              borderRadius: "5px",
            }}>
              <div className="row" style={{ justifyContent: "center", alignItems: "center" }}>
                <img
                  src="./images/vhs.webp"
                  style={{
                    width: "110px",
                    height: "90px",
                    textAlign: "center",
                  }}
                  alt="VHS Logo"
                />

                <div className="mt-3 poppins-semibold" style={{
                  color: "black",
                  fontSize: "17px",
                  textAlign: "center",
                }}>
                  Book With Mobile Number
                </div>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Enter Name"
                  style={{
                    border: "1px solid grey",
                    height: "45px",
                    width: "60%",
                    marginTop: "15px",
                  }}
                />

                <input
                  type="text"
                  value={mainContact}
                  onChange={(e) => setMainContact(e.target.value)}
                  placeholder="Enter Mobile Number"
                  style={{
                    border: "1px solid grey",
                    height: "45px",
                    width: "60%",
                  }}
                />

                <div
                  onClick={sendOTP}
                  className="mb-2 poppins-black custom-btn next-button"
                >
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Text */}
        <div className="text-container" style={{
          textAlign: "center",
          marginTop: "0.5in",
          marginBottom: "2rem",
          fontSize: "27px",
          fontWeight: "1000",
          fontFamily: "Poppins, sans-serif",
        }}>
          <p style={{ margin: "0", color: "#004aad" }}>
            "We offer <span style={{ color: "#960f14" }}>Top Quality</span>
          </p>
          <p style={{ margin: "0", color: "#004aad" }}>Services"</p>
        </div>
      </div>

      {/* Sale Banner and Video */}
      <div className="sale-container">
        <div className="sale-banner">
          WINTER SALE IS NOW LIVE!
        </div>

        <div className="carousel-container">
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
      </div>
    </div>
  );
}

export default Signup;
