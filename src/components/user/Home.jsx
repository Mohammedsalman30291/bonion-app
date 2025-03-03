import React, { useState } from "react";
import "./css/Home.css";
const Home = () => {
  const [categories, setCategories] = useState([
    "Biriyani",
    "Pizza",
    "Breakfast",
    "Beverages",
  ]);
  const [allRes, setAllRes] = useState([
    {
      id: "r1",
      uId: "u7",
      resAdd: "mountroad, ch-02",
      resImage:
        "https://thefederal.com/file/2022/03/Dindigul-Thalappakatti.jpg",
      resName: "Thalapakatti",
    },
    {
      id: "r2",
      uId: "u8",
      resAdd: "mountroad, ch-02",
      resImage: "https://buhari.in/images/history/first-look-of-buhari.jpg",
      resName: "Buhari",
    },
    {
      id: "r3",
      uId: "u9",
      resAdd: "vettuvankeni, ch-115",
      resImage:
        "https://media-cdn.tripadvisor.com/media/photo-s/0d/b4/36/7e/bengaluru.jpg",
      resName: "A2B",
    },
    {
      id: "r4",
      uId: "u10",
      resAdd: "vettuvankeni, ch-115",
      resImage:
        "https://pantimearabia.com/wp-content/uploads/2022/03/A13I5729-850x560.jpg",
      resName: "Dominos",
    },
  ]);

  return (
    <div className="main">
      <div className="categoriesTitle">
      <h2>
      Catgories
      </h2>
        <div className="categoriesFlex">
          {categories.map((element) => (
            <div key={element} className="category">{element}</div>
          ))}
        </div>
      </div>
      <div className="restaurantsTitle">
        <h2>
        Restaurants
        </h2>
        <div className="restaurantFlex">
          {
            allRes.map((res)=>(
                <div key={res.id} className="card">
          
            <img className="imgcontainer" src={res.resImage} alt="Restaurant Image" />
          
          <div className="details">
            <h3>{res.resName}</h3>
            <hr></hr>
            <p>{res.resAdd}</p>
          </div>
          </div>
            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default Home;
