import React, { Component } from 'react';
import "./NumberPage.css";
import "../StringPage/sub-pages/sub-pages.css";
import { Route } from 'react-router-dom';
import Responsive from 'react-responsive';
import SideNavbar from '../SideNavbar/SideNavbar';
import DropdownNavbar from "../DropdownNavbar/DropdownNavbar";
// import routes from external file to keep things clean
import routes from "./number-routes";

// setup react-responsive helper functions
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class NumberPage extends Component {
  render() {
    return (
      <>
        <Default>
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
        </Default>
        
        <Mobile>
          <div className='mobile-page-container'>
            <DropdownNavbar />
            <hr />
    
            <div className='mobile-subpage-container'>
      
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

export default NumberPage;