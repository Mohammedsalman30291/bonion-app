import React, { useState } from "react";
import RestaurantList from "../general/RestaurantList";
import "./css/Home.css";
import testImg from "../Assets/test.jpg";
const Home = () => {
  const [categories, setCategories] = useState([
    "Biriyani",
    "Pizza",
    "Breakfast",
    "Beverages",
    "Starters"
  ]);
  

  return (
    <div className="main">
      
      <div className="categories">
        <h2>
          Catgories
          <hr />
        </h2>
        <div className="categoriesBody">
          {categories.map((element) => (
            <div key={element} className="category"><img src={testImg}/> <p>{element}</p></div>
          ))}
        </div>
      </div>
      <RestaurantList/>
    </div>
  );
};

export default Home;
