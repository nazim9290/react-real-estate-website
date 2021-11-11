import React, { useEffect, useState } from "react";
import useAuth from "./../../../../Hooks/useAuth";

const MyOrder = () => {
  const { user, token } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = `https://gentle-hamlet-37789.herokuapp.com/bookings?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);
  return (
    <div>
      <h1>My Order{bookings.length} </h1>
    </div>
  );
};

export default MyOrder;
