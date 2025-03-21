import React, { useState } from 'react'

const RestaurantsList = () => {

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
    <div className="restaurantBody">
          {
            allRes.map((res)=>(
              <div key={res.id} className="restaurant">
          
                  <img className="resImage" src={res.resImage} alt="Restaurant Image" />
                  <div className="details">
                    <h3>{res.resName}</h3>
                    {/* <hr></hr> */}
                    <p>{res.resAdd}</p>
                  </div>
              </div>
            ))
          }
          
        
        </div>
  )
}

export default RestaurantsList