import React, { Fragment, useState, useEffect } from "react";
import MainNav from "./MainNav";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* Come back this... ( media queries in layout/layout.scss )*/}
      <div className="desk-nav">
        <MainNav />
        {children}
        <Footer />
      </div>

      <div className="mob-nav">
        <MobileMenu />
        {children}
        <MobileFooter />
      </div>
    </Fragment>
  );
};

export default Layout;
