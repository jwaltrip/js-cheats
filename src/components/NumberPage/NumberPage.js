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
    path: "/numbers/parseint",
    name: "parseInt()",
    exact: true,
    comp: NumParseInt
  },
  {
    path: "/numbers/isinteger",
    name: "isInteger()",
    exact: true,
    comp: NumIsInteger
  }
];

class NumberPage extends Component {
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

export default NumberPage;