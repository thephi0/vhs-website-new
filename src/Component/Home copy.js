import React, { useState, useEffect, useRef } from "react";
import "../Component/layout.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NabarCompo from "./navbar";
import "./layout.css";
import Footer from "./Footer";
import one from "../assests/one.jpg";
import two from "../assests/two.jpg";
import theree from "../assests/theree.jpg";
import four from "../assests/four.jpg";
import five from "../assests/five.jpg";
import six from "../assests/six.jpg";
import seven from "../assests/seven.jpg";
// Swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Import navigation CSS
import hbanner from "../assests/hbanner.jpg";
import hbanner1 from "../assests/hbanner1.jpg";
import hbanner2 from "../assests/hbanner2.jpg";
import hbanner3 from "../assests/hbanner3.jpg";
import hbanner4 from "../assests/hbanner4.jpg";
import hbanner5 from "../assests/hbanner5.jpg";
import hbanner6 from "../assests/hbanner6.jpg";

import { useSelector, useDispatch } from "react-redux";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { useLocation } from "react-router-dom";
import deal from "../../src/assests/deal.png";
import moment from "moment";

// updated home
export default function Home() {
  const [Banner, setBanner] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState([]);
  const [FilteredCategory, setFilteredCategory] = useState([]);
  const [FilteredPaint, setFilteredPaint] = useState([]);
  const [FilterCleaning, setFilterCleaning] = useState([]);
  const [FilterPestControl, setFilterPestControl] = useState([]);
  const [FilterMarbelPolish, setFilterMarbelPolish] = useState([]);
  const [FilterRepairing, setFilterRepairing] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState([]);
  const [FilterPackers, setFilterPackers] = useState([]);
  const [FilterAppliance, setFilterAppliance] = useState([]);
  const [bannerdata, setBannerdata] = useState([]);
  const [testimonialdata, settestimonialdata] = useState([]);
  // Offer Banner
  const [offerBanner, setofferBanner] = useState([]);
  const [allcategory, setallcategory] = useState([]);
  const [thoughtfull, setthoughtfull] = useState([]);
  const [homepagetitledata, sethomepagetitledata] = useState([]);
  const [sdata, setsdata] = useState([]);
  const [servicedata, setservicedata] = useState([]);
  const [secondsdata, setsecondsdata] = useState([]);
  const [openResetModal, setOpenResetModal] = useState(false);
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [activeCity, setActiveCity] = useState("");
  const distpatch = useDispatch();
  const location = useLocation();
  const pathName = location.pathname;

  const [slidesPerView, setSlidesPerView] = useState(5);

  const queryString = window.location.search;

  console.log("queryString", queryString);

  const getQueryParams = (queryString, param) => {
    const params = new URLSearchParams(queryString);
    return params.get(param);
  };

  const utmSource = getQueryParams(queryString, "utm_source");

  console.log("utmSource", utmSource);

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
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Searc Modal
  const [searchlist, setSearchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [selectedPlaceAddress, setSelectedPlaceAddress] = useState("");
  const mapRef = useRef(null);

  const localstoragecitys = localStorage.getItem("city");

  console.log("localstoragecitys=====", localstoragecitys);

  useEffect(() => {
    getsearch();
  }, []);

  const getsearch = async () => {
    let res = await axios.get(
      "https://api.vijayhomeservicebengaluru.in/api/userapp/getappsubcat"
    );
    if (res.status === 200) {
      setSearchlist(res.data?.subcategory);
    }
  };

  console.log("searchlist", searchlist);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = searchlist.filter((data) => {
        const categoryMatches = data.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const subcategoryMatches = data.subcategory
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return categoryMatches || subcategoryMatches;
      });
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]); // Clear the results when the search query is empty
    }
  }, [searchQuery, searchlist]);

  useEffect(() => {
    setOpenResetModal(true);
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const styles = {
    ".carousel-control-prev": {
      backgroundColor: "darkred",
      width: "45px",
      height: "45px",
      borderRadius: "50px",
      top: "50%",
      left: "50px",
    },
    ".carousel-control-next": {
      backgroundColor: "darkred",
      width: "45px",
      height: "45px",
      borderRadius: "50px",
      top: "50%",
      right: "50px",
    },
  };
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({
    value: "0",
    text: "Select City",
    icon: (
      <svg id="flag-icons-in" viewBox="0 0 640 480">
        <path fill="#f93" d="M0 0h640v160H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path fill="#128807" d="M0 320h640v160H0z" />
        <g transform="matrix(3.2 0 0 3.2 320 240)">
          <circle r="20" fill="#008" />
          <circle r="17.5" fill="#fff" />
          <circle r="3.5" fill="#008" />
          <g id="d">
            <g id="c">
              <g id="b">
                <g id="a" fill="#008">
                  <circle r=".9" transform="rotate(7.5 -8.8 133.5)" />
                  <path d="M0 17.5.6 7 0 2l-.6 5L0 17.5z" />
                </g>
                <use width="100%" height="100%" transform="rotate(15)" />
              </g>
              <use width="100%" height="100%" transform="rotate(30)" />
            </g>
            <use width="100%" height="100%" transform="rotate(60)" />
          </g>
          <use width="100%" height="100%" transform="rotate(120)" />
          <use width="100%" height="100%" transform="rotate(-120)" />
        </g>
      </svg>
    ),
  });

  const handleChange = (city) => {
    setOpenResetModal(false);
    setActiveCity(city.city);
    setSelectedCity(city.city);
    // localStorage.setItem("city", city.city);
    navigate(`/${city.city}`);
  };

  useEffect(() => {
    getCity();
  }, []);

  const getCity = async () => {
    setIsLoading(true);
    try {
      let res = await axios.get(
        "https://api.vijayhomesuperadmin.in/api/master/getcity"
      );
      if (res.status === 200) {
        const sortedCities = res.data.mastercity.sort((a, b) =>
          a.city.localeCompare(b.city)
        );
        setCity(sortedCities);
      }
    } catch (er) {
      console.log(er, "err while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetModal = () => {
    setOpenResetModal(true);
  };

  return (
    <>
      {isLoading ? (
        <>
          <div className="row m-auto text-center" style={{ height: "100vh" }}>
            <div className="col-md-4"></div>
            <div className="col-md-4 m-auto ">
              <SpinnerCircular
                size={90}
                thickness={87}
                speed={80}
                color="rgba(27, 22, 22, 1)"
                secondaryColor="rgba(214, 191, 91, 1)"
              />
            </div>

            <div className="col-md-4"></div>
          </div>
        </>
      ) : (
        <>
          <NabarCompo />

          <div className="">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                {bannerdata.map((data, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={data.webbanner}
                      className="d-block w-100"
                      alt={`Banner ${index + 1}`}
                      style={{ height: "250px" }}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div
            className="row"
            style={{
              backgroundColor: "skyblue",
              padding: "20px",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div
                className="poppins-semibold mb-4"
                style={{ textAlign: "center" }}
              >
                The Award winning company
              </div>
              <input
                type="text"
                className="col-md-12 poppins-regular"
                placeholder="Search for Services"
                style={{
                  height: "45px",
                  paddingLeft: "140px",
                  fontSize: "16px",
                }}
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
              <div
                onClick={handleResetModal}
                className="d-flex"
                style={{
                  position: "absolute",
                  marginTop: "-54px",
                  marginLeft: "15px",
                  borderRight: "2px solid black",
                }}
              >
                <i
                  className="fa-solid fa-location-dot"
                  style={{
                    fontSize: "16px",
                    marginTop: "3px",
                    color: "darkred",
                  }}
                ></i>
                <div
                  className="poppins-regular mx-2"
                  style={{ fontSize: "16px", marginTop: "2px" }}
                >
                  {selectedCity ? selectedCity : "Select City"}
                </div>
              </div>
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  position: "absolute",
                  fontSize: "20px",
                  marginTop: "13px",
                  marginLeft: "-40px",
                }}
              ></i>
            </div>

            {/* Display search results */}
            {searchQuery.length > 0 && (
              <div
                className="search-results"
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  width: "33%",
                  maxHeight: "300px",
                  overflowY: "auto",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  marginTop: "105px",
                  zIndex: 1000,
                  left: "40%",
                  right: "10%",
                }}
              >
                {filteredResults.length > 0 ? (
                  filteredResults.map((data) => (
                    <div
                      className="row"
                      key={data._id}
                      style={{ justifyContent: "center", padding: "5px 5px" }}
                    >
                      <div className="col-md-12">
                        <Link
                          to="/servicedetails"
                          state={{ data: data }}
                          style={{
                            textDecoration: "none",
                            backgroundColor: "white",
                            // padding: "10px",
                          }}
                        >
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                src={data.imglink}
                                alt="Subcategory"
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  borderRadius: "5px",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                            <div className="col-md-9 mt-3">
                              <div
                                className="poppins-regular"
                                style={{ color: "black" }}
                              >
                                {data?.category}
                              </div>
                              <div
                                className="poppins-regular"
                                style={{ color: "black" }}
                              >
                                {data?.subcategory}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      color: "black",
                    }}
                  >
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="container mt-3">
            <div className="row">
              <div className="poppins-semibold" style={{ fontSize: "20px" }}>
                Thoughtful Curations
              </div>
              <div className="poppins-medium-italic mt-1 mb-4">
                Of our finest experiences
              </div>

              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
              >
                <div className="col-md-4" style={{ width: "100%" }}>
                  {thoughtfull.map((data) => (
                    <SwiperSlide
                      key={data._id}
                      style={{
                        backgroundColor: "white",
                        padding: "0px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <video
                        src={data.creationslink}
                        width="200px"
                        height="300px"
                        style={{ borderRadius: 10 }}
                        autoPlay
                        muted
                        loop
                        playsInline
                      ></video>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>

          <Footer />
        </>
      )}

      <Modal
        show={openResetModal}
        style={{ width: "100%" }}
        centered
        onHide={handleResetModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <div className="modal_grid">
          <div className="modal_header">
            <img src="./assests/locationmap.jpg" alt="city images" />
          </div>

          <div className="modal_body">
            <div
              className="title poppins-semibold"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingBottom: "20px",
              }}
            >
              <span>
                <img
                  src="./assests/indiaflg.png"
                  alt="loading..."
                  style={{
                    width: "23px",
                    height: "23px",
                    marginRight: "10px",
                    borderRadius: "50px",
                  }}
                />
              </span>
              India
            </div>
            <div className="city-grid">
              {city.map((city) => (
                <div className="city-item" key={city?._id}>
                  <div
                    className={`city-name ${
                      activeCity === city.city ? "active" : ""
                    }`}
                    onClick={() => handleChange(city)}
                  >
                    <i
                      className={`fa-solid fa-location-dot ${
                        activeCity === city.city ? "active-icon" : ""
                      }`}
                      style={{
                        color: "darkred",
                        marginTop: "3px",
                        fontSize: "15px",
                      }}
                    ></i>
                    <p className="poppins-regular">{city.city}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="row mt-4"
              style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
            >
              <div className="col-md-5">
                <div className=" poppins-semibold mt-1">
                  <span>
                    <img
                      src="./assests/dubai.png"
                      alt="loading..."
                      style={{
                        width: "23px",
                        height: "23px",
                        marginRight: "10px",
                        borderRadius: "50px",
                      }}
                    />
                  </span>
                  Dubai{" "}
                  <span
                    className="poppins-light"
                    style={{
                      color: "grey",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="col-md-5">
                <div className=" poppins-semibold mt-1">
                  <span>
                    <img
                      src="./assests/london.webp"
                      alt="loading..."
                      style={{
                        width: "23px",
                        height: "23px",
                        marginRight: "10px",
                        borderRadius: "50px",
                      }}
                    />
                  </span>
                  London{" "}
                  <span
                    className="poppins-light"
                    style={{
                      color: "grey",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
