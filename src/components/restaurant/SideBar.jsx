import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <hr />
      <h3>Sort by</h3>
      <p>
        <input name="z" type="radio" />
        Price
      </p>
      <p>
        <input name="z" type="radio" />
        Discount
      </p>
      <p>
        <input name="z" type="radio" />
        No Sorting
      </p>

      <h3>Category</h3>
      <p>
        <input type="checkbox" />
        Biriyani
      </p>
      <p>
        <input type="checkbox" />
        Beverages
      </p>
      <p>
        <input type="checkbox" />
        Pizza
      </p>
      <p>
        <input type="checkbox" />
        Breakfast
      </p>
      <p>
        <input type="checkbox" />
        Starters
      </p>
      <h3>Veg or Non-Veg</h3>
      <p>
        <input name="w" type="radio" />
        Both
      </p>
      <p>
        <input name="w" type="radio" />
        Veg
      </p>
      <p>
        <input name="w" type="radio" />
        Non-Veg
      </p>
    </div>
  );
};

export default SideBar;
