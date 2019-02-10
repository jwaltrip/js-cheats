import React, { Component } from 'react';
// import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import bootstrap css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import example post components
import PostContainer from './components/Post/PostContainer';
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import StringPage from "./components/StringPage/StringPage";
import NumberPage from "./components/NumberPage/NumberPage";
import ArrayPage from "./components/ArrayPage/ArrayPage";
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <TopNavbar />
          <Container>
            <Route exact path="/" component={ Home2 } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/posts" component={ PostContainer } />
            <Route exact path="/strings" component={ StringPage } />
            <Route exact path="/arrays" component={ ArrayPage } />
            <Route exact path="/numbers" component={ NumberPage } />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
