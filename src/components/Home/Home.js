import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  const loggedOutContent = <p><Link to="/register">Register</Link> or <Link to="/login">Log in</Link> to see the Posts!</p>;
  const loggedInContent = <p>Have any questions? Check out our <Link to="/posts">Blog!</Link></p>;

  return (
    <div className="container" style={{ width: 700 }}>
      <h1>Javascript Bible</h1>
      <ul> And on the 7th day he said let there be cheats - Genesis 1:27 </ul>

      <hr/>
      {props.auth.isAuthenticated ? loggedInContent : loggedOutContent}
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Home);