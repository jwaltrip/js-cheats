import React, { Component } from 'react';
import "./ArrayPage.css";
// import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import SideNavbar from "../SideNavbar/SideNavbar";
// import sub-pages
import ArrOverview from './sub-pages/ArrOverview';
import ArrForEach from './sub-pages/ArrForEach';
import ArrMap from './sub-pages/ArrMap';
import ArrFilter from './sub-pages/ArrFilter';

// array of sidebar links to be passed as a prop to SideNavbar component
// includes url path, name of link, and component to be rendered
const routes = [
  {
    path: "/arrays/overview",
    name: "Arrays Overview",
    exact: true,
    comp: ArrOverview
  },
  {
    path: "/arrays/foreach",
    name: "forEach()",
    exact: true,
    comp: ArrForEach
  },
  {
    path: "/arrays/map",
    name: "map()",
    exact: true,
    comp: ArrMap
  },
  {
    path: "/arrays/filter",
    name: "filter()",
    exact: true,
    comp: ArrFilter
  }
];

class ArrayPage extends Component {
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

export default ArrayPage;