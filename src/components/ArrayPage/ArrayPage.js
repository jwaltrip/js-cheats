import React, { Component } from "react";
import "./ArrayPage.css";
import "../StringPage/sub-pages/sub-pages.css";
import { Route } from "react-router-dom";
import Responsive from 'react-responsive';
import SideNavbar from "../SideNavbar/SideNavbar";
// import array routes from external file to keep things clean
import routes from './array-routes';
import DropdownNavbar from "../DropdownNavbar/DropdownNavbar";
import ArraySubPage from "./ArraySubPage";

// setup react-responsive helper functions
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class ArrayPage extends Component {
  render() {
    const { match } = this.props;
    // console.log(`match.path: ${match.path}`);
    // console.log(`match.url:  ${match.url}`);
    
    return (
      <>
        <Default>
          <div className="page-container">
            <SideNavbar routes={routes} />
            
            <div className="subpage-container">
  
              <Route path={`${match.path}/:subTopic`} component={ArraySubPage} />
              
            </div>
          </div>
        </Default>
        
        <Mobile>
          <div className="mobile-page-container">
            <DropdownNavbar />
            <hr />
    
            <div className="mobile-subpage-container">
  
              <Route path={`${match.path}/:subTopic`} component={ArraySubPage} />
              
            </div>
          </div>
        </Mobile>
      </>
    );
  }
}

export default ArrayPage;
