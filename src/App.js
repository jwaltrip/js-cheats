import React, { Component } from 'react';
// import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import bootstrap css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/highlight.js/styles/default.css';
// import example post components
import PostContainer from './components/Post/PostContainer';
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import StringPage from "./components/StringPage/StringPage";
import NumberPage from "./components/NumberPage/NumberPage";
import ArrayPage from "./components/ArrayPage/ArrayPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <TopNavbar />
          <div style={{ marginTop: 72 }}>
            <Route exact path="/" component={ Home } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/blog" component={ PostContainer } />
            <Route path="/strings" component={ StringPage } />
            <Route path="/arrays" component={ ArrayPage } />
            <Route path="/numbers" component={ NumberPage } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
