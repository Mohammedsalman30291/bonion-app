import './App.css';
import Login from "./components/Logincom/Login.jsx";
import Signup from "./components/Logincom/Signup.jsx";
import Home from "./components/user/Home.jsx";
import Items from "./components/user/Items.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/user/Profile.jsx";
import Adminres from './components/admin/Adminres.jsx';
import OrdersList from './components/general/OrdersList.jsx';
import Restaurantdetails from './components/general/Restaurantdetails.jsx';


function App() {
  return (

    <Router>
    <Routes>
      {/* Define routes for each page */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/items" element={<Items />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Adminres" element={<Adminres />} />
      <Route path="/OrdersList" element={<OrdersList />} />
      <Route path="/Restaurantdetails" element={<Restaurantdetails />} />
    </Routes>
  </Router>
    
    // <div >
    //   <Home/>
    //   <Login/>
    //   <Signup/>
    //   <Items />     
    // </div>
  );
}

export default App;
