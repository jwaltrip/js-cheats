import React, { Component } from 'react';
import "./TopNavbar.css";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class TopNavbar extends Component {

  state = { isOpen: false };

  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const leftNavLinksAuth = [
      <NavItem key='topnav-left-2'>
        <NavLink tag={Link} to="/strings/overview">Strings</NavLink>
      </NavItem>,
      <NavItem key='topnav-left-3'>
        <NavLink tag={Link} to="/numbers/overview">Numbers</NavLink>
      </NavItem>,
      <NavItem key='topnav-left-4'>
        <NavLink tag={Link} to="/arrays/overview">Arrays</NavLink>
      </NavItem>,
      <span key='topnav-sep' style={{ margin: 'auto 5px auto 5px', color: 'rgba(255,255,255,.3)' }}>|</span>,
      <NavItem key='topnav-left-1'>
        <NavLink tag={Link} to="/blog">Blog</NavLink>
      </NavItem>,
    ];
  
    const leftNavLinksNoAuth = [
      <NavItem key='topnav-left-2'>
        <NavLink tag={Link} to="/strings/overview">Strings</NavLink>
      </NavItem>,
      <NavItem key='topnav-left-3'>
        <NavLink tag={Link} to="/numbers/overview">Numbers</NavLink>
      </NavItem>,
      <NavItem key='topnav-left-4'>
        <NavLink tag={Link} to="/arrays/overview">Arrays</NavLink>
      </NavItem>,
    ];

    // this is utilizing fragments
    const authLinks = [
      <form key='auth-1' className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit">Search</button>
      </form>,
      <ul key='auth-2' className="navbar-nav">
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className="rounded-circle"
              style={{ width: 25, marginRight: 5 }}
            />
            {user.name}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={ this.onLogout }>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </ul>
    ];

    const guestLinks = [
      <form key='noauth-1' className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit">Search</button>
      </form>,
      <ul key='noauth-2' className="navbar-nav">
        <NavItem>
          <NavLink tag={Link} to="/register">Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/login">Login</NavLink>
        </NavItem>
      </ul>
    ];

    return (
      <Navbar color='dark' dark expand='lg' fixed="top" className="mb-4">
        <NavbarBrand tag={Link} to="/">JS Cheats</NavbarBrand>
        <Nav className="mr-auto left-navbar-links" navbar>
          {isAuthenticated ? leftNavLinksAuth: leftNavLinksNoAuth}
        </Nav>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          {/*<Nav className="mr-auto" navbar>*/}
            {/*{isAuthenticated ? leftNavLinks: null}*/}
          {/*</Nav>*/}
          <Nav className="ml-auto" navbar>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

TopNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(TopNavbar));