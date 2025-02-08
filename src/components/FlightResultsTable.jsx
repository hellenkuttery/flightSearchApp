import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns = [
  { field: 'id', headerName: 'Validate Airline Code', width: 90,
    renderCell: ({ row }) => {
      return row?.validatingAirlineCodes ?? "-No Airline Code-";
    }
   },
   {
    field: 'arrival',
    headerName: 'Arrival',
    width: 150,
    renderCell: ({ row }) => {
      return row?.itineraries[0].segments[0].arrival.iataCode ?? "-No Departure Code-";
    },
  },
  {
    field: 'departure',
    headerName: 'Departure',
    width: 150,
    renderCell: ({ row }) => {
      return row?.itineraries[0].segments[0].departure.iataCode ?? "-No Departure Code-";
    },
  },
  {
    field: 'terminal',
    headerName: 'Terminal',
    width: 150,
    renderCell: ({ row }) => {
      return row?.itineraries[0].segments[0].departure.terminal ?? "- -";
    },
  },
  {
    field: 'duration',
    headerName: 'Duration',
    width: 150,
    renderCell: ({ row }) => {
      return row?.itineraries[0].segments[0].duration ?? "- -";
    },
  },
  {
    field: 'lastTicketingDate',
    headerName: 'Last Ticketing Date',
    width: 150,
    renderCell: ({ row }) => {
      return row?.numberOfBookableSeats ?? "- -";
    },
  },
  {
    field: 'bookableSeats',
    headerName: 'Number Of Bookable Seats',
    width: 150,
    renderCell: ({ row }) => {
      return row?.lastTicketingDate ?? "- -";
    },
  },
  {
    field: 'Price',
    headerName: 'price',
    type: 'number',
    width: 110,
    renderCell: ({ row }) => {
      return row?.price.base +" "+ row?.price.currency ?? "-No Departure Code-";
    },
  },
  {
    field: 'Fees',
    headerName: 'fees',
    type: 'number',
    width: 110,
    renderCell: ({ row }) => {
      return row?.price.fees[0].amount ?? "-No Departure Code-";
    },
  },
];


export default function FlightResultsTable() {

    const {flightResults}=useSelector((state)=>state.flight)

    console.log(flightResults)

  return (
    <Box sx={{ height: 500, width: '100%', backgroundColor:"white", borderRadius: "0.5rem",
      border:"2px solid #DB6E6E"}}> 
      <DataGrid
        rows={flightResults}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,15,20]}
        disableRowSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{borderRadius:"1rem",boxShadow:"1px 1px 1px white",padding:"1rem"}}
      />
    </Box>
  );
}
