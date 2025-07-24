import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import ListEventForm from "../ListEventForm";
import {  useAppSelector } from "@/redux/hooks";
import HamburgerMenu from "../hamburgerMenu";
import EditProfileForm from "../edit-profile-form";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const listEvent = useAppSelector((state) => state.nav.listEvent);

  return (
    <div className="w-full bg-background font-hind min-h-screen ">
      <Navbar />
      <HamburgerMenu/>
      <EditProfileForm/>
      {listEvent && <ListEventForm />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
