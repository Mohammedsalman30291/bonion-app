import React, { useState } from 'react'
import testImg from "../Assets/test.jpg"
import "./OrdersList.css"

const OrdersList = () => {
    
    const [orders, setOrders] = useState(
      [
        {
          "_id": "o1",
          "uId": "u1",
          "uName": "Mohamed Aadhil",
          "uEmail": "aadhildsai@gmail.com",
          "uMobile": "1212121212",
          "uAdd": "vettuvankeni",
          "uPin": "600115",
          "payMeth": "cod",
          "itemId": "i6",
          "itemName": "Mini Tiffin",
          "itemPrice": 160,
          "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
          "itemCat": "Breakfast",
          "itemDiscount": 2,
          "itemDescription": "Tiffin which is mini to fill full mini stomach",
          "itemQty": 1,
          "resId": "r3",
          "resName": "A2B",
          "resAdd": "vettuvankeni",
          "oStatus": "delivered",
          "oDate": "2019-10-08T07:42:51.861Z"
        },
        {
          "_id": "o2",
          "uId": "u1",
          "uName": "Mohamed Aadhil",
          "uEmail": "aadhildsai@gmail.com",
          "uMobile": "1212121212",
          "uAdd": "vettuvankeni",
          "uPin": "600115",
          "payMeth": "cod",
          "itemId": "i5",
          "itemName": "Pepsi",
          "itemPrice": 120,
          "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
          "itemCat": "Beverage",
          "itemDiscount": 10,
          "itemDescription": "Good looking drink from rend and blue brand",
          "itemQty": 1,
          "resId": "r2",
          "resName": "Buhari",
          "resAdd": "mountroad",
          "oStatus": "delivered",
          "oDate": "2020-10-08T07:42:51.861Z"
        },
        {
          "_id": "o3",
          "uId": "u3",
          "uName": "Abdullah",
          "uEmail": "abdullahkhan7@gmail.com",
          "uMobile": "2323232323",
          "uAdd": "washermanpet",
          "uPin": "600098",
          "payMeth": "cod",
          "itemId": "i10",
          "itemName": "Coke 200ml",
          "itemPrice": 90,
          "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
          "itemCat": "Beverage",
          "itemDiscount": 8,
          "itemDescription": "A drink Ronaldo said no, but good for your health when you drink after it expires.",
          "itemQty": 1,
          "resId": "r4",
          "resName": "Dominos",
          "resAdd": "vettuvankeni",
          "oStatus": "delivered",
          "oDate": "2021-10-08T07:42:51.861Z"
        },
        {
          "_id": "o4",
          "uId": "u4",
          "uName": "Jaweeth",
          "uEmail": "jaweethdsai@gmail.com",
          "uMobile": "3434343434",
          "uAdd": "pudhupet",
          "uPin": "600002",
          "payMeth": "cod",
          "itemId": "i1",
          "itemName": "Chicken Biriyani",
          "itemPrice": 270,
          "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
          "itemCat": "Biriyani",
          "itemDiscount": 5,
          "itemDescription": "Delicious white chicken biriyani in dindugal style. Fills your tongue for the day.",
          "itemQty": 2,
          "resId": "r1",
          "resName": "Thalapakatti",
          "resAdd": "mountroad",
          "oStatus": "delivered",
          "oDate": "2022-10-08T07:42:51.861Z"
        },
        {
          "_id": "o5",
          "uId": "u4",
          "uName": "Jaweeth",
          "uEmail": "jaweethdsai@gmail.com",
          "uMobile": "3434343434",
          "uAdd": "pudhupet",
          "uPin": "600002",
          "payMeth": "cod",
          "itemId": "i2",
          "itemName": "Egg Fried Rice",
          "itemPrice": 210,
          "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
          "itemCat": "Fastfood",
          "itemDiscount": 5,
          "itemDescription": "Egg fried rice without spice with added sauce packets absolutely free for you.",
          "itemQty": 1,
          "resId": "r1",
          "resName": "Thalapakatti",
          "resAdd": "mount road",
          "oStatus": "delivered",
          "oDate": "2023-10-08T07:42:51.861Z"
        },
        {
          "_id": "o6",
          "uId": "u5",
          "uName": "Riswan",
          "uEmail": "riswaneee@gmail.com",
          "uMobile": "4545454545",
          "uAdd": "korukkupet",
          "uPin": "600009",
          "payMeth": "cod",
          "itemId": "i9",
          "itemName": "Large cheese pizza",
          "itemPrice": 1000,
          "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
          "itemCat": "Pizza",
          "itemDiscount": 25,
          "itemDescription": "Full family size pizza for pizza mads.",
          "itemQty": 1,
          "resId": "r4",
          "resName": "Dominos",
          "resAdd": "vettuvankeni",
          "oStatus": "delivered",
          "oDate": "2024-10-08T07:42:51.861Z"
        },
        {
          "_id": "o7",
          "uId": "u6",
          "uName": "Firas",
          "uEmail": "firascse@gmail.com",
          "uMobile": "5656565656",
          "uAdd": "saidapet",
          "uPin": "600047",
          "payMeth": "cod",
          "itemId": "i8",
          "itemName": "Regular cheese pizza",
          "itemPrice": 420,
          "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
          "itemCat": "Pizza",
          "itemDiscount": 12,
          "itemDescription": "Made from high grade low budget cheese for least taste at costliest budget.",
          "itemQty": 1,
          "resId": "r4",
          "resName": "Dominos",
          "resAdd": "vettuvankeni",
          "oStatus": "delivered",
          "oDate": "2025-10-08T07:42:51.861Z"
        },
        {
          "_id": "o8",
          "uId": "u6",
          "uName": "Firas",
          "uEmail": "firascse@gmail.com",
          "uMobile": "5656565656",
          "uAdd": "saidapet",
          "uPin": "600047",
          "payMeth": "cod",
          "itemId": "i4",
          "itemName": "Grill Full",
          "itemPrice": 350,
          "itemImage": "https://socialbio.in/imageurl/gamer.jpg",
          "itemCat": "Starter",
          "itemDiscount": 6,
          "itemDescription": "Fully cooked grill with evenly spread Arabian style masala.",
          "itemQty": 1,
          "resId": "r2",
          "resName": "Buhari",
          "resAdd": "mount road",
          "oStatus": "delivered",
          "oDate": "2026-10-08T07:42:51.861Z"
        }
      ]
      
    )

  return (
        <div className='orders'>
            <h2>My Orders 
                </h2>
                <hr/>
            {orders.map((order)=>(
              <div className="order" key={order._id}>
                    <img src={testImg}></img>
                    <div className="orderDetails">
                        <h3>{order.itemName} - {order.resName}</h3>
                        {/* <p>{order.oDate}</p> */}
                        <p><em>{order.itemDescription}</em></p>
                        <code>
                    <strike>{order.itemPrice}</strike>
                    &nbsp;{order.itemPrice-(order.itemDiscount/100)*order.itemPrice}/-</code>
                    <p className='orderAddress'>Delivered to: {order.uAdd} - {order.uPin},&nbsp; Ph: {order.uMobile}</p>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default OrdersList
