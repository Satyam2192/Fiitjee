import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Result from "./pages/Results";
import OurMission from "./pages/OurMission";
import WhyIPEC from "./pages/WhyIPEC";
import Registration from "./components/Registration";
// import Registration from "./components/Registration";

const App = () => {
  

  return (
   
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Result />} />
          <Route path="/mission" element={<OurMission />} />
          <Route path="/why" element={<WhyIPEC />} />
          <Route path="/registration" element={<Registration />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
   
  );
};


// <Route path="/registration" element={<Registration />} />

export default App;