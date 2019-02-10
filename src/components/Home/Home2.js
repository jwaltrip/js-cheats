import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeCard from '../HomeCard/HomeCard';
import { Container, Row, Col } from 'reactstrap';

const Home2 = (props) => {
  const loggedOutContent = <p><Link to="/register">Register</Link> or <Link to="/login">Log in</Link> to see the Posts!</p>;
  const loggedInContent = <p>Check out the <Link to="/posts">Posts!</Link></p>;

  return (
    <div className="container" style={{ width: 700 }}>
      <h2>Home Page</h2>
      <hr/>
      {props.auth.isAuthenticated ? loggedInContent : loggedOutContent}
      <br />
      <Row>
        <Col>
          <Link to="/strings"><HomeCard title={'Strings'} description={'Become boss at javascript strings'} /></Link>
        </Col>
        <Col>
          <Link to="/arrays"><HomeCard title={'Arrays'} description={'Become boss at javascript arrays'} /></Link>
        </Col>
        <Col>
          <Link to="/numbers"><HomeCard title={'Numbers'} description={'Become boss at javascript numbers'} /></Link>
        </Col>
      </Row>
    </div>
  );
};

Home2.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Home2);