import React, { useState } from 'react';
import "./css/Items.css";
import testImg from "../Assets/test.jpg";
const Items = () => {

    
    const [allItems, setAllItems] = useState(
        [
            {
              "id": "i1",
              "itemName": "Chicken Biriyani",
              "itemCat": "Biriyani",
              "resId": "r1",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 270,
              "itemGender": "nv",
              "itemDiscount": 5,
              "itemDesc": "Delicious white chicken biriyani in dindugal style. Fills your toungue for the day."
            },
            {
              "id": "i2",
              "itemName": "Egg Fried Rice",
              "itemCat": "Fastfood",
              "resId": "r1",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 210,
              "itemGender": "nv",
              "itemDiscount": 5,
              "itemDesc": "Egg fried rice without spice with added sauce packets absolutely free for you."
            },
            {
              "id": "i3",
              "itemName": "Mutton Biriyani",
              "itemCat": "Biniryani",
              "resId": "r2",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 350,
              "itemGender": "nv",
              "itemDiscount": 7,
              "itemDesc": "Halal brown mutton biriyani chettiyar style"
            },
            {
              "id": "i4",
              "itemName": "Grill Full",
              "itemCat": "Starter",
              "resId": "r2",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 350,
              "itemGender": "nv",
              "itemDiscount": 6,
              "itemDesc": "Fully cooked grill with evenly spread arabian style masala"
            },
            {
              "id": "i5",
              "itemName": "Pepsi",
              "itemCat": "Beverage",
              "resId": "r2",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 120,
              "itemGender": "v",
              "itemDiscount": 10,
              "itemDesc": "Good looking drink from rend and blue brand"
            },
            {
              "id": "i6",
              "itemName": "Mini Tiffin",
              "itemCat": "Breakfast",
              "resId": "r3",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 160,
              "itemGender": "v",
              "itemDiscount": 2,
              "itemDesc": "Tiffin which is mini to fill full mini stomach"
            },
            {
              "id": "i7",
              "itemName": "Prawn fastfood",
              "itemCat": "Fastfood",
              "resId": "r3",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 300,
              "itemGender": "nv",
              "itemDiscount": 4,
              "itemDesc": "Fastly made of boiled live prawn, fried after applying masala, chinese variant."
            },
            {
              "id": "i8",
              "itemName": "Regular cheese pizza",
              "itemCat": "Pizza",
              "resId": "r4",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 420,
              "itemGender": "v",
              "itemDiscount": 12,
              "itemDesc": "Made from high grade low budget cheese for least taste at costliest budget"
            },
            {
              "id": "i9",
              "itemName": "Large cheese pizza",
              "itemCat": "Pizza",
              "resId": "r4",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 1000,
              "itemGender": "v",
              "itemDiscount": 25,
              "itemDesc": "Full family size pizza for pizza mads."
            },
            {
              "id": "i10",
              "itemName": "Coke 200ml",
              "itemCat": "Beverage",
              "resId": "r4",
              "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
              "itemPrice": 90,
              "itemGender": "v",
              "itemDiscount": 8,
              "itemDesc": "A drink ronaldo said no, but good for your health when you drink after it expires."
            }
        ]
    );

  return (
    <div className='main'>
      <div className="sidebar">
        <h2>Filters
        </h2>
        <hr/>
        <h3>Sort by</h3>
        <p><input name="z" type="radio" />Price</p>
        <p><input name="z" type="radio" />Discount</p>
        <p><input name="z" type="radio" />No Sorting</p>
        
        <h3>Category</h3>
        <p><input type="checkbox" />Biriyani</p>
        <p><input type="checkbox" />Beverages</p>
        <p><input type="checkbox" />Pizza</p>
        <p><input type="checkbox" />Breakfast</p>
        <p><input type="checkbox" />Starters</p>
        <h3>Veg or Non-Veg</h3>
        <p><input name="w" type="radio" />Both</p>
        <p><input name ="w" type="radio" />Veg</p>
        <p><input name="w" type="radio" />Non-Veg</p>
        
      </div>
      <div className='items'>
        <h2>Restaurant Rajapalayam
          <hr />
        </h2>
        {allItems.map((item)=>(
          <div className="itemCard" key={item.id}>
                <img src={testImg} alt={item.itemName} />
                <div className="itemDetails">
                  <h4>{item.itemName}</h4>
                  <p>{item.itemDesc}</p>
                </div>
                <div className='handleItem'>
                  <code>
                    <strike>{item.itemPrice}</strike>
                    &nbsp;{item.itemPrice-(item.itemDiscount/100)*item.itemPrice}/-</code>
                  <button>Add to Cart</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Items