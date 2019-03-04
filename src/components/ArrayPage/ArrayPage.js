import React, { Component } from "react";
import "./ArrayPage.css";
// import PropTypes from 'prop-types';
import { Container } from "reactstrap";
import { Route } from "react-router-dom";
import SideNavbar from "../SideNavbar/SideNavbar";
// import sub-pages

import ArrOverview from "./sub-pages/ArrOverview";
import ArrForEach from "./sub-pages/ArrForEach";
import ArrMap from "./sub-pages/ArrMap";
import ArrFilter from "./sub-pages/ArrFilter";
import ArrPush from "./sub-pages/ArrPush";
import ArrJoin from "./sub-pages/ArrJoin";
import ArrConcat from "./sub-pages/ArrConcat";
import ArrIncludes from "./sub-pages/ArrIncludes";
import ArrLength from "./sub-pages/ArrLength";
import ArrShift from "./sub-pages/ArrShift";
import ArrIndexOf from "./sub-pages/ArrIndexOf";
import ArrReverse from "./sub-pages/ArrReverse";
import ArrCopyWithin from "./sub-pages/ArrCopyWithin";
import ArrString from './sub-pages/ArrString';
import ArrSort from './sub-pages/ArrSort';
import ArrSplice from './sub-pages/ArrSplice';
import ArrSlice from './sub-pages/ArrSlice';
import ArrLastIndex from './sub-pages/ArrLastIndex';
import ArrUnshift from './sub-pages/ArrUnshift';
import ArrPop from './sub-pages/ArrPop';
import ArrValue from './sub-pages/ArrValue';


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
  },
  {
    path: "/arrays/push",
    name: "push()",
    exact: true,
    comp: ArrPush
  },
  {
    path: "/arrays/join",
    name: "join()",
    exact: true,
    comp: ArrJoin
  },
  {
    path: "/arrays/concat",
    name: "concat()",
    exact: true,
    comp: ArrConcat
  },
  {
    path: "/arrays/includes",
    name: "includes()",
    exact: true,
    comp: ArrIncludes
  },
  {
    path: "/arrays/length",
    name: "length()",
    exact: true,
    comp: ArrLength
  },
  {
    path: "/arrays/shift",
    name: "shift()",
    exact: true,
    comp: ArrShift
  },
  {
    path: "/arrays/index",
    name: "indexOf()",
    exact: true,
    comp: ArrIndexOf
  },
  {
    path: "/arrays/reverse",
    name: "reverse()",
    exact: true,
    comp: ArrReverse
  },
  {
    path: "/arrays/copyWithin",
    name: "copyWithin()",
    exact: true,
    comp: ArrCopyWithin
  },
  {
    path: "/arrays/toString",
    name: "toString()",
    exact: true,
    comp: ArrString
  },
  {
    path: "/arrays/sort",
    name: "sort()",
    exact: true,
    comp: ArrSort
  },
  {
    path: "/arrays/splice",
    name: "splice()",
    exact: true,
    comp: ArrSplice
  },
  {
    path: "/arrays/slice",
    name: "slice()",
    exact: true,
    comp: ArrSlice
  },
  {
    path: "/arrays/lastIndexOf",
    name: "lastIndexOf()",
    exact: true,
    comp: ArrLastIndex
  },
  {
    path: "/arrays/unshift",
    name: "unshift()",
    exact: true,
    comp: ArrUnshift
  },
  {
    path: "/arrays/pop",
    name: "pop()",
    exact: true,
    comp: ArrPop
  },
];

class ArrayPage extends Component {
  render() {
    return (
      <div className="page-container">
        <SideNavbar routes={routes} />{" "}
        <div className="subpage-container">
          {" "}
          {routes.map((route, idx) => (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              component={route.comp}
            />
          ))}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default ArrayPage;
