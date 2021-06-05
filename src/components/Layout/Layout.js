import React from "react";

import Navigation from "../UI/Navigation/Navigation";

const Layout = (props) => {
  return (
    <div className="find-hamburger__layout" id="layout">
      <header>
        <Navigation
          userName={props.userName}
          userId={props.userId}
          photoUrl={props.photoUrl}
          logout={props.logout}
        />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
