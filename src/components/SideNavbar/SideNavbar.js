import React from 'react';
import './SideNavbar.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

class SideNavbar extends React.Component {
  render() {
    const { routes } = this.props;

    return (
      <div className='sidenav-container'>
        <Nav className='side-navbar' vertical>

          { routes && routes.map((route, idx) => (
            <NavItem key={`left-sidebar-${idx}`}>
              <NavLink tag={Link} to={route.path} activeClassName='active'>{route.name}</NavLink>
            </NavItem>
          ))}

        </Nav>
      </div>
    );
  }
}

export default SideNavbar;