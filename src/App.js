import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./component/Nav";
import Footer from "./pages/Footer";
import Condition from "./pages/Condition";

function App() {
  return (
 <div>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:condition" element={<Condition />} />
      </Routes>
      <Footer />
 </div>
      
   
  );
}

export default App;
