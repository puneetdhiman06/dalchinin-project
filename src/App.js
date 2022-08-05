import "./App.css";
import "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import CheckoutModal from "./shared/CheckoutModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<CheckoutModal />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
