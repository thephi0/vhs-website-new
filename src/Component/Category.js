import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import NavbarCompo from "./navbar";
import Homenavbar from "./Homenavbar";

const Category = () => {
  const { data } = useParams();
  const [subcategoryData, setSubcategoryData] = useState([]);
  const [city, setCity] = useState("");
  const [serviceContent, setServiceContent] = useState(null);
  const location = useLocation();
  const locationSlug = location.pathname.split('/')[2]; // Get category from URL

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    if (data) {
      const parts = data.split("-");
      const category1 = capitalizeFirstLetter(parts[0]);

      const services = [
        "Cleaning",
        "Painting",
        "Pest Control",
        "Floor Polishing",
        "Home Repair Services",
        "Packers & Movers",
        "Appliance Service",
        "Facility Management",
      ];

      const fullServiceName = services.find((service) =>
        service.toLowerCase().includes(category1.toLowerCase())
      );

      if (fullServiceName) {
        const city = parts.slice(3).join("-");
        setCity(city);
        getSubcategory(fullServiceName);
      } else {
        console.error("Service not found");
      }
    }
  }, [data]);

  useEffect(() => {
    setDefaultContent();
  }, [locationSlug]);

  const getSubcategory = async (category) => {
    try {
      let res = await axios.post(
        `https://api.vijayhomesuperadmin.in/api/userapp/postappsubcat`,
        { category: category }
      );

      if (res.status === 200) {
        setSubcategoryData(res.data.subcategory);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setDefaultContent = () => {
    setServiceContent({
      title: `Vijay Home Services - Professional ${data} Services`,
      description: [
        `Vijay Home Services offers comprehensive ${data} solutions designed to enhance your living space. Our professional team delivers exceptional service quality with attention to detail.`
      ],
      contentkey1: `Benefits of Our ${data} Services`,
      contentlist1: [
        `Professional Expertise: Trained and skilled technicians`,
        `Quality Assurance: High standards and satisfaction guarantee`,
        `Affordable Solutions: Competitive pricing with great value`,
        `Timely Service: Punctual and efficient execution`,
        `Customer Support: Responsive and helpful assistance`
      ],
      contentkey2: `Why Choose Our ${data} Services?`,
      contentlist2: [
        `We pride ourselves on delivering reliable, efficient, and professional ${data} services that meet your specific needs.`
      ],
      contentkey3: `Our Service Process`,
      contentlist3: [
        `1. Schedule Service: Easy booking process`,
        `2. Professional Assessment: Detailed evaluation`,
        `3. Expert Execution: Skilled service delivery`,
        `4. Quality Check: Thorough inspection`,
        `5. Support: Ongoing assistance`
      ]
    });
  };

  return (
    <div>
      <NavbarCompo />
      <Homenavbar />
      <div className="container">
        <div className="row mb-4 justify-content-center">
          <h1 className="poppins-semibold mt-4">{data}</h1>
          {subcategoryData.map((ele, index) => (
            <div className="col-md-3 mt-3" key={index}>
              <Link
  to={{
    pathname: `/service/${ele.subcategory
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/-in/g, "")}-in-${city
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/-in/g, "")}`,
    state: { data: ele },
  }}
  className="text-decoration-none text-black"
>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={ele.imglink}
                    alt={`${ele.category} images`}
                    className="img-fluid"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="poppins-medium mt-3 text-center">
                  {ele.subcategory}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="content-section mt-5">
          <h2 className="poppins-semibold">{serviceContent?.title}</h2>
          {serviceContent?.description.map((desc, index) => (
            <p key={index} className="poppins-regular mt-3">{desc}</p>
          ))}

          <h3 className="poppins-semibold mt-4">{serviceContent?.contentkey1}</h3>
          <ul className="poppins-regular">
            {serviceContent?.contentlist1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="poppins-semibold mt-4">{serviceContent?.contentkey2}</h3>
          {serviceContent?.contentlist2.map((text, index) => (
            <p key={index} className="poppins-regular">{text}</p>
          ))}

          <h3 className="poppins-semibold mt-4">{serviceContent?.contentkey3}</h3>
          <ul className="poppins-regular">
            {serviceContent?.contentlist3.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
