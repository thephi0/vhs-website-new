import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Pheader from "./Pheader";
import Pmobileheader from "./Pmobileheader";
import Footer from "./Footer";
import pcity from "../../src/assets1/pcity.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToPMCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
} from "../../src/Component/Redux/Items";

function Phome() {
  const location = useLocation();
  const { pickupLocation, dropLocation } = location.state || {};
  const [categoryData, setCategoryData] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Living room");
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [clickedItemId, setClickedItemId] = useState(null);
  const categoryRefs = useRef({});

  const dispatch = useDispatch();
  const MyCartItems = useSelector((state) => state.Items);
  const mainScrollViewRef = useRef(null);
  console.log("MyCartItems phome page", MyCartItems);

  console.log("categoryData", categoryData);

  useEffect(() => {
    getCategories();
    getItems();
  }, []);

  const getCategories = async () => {
    try {
      const res = await axios.get(
        "https://pm.vijayhomeservice.in/api/cate/getcategory"
      );
      if (res.status === 200) {
        setCategoryData(res.data);
      }
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const getItems = async () => {
    try {
      const res = await axios.get(
        "https://pm.vijayhomeservice.in/api/item/getitem"
      );
      if (res.status === 200) {
        setItemsData(res.data);
      }
    } catch (error) {
      console.error("Error fetching items data:", error);
    }
  };

  const calculateQty = () => {
    return MyCartItems.reduce((total, item) => {
      return total + (item.qty || 0);
    }, 0);
  };
  const totalItems = calculateQty();

  const handleSubcategoryClick = (category, index) => {
    setActiveCategory(category);

    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleAddToCart = (item, category, subcategory) => {
    dispatch(
      addToPMCart({
        id: item._id,
        category: category,
        subcategory: subcategory,
        itemname: item.itemname,
        volume: item.volume,
        weight: item.weight,
        offerPrice: item.offerPrice,
        packingPrice: item.packingPrice,
      })
    );
  };

  const handleIncrementQuantity = (item) => {
    dispatch(
      incrementQuantity({
        id: item._id,
      })
    );
  };

  const handleDecrementQuantity = (item) => {
    dispatch(
      decrementQuantity({
        id: item._id,
      })
    );
  };

  const groupedItems = itemsData.reduce((acc, item) => {
    const {
      category,
      subcategory,
      _id,
      itemname,
      offerPrice,
      volume,
      weight,
      packingPrice,
    } = item;

    if (!acc[category]) {
      acc[category] = {};
    }

    if (!acc[category][subcategory]) {
      acc[category][subcategory] = [];
    }

    acc[category][subcategory].push({
      _id,
      itemname,
      offerPrice,
      volume,
      weight,
      packingPrice,
    });

    return acc;
  }, {});

  return (
    <div className="">
      <Pheader />
      <Pmobileheader />
      <img src={pcity} alt="loading..." style={{ width: "100%" }} />
      <div className="container">
        <div className="row">
          <div
            className="col-md-8 shadow-sm p-3 mb-5 mt-3"
            style={{ borderRadius: "10px" }}
          >
            <div className="d-flex">
              <div className="d-flex" style={{ alignItems: "center" }}>
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ fontSize: "18px", color: "darkred" }}
                ></i>
              </div>
              <div className="poppins-black mx-3">Add your Inventory</div>
            </div>

            <div className="">
              <input
                type="text"
                className="col-md-12 mt-3 poppins-regular"
                placeholder="Search for a household item to add"
                style={{
                  border: "1px solid grey",
                  height: "45px",
                  textAlign: "left",
                  paddingLeft: "45px",
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  color: "grey",
                  position: "absolute",
                  left: "91px",
                  fontSize: "18px",
                  marginTop: "29px",
                }}
              ></i>
            </div>

            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-md-3 pb-3">
                <div
                  className="poppins-regular"
                  style={{
                    border: "1px solid grey",
                    textAlign: "center",
                    borderRadius: "20px",
                    padding: "6px 9px",
                    cursor: "pointer",
                  }}
                >
                  Add Items {totalItems ? `(${totalItems})` : ""}
                </div>
              </div>
              {categoryData.map((item, index) => (
                <div className="col-md-3 pb-3" key={index}>
                  <div
                    onClick={() => handleSubcategoryClick(item.category, index)}
                    className="poppins-regular"
                    style={{
                      border: "1px solid grey",
                      textAlign: "center",
                      borderRadius: "20px",
                      padding: "6px 9px",
                      cursor: "pointer",
                      color:
                        activeCategory === item.category ? "white" : "black",
                      backgroundColor:
                        activeCategory === item.category
                          ? "#FF8343"
                          : "transparent",
                    }}
                  >
                    {item.category}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="row m-auto p-3 border mt-3"
              style={{
                borderRadius: "10px",
                height: "70vh",
                overflowY: "scroll",
              }}
            >
              <div>
                {Object.entries(groupedItems).map(
                  ([category, subcategories], catIndex) => (
                    <div key={catIndex} style={{ marginBottom: "20px" }}>
                      <h2
                        ref={(el) => (categoryRefs.current[category] = el)}
                        className="poppins-black"
                        style={{ color: "darkred" }}
                      >
                        {category}
                      </h2>
                      {Object.entries(subcategories).map(
                        ([subcategory, items], subIndex) => (
                          <div key={subIndex}>
                            <div>
                              <div
                                onClick={() =>
                                  handleSubcategoryClick(subcategory)
                                }
                                className="poppins-regular"
                                style={{
                                  backgroundColor: "white",
                                  borderRadius: "5px",
                                  padding: "10px",
                                  border: "1px solid lightgrey",
                                  marginBottom: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                {subcategory}
                                {activeSubcategory === subcategory &&
                                  items.map((item) => (
                                    <div
                                      className="d-flex mt-2"
                                      style={{
                                        borderBottom: "1px solid lightgrey",
                                        borderBottomStyle: "dashed",
                                      }}
                                      key={item._id}
                                    >
                                      <div
                                        className="col-md-8 p-2"
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                        }}
                                      >
                                        <div className="poppins-regular">
                                          {item.itemname}
                                        </div>
                                      </div>
                                      <div className="col-md-4 p-2">
                                        <div
                                          className="d-flex"
                                          style={{ justifyContent: "end" }}
                                        >
                                          {MyCartItems.find(
                                            (i) => i.id === item._id
                                          ) ? (
                                            <div
                                              className="row"
                                              style={{
                                                justifyContent: "center",
                                              }}
                                            >
                                              <div className="col-md-3 ">
                                                <i
                                                  onClick={() =>
                                                    handleIncrementQuantity(
                                                      item
                                                    )
                                                  }
                                                  className="fa-solid fa-plus"
                                                  style={{
                                                    fontSize: "16px",
                                                    border: "1px solid black",
                                                    padding: "5px",
                                                    textAlign: "center",
                                                  }}
                                                ></i>
                                              </div>
                                              <div className="col-md-2">
                                                <div className="poppins-regular text-center mx-1 mt-1">
                                                  {/*quantity here */}
                                                  {MyCartItems.find(
                                                    (i) => i.id === item._id
                                                  )?.qty || 0}
                                                </div>
                                              </div>
                                              <div
                                                className="col-md-3 d-flex"
                                                style={{
                                                  alignItems: "flex-start",
                                                }}
                                              >
                                                <i
                                                  onClick={() =>
                                                    handleDecrementQuantity(
                                                      item
                                                    )
                                                  }
                                                  className="fa-solid fa-minus"
                                                  style={{
                                                    fontSize: "16px",
                                                    border: "1px solid black",
                                                    padding: "5px",
                                                  }}
                                                ></i>
                                              </div>
                                            </div>
                                          ) : (
                                            <div
                                              className="poppins-regular"
                                              style={{
                                                backgroundColor: "green",
                                                color: "white",
                                                textAlign: "center",
                                                padding: "5px",
                                                borderRadius: "10px",
                                                width: "78px",
                                                cursor: "pointer",
                                              }}
                                              onClick={() =>
                                                handleAddToCart(
                                                  item,
                                                  category,
                                                  subcategory
                                                )
                                              }
                                            >
                                              Add
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="shadow-sm p-3 mb-5 mt-3"
              style={{ borderRadius: "10px", height: "auto" }}
            >
              <div className="poppins-black">Address</div>

              <div className="d-flex mt-3">
                <div
                  className="col-md-1 d-flex"
                  style={{ alignItems: "center" }}
                >
                  <i
                    className="fa-solid fa-location-crosshairs"
                    style={{ fontSize: "20px", color: "darkred" }}
                  ></i>
                </div>
                <div className="col-md-11">
                  <div
                    className="poppins-regular"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {pickupLocation}
                  </div>
                </div>
              </div>

              <div className="d-flex mt-4 pt-2">
                <div
                  className="col-md-1 d-flex"
                  style={{ alignItems: "center" }}
                >
                  <i
                    className="fa-solid fa-location-crosshairs"
                    style={{ fontSize: "20px", color: "darkred" }}
                  ></i>
                </div>
                <div className="col-md-11">
                  <div
                    className="poppins-regular"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {dropLocation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Phome;
