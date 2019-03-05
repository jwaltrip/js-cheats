import React, { Component } from 'react';
import "./NumberPage.css";
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import SideNavbar from '../SideNavbar/SideNavbar';
// import sub-pages
import NumOverview from './sub-pages/NumOverview';
import NumParseInt from './sub-pages/NumParseInt';
import NumIsInteger from './sub-pages/NumIsInteger';
import NumParseFloat from './sub-pages/NumParseFloat';
import NumNumber from './sub-pages/NumNumber';
import NumToString from './sub-pages/NumToString';
import NumToExponentail from './sub-pages/NumToExpoenential';
import NumToFixed from './sub-pages/NumToFixed';
import NumToPrecision from './sub-pages/NumToPrecision';


// array of sidebar links to be passed as a prop to SideNavbar component
// includes url path, name of link, and component to be rendered
const routes = [
  {
    path: "/numbers/overview",
    name: "Numbers Overview",
    exact: true,
    comp: NumOverview
  },
  {
    path: "/numbers/number",
    name: "Number()",
    exact: true,
    comp: NumNumber
  },
  {
    path: "/numbers/parseint",
    name: "parseInt()",
    exact: true,
    comp: NumParseInt
  },
  {
    path: "/numbers/parseFloat",
    name: "parseFloat()",
    exact: true,
    comp: NumParseFloat
  },
  {
    path: "/numbers/isinteger",
    name: "isInteger()",
    exact: true,
    comp: NumIsInteger
  },
  {
    path: "/numbers/toString",
    name: "toString()",
    exact: true,
    comp: NumToString
  },
  {
    path: "/numbers/toExpoenentail",
    name: "toExpoenentail()",
    exact: true,
    comp: NumToExponentail
  },
  {
    path: "/numbers/toFixed",
    name: "toFixed()",
    exact: true,
    comp: NumToFixed
  },
  {
    path: "/numbers/toPrecision",
    name: "toPrecision()",
    exact: true,
    comp: NumToPrecision
  },
];

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