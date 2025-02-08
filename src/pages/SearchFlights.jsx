import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import useFlightCalls from "../hooks/useFlightCalls";
import { useSelector } from "react-redux";
import { fetchFlights } from "../features/flightSlice";
import FlightResultsTable from "./../components/FlightResultsTable";

const SearchFlights = () => {
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [date, setDate] = useState("");
  const { getAirportCode, fetchFlightsResult } = useFlightCalls();
  const { destination, origin, flightResults } = useSelector(
    (state) => state.flight
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originCity || !destinationCity || !date) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      // 1. Origin verisini çekiyoruz
      const originData = await getAirportCode({
        cityName: originCity,
        cityType: "origin",
      });
      const destinationData = await getAirportCode({
        cityName: destinationCity,
        cityType: "destination",
      });
    } catch {
      console.log(error);
    }

    if (origin && destination) {
      fetchFlightsResult({
        originCode: origin,
        destinationCode: destination,
        date,
      });
    }
  };

  return (
    <div style={{ padding: "0.5rem", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            padding: "1rem",
            gap: "1rem",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            border: "2px solid #DB6E6E",
          }}
        >
          <TextField
            label="Origin"
            fullWidth
            variant="outlined"
            value={originCity}
            onChange={(e) => setOriginCity(e.target.value)}
            style={{ marginBottom: "10px", backgroundColor: "white" }}
          />
          <TextField
            label="Destination"
            fullWidth
            variant="outlined"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
            style={{ marginBottom: "10px", backgroundColor: "white" }}
          />
          <TextField
            label="Date"
            fullWidth
            type="date"
            variant="outlined"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            style={{ marginBottom: "10px" }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{ height: "3.3rem" }}
          >
            FIND FLIGHTS
          </Button>
        </Box>
      </form>
      {flightResults.length > 0 ? <FlightResultsTable /> : null}
    </div>
  );
};

export default SearchFlights;
