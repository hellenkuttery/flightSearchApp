import { Box } from "@mui/material";
import React from "react";
import AppNavbar from "./../components/Navbar";
import Slider from "./../components/Slider";
import Home from "../pages/Home";
import Footer from './../components/Footer';
import {

  bodyStyle,
  containerStyle,
} from "../styles/globalStyles";

const Layout = () => {
  return (
    <Box sx={bodyStyle}>
      <Box sx={containerStyle}>
        <Box>
          <AppNavbar />
        </Box>

        <Slider />
        <Home />
       <Footer/>
      </Box>
    </Box>
  );
};

export default Layout;
