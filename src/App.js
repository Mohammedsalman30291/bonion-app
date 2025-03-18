import './App.css';
import Login from "./components/Logincom/Login.jsx";
import Signup from "./components/Logincom/Signup.jsx";
import Home from "./components/user/Home.jsx";
import Items from "./components/user/Items.jsx";
import Homeres from './components/restaurant/Homeres.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
      <Route path="/homeres" element={<Homeres />} />
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
