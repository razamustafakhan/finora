import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
