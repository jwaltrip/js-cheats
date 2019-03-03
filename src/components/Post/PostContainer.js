import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchPosts, deletePost, createPost } from "../../actions/postActions";

import { Container, Row, Col } from 'reactstrap';

import PostForm from './PostForm';
import PostList from './PostList';

class PostContainer extends Component {
  componentWillMount() {
    // if user is not authenticated, then redirect them to homepage
    if (this.props.auth.isAuthenticated) {
      // this.props.history.push('/');
      // call redux action fetchPosts()
      this.props.fetchPosts();
    }
  }

  componentWillReceiveProps(nextProps) {
    // if user is not authenticated, then redirect them to homepage
    if (!nextProps.auth.isAuthenticated) {
      // this.props.history.push('/');
    }
  }

  render() {
    const blogAuth = (
      <Row>
        <Col xs={6}>
          <PostForm
            createPost={ this.props.createPost }
          />
        </Col>
        <Col xs={6}>
          <PostList
            posts={ this.props.posts }
            deletePost={ this.props.deletePost }
          />
        </Col>
      </Row>
    );
    
    const blogNoAuth = (
      <div>
        <h1>Blog</h1>
        <hr />
        <p>Please <Link to="/register">Register</Link> an account and <Link to="/login">Log in</Link> to see our blog</p>
      </div>
    );
    
    return (
      <Container>
        {this.props.auth.isAuthenticated ? blogAuth : blogNoAuth}
      </Container>
    );
  }
}

PostContainer.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts, deletePost, createPost }
)(withRouter(PostContainer));
