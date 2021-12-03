import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Redirect,
  // Routes,
} from "react-router-dom"; 
import { Home, About, Contact } from "../modules";
import Navigation from "../components/navigations/Navigations";
import Footer from "../components/footer/Footer";
import Blog from "../modules/Blogs";
import { Register } from "../components/login";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/blog" exact element={<Blog />} />
           <Route path="/register" exact element={<Register />} />
           {/* <Route path="/" exact element={< />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRoutes;
