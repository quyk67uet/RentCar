import React, { useContext } from "react";
import axios from "axios";
import { CarDataContext } from "./CarDataContext";
import { useEffect } from "react";

function CarsData() {
  const { carData, setCarData } = useContext(CarDataContext);
  const fetchData = () => {
    axios.post('https://rent-car-server-quys-projects-51f128ab.vercel.app/dashboard', {key: "get Car Data"})
      .then(res => {
        setCarData(res.data);
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

export default CarsData
