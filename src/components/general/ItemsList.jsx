import React, { useState } from "react";
import testImg from "../Assets/test.jpg";

const ItemsList = ({ allItems }) => {
  const restaurant = {
    _id: "r1",
    uId: "u7",
    resAdd: "mountroad, ch-02",
    resImage: "https://thefederal.com/file/2022/03/Dindigul-Thalappakatti.jpg",
    resName: "Thalapakatti",
  };

  return (
    <div className="itemsListing">
      {allItems.map((item) => (
        <div className="itemCard" key={item.id}>
          <img src={testImg} alt={item.itemName} />
          <div className="itemDetails">
            <h4>{item.itemName}</h4>
            <p>{item.itemDesc}</p>
          </div>
          <div className="handleItem">
            <code>
              <strike>{item.itemPrice}</strike>
              &nbsp;
              {item.itemPrice - (item.itemDiscount / 100) * item.itemPrice}/-
            </code>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
