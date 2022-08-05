import "./App.css";
import "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
export default App;
