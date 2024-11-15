import React, { useState } from "react";
import Pheader from "./Pheader";
import Pmobileheader from "./Pmobileheader";
import Footer from "./Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Pmsummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MyCartItems = useSelector((state) => state.Items);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    GrandTotal,
    pickupLocation,
    dropLocation,
    selectedCity,
    mobilenumber,
    shiftingdate,
    pickupLocationLat,
    pickupLocationLng,
    dropLocationLat,
    dropLocationLng,
  } = location.state || {};

  const handleContinue = () => {
    navigate("/packers-movers-services-details", {
      state: {
        GrandTotal,
        pickupLocation,
        dropLocation,
        selectedCity,
        mobilenumber,
        shiftingdate,
        pickupLocationLat,
        pickupLocationLng,
        dropLocationLat,
        dropLocationLng,
      },
    });
  };

  return (
    <div className="">
      <Pheader />
      <Pmobileheader />
      <div className="container">
        <div className="row p-4" style={{ justifyContent: "center" }}>
          <div
            className="col-md-7 shadow-sm  p-3"
            style={{ borderRadius: "10px" }}
          >
            <div className="d-flex">
              <div className="d-flex" style={{ alignItems: "center" }}>
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ fontSize: "18px", color: "darkred" }}
                ></i>
              </div>
              <div className="poppins-black mx-3">Booking Page</div>
            </div>

            <div className="d-flex mt-3">
              <div
                className="col-md-1 d-flex"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <i
                  className="fa-solid fa-arrow-up"
                  style={{
                    fontSize: "16px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "7px 9px",
                    borderRadius: "50px",
                  }}
                ></i>
              </div>
              <div className="col-md-11 mx-1">
                <div
                  className="poppins-regular"
                  style={{ fontWeight: "bold", color: "green" }}
                >
                  Pickup location
                </div>
                <div className="poppins-extralight" style={{ color: "grey" }}>
                  {pickupLocation}
                </div>
              </div>
            </div>

            <div
              className=""
              style={{
                borderLeft: "1px solid black",
                height: "33px",
                borderLeftStyle: "dashed",
                position: "absolute",
                marginLeft: "25px",
                marginTop: "-13px",
              }}
            ></div>

            <div className="d-flex mt-3">
              <div
                className="col-md-1 d-flex"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <i
                  className="fa-solid fa-arrow-down"
                  style={{
                    fontSize: "16px",
                    backgroundColor: "red",
                    color: "white",
                    padding: "7px 9px",
                    borderRadius: "50px",
                  }}
                ></i>
              </div>
              <div className="col-md-11 mx-1">
                <div
                  className="poppins-regular"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  Drop location
                </div>
                <div className="poppins-extralight" style={{ color: "grey" }}>
                  {dropLocation}
                </div>
              </div>
            </div>

            <div
              className="d-flex mt-3"
              style={{
                backgroundColor: "aliceblue",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <div className="col-md-9">
                <div className="poppins-regular" style={{ fontWeight: "bold" }}>
                  {MyCartItems.length} Items added
                </div>
              </div>
              <div
                className="col-md-3 d-flex"
                style={{ justifyContent: "end", alignItems: "center" }}
              >
                <div onClick={handleContinue}>
                  <i
                    style={{ fontSize: "14px", color: "black" }}
                    className="fa-solid fa-greater-than"
                  ></i>
                </div>
              </div>
            </div>

            <input
              type="text"
              className="poppins-regular mt-3"
              style={{
                backgroundColor: "lightgrey",
                height: "40px",
                border: "1px solid lightgrey",
              }}
            />

            <div className="poppins-black mt-3">Payment Summary</div>
            <div className="d-flex mt-3">
              <div className="col-md-8">
                <div className="poppins-regular">Quoted amount</div>
              </div>
              <div className="col-md-4">
                <div className="poppins-regular text-end">
                  ₹ {GrandTotal.toFixed(0)}
                </div>{" "}
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="col-md-8">
                <div className="poppins-regular" style={{ fontWeight: "bold" }}>
                  Total amount to be paid
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="poppins-regular text-end"
                  style={{ fontWeight: "bold" }}
                >
                  ₹ {GrandTotal.toFixed(0) - 99}
                </div>{" "}
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="col-md-8">
                <div className="poppins-regular" style={{ fontWeight: "bold" }}>
                  Booking amount
                </div>
                <div className="poppins-extralight" style={{ color: "grey" }}>
                  An adjustable amount of Rs.99 needs to be paid for order
                  confirmation
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="poppins-regular text-end"
                  style={{ fontWeight: "bold" }}
                >
                  ₹ 99
                </div>{" "}
              </div>
            </div>

            <div className="d-flex poppins-regular mt-3">
              By proceeding you accept the{" "}
              <span
                onClick={handleShow}
                className=" poppins-regular mx-1"
                style={{
                  textDecorationLine: "underline",
                  color: "orange",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {" "}
                Terms & Conditions
              </span>
            </div>

            <div
              className="poppins-black text-center mt-3"
              style={{
                backgroundColor: "orange",
                padding: "8px",
                borderRadius: "5px",
                borderRadius: "5px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Proceed to Pay | ₹ 99
            </div>

            <Modal
              size="lg"
              show={show}
              onHide={handleClose}
              centered
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title className="poppins-black">
                  Term and Conditions
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="poppins-black">
                  Booking Details and Modifications
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  1. Quotation and Changes:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • The provided quotation is based on the details provided by
                  the customer, including the material list, movement date, and
                  distance.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • If there are any deviations in the material list, movement
                  date, or distance, a revised quotation will be offered based
                  on the changes.
                </div>

                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • For any revised quotation, the customer is expected to
                  contact VHS customer care directly at 918453748478.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  2. Cancellation:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Free cancellation is allowed up to 24 hours before the
                  scheduled shifting slot.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • If the cancellation is made after this timeframe, the
                  booking amount will be forfeited.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  3. Partner Assignment and Details:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • For advance bookings, the partner will be assigned roughly
                  24 hours before the scheduled shifting.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • The details of the partner will be shared 1 hour prior to
                  the shifting time slot.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  4. Packing Material:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • The Partner has the right to collect all the packing
                  material after the shifting is over.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • If you wish to retain any carton boxes, you can do so by
                  paying Rs. 60 per box.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  5. Price and Taxes:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • The price mentioned in the quotation is inclusive of any
                  applicable taxes.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Please note that the price is subject to change based on
                  slot availability at the time of any modification.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  6. Warehousing:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Warehousing facilities can be provided at an additional cost
                  of Rs. 300 per day, subject to availability.
                </div>

                <div className="poppins-black mt-1">Payment Guidelines:</div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  1. Within City and Outstation Orders:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • The remaining amount should be paid to the Partner at the
                  destination once the shifting is completed.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  2. Intercity Orders:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • 80% of the remaining amount, after the booking amount has
                  been paid, should be paid at the time of packing and loading
                  at the pickup location.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • The remaining 20% should be paid at the destination before
                  unloading on the date of delivery.
                </div>

                <div className="poppins-black mt-1">
                  Goods and Items Details:
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  1. Packaging:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Electronic items, furniture, and fragile goods must be
                  packed using multi-layer packaging for added protection. We
                  highly recommend customers opt for this option.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Any damages occurring to goods that were not packaged or had
                  single-layer packaging are not the responsibility of VHS,
                  either partially or in full.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  2. Refrigerators:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Prior to packing, refrigerators must be defrosted at least
                  24 hours in advance to prevent water seepage during
                  transportation.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  3. Restricted Items:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • The following goods are not acceptable for movement:
                  jewelry, arms and ammunition, hazardous materials such as
                  crackers, explosives, chemicals, battery acids, inflammable
                  oils (e.g., diesel, petrol, kerosene, gasoline), narcotics,
                  and counterfeit items.
                </div>

                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Please keep all valuable items like cash and jewelry under
                  your custody before the shifting process begins.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  4. Technical Assistance:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • If any machines, appliances, or electronic gadgets require
                  the technical assistance of the manufacturer or their
                  authorized dealer for locking/unlocking, it is the customer's
                  responsibility to arrange for this assistance.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  5. AC Uninstallation and Installation:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Charges for AC uninstallation and installation cover only
                  the service, and materials need to be purchased separately,
                  which are not included in the quote.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Assembling does not include pipes, gas filling, extra wires,
                  fittings, etc. These additional charges should be borne by the
                  customer.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • VHS does not assume responsibility for any damage to copper
                  pipes during assembling and dismantling.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  6. Vehicle Movement:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • For the movement of two-wheelers or four-wheelers, the fuel
                  tank should be completely emptied.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Customers are requested not to hand over any accessories
                  such as helmets or jackets along with the two-wheeler. Claims
                  regarding such accessories will not be entertained.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Please provide a copy of the RC book, insurance, and
                  pollution certificate for two-wheeler movement.
                </div>

                <div className="poppins-black mt-1">Important Information:</div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  1. Delays and Restricted Entry:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Due to No Entry Hours in specific cities, restricted
                  movement, festival days, or peak days, there might be delays
                  in the arrival of the vehicle.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • It is essential to be aware of the timings during which
                  external vehicles are allowed inside the premises. Some
                  societies have shifting restrictions in the morning, evening,
                  or on Sundays. Please check with the society before the
                  shifting date.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • If any permissions are required, the customer should take
                  them in advance from the Resident Welfare Association.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  2. Goods Transfer via Ropes:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • If there is a need to transfer goods using ropes, the
                  decision to proceed with this method lies solely with the
                  customer subject to availability.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • VHS will not be responsible for any damage to the goods in
                  such cases.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  3. Internal Damages and Packing:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • VHS does not cover for any internal damages.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Damages to goods not packed by VHS's crew are not covered by
                  VHS.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Any other damage during the shifting process must be
                  reported to VHS Customer Care within 24 hours of shifting
                  completion. No cases or claims will be entertained if not
                  reported within this timeframe.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  4. Disputes and Changes:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • VHS will not entertain disputes regarding aspects that are
                  not included in the quote and were not officially communicated
                  to the VHS Support team when changes were made. It is
                  important to get the quote updated accordingly.
                </div>

                <div
                  className="poppins-regular mt-2 mb-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  5. Vehicle Type and Delivery Time:
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • The vehicle type sent to customers on the shifting date is
                  dependent solely on the Partner.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • For intercity orders, the delivery time will vary depending
                  on the route and the type of service (Full Truck Load or Part
                  Truck Load). Customers are requested to refer to the Delivery
                  Time with the booking representative at the time of booking.
                </div>
                <div
                  className="poppins-extralight mb-1"
                  style={{ color: "grey" }}
                >
                  • Please note that there might be a deviation of up to 2 days
                  from the expected delivery date.
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Pmsummary;
