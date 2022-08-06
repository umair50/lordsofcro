import "./App.css";
import Home from "./Pages/Home";
import Header from "../src/Components/Header";
import Footer from "./Components/Footer/Index";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
