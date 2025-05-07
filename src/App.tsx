import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import CustomPools from "./pages/CustomPools";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/custom-pools" element={<CustomPools />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
