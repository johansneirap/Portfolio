import React from "react";
import { Contentsection } from "./components/ui/Contentsection";
import { Footer } from "./components/ui/Footer";
import { Leftsidebar } from "./components/ui/Leftsidebar";
import { Navbar } from "./components/ui/Navbar";

export const PortfolioApp = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid" id="section1">
        <div className="row">
          <Leftsidebar />
          <Contentsection />
        </div>
      </div>
      <Footer />
    </>
  );
};
