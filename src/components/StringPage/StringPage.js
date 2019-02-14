import React, { Component } from 'react';
import './StringPage.css';
import SideNavbar from "../SideNavbar/SideNavbar";
// import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
// import sub-pages
import StrOverview from './sub-pages/StrOverview';
import StrSubstr from './sub-pages/StrSubstr';
import StrSplit from './sub-pages/StrSplit';

// list of sidebar links
// includes url path, name of link, and component to be rendered
const routes = [
  {
    path: "/strings/overview",
    name: "Strings Overview",
    exact: true,
    comp: StrOverview
  },
  {
    path: "/strings/substr",
    name: "substr()",
    exact: true,
    comp: StrSubstr
  },
  {
    path: "/strings/split",
    name: "split()",
    exact: true,
    comp: StrSplit
  }
];

class StringPage extends Component {
  render() {
    return (
      <div className='page-container'>
        <SideNavbar routes={routes} />

        <Container>

          {routes.map((route, idx) => (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              component={route.comp}
            />
          ))}

        </Container>
      </div>
    );
  }
}

export default StringPage;