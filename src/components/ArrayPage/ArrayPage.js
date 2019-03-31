import React, { Component } from "react";
import "./ArrayPage.css";
import "../StringPage/sub-pages/sub-pages.css";
import { Route } from "react-router-dom";
import SideNavbar from "../SideNavbar/SideNavbar";
// import array routes from external file to keep things clean
import routes from './array-routes';

class ArrayPage extends Component {
  render() {
    return (
      <div className="page-container">
        <SideNavbar routes={routes} />
        
        <div className="subpage-container">
          {routes.map((route, idx) => (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              component={route.comp}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ArrayPage;
