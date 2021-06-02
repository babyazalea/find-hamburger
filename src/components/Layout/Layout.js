import React from "react";

import Navigation from "../UI/Navigation/Navigation";

const Layout = (props) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
