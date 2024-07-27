import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./component/Nav"; // Ensure the path is correct
import Footer from "./pages/Footer";
import Condition from "./pages/Condition";
import TestForm from "./pages/TestForm";
import ProtectedRoute from "./component/ProtectedRoute"; // Ensure the path is correct

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

        {/* Optionally handle 404 - Not Found */}
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
