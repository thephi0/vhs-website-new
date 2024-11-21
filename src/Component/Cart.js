import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart1, removeMyCartItem, clearCart } from "../Redux1/MyCartSlice";
import { deleteMyCartItem } from "../Redux1/MyCartSlice"; // Adjust the path as needed
import NabarCompo from "./navbar";

import { useNavigate, Link, useLocation } from "react-router-dom";
import Header1 from "./Header1";
import Cartnavbar from "./Cartnavbar";
import Footer from "./Footer";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../src/assets1/carouselbanner1.jpeg';
import banner2 from   '../../src/assets1/carouselbanner2.jpeg';
import banner3 from   '../../src/assets1/carouselbanner3.jpeg';
import banner4 from '../../src/assets1/carouselbanner4.jpeg';
import banner5 from '../../src/assets1/carouselbanner5.jpeg';
import winterSaleVideo from '../../src/assets1/wintersale.webm';

const banners = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5
];

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { city } = location.state || {};

  const user = localStorage.getItem("user");

  const handle = (item) => {
    dispatch(addToCart1(item));
  };

  const handleChange = () => {
    if (user) {
      navigate("/cartbook", { state: { city: city } });
    } else {
      navigate("/login", { state: { city: city } });
    }
  };

  const MyCartItmes = useSelector((state) => state.cart);

  const Carttotal = MyCartItmes?.reduce((accumulator, item) => {
    const offerPrice = parseFloat(item?.offerprice);
    const quantity = parseInt(item?.qty);

    if (!isNaN(offerPrice) && !isNaN(quantity)) {
      const subtotal = offerPrice * quantity;

      return accumulator + subtotal;
    } else {
      return accumulator;
    }
  }, 0);

  const clear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Header1 />
      <Cartnavbar />

      <style>
        {`
          .cart-header {
            font-size: 23px !important;
            font-weight: bold !important;
            text-align: left !important;
            margin: 20px 0 !important;
            color: black !important;
            line-height: 1.2 !important;
            font-family: 'poppins' !important;
            display: flex !important;
            align-items: center !important;
            gap: 10px !important;
          }
        `}
      </style>

      <div className="container">
        {/* Add Cart Header */}
        <h1 className="poppins-regular cart-header">
          <i className="fa-solid fa-cart-shopping" style={{ fontSize: '25px', color: 'black' }}></i>
          Your Cart
        </h1>

        <div className="row" style={{ justifyContent: "center" }}>
          {/* <NabarCompo /> */}
          {/* <Header1 /> */}
          <div className="col-md-8 mt-4" style={{}}>
            {MyCartItmes?.map((item) => (
              <div
                className=" shadow-sm"
                style={{
                  backgroundColor: "white",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="col-md-10">
                <div 
  className="poppins-regular mb-1" 
  style={{ 
    fontSize: '22px', 
    fontWeight: 'bold' 
  }}
>
  {item?.planName}
</div>
                  <div className="poppins-regular mb-1">{item?.category}</div>
                  <div className="d-flex">
                    <div
                      className="poppins-regular mb-1"
                      style={{ textDecoration: "line-through" }}
                    >
                      ₹{item.planPrice}
                    </div>
                    <div className="mx-2 poppins-regular">
                      ₹{item?.offerprice}
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className="poppins-regular"
                    style={{ textAlign: "center" }}
                  >
                    ₹{item?.offerprice}
                  </div>
                  <div
                    className="d-flex mt-2"
                    style={{ justifyContent: "center" }}
                  >
                    <div
                      className=""
                      style={{}}
                      onClick={() => {
                        if (item.qty > 1) {
                          dispatch(removeMyCartItem(item));
                        } else {
                          dispatch(deleteMyCartItem(item.id));
                        }
                      }}
                    >
                      <i
                        class="fa-solid fa-minus"
                        style={{
                          color: "white",
                          fontSize: "14px",
                          backgroundColor: "green",
                          padding: "5px",
                          borderRadius: "50px",
                        }}
                      ></i>
                    </div>
                    <div
                      className="mx-2"
                      style={{
                        color: "black",
                        fontSize: "14px",
                        marginTop: "3px",
                      }}
                    >
                      {item?.qty}
                    </div>
                    <div className="" onClick={() => handle(item)}>
                      <i
                        class="fa-solid fa-plus"
                        style={{
                          color: "white",
                          fontSize: "14px",
                          backgroundColor: "green",
                          padding: "5px",
                          borderRadius: "50px",
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
             
            <style>
{`
  .total-amount {
    font-size: 18px !important;
    font-weight: bold !important;
    color: black !important;
  }
  
  .total-amount.poppins-extrabold {
    font-size: 18px !important;
  }
`}
</style>
            <div className="row mt-5 mb-5">
              <div className="col-md-6 d-flex">
                <p className="poppins-regular total-amount">
                  Total :
                </p>
                <p className="mx-2 poppins-extrabold total-amount">
                ₹ {Carttotal}
                </p>
              </div>
              <div
                className="col-md-6"
                style={{ display: "flex", justifyContent: "end" }}
              >
                {MyCartItmes !== undefined ? (
                  <button
                    onClick={handleChange}
                    style={{
                      backgroundColor: "darkred",
                      padding: 5,
                      borderRadius: 5,
                      width: 130,
                    }}
                  >
                    <span
                      className="poppins-extrabold"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 17,
                        textAlign: "center",
                      }}
                    >
                      Continue
                    </span>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div> {/* Close cart container */}

        {/* Winter Sale Banner and Video in new section */}
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
              <source src={winterSaleVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <Footer />

          {/* <div className="col-md-8 mt-5 ">
        {MyCartItmes.map((item) => (
          <div
            className="row shadow-lg"
            style={{
              backgroundColor: "white",
              padding: "10px",
              marginBottom: "15px",
            }}
          >
            <div className="">{item.planName}</div>
            <div className="">{item?.planPrice}</div>
            <div className="d-flex">
              <div className="" style={{ textDecoration: "line-through" }}>
                ₹{item?.planPrice}
              </div>
              <div className="mx-2">₹{item?.offerprice}</div>
            </div>
          </div>
        ))}
      </div> */}
      </div>
    </>
  );
}
export default Cart;
