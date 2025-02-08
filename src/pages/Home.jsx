import React, { useEffect } from "react";

import { Box, Grid } from "@mui/material";
// import useFlightCall from "../hooks/useFlightCall";
import NearbyAirports from "./NearbyAirports";
import PlacesCard from "./../components/PlacesCard";
import SearchFlights from "./SearchFlights";
import { useSelector } from "react-redux";

const Home = () => {
  const { places } = useSelector((state) => state.flight);

  return (
    <Box
      sx={{
        padding: "2rem",
        marginTop: "1rem",
        borderBottom: "2px solid #DB6E6E",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} md={12}>
          <SearchFlights />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <NearbyAirports />
          {places.length > 0 ? <PlacesCard /> : null}
        </Grid>
        <Grid item xs={12} sm={6} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Home;
