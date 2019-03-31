import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeCard from '../HomeCard/HomeCard';
import { Row, Col } from 'reactstrap';

const Home = () => {
  const loggedInContent = <p>Have any questions? Check out our <Link to="/blog">Blog!</Link></p>;

  return (
    <div className="container">
      <h1>Javascript Bible</h1>
      <p> And on the 7th day he said let there be cheats - Genesis 1:27 </p>

      <hr/>
      <Row>
        <Col xs={12} md={4}>
          <Link to="/strings/overview">
            <HomeCard title={'Strings'} description={'Become boss at javascript strings'} />
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <Link to="/numbers/overview">
            <HomeCard title={'Numbers'} description={'Become boss at javascript numbers'} />
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <Link to="/arrays/overview">
            <HomeCard title={'Arrays'} description={'Become boss at javascript arrays'} />
          </Link>
        </Col>
      </Row>
      <hr/>
      {loggedInContent}
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