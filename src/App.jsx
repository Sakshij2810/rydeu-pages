import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CityPage from "./pages/CityPage/CityPage";
import BookingRequest from "./pages/BookingRequest/BookingRequest";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home-page" element={<HomePage />} />
        <Route exact path="/city-page" element={<CityPage />} />
        <Route exact path="/booking-request" element={<BookingRequest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
