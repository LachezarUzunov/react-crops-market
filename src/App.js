import "./App.css";
import Footer from "./layout/Footer";
import MainNavigation from "./layout/MainNavigation";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
