import React from "react";

const Order = () => {
  return (
    <form className="orderForm" onSubmit={console.log("submitted")}>
      <label>
        Jmeno
        <input type="text" />
      </label>
    </form>
  );
};

export default Order;
