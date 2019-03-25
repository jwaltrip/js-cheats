import React, { Component } from 'react';
import './StringPage.css';
import "./sub-pages/sub-pages.css";
import { Route } from 'react-router-dom';
import SideNavbar from "../SideNavbar/SideNavbar";
// import routes from external file to keep things clean
import routes from "./string-routes";

class StringPage extends Component {
  render() {
    return (
      <div className='page-container'>
        <SideNavbar routes={routes} />

        <div className='subpage-container'>

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

export default StringPage;