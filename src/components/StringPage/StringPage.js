import React, { Component } from 'react';
import './StringPage.css';
import "./sub-pages/sub-pages.css";
import { Route } from 'react-router-dom';
import Responsive from 'react-responsive';
import SideNavbar from "../SideNavbar/SideNavbar";
import DropdownNavbar from "../DropdownNavbar/DropdownNavbar";
import StringSubPage from "./StringSubPage";
// import routes from external file to keep things clean
import routes from "./string-routes";

// setup react-responsive helper functions
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class StringPage extends Component {
  render() {
    const { match } = this.props;
    // console.log(`match.path: ${match.path}`);
    // console.log(`match.urk:  ${match.url}`);
    
    return (
      <>
        <Default>
          <div className='page-container'>
            <SideNavbar routes={routes} />
    
            <div className='subpage-container'>
              
              <Route path={`${match.path}/:subTopic`} component={StringSubPage} />
    
            </div>
          </div>
        </Default>
        
        <Mobile>
          <div className='mobile-page-container'>
            <DropdownNavbar />
            <hr />
    
            <div className='mobile-subpage-container'>
  
              <Route path={`${match.path}/:subTopic`} component={StringSubPage} />
      
              {/*routes.map((route, idx) => (
                <Route
                  key={idx}
                  exact={route.exact}
                  path={route.path}
                  component={route.comp}
                />
              ))*/}
    
            </div>
          </div>
        </Mobile>
      </>
    );
  }
}

export default StringPage;