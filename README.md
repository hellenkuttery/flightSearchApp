# FlightAppSearch
## Project
![Project](./src/assets/flightApp.gif)
## Project link
[Project live Link ](https://dazzling-madeleine-3db301.netlify.app/)
## Project Description
FlightAppSearch is a React-based application that allows users to search for flights by providing an origin, destination, and travel date. The application displays the flight results in a DataGrid and also features an interactive map that shows nearby airports and notable landmarks around the selected airport.

This project demonstrates the usage of modern state management, form validation, and interactive UI components using libraries like Redux Toolkit, Formik, Yup, Material-UI, and Leaflet for the map integration.

## Problem Statement
The goal of this project is to provide a search functionality for flights based on user inputs (origin, destination, and date) and present the results in a structured way. Additionally, the application integrates a map to display nearby airports and notable places of interest.

The project is built using React, Redux Toolkit, Material-UI, Formik, Yup, Leaflet (for the map), and Axios.

## Project Structure
The project contains the following sections:

### 1. Flight Search Page
Users can search for flights by entering the origin, destination, and date.

- **Form Input Fields:**
  - Origin (e.g., city or airport code)
  - Destination (e.g., city or airport code)
  - Date (e.g., departure date)
  
- **DataGrid:**
  - Displays the search results (flight options) with columns like:
    - Flight Number
    - Airline
    - Departure Time
    - Arrival Time
    - Price

### Example UI:
- Input fields for Origin, Destination, and Date.
- A button to search for flights.
- A DataGrid displaying the search results.

### 2. Interactive Map
After a flight search, the map shows nearby airports based on the origin and destination selected. It also highlights important landmarks near those airports.

- **Features:**
  - Display a map using Leaflet.
  - Show nearby airports and their locations on the map.
  - Display popular landmarks around the airports (using external data sources like APIs or static data).

### Example UI:
- A map showing nearby airports as markers.
- Pop-up information on the map showing notable landmarks.

### 3. Flight Results DataGrid
- After submitting the flight search form, users can see a list of flights in the DataGrid.
- Each row in the grid represents a flight with details such as flight number, airline, price, and departure/arrival times.

### Example UI:
- A DataGrid component that displays the flight details (e.g., flight number, price, etc.).
- Pagination for large sets of results.

## Highlights
This project demonstrates the following concepts:

- **Redux Toolkit:** Used for managing the application state, such as flight search results, user preferences, and map data.
- **Async Thunks:** Handle asynchronous operations like API calls to fetch flight data and airport details.
- **Store Configuration:** Centralized state management for the entire application.
- **Formik & Yup:** Used for handling and validating forms such as the flight search form.
- **Material-UI:** Provides UI components for a clean and responsive design.
- **Leaflet:** An interactive map to show airports and landmarks.
- **Axios:** Handles API calls to fetch flight and map-related data.
- **React Router:** For navigation between different pages (e.g., Flight Search, Map, and Results).
- **Tailwind CSS:** For modern and flexible styling.

## Expected Outcome
The project will consist of the following features:

### 1. Flight Search System
- **Search Fields:** 
  - Origin
  - Destination
  - Date
- **Search Results:**
  - Display flight options in a DataGrid.
  - Provide detailed information for each flight (e.g., airline, price, flight duration).
  
### 2. Interactive Map
- **Map Integration:** 
  - Show nearby airports and their locations.
  - Highlight major landmarks around selected airports.
  
### 3. Flight Result DataGrid
- **DataGrid UI:**
  - A grid that will list flight results after search.
  - Support features like sorting, pagination, and filtering.

## Technologies Used
- **React**: For building the user interface.
- **Redux Toolkit**: For centralized state management.
- **Formik & Yup**: For form handling and validation.
- **Material-UI**: For UI components.
- **Leaflet**: For the interactive map.
- **Axios**: For API requests.
- **React Router**: For routing between different pages.
- **Tailwind CSS**: For styling.
- **Netlify**: For deploying the application.

## Setup and Installation

### Prerequisites:
- Node.js
- npm or yarn

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/flightappsearch.git