import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart1, removeMyCartItem, clearCart } from "../Redux1/MyCartSlice";
import { deleteMyCartItem } from "../Redux1/MyCartSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Header1 from "./Header1";
import Cartnavbar from "./Cartnavbar";
import Footer from "./Footer";
import ContentLoader from "react-content-loader"; // Import ContentLoader

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
  const isLoading = MyCartItmes === undefined;

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
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-8 mt-4">
            {/* If loading, show skeleton loaders */}
            {isLoading ? (
              [...Array(3)].map((_, index) => (
                <ContentLoader
                  key={index}
                  speed={2}
                  width={"100%"}
                  height={100}
                  viewBox="0 0 400 100"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="10" y="10" rx="5" ry="5" width="60" height="60" />
                  <rect x="80" y="10" rx="5" ry="5" width="200" height="20" />
                  <rect x="80" y="40" rx="5" ry="5" width="150" height="15" />
                  <rect x="300" y="20" rx="5" ry="5" width="50" height="15" />
                  <rect x="300" y="50" rx="5" ry="5" width="70" height="20" />
                </ContentLoader>
              ))
            ) : MyCartItmes.length === 0 ? (
              // Show message when cart is empty
              <div
                className="text-center mt-5"
                style={{ color: "gray", fontSize: "18px" }}
              >
                <p
                  className="poppins-semibold text-center"
                  style={{ color: "red", fontSize: "18px" }}
                >
                  Your cart is empty
                </p>
                <button
                  className="btn btn-primary mt-3 mb-3 poppins-regular text-center"
                  onClick={() => navigate("/")} // Redirect to shop page
                  style={{ width: "40%", fontWeight: "bold" }}
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              // Show cart items
              MyCartItmes.map((item) => (
                <div
                  key={item.id}
                  className="shadow-sm"
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
                    <div className="poppins-regular mb-1">{item?.planName}</div>
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
                        onClick={() => {
                          if (item.qty > 1) {
                            dispatch(removeMyCartItem(item));
                          } else {
                            dispatch(deleteMyCartItem(item.id));
                          }
                        }}
                      >
                        <i
                          className="fa-solid fa-minus"
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
                          className="fa-solid fa-plus"
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
              ))
            )}

            {/* Total Amount and Continue Button */}
            {MyCartItmes.length > 0 && (
              <div className="row mt-5 mb-5">
                <div className="col-md-6 d-flex">
                  <p
                    className="poppins-extrabold"
                    style={{ color: "black", fontSize: 18, fontWeight: "bold" }}
                  >
                    Total :
                  </p>
                  <p
                    className="mx-2 poppins-extrabold"
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    ₹{Carttotal}
                  </p>
                </div>
                <div
                  className="col-md-6"
                  style={{ display: "flex", justifyContent: "end" }}
                >
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
                </div>
              </div>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Cart;
