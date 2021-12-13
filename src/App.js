import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./router/AppRoutes";
import { Box, Container } from "@stack-ui/components";
import { SidebarNav } from "./components";

const App = () => {
  return (
    
      
    <Container>
      <AppRoutes />
    
    </Container>
  
  );
};

export default App;
