import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import ListEventForm from "../ListEventForm";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-background font-hind min-h-screen ">
      <Navbar />
      <ListEventForm/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
