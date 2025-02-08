import { Box, Button } from "@mui/material";
import React from "react";
import flight from "../assets/flight.jpeg";
import {
  btnStyle,
  
  largeGradientBorderStyle,
  largeGradientBorderWrapperStyle,
  sliderStyle,
  smallGradientBorderStyle,
  smallGradientBorderWrapperStyle,
} from "../styles/globalStyles";
import { Typography } from "@mui/material";
const Slider = () => {
  return (
    <Box sx={sliderStyle}>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-around" },
          color: "white",
          padding: { xs: "3rem", md: "5rem" },
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 2,
          
            justifyContent: { xs: "center", md: "space-around" },
          }}
        >
          <Typography variant="h1">Get Nearby Airports</Typography>
          <Typography sx={{ width: "40%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            dolores cumque ad non eaque. Veritatis autem aliquam laudantium
            iusto ipsum!
          </Typography>
          <Button variant="contained" sx={btnStyle}>
            Reservation
          </Button>
          <Button variant="contained" sx={btnStyle}>
            Airports
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Box style={largeGradientBorderWrapperStyle}>
            <Box style={largeGradientBorderStyle}>922</Box>
          </Box>
          <Box style={smallGradientBorderWrapperStyle}>
            <Box style={smallGradientBorderStyle}>24</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
