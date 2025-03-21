import React, { useState } from "react";
import "./css/Items.css";
import testImg from "../Assets/test.jpg";
import ItemForm from "./ItemForm";
import ItemsList from "../general/ItemsList";
import SideBar from "./SideBar";

const Items = () => {
  const restaurant = {
    _id: "r1",
    uId: "u7",
    resAdd: "mountroad, ch-02",
    resImage: "https://thefederal.com/file/2022/03/Dindigul-Thalappakatti.jpg",
    resName: "Thalapakatti",
  };
  const [allItems, setAllItems] = useState([
    {
      id: "i1",
      itemName: "Chicken Biriyani",
      itemCat: "Biriyani",
      resId: "r1",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 270,
      itemGender: "nv",
      itemDiscount: 5,
      itemDesc:
        "Delicious white chicken biriyani in dindugal style. Fills your toungue for the day.",
    },
    {
      id: "i2",
      itemName: "Egg Fried Rice",
      itemCat: "Fastfood",
      resId: "r1",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 210,
      itemGender: "nv",
      itemDiscount: 5,
      itemDesc:
        "Egg fried rice without spice with added sauce packets absolutely free for you.",
    },
    {
      id: "i3",
      itemName: "Mutton Biriyani",
      itemCat: "Biniryani",
      resId: "r2",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 350,
      itemGender: "nv",
      itemDiscount: 7,
      itemDesc: "Halal brown mutton biriyani chettiyar style",
    },
    {
      id: "i4",
      itemName: "Grill Full",
      itemCat: "Starter",
      resId: "r2",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 350,
      itemGender: "nv",
      itemDiscount: 6,
      itemDesc: "Fully cooked grill with evenly spread arabian style masala",
    },
    {
      id: "i5",
      itemName: "Pepsi",
      itemCat: "Beverage",
      resId: "r2",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 120,
      itemGender: "v",
      itemDiscount: 10,
      itemDesc: "Good looking drink from rend and blue brand",
    },
    {
      id: "i6",
      itemName: "Mini Tiffin",
      itemCat: "Breakfast",
      resId: "r3",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 160,
      itemGender: "v",
      itemDiscount: 2,
      itemDesc: "Tiffin which is mini to fill full mini stomach",
    },
    {
      id: "i7",
      itemName: "Prawn fastfood",
      itemCat: "Fastfood",
      resId: "r3",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 300,
      itemGender: "nv",
      itemDiscount: 4,
      itemDesc:
        "Fastly made of boiled live prawn, fried after applying masala, chinese variant.",
    },
    {
      id: "i8",
      itemName: "Regular cheese pizza",
      itemCat: "Pizza",
      resId: "r4",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 420,
      itemGender: "v",
      itemDiscount: 12,
      itemDesc:
        "Made from high grade low budget cheese for least taste at costliest budget",
    },
    {
      id: "i9",
      itemName: "Large cheese pizza",
      itemCat: "Pizza",
      resId: "r4",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 1000,
      itemGender: "v",
      itemDiscount: 25,
      itemDesc: "Full family size pizza for pizza mads.",
    },
    {
      id: "i10",
      itemName: "Coke 200ml",
      itemCat: "Beverage",
      resId: "r4",
      itemImage: "https://socialbio.in/imageurl/gamer.jpg",
      itemPrice: 90,
      itemGender: "v",
      itemDiscount: 8,
      itemDesc:
        "A drink ronaldo said no, but good for your health when you drink after it expires.",
    },
  ]);

  // localStorage.setItem("newItems", [...allItems]);
  const [showAddForm, setShowAddForm] = useState();
  // const [newItem, setNewItem] = useState();

  const addNewItem = (item) => {
    // localStorage.setItem("newItems", [...allItems, item]);
    item.id = allItems[allItems.length - 1].id + 1;
    item.resId = restaurant._id;
    // console.log(item);
    setAllItems([...allItems, item]);
    setShowAddForm(null);
  };
  const cancel = () => {
    setShowAddForm(null);
  };

  return (
    <div className="main">
      <SideBar />
      <div className="items">
        <h2>
          Restaurant {restaurant.resName}
          <hr />
          <div className="addNewItem">
            <button
              onClick={() => {
                setShowAddForm(1);
              }}
            >
              Add new Item
            </button>
          </div>
        </h2>
        <ItemsList allItems={allItems} />

        {showAddForm && <ItemForm addNewItem={addNewItem} cancel={cancel} />}
      </div>
    </div>
  );
};

export default Items;
