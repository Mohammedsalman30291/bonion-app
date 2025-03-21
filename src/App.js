import "./App.css";

// import Login from "./components/Logincom/Login.jsx";
// import Home from "./components/user/Home.jsx";
// import Items from "./components/user/Items.jsx"; 
// import Profile from "./components/user/Profile.jsx";
import Items from "./components/restaurant/Items.jsx"
// import OrderDetails from "./components/user/OrderDetails.jsx";
import Footer from "./components/general/Footer.jsx";
function App() {
  return (
    <div>
      {/* <Home/> */}
      <Items/>
      {/* <Profile/>  */}
      <Footer/> 
    </div>
  );
}

export default App;
