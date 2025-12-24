import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Dummy Home component for testing - replace with your real import
const Home = () => (
  <div className="pt-32 text-center text-white h-screen">Home Page Loaded</div>
);

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as you create them */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
