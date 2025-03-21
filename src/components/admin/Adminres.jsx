import React, { useState } from 'react'
import RestaurantList from '../general/RestaurantList'
import './css/Adminres.css'
import Restaurantdetails from '../general/Restaurantdetails';

const Adminres = () => {

  const [admin,setadmin] = useState({
      id:"A1",
      uName:"Adil",
      uEmail:"adilmohammed@gmail.com",
      uPass:"adil1234",
      uType:"Admin",
  });

  // console.log(selectrest.resName);
  return (
    <div className='adminmain'>
      <Restaurantdetails/>
      <div className='username'><b>Admin ({admin.uName})</b>
      <div><b>Users</b></div>
      <div><b>logout</b></div>
      </div>
      
    <div>
    
      <RestaurantList />
      {/* <div>{selectrest.resName}</div> */}
    </div>
    </div>
  )
}

export default Adminres
