import React from "react";

const Order = () => {
  return (
    <form className="orderForm" onSubmit={console.log("submitted")}>
      <label>
        Jmeno
        <input type="text" />
      </label>
      <select id="hromosvody" name="hromosvody">
        <option value="none">Vyberte</option>
        <option value="klasicky">Klasicky</option>
        <option value="klasicky">Klasicky</option>
        <option value="klasicky">Klasicky</option>
      </select>
    </form>
  );
};

export default Order;
