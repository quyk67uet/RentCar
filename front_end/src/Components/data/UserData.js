import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { useEffect } from "react";

function UserData() {
  const { userData, setUserData } = useContext(UserContext);
  const fetchData = () => {
    axios.post('https://rent-car-server-quys-projects-51f128ab.vercel.app/dashboard', {key: "get User Data"})
      .then(res => {
        setUserData(res.data);
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

export default UserData
