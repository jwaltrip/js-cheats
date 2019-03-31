import React, { Component } from 'react';
import "./NumberPage.css";
import "../StringPage/sub-pages/sub-pages.css";
import { Route } from 'react-router-dom';
import SideNavbar from '../SideNavbar/SideNavbar';
// import routes from external file to keep things clean
import routes from "./number-routes";

class NumberPage extends Component {
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

export default NumberPage;