import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;