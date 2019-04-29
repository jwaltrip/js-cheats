import React, { Component } from "react";
import "./ArrayPage.css";
import "../StringPage/sub-pages/sub-pages.css";
import { Route } from "react-router-dom";
import Responsive from 'react-responsive';
import SideNavbar from "../SideNavbar/SideNavbar";
// import array routes from external file to keep things clean
import routes from './array-routes';
import DropdownNavbar from "../DropdownNavbar/DropdownNavbar";

// setup react-responsive helper functions
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class ArrayPage extends Component {
  render() {
    return (
      <>
        <Default>
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
        </Default>
        
        <Mobile>
          <div className="mobile-page-container">
            <DropdownNavbar />
            <hr />
    
            <div className="mobile-subpage-container">
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
        </Mobile>
      </>
    );
  }
}

export default ArrayPage;
