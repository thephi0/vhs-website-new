// src/components/PaymentForm.js
// http://www.robotstxt.org/robotstxt.html
// User-agent: *
// Disallow: / 
import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({
    merchant_id: "3663823",
    order_id: "0001",
    currency: "INR",
    amount: "1.00",
    redirect_url: "http://localhost:8080/api/payment/handlepaystatus",
    cancel_url: "http://localhost:8080/payment-cancel",
    language: "EN",
  });
  const serialize = (obj, keys = []) => {
    if (!Array.isArray(keys)) {
      throw new TypeError("keys must be an array");
    }
    const flattenObject = (ob) => {
      let toReturn = {};

      for (let i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
          let flatObject = flattenObject(ob[i]);
          for (let x in flatObject) {
            if (!flatObject.hasOwnProperty(x)) continue;

            toReturn[`${i}[${x}]`] = flatObject[x];
          }
        } else if (Array.isArray(ob[i])) {
          toReturn[i] = ob[i].map((item) => encodeURIComponent(item)).join(",");
        } else {
          toReturn[i] = encodeURIComponent(ob[i]);
        }
      }
      return toReturn;
    };

    const filteredObj = keys.reduce((acc, key) => {
      if (obj[key] !== undefined) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});

    const flattenedObj = flattenObject(filteredObj);
    return new URLSearchParams(flattenedObj).toString();
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    const paydata1 = {
      dividedDates: ["2024-08-16"], // Example static date
      customerName: "John Doe", // Static customer name
      email: "johndoe@example.com", // Static email
      userId: "1234567890abcdef", // Static user ID
      dividedamtCharges: 100, // Static charge
      dividedamtDates: ["2024-08-16"], // Static dates array
      cardNo: "1234-5678-9012-3456", // Static card number
      category: "Cleaning", // Static category
      contractType: "One Time", // Static contract type
      service: "Deep Cleaning", // Static service name
      serviceID: "service123", // Static service ID
      serviceCharge: 1500, // Static service charge
      dateofService: "2024-08-16", // Static date of service
      selectedSlotText: "Morning Slot", // Static slot
      serviceFrequency: 1, // Static service frequency
      startDate: "2024-08-16", // Static start date
      expiryDate: "2024-08-16", // Static expiry date
      firstserviceDate: "2024-08-16", // Static first service date
      date: "2024-08-16", // Static date
      time: "10:00 AM", // Static time
      type: "website", // Static type
      desc: "Plan A with addon B", // Static description
      city: "Bangalore", // Static city
      discAmt: 0, // Static discount amount
      GrandTotal: 1500, // Static grand total
      paymentMode: "cash", // Static payment mode
      TotalAmt: 1500, // Static total amount
      couponCode: "DISCOUNT10", // Static coupon code
      totalSaved: 100, // Static amount saved
      markerCoordinate: { lat: 12.9716, lng: 77.5946 }, // Static coordinates
      deliveryAddress: "123 Main Street, Bangalore", // Static address
      amount: "1.00", // Static amount
      number: "8951592630", // Static phone number
      MUID: "MUID1234567890", // Static MUID
      transactionId: "T1234567890", // Static transaction ID
    };

    const keysToInclude = [
      // "customerData",
      // "deliveryAddress",
      "serviceID",
      "userId",
      "customerName",
      "category",
      "contractType",
      "service",
      "amount",
      "serviceCharge",
      "selectedSlotText",
      "serviceFrequency",
      "desc",
      "markerCoordinate",
      "startDate",
      "expiryDate",
      "firstserviceDate",
      "time",
      "type",
      "city",
      "discAmt",
      "GrandTotal",
      "paymentMode",
      "TotalAmt",
      "totalSaved",
      "couponCode",
      "dateofService",
      "date",
    ];

    const serializedData = new URLSearchParams(
      Object.entries(paydata1).filter(([key]) => keysToInclude.includes(key))
    ).toString();

    const updatedRedirectUrl = `http://localhost:8080/api/payment/handlepaystatus`;
    // const updatedRedirectUrl = `http://localhost:8080/api/payment/handlepaystatus`;

    const paymentString = new URLSearchParams({
      merchant_id: paymentData.merchant_id,
      order_id: paymentData.order_id,
      currency: paymentData.currency,
      amount: paymentData.amount,
      redirect_url: updatedRedirectUrl,
      cancel_url: paymentData.cancel_url,
      language: paymentData.language,
    }).toString();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/payment/initiate",
        { payment_string: paymentString, updateddata: paydata1 }
      );
      console.log("paymentString:", paymentString);

      if (response && response.data && response.data.url) {
        console.log("response.data.url", response.data.url);
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error(
        "Error initiating payment:",
        error.response || error.message || error
      );
    }
  };

  return (
    <div>
      <h2>Initiate Payment</h2>
      <button onClick={handleSubmit1}>pay</button>
    </div>
  );
};

export default PaymentForm;
