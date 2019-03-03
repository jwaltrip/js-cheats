import React, { Component } from 'react';
import './StringPage.css';
// import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import SideNavbar from "../SideNavbar/SideNavbar";
// import sub-pages
import StrOverview from './sub-pages/StrOverview';
import StrSubstr from './sub-pages/StrSubstr';
import StrSplit from './sub-pages/StrSplit';
import StrSlice from './sub-pages/StrSlice';
import StrSubString from './sub-pages/StrSubString';
import StrStartsWith from './sub-pages/StrStartsWith';
import StrSearch from './sub-pages/StrSearch';
import StrCharAt from './sub-pages/StrCharAt';
import StrConcat from './sub-pages/StrConcat';

// array of sidebar links to be passed as a prop to SideNavbar component
// includes url path, name of link, and component to be rendered
const routes = [
  {
    path: "/strings/overview",
    name: "Strings Overview",
    exact: true,
    comp: StrOverview
  },
  {
    path: "/strings/charAt",
    name: "charAt()",
    exact: true,
    comp: StrCharAt
  },
  {
    path: "/strings/concat",
    name: "concat()",
    exact: true,
    comp: StrConcat
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
  },
  {
    path: "/strings/slice",
    name: "slice()",
    exact: true,
    comp: StrSlice
  },
  {
    path: "/strings/substring",
    name: "substring()",
    exact: true,
    comp: StrSubString
  },
  {
    path: "/strings/startswith",
    name: "startsWith()",
    exact: true,
    comp: StrStartsWith
  },
  {
    path: "/strings/search",
    name: "search()",
    exact: true,
    comp: StrSearch
  }
];

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