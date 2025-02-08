import { ContactSupportOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const flightSlice=createSlice({
    name:"flight",
    initialState:{
        loading:false,
        error:true,
        airports:[],
        places:[],
        flightResults:[],
        origin:null,
        destination:null
      
    },
    reducers:{
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
          },
          fetchFail: (state) => {
            state.loading = false;
            state.error = true;
          },
          airportSuccess: (state, { payload }) => {
            state.airports = payload?.states;
          },
          placesSuccess: (state, { payload }) => {
            state.places = payload?.businesses;
          },
          fetchFlights:(state,{payload})=>{
            state[payload.cityType]=payload.code

          },
          fetchFlightSearch:(state,{payload})=>{
            state.flightResults=payload?.data
          }
    }
})
export const { fetchFail, fetchStart, fetchSuccess, airportSuccess ,placesSuccess,fetchFlights,fetchFlightSearch} =
  flightSlice.actions;
export default flightSlice.reducer;