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
import arrayData from "../ArrayPage/array-routes"
import stringData from "../StringPage/string-routes"
import numberData from "../NumberPage/number-routes"
import ReactAutocomplete from "react-autocomplete"

// top navbar should organize the pages available 

class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      value: "",
      items: [],
      currentItem: null
    }
  }
  
  // create the search list when component is rendered
  componentDidMount() {
    const items = this.createSearchList();
    this.setState({ items });
  }
  
  // this function combines all the subpage route json data
  // and deletes the component key since we dont need it and
  // it increases performance not to have the components in the search list
  createSearchList = () => {
    // combines the data for: arrays, strings, and numbers using spread operator
    const completeList = [...stringData, ...arrayData, ...numberData];
    // filter the list, remove the "comp" key, add id
    const filteredList = completeList.map((item, idx) => {
      // delete the component attached to the current object
      delete item.comp;
      // add an id field
      item.id = idx;
      return item;
    });
    // console.log(filteredList);
    return filteredList;
  };
  
  dropdownItemRender = (item, highlighted) => {
    // define styles for each catergory title
    // and make sure that the title's always display in the list
    let titleStyle = {};
    if (item.name.endsWith("Overview")) {
      if (highlighted) {
        titleStyle.backgroundColor = "#888";
      } else {
        titleStyle.backgroundColor = "#686868";
      }
      
      titleStyle.color = "white";
      titleStyle.fontWeight = "bold";
    }
    
    // dropdown item style
    const dropdownStyle = {
      padding: "5px 5px 5px 15px",
      fontSize: "16px"
    }
    
    return <div
      key={item.id}
      style={{ backgroundColor: highlighted ? '#ddd' : '#eee', ...dropdownStyle, ...titleStyle }}
    >
      {item.name}
    </div>;
  }
  
  shouldItemRender = (item, value) => {
    // console.log(`item: ${JSON.stringify(item, null, 4)}`);
    // console.log(`value: ${value}`);
    return item.searchValue.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.searchValue.toLowerCase().endsWith("overview");
  }
  
  isItemSelectable = (item) => !item.name.endsWith("Overview");
  
  handleOnSubmit = (e) => {
    e.preventDefault();
    // test to see if searchValue is a correct full search term
    if (this.state.currentItem !== null) {
      this.props.history.push(this.state.currentItem.path);
    }
  }

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
        <NavLink tag={Link} to="/strings/overview" style={{ paddingRight: 7 }}>Strings</NavLink>
      </NavItem>,
      <NavItem key='topnav-left-3'>
        <NavLink tag={Link} to="/arrays/overview" style={{ paddingRight: 7 }}>Arrays</NavLink>
      </NavItem>,
      <NavItem key='topnav-left-4'>
        <NavLink tag={Link} to="/numbers/overview" style={{ paddingRight: 7 }}>Numbers</NavLink>
      </NavItem>,
      <span key='topnav-sep' style={{ margin: 'auto 5px auto 5px', color: 'rgba(255,255,255,.3)' }}>|</span>,
      <NavItem key='topnav-left-1'>
        <NavLink tag={Link} to="/blog">Blog</NavLink>
      </NavItem>
    ];
  
    const leftNavLinksNoAuth = [
      <NavItem key='topnav-left-2'>
        <NavLink tag={Link} to="/strings/overview" style={{ paddingRight: 7 }}>Strings</NavLink>
      </NavItem>,
      <NavItem key='topnav-left-3'>
        <NavLink tag={Link} to="/arrays/overview" style={{ paddingRight: 7 }}>Arrays</NavLink>
      </NavItem>,
      <NavItem key='topnav-left-4'>
        <NavLink tag={Link} to="/numbers/overview" style={{ paddingRight: 7 }}>Numbers</NavLink>
      </NavItem>
    ];
    
    // autocomplete dropdown form
    const navForm = (
      <form key="topnav-form" className="form-inline my-2 my-lg-0" onSubmit={this.handleOnSubmit}>
        <ReactAutocomplete
          ref={el => this.input = el}
          items={this.state.items}
          shouldItemRender={this.shouldItemRender}
          isItemSelectable={this.isItemSelectable}
          getItemValue={item => item.name}
          renderItem={this.dropdownItemRender}
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value, currentItem: null })}
          onSelect={(value, item) => this.setState({ value, currentItem: item })}
          inputProps={{
            className: "form-control mr-2",
            placeholder: "Search..."
          }}
        />
        <button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit" onClick={this.handleOnSubmit}>Search</button>
      </form>
    );

    // this is utilizing fragments
    const authLinks = [
      navForm,
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
      navForm,
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