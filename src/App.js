import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UnderConstruction from "./components/UnderContruction";
import ConfirmedBooking from "./components/ConfirmedBooking";
// import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/menu" element={<UnderConstruction />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route
          path="/reservations/confirmation"
          element={<ConfirmedBooking />}
        />
        <Route path="/order" element={<UnderConstruction />} />
        <Route path="/login" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
