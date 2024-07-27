import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./component/Nav"; // Ensure the path is correct
import Footer from "./pages/Footer";
import Condition from "./pages/Condition";
import TestForm from "./pages/TestForm";
import ProtectedRoute from "./component/ProtectedRoute"; // Ensure the path is correct
import Resource from "./pages/Resources";
import MentalIssue from "./pages/MentalIssue";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:condition" element={<Condition />} />

        {/* Protect the TestForm route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/test-form/:id" element={<TestForm />} />
        </Route>
        <Route path="/resources" element={<Resource/>}/>
        <Route path="/issue" element={<MentalIssue/>}/>
        <Route path="*" element={<h1>404 Page not found</h1>} />
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
