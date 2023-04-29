import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div style={{height: "calc(100vh - 88px)"}}>
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
