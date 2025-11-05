import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Research from "./components/Research";
import CV from "./components/CV";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 scroll-smooth">
      <Header/>
      <Hero/>
      <Education/>
      <Research/>
      <CV/>
      <Contact/>
      <footer className="text-center py-1">
        ©2022-{new Date().getFullYear()} Usman Javeed. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
