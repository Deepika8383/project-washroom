import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NearbyWashrooms from "./pages/NearbyWashrooms";
import WashroomDetails from "./pages/WashroomDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nearby" element={<NearbyWashrooms />} />
        <Route path="/washroom/:id" element={<WashroomDetails />} />
      </Routes>
    </Router>
  );
}
