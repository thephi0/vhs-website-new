import React from "react";
import { Routes, Route } from "react-router-dom";
import SEO from "./SEO.js"; // Import the SEO component....................
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import ResetPassword from "./Component/ResetPassword/ResetPassword";
import ServicesView from "./Pages/ServicesView/ServicesView";
import ViewCart from "./Pages/ViewCart/ViewCart";
import Booking from "./Pages/Booking/Booking";
import BookingDetails from "./Pages/BookingDetail/BookingDetails";
import Servicedetails from "./Component/Servicedetails";
import Viewdetails from "./Component/Viewdetails";
import Cart from "./Component/Cart";
import Espage from "./Component/Espage";
import Cartbook from "./Component/Cartbook";
import Home from "./Component/Home";
import Summary from "./Component/Summary";
import Esuccess from "./Component/Esuccess";
import Success from "./Component/Success";
import Paymentgateway from "./Component/Paymentgateway";
import About from "./Component/About";
import Career from "./Component/Career";
import Paymentsuccess from "./Component/Paymentsuccess";
import Paymentfailure from "./Component/Paymentfailure";
import Mybooking from "./Component/Mybooking";
import Mainheader from "./Component/Mainheader";
import Completed from "./Component/Completed";
import Upcomingdetail from "./Component/Upcomingdetail";
import Enquirydetails from "./Component/Enquirydetails";
import Completeddetails from "./Component/Completeddetails";
import Homecity from "./Component/Homecity";
import Subcategory from "./Component/Subcategory";
import Serviceviewdetails from "./Component/Serviceviewdetails";
import Terms from "./Component/Terms";
import Privacy from "./Component/Privacy";
import Cancellation from "./Component/Cancellation";
import Contact from "./Component/Contact";
import Interiorcompany from "./Component/Interiorcompany";
import Categeries from "./Component/Categeries";
import Cartpetcleaning from "./Component/Carpetcleaning";
import Invest from "./Component/Invest";
import Registerus from "./Component/Registerus";
import Homelogin from "./Component/Homelogin";
import Paymentdemo from "./Component/Paymentdemo";
import Blog from "./Component/Blog";
import Bolgdetails from "./Component/Bolgdetails";
import Thankyou from "./Component/Thankyou";
import Packersmovershome from "./Component/Packersmovershome";
import Phome from "./Component/Phome";
import Pviewdetails from "./Component/Pviewdetails";
import PserviceDetails from "./Component/PserviceDetails";
import Pmsummary from "./Component/Pmsummary";
import Pmlogin from "./Component/Pmlogin";
import Pmorder from "./Component/Pmorder";
import Pmorderdetails from "./Component/Pmorderdetails";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Define CityComponent outside the App function
const CityComponent = () => {
  const { cityName } = useParams(); // Access the cityName parameter from the URL

  return (
    <>
      <SEO
        title={`Vijay Home Services in ${cityName}`}
        description={`Explore services in ${cityName}`}
        keywords={`${cityName}, services`}
        url={`/${cityName}`}
        image="path/to/image.jpg"
      />
      <Homecity />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SEO
              title="Vijay Home Services"
              description="Welcome to Vijay Home Services."
              keywords="home services"
              url="/"
              image="path/to/image.jpg"
            />
            <Home />
          </>
        }
      />
      <Route path="/:cityName" element={<CityComponent />} /> // Title
      <Route
        path="/:cityName"
        element={
          <>
            <SEO
              title="Home City"
              description="Explore services in your city"
              keywords="city, services"
              url={`/$cityName}`}
              image="path/to/image.jpg"
            />
            <Homecity />
          </>
        }
      />
      {/* Define a dynamic route with :cityname */}
      <Route path="/:cityName" element={<Packersmovershome />} />
      <Route
        path="login"
        element={
          <>
            <SEO
              title="Login"
              description="Login to your account"
              keywords="login, user"
              url="/login"
              image="path/to/image.jpg"
            />
            <Login />
          </>
        }
      />
      <Route
        path="register"
        element={
          <>
            <SEO
              title="Register"
              description="Create a new account"
              keywords="register, sign up"
              url="/register"
              image="path/to/image.jpg"
            />
            <Register />
          </>
        }
      />
      <Route
        path="resetpassword"
        element={
          <>
            <SEO
              title="Reset Password"
              description="Reset your password"
              keywords="reset, password"
              url="/resetpassword"
              image="path/to/image.jpg"
            />
            <ResetPassword />
          </>
        }
      />
      <Route
        path="servicesview"
        element={
          <>
            <SEO
              title="Services View"
              description="View our services"
              keywords="services, view"
              url="/servicesview"
              image="path/to/image.jpg"
            />
            <ServicesView />
          </>
        }
      />
      <Route
        path="viewcart"
        element={
          <>
            <SEO
              title="View Cart"
              description="Check your cart"
              keywords="cart, shopping"
              url="/viewcart"
              image="path/to/image.jpg"
            />
            <ViewCart />
          </>
        }
      />
      <Route
        path="booking"
        element={
          <>
            <SEO
              title="Booking"
              description="Book a service"
              keywords="booking"
              url="/booking"
              image="path/to/image.jpg"
            />
            <Booking />
          </>
        }
      />
      <Route
        path="bookingdetails"
        element={
          <>
            <SEO
              title="Booking Details"
              description="Details of your booking"
              keywords="booking, details"
              url="/bookingdetails"
              image="path/to/image.jpg"
            />
            <BookingDetails />
          </>
        }
      />
      <Route
        path="service/:service"
        element={
          <>
            <SEO
              title="Service Details"
              description="Details of the selected service"
              keywords="service, details"
              url="/service/:service"
              image="path/to/image.jpg"
            />
            <Servicedetails />
          </>
        }
      />
      <Route
        path="viewdetails"
        element={
          <>
            <SEO
              title="View Details"
              description="Detailed view of the service"
              keywords="details"
              url="/viewdetails"
              image="path/to/image.jpg"
            />
            <Viewdetails />
          </>
        }
      />
      <Route
        path="cart"
        element={
          <>
            <SEO
              title="Cart"
              description="Your shopping cart"
              keywords="cart"
              url="/cart"
              image="path/to/image.jpg"
            />
            <Cart />
          </>
        }
      />
      <Route
        path="Espage"
        element={
          <>
            <SEO
              title="E-page"
              description="E-service page"
              keywords="e-page, services"
              url="/Espage"
              image="path/to/image.jpg"
            />
            <Espage />
          </>
        }
      />
      <Route
        path="cartbook"
        element={
          <>
            <SEO
              title="Cart Book"
              description="Book from your cart"
              keywords="cart, book"
              url="/cartbook"
              image="path/to/image.jpg"
            />
            <Cartbook />
          </>
        }
      />
      <Route
        path="summary"
        element={
          <>
            <SEO
              title="Summary"
              description="Order summary"
              keywords="summary, order"
              url="/summary"
              image="path/to/image.jpg"
            />
            <Summary />
          </>
        }
      />
      <Route
        path="Esuccess"
        element={
          <>
            <SEO
              title="E-Success"
              description="Success page for E-service"
              keywords="success"
              url="/Esuccess"
              image="path/to/image.jpg"
            />
            <Esuccess />
          </>
        }
      />
      <Route
        path="success"
        element={
          <>
            <SEO
              title="Success"
              description="Order successful"
              keywords="success, order"
              url="/success"
              image="path/to/image.jpg"
            />
            <Success />
          </>
        }
      />
      <Route
        path="/p"
        element={
          <>
            <SEO
              title="Payment Gateway"
              description="Proceed with payment"
              keywords="payment, gateway"
              url="/p"
              image="path/to/image.jpg"
            />
            <Paymentgateway />
          </>
        }
      />
      <Route
        path="/about-us"
        element={
          <>
            <SEO
              title="About Us"
              description="Learn more about us"
              keywords="about, company"
              url="/about-us"
              image="path/to/image.jpg"
            />
            <About />
          </>
        }
      />
      <Route
        path="/career"
        element={
          <>
            <SEO
              title="Career"
              description="Join our team"
              keywords="career, jobs"
              url="/career"
              image="path/to/image.jpg"
            />
            <Career />
          </>
        }
      />
      <Route
        path="/Paymentsuccess"
        element={
          <>
            <SEO
              title="Payment Success"
              description="Your payment was successful"
              keywords="payment, success"
              url="/Paymentsuccess"
              image="path/to/image.jpg"
            />
            <Paymentsuccess />
          </>
        }
      />
      <Route
        path="/Paymentfailure"
        element={
          <>
            <SEO
              title="Payment Failure"
              description="There was a problem with your payment"
              keywords="payment, failure"
              url="/Paymentfailure"
              image="path/to/image.jpg"
            />
            <Paymentfailure />
          </>
        }
      />
      <Route
        path="/mybooking"
        element={
          <>
            <SEO
              title="My Bookings"
              description="Your bookings"
              keywords="my bookings"
              url="/mybooking"
              image="path/to/image.jpg"
            />
            <Mybooking />
          </>
        }
      />
      <Route
        path="/mainheader"
        element={
          <>
            <SEO
              title="Main Header"
              description="Main header content"
              keywords="header"
              url="/mainheader"
              image="path/to/image.jpg"
            />
            <Mainheader />
          </>
        }
      />
      <Route
        path="/completed"
        element={
          <>
            <SEO
              title="Completed"
              description="Your completed services"
              keywords="completed"
              url="/completed"
              image="path/to/image.jpg"
            />
            <Completed />
          </>
        }
      />
      <Route
        path="/upcomingdetail"
        element={
          <>
            <SEO
              title="Upcoming Details"
              description="Details of upcoming services"
              keywords="upcoming, details"
              url="/upcomingdetail"
              image="path/to/image.jpg"
            />
            <Upcomingdetail />
          </>
        }
      />
      <Route
        path="/enquirydetails"
        element={
          <>
            <SEO
              title="Enquiry Details"
              description="Details of your enquiry"
              keywords="enquiry"
              url="/enquirydetails"
              image="path/to/image.jpg"
            />
            <Enquirydetails />
          </>
        }
      />
      <Route
        path="/completeddetails"
        element={
          <>
            <SEO
              title="Completed Details"
              description="Details of completed services"
              keywords="completed, details"
              url="/completeddetails"
              image="path/to/image.jpg"
            />
            <Completeddetails />
          </>
        }
      />
      <Route
        path="/services/:subcategory"
        element={
          <>
            <SEO
              title="Select a Services"
              description="Services under subcategory"
              keywords="subcategory, services"
              url="/services/:subcategory"
            />
            <Subcategory />
          </>
        }
      />
      <Route
        path="/serviceview/:ServiceName"
        element={
          <>
            <SEO
              title="Service View"
              description="View the service"
              keywords="service view"
              url="/serviceview/:ServiceName"
              image="path/to/image.jpg"
            />
            <Serviceviewdetails />
          </>
        }
      />
      <Route
        path="/terms-and-condition"
        element={
          <>
            <SEO
              title="Terms and Conditions"
              description="Review our terms"
              keywords="terms, conditions"
              url="/terms-and-condition"
              image="path/to/image.jpg"
            />
            <Terms />
          </>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <>
            <SEO
              title="Privacy Policy"
              description="Review our privacy policy"
              keywords="privacy, policy"
              url="/privacy-policy"
              image="path/to/image.jpg"
            />
            <Privacy />
          </>
        }
      />
      <Route
        path="/refund-and-cancellation"
        element={
          <>
            <SEO
              title="Refund and Cancellation"
              description="Review our refund and cancellation policy"
              keywords="refund, cancellation"
              url="/refund-and-cancellation"
              image="path/to/image.jpg"
            />
            <Cancellation />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <SEO
              title="Contact Us"
              description="Get in touch with us"
              keywords="contact, reach out"
              url="/contact"
              image="path/to/image.jpg"
            />
            <Contact />
          </>
        }
      />
      <Route
        path="/interiorcompany"
        element={
          <>
            <SEO
              title="Interior Company"
              description="Explore our interior design services"
              keywords="interior, design"
              url="/interiorcompany"
              image="path/to/image.jpg"
            />
            <Interiorcompany />
          </>
        }
      />
      <Route
        path="/categories"
        element={
          <>
            <SEO
              title="Categories"
              description="Explore our categories"
              keywords="categories"
              url="/categories"
              image="path/to/image.jpg"
            />
            <Categeries />
          </>
        }
      />
      <Route
        path="/carpetcleaning"
        element={
          <>
            <SEO
              title="Carpet Cleaning"
              description="Explore our carpet cleaning services"
              keywords="carpet, cleaning"
              url="/carpetcleaning"
              image="path/to/image.jpg"
            />
            <Cartpetcleaning />
          </>
        }
      />
      <Route
        path="/invest"
        element={
          <>
            <SEO
              title="Invest"
              description="Invest in our services"
              keywords="invest"
              url="/invest"
              image="path/to/image.jpg"
            />
            <Invest />
          </>
        }
      />
      <Route
        path="/registerus"
        element={
          <>
            <SEO
              title="Register Us"
              description="Register for our services"
              keywords="register, services"
              url="/registerus"
              image="path/to/image.jpg"
            />
            <Registerus />
          </>
        }
      />
      <Route
        path="/homelogin"
        element={
          <>
            <SEO
              title="Login"
              description="Login to your home account"
              keywords="home, login"
              url="/homelogin"
              image="path/to/image.jpg"
            />
            <Homelogin />
          </>
        }
      />
      <Route
        path="/paymentdemo"
        element={
          <>
            <SEO
              title="Payment Demo"
              description="Demo of our payment process"
              keywords="payment, demo"
              url="/paymentdemo"
              image="path/to/image.jpg"
            />
            <Paymentdemo />
          </>
        }
      />
      <Route
        path="/blog"
        element={
          <>
            <SEO
              title="Blog"
              description="Read our latest articles"
              keywords="blog, articles"
              url="/blog"
              image="path/to/image.jpg"
            />
            <Blog />
          </>
        }
      />
      <Route
        // path="/blogdetails/:id"
        path="/blogdetails"
        element={
          <>
            <SEO
              title="Blog Details"
              description="Read more about this article"
              keywords="blog, details"
              url="/blogdetails/:id"
              image="path/to/image.jpg"
            />
            <Bolgdetails />
          </>
        }
      />
      <Route
        path="/thankyou"
        element={
          <>
            <SEO
              title="Thank You"
              description="Thank you for your response"
              keywords="thank you"
              url="/thankyou"
              image="path/to/image.jpg"
            />
            <Thankyou />
          </>
        }
      />
      // SEO for mobile devices
      <Route
        path="/packers-movers"
        element={
          <>
            <SEO
              title="Packers and Movers"
              description="Best Packers and Movers Services"
              keywords="packers, movers, relocation, shifting"
              // url="/packers-movers"
            />
            <Packersmovershome />
          </>
        }
      />
      <Route
        path="/packers-movers-services-details"
        element={
          <>
            <SEO
              title="Packers and Movers Services"
              description="Details of Packers and Movers services"
              keywords="packers services, moving services, relocation"
              // url="/packers-movers-services-details"
            />
            <Phome />
          </>
        }
      />
      <Route path="/packers-movers-Viewdetails" element={<Pviewdetails />} />
      <Route
        path="/packers-movers-servicedetails"
        element={<PserviceDetails />}
      />
      <Route path="/packers-movers-summary" element={<Pmsummary />} />
      <Route path="/pmlogin" element={<Pmlogin />} />
      <Route path="/myorders" element={<Pmorder />} />
      <Route path="/pmorderdetails_page" element={<Pmorderdetails />} />
    </Routes>
  );
}

export default App;
