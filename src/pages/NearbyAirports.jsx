import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { InsertEmoticon } from "@mui/icons-material";
import useFlightCalls from "../hooks/useFlightCalls";
// import BasicCard from "../components/NearbyAirportsCard";
import AirportsCards from './../components/AirportsCards';

const NearbyAirports = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [information, setInformation] = useState();
  const [mapInitialized, setMapInitialized] = useState(false);
  const { getNearbyAirports ,getNearbyPlaces} = useFlightCalls();
//   const { getNearbyAirports, loading, error } = useSelector(
//     (state) => state.flight
//   );


  useEffect(() => {
    setMapInitialized(true);
  }, []);

  function MapClick() {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setLocation({ lat, lon: lng });
      },
    });

    return null;
  }
  useEffect(() => {
    if (location.lat && location.lon) {
     getNearbyAirports(location)
     getNearbyPlaces(location)
    }
  }, [location]);

  return (
    <Box
      style={{       
       width: "100%",
       display: "flex",
       justifyContent:{sm:"flex-start", md:"center"},
        flexDirection: "column",
       backgroundColor: "white",
       padding: "1rem",
       borderRadius: "0.5rem",
       border: "2px solid #DB6E6E",
       minHeight:"500px"
        // height: "800px",
      }}
    >
      <Box
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "5%",
          overflow: "hidden",
        }}
      >
        {mapInitialized && (
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "100%", width: "100%", borderRadius: "" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapClick />

            {/* Tıklanan konumu gösteren Marker */}
            {location.lat && location.lon && (
              <Marker position={[location.lat, location.lon]}>
                <Popup>
                  Latitude: {location.lat}, Longitude: {location.lon}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        )}
      </Box>

      <AirportsCards/>
    </Box>
  );
};

export default NearbyAirports;
