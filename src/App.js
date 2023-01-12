import classes from "./App.module.css";
import Footer from "./layout/Footer";
import MainNavigation from "./layout/MainNavigation";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
