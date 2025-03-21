import React, { useState } from "react";
import testImg from "../Assets/test.jpg";
import "./css/Profile.css";
import OrderDetails from "./OrderDetails";
import OrdersList from "../general/OrdersList";

const Profile = () => {
  const [user, setUser] = useState({
    id: "u3",
    uName: "Abdullah",
    uEmail: "abdullahkhan7@gmail.com",
    uPass: "abdullahkhan7",
    uType: "customer",
    Approval: true,
  });


  return (
    <>
      {/* <OrderDetails/> */}
      <div className="container">
        <div className="profile">
          <h2>My Profile</h2>
          <hr />
          <div className="profilecontent">
            <h3>{user.uName}</h3>
            <p>{user.uEmail}</p>
            <button className="logoutbutton">Logout</button>
          </div>
        </div>
        <OrdersList />
      </div>
    </>
  );
};

export default Profile;
