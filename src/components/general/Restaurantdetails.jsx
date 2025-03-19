import React, { useState } from 'react';
import "../general/css/Restaurantdetails.css";

const Restaurantdetails = () => {
  

  const[check,setcheck] = useState(false);
  const handleoncheck = (event) =>{
        setcheck(event.target.checked)
        console.log(event.target.checked);
  }
  const [restaurant,setrestaurant] = useState({
        "_id": "r1",
        "uId": "u7",
        "resAdd": "mountroad, ch-02",
        "resImage": "https://thefederal.com/file/2022/03/Dindigul-Thalappakatti.jpg",
        "resMoto" : "Our Secret Recipes Served with Love",
        "resName": "Thalapakatti"
      
  });

    return (
    <div className='resdmain'>
      
      <div className='resdmain2'>
      <div className='first'> <h4>{restaurant.resName} details</h4></div>
    <div className='middle'>

      <img src={restaurant.resImage}></img>
      <label>
        <input type='checkbox' checked = {check} onChange={handleoncheck}>
        </input>
        promote
      </label>
      </div>
      <div className='details'>
        <p>NAME : {restaurant.resName}</p>
        <p>Restaurant Motto : {restaurant.resMoto}</p>
        <p>Restaurant Address : {restaurant.resAdd}</p>
        <button onClick={() => console.log("this restaurant is deleted")}>delete</button>
      </div>

     
      </div>
    </div>
  )
}

export default Restaurantdetails
