import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy loading the components
const Login = lazy(() => import("./Component/Login/Login"));
const Register = lazy(() => import("./Component/Register/Register"));
const ResetPassword = lazy(() =>
  import("./Component/ResetPassword/ResetPassword")
);
const ServicesView = lazy(() => import("./Pages/ServicesView/ServicesView"));
const ViewCart = lazy(() => import("./Pages/ViewCart/ViewCart"));
const Booking = lazy(() => import("./Pages/Booking/Booking"));
const BookingDetails = lazy(() =>
  import("./Pages/BookingDetail/BookingDetails")
);
const Servicedetails = lazy(() => import("./Component/Servicedetails"));
const Viewdetails = lazy(() => import("./Component/Viewdetails"));
const Cart = lazy(() => import("./Component/Cart"));
const Espage = lazy(() => import("./Component/Espage"));
const Cartbook = lazy(() => import("./Component/Cartbook"));
const Home = lazy(() => import("./Component/Home"));
const Summary = lazy(() => import("./Component/Summary"));
const Esuccess = lazy(() => import("./Component/Esuccess"));
const Success = lazy(() => import("./Component/Success"));
const Paymentgateway = lazy(() => import("./Component/Paymentgateway"));
const About = lazy(() => import("./Component/About"));
const Career = lazy(() => import("./Component/Career"));
const Paymentsuccess = lazy(() => import("./Component/Paymentsuccess"));
const Paymentfailure = lazy(() => import("./Component/Paymentfailure"));
const Mybooking = lazy(() => import("./Component/Mybooking"));
const Mainheader = lazy(() => import("./Component/Mainheader"));
const Completed = lazy(() => import("./Component/Completed"));
const Upcomingdetail = lazy(() => import("./Component/Upcomingdetail"));
const Enquirydetails = lazy(() => import("./Component/Enquirydetails"));
const Completeddetails = lazy(() => import("./Component/Completeddetails"));
const Homecity = lazy(() => import("./Component/Homecity"));
const Subcategory = lazy(() => import("./Component/Subcategory"));
const Serviceviewdetails = lazy(() => import("./Component/Serviceviewdetails"));
const Terms = lazy(() => import("./Component/Terms"));
const Privacy = lazy(() => import("./Component/Privacy"));
const Cancellation = lazy(() => import("./Component/Cancellation"));
const Contact = lazy(() => import("./Component/Contact"));
const Interiorcompany = lazy(() => import("./Component/Interiorcompany"));
const Categeries = lazy(() => import("./Component/Categeries"));
const Cartpetcleaning = lazy(() => import("./Component/Carpetcleaning"));
const Invest = lazy(() => import("./Component/Invest"));
const Registerus = lazy(() => import("./Component/Registerus"));
const Homelogin = lazy(() => import("./Component/Homelogin"));
const Paymentdemo = lazy(() => import("./Component/Paymentdemo"));
const Blog = lazy(() => import("./Component/Blog"));
const Bolgdetails = lazy(() => import("./Component/Bolgdetails"));
const Thankyou = lazy(() => import("./Component/Thankyou"));
const Packersmovershome = lazy(() => import("./Component/Packersmovershome"));
const Phome = lazy(() => import("./Component/Phome"));
const Pviewdetails = lazy(() => import("./Component/Pviewdetails"));
const PserviceDetails = lazy(() => import("./Component/PserviceDetails"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:cityName" element={<Homecity />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="servicesView" element={<ServicesView />} />
        <Route path="viewcart" element={<ViewCart />} />
        <Route path="booking" element={<Booking />} />
        <Route path="bookingdetails" element={<BookingDetails />} />
        <Route path="service/:service" element={<Servicedetails />} />
        <Route path="viewdetails" element={<Viewdetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="espage" element={<Espage />} />
        <Route path="cartbook" element={<Cartbook />} />
        <Route path="summary" element={<Summary />} />
        <Route path="esuccess" element={<Esuccess />} />
        <Route path="success" element={<Success />} />
        <Route path="/p" element={<Paymentgateway />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/paymentsuccess" element={<Paymentsuccess />} />
        <Route path="/paymentfailure" element={<Paymentfailure />} />
        <Route path="/mybooking" element={<Mybooking />} />
        <Route path="/mainheader" element={<Mainheader />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/upcomingdetail" element={<Upcomingdetail />} />
        <Route path="/enquirydetails" element={<Enquirydetails />} />
        <Route path="/completeddetails" element={<Completeddetails />} />
        <Route path="/services/:subcategory" element={<Subcategory />} />
        <Route
          path="/serviceview/:ServiceName"
          element={<Serviceviewdetails />}
        />
        <Route path="/terms-and-condition" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-and-cancellation" element={<Cancellation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interiorcompany" element={<Interiorcompany />} />
        <Route path="/categories" element={<Categeries />} />
        <Route path="/carpetcleaning" element={<Cartpetcleaning />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/joinus" element={<Registerus />} />
        <Route path="/homelogin" element={<Homelogin />} />
        <Route path="/paymentdemo" element={<Paymentdemo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<Bolgdetails />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/packers-movers" element={<Packersmovershome />} />
        <Route path="/packers-movers-services-details" element={<Phome />} />
        <Route path="/packers-movers-viewdetails" element={<Pviewdetails />} />
        <Route
          path="/packers-movers-servicedetails"
          element={<PserviceDetails />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
