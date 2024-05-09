import React, { useContext } from "react";
import axios from "axios";
import { BookingContext } from "./BookingContext";
import { useEffect } from "react";

function BookingData() {
  const { bookingData, setBookingData } = useContext(BookingContext);
  const fetchData = () => {
    axios.post('https://rent-car-server-quys-projects-51f128ab.vercel.app/booking', {key: "get Booking Data"})
      .then(res => {
        console.log("data", res.data)
        setBookingData(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
    window.addEventListener('load', fetchData);

    return () => {
      window.removeEventListener('load', fetchData);
    };
  }, [])

  return (
    <></>
  );
}

export default BookingData
