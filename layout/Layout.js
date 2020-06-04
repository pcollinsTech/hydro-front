import React, { Fragment, useState, useEffect } from "react";
import MainNav from "./MainNav";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNav />
      {/* <MobileMenu /> */}

      <div>{children}</div>

      <Footer />
    </Fragment>
  );
};

export default Layout;
