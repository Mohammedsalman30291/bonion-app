import React, { useState } from "react";

const ItemForm = ({ addNewItem, cancel }) => {
  const [iName, setIName] = useState();
  const [iDesc, setIDesc] = useState();
  const [iPrice, setIPrice] = useState();
  const [iCat, setICat] = useState();
  const [iUrl, setIUrl] = useState();
  const [iGender, setIGender] = useState();
  const [iDiscount, setIDiscount] = useState();

  const callFunction = (e) => {
    e.preventDefault();
    const createdObj = {
      id: "",
      resId: "",
      itemName: iName,
      itemCat: iCat,
      itemDesc: iDesc,
      itemImage: iUrl,
      itemPrice: iPrice,
      itemDiscount: iDiscount,
      itemGender: iGender,
    };
    console.log(createdObj);
    addNewItem(createdObj);
  };
  return (
    <div className="popUpBg">
      <form className="itemForm" action={(e) => e.preventDefault()}>
        <h4>RestauName</h4>
        <div className="input">
          <label htmlFor="itm-name-fld">Item Name</label>
          <input
            type="text"
            name="itm-name-fld"
            id="itm-name-fld"
            required
            onChange={(e) => setIName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="itm-category-fld">Item Category</label>
          <select
            type=""
            name="itm-category-fld"
            id="itm-category-fld"
            onChange={(e) => setICat(e.target.value)}
          >
            {/* <option defaultValue={"--Select--"} disabled>- - Select - -</option> */}
            <option value="Biriyani">Biriyani</option>
            <option value="-Breakfast">Breakfast</option>
            <option value="Beverages">Beverages</option>
            <option value="Pizza">Pizza</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="itm-Img-URL-fld">Item Img-URL</label>
          <input
            type="text"
            name="itm-Img-URL-fld"
            id="itm-Img-URL-fld"
            onChange={(e) => setIUrl(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="itm-name-fld">Item Description</label>
          <textarea
            rows={3}
            name="itm-description-fld"
            id="itm-description-fld"
            onChange={(e) => setIDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="gender">
          <input
            type="radio"
            name="itm-gender-fld"
            id="itm-gender-fld"
            value="v"
            onChange={(e) => setIGender(e.target.value)}
          />
          <label htmlFor="itm-gender-fld">Veg</label>
          <input
            type="radio"
            name="itm-gender-fld"
            id="itm-gender-fld"
            value="nv"
            onChange={(e) => setIGender(e.target.value)}
          />
          <label htmlFor="itm-gender-fld">Non-veg</label>
        </div>

        <div className="input">
          <label htmlFor="itm-price-fld">Item Price</label>
          <input
            type="number"
            name="itm-price-fld"
            id="itm-price-fld"
            onChange={(e) => setIPrice(e.target.value)}
          />
          <label htmlFor="itm-discount-fld">Discount</label>
          <input
            type="number"
            name="itm-discount-fld"
            id="itm-discount-fld"
            onChange={(e) => setIDiscount(e.target.value)}
          />
        </div>
        <div className="input">
          <div htmlFor="itm-final-price">
            Final Price {iPrice - (iPrice * iDiscount) / 100}/-
          </div>
        </div>
        <center>
          <button type="submit" onClick={(e) => callFunction(e)}>
            Add Item
          </button>
        </center>
        <center>
          <button type="reset" onClick={(e) => cancel(e)}>
            Cancel
          </button>
        </center>
      </form>
    </div>
  );
};

export default ItemForm;
