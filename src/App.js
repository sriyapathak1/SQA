import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./router/AppRoutes";
// import Navigation from "./components/navigations";
// import { Home, About, Contact, Blog  } from "./modules";
// import { Register } from "./components/login";
// import Footer from "./components/footer/Footer";

const App = () => {
  return (
      <AppRoutes />
  );
};

export default App;
