import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen bg-app-d900 text-white">
        <Sidebar />
        <div className="container mx-auto px-10">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
