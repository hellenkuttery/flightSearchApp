import React from "react";
import {
  airportSuccess,
  fetchFail,
  fetchFlights,
  fetchFlightSearch,
  fetchStart,
  placesSuccess,
} from "../features/flightSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const useFlightCalls = () => {
  const dispatch = useDispatch();

  /* -------------------------------------------------------------------------- */
  /*                               NEARBY AIRPORTS                              */
  /* -------------------------------------------------------------------------- */
  const getNearbyAirports = async ({ lat, lon }) => {
    dispatch(fetchStart());

    const lamin = lat - 0.3;
    const lamax = lat + 0.3;
    const lomin = lon - 0.3;
    const lomax = lon + 0.3;

    const url = `https://opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;
    try {
      const { data } = await axios(`${url}`);
      dispatch(airportSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  /* -------------------------------------------------------------------------- */

  const getNearbyPlaces = async ({ lat, lon }) => {
    dispatch(fetchStart());
    const url1 = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&radius=1000&limit=12`;

    try {
      const {data}=await axios(url1,
        {
          headers:{
            "Authorization":"Bearer SnP8A_20ZpSzfujQkVC3_qPABi6AEW4BIfYLLngoCVFOw85ezbTGIbQbPrBLSwv1Otp68WVe7gJf_dBotP3tNKOXJ3J_qJWy6oLHibgY4uQl9XGU0gXDskELPhClZ3Yx"  ,
            "accept":"application/json"
          }
        }
      )
      dispatch(placesSuccess(data))
    } catch (error) {}
  };

  /* -------------------------------------------------------------------------- */
  /*                                AIRPORT CODE                                */
  /* -------------------------------------------------------------------------- */
  const getAirportCode = async ({ cityName, cityType }) => {
    dispatch(fetchStart());
    try {
      const API_KEY = "y2uho7kyiXGzQoWRUP3l6GrAP4OKksn8";
      const API_SECRET = "awX0f1B4FuPsf3jh";

      const tokenResponse = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: API_KEY,
          client_secret: API_SECRET,
        })
      );

      const accessToken = tokenResponse.data.access_token;

      const { data } = await axios(
        `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${cityName}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (data?.data?.length > 0) {
        const airportCode = data.data[0].iataCode; 

        dispatch(fetchFlights({ code: airportCode, cityType: cityType }));
      } else {
        dispatch(fetchFail());
      }
    } catch (error) {
      console.error("API Hatası:", error.response?.data || error.message);

      dispatch(fetchFail());
    }
  };
/* -------------------------------------------------------------------------- */
/*                                FLIGHT FETCH                                */
/* -------------------------------------------------------------------------- */
  const fetchFlightsResult = async ({ originCode, destinationCode, date }) => {
    dispatch(fetchStart());
    try {
      const API_KEY = "y2uho7kyiXGzQoWRUP3l6GrAP4OKksn8";
      const API_SECRET = "awX0f1B4FuPsf3jh";


      const tokenResponse = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: API_KEY,
          client_secret: API_SECRET,
        })
      );
      const accessToken = tokenResponse.data.access_token;
      const { data } = await axios(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originCode}&destinationLocationCode=${destinationCode}&departureDate=${date}&adults=1`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(fetchFlightSearch(data))
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getNearbyAirports, getNearbyPlaces, getAirportCode, fetchFlightsResult };
};

export default useFlightCalls;
