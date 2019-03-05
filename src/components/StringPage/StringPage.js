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
import StrValue from './sub-pages/StrValue';
import StrEndsWith from './sub-pages/StrEndsWith';
import StrIndexOf from './sub-pages/StrIndexOf';
import StrParseInt from './sub-pages/StrParseInt';
import StrRepeat from './sub-pages/StrRepeat';
import StrMatch from './sub-pages/StrMatch';
import StrLastIndexOf from './sub-pages/StrLastIndexOf';
import StrIncludes from './sub-pages/StrIncludes';
import StrReplace from './sub-pages/StrReplace';

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
    path: "/strings/includes",
    name: "includes()",
    exact: true,
    comp: StrIncludes
  },
  {
    path: "/strings/indexOf",
    name: "indexOf()",
    exact: true,
    comp: StrIndexOf
  },
  {
    path: "/strings/lastIndexOf",
    name: "lastIndexOf()",
    exact: true,
    comp: StrLastIndexOf
  },
  {
    path: "/strings/match",
    name: "match()",
    exact: true,
    comp: StrMatch
  },
  {
    path: "/strings/parseInt",
    name: "parseInt()",
    exact: true,
    comp: StrParseInt
  },
  {
    path: "/strings/repeat",
    name: "repeat()",
    exact: true,
    comp: StrRepeat
  },
  {
    path: "/strings/replace",
    name: "replace()",
    exact: true,
    comp: StrReplace
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
    path: "/strings/endswith",
    name: "endsWith()",
    exact: true,
    comp: StrEndsWith
  },
  {
    path: "/strings/search",
    name: "search()",
    exact: true,
    comp: StrSearch
  },
  {
    path: "/strings/value",
    name: "valueOf()",
    exact: true,
    comp: StrValue
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