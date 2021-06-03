import React from "react";

import Navigation from "../UI/Navigation/Navigation";

const Layout = (props) => {
  return (
    <div className="find-hamburger__layout">
      <header>
        <Navigation />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
