import React, { Fragment, useState } from "react";
import MainNav from "./MainNav";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
const Layout = ({ children }) => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <Fragment>
      <MainNav setMenuShow={setMenuShow} />
      {menuShow && <MobileMenu setMenuShow={setMenuShow} />}
      <div>{children}</div>

      <Footer />
    </Fragment>
  );
};

export default Layout;
