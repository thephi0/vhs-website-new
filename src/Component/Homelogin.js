import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import winterSaleVideo from '../../src/assets1/wintersale.webm'; // Adjust path as needed

function Homelogin() {
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
  const [successMessage, setSuccessMessage] = useState("");
  const queryString = window.location.search;

  const getQueryParams = (queryString, param) => {
    const params = new URLSearchParams(queryString);
    return params.get(param);
  };

  const utmSource = getQueryParams(queryString, "utm_source");

  useEffect(() => {
    const fullQueryString = location.search;

    if (fullQueryString) {
      localStorage.setItem("fullQuery", fullQueryString);
    }
  }, [location]);

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
        { mainContact: mainContact, customerName: name }
      );
      if (response.status === 200) {
        setSuccessMessage("Logged in successfully!");
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        
        // Optional: Clear message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
          if (location.state?.from) {
            navigate(location.state.from); // Navigate to previous page if it exists
          } else {
            navigate('/login', { state: { from: location.pathname } });
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
    <>
    <div className="container">
      {successMessage && (
        <div style={{
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          marginTop: '10px',
          fontSize: '14px',
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          backgroundColor: 'green',
          border: '1px solid green',
          borderRadius: '5px'
        }}>
          {successMessage}
        </div>
      )}
      
      
        <div className="row">
          <div className="col-md-12">
            <div
              className="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div
                className="col-md-5"
                style={{
                  marginTop: "5%",
                  border: "1px solid grey",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="row"
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <img
                    src="./images/vhs.webp"
                    style={{
                      width: "110px",
                      height: "90px",
                      textAlign: "center",
                    }}
                    alt="VHS Logo"
                  />

                  <div
                    className="mt-3 poppins-semibold"
                    style={{
                      color: "black",
                      fontSize: "17px",
                      textAlign: "center",
                      // fontWeight: "bold",
                    }}
                  >
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
                    className="mb-2 poppins-black"
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: "14px",
                      backgroundColor: "darkred",
                      padding: "5px",
                      width: "60%",
                      borderRadius: "5px",
                    }}
                  >
                    Next
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Text Content with Auto Pulse Effect */}
        <div
          className="text-container"
          style={{
            textAlign: "center",
            marginTop: "0.2in", // 0.5-inch gap between login container and text
            fontSize: "27px", // Font size set to 27px
            fontWeight: "1000", // Make font bold
            fontFamily: "Poppins, sans-serif", // Apply Poppins font
            animation: "pulse 1s infinite", // Apply pulse effect automatically
            marginBottom: "0.2in"
          }}
        >
          <p style={{ margin: "0", color: "#004aad" }}>
            "We offer<span style={{ color: "#960f14" }}>  Top Quality</span>
          </p>
          <p style={{ margin: "0", color: "#004aad" }}>Services"</p>
        </div>
      </div>
      {/* Combined container for banner and video */}
      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
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
            <source src={winterSaleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div>
        {/* Inline CSS for Pulse Animation */}
        <style>
          {`
            @keyframes pulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
              100% {
                transform: scale(1);
              }
            }
            .carousel-container {
              max-width: 1200px;
              margin: 0 auto;
            }

            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              background-color: rgba(0, 0, 0, 0.3);
              border-radius: 50%;
              padding: 20px;
            }
          `}
        </style>
      </div>
      
    </>
    
  );
}


export default Homelogin;
