import React, { Component } from 'react';
import { connect } from "react-redux";

import authUser from "../actions/auth_user";

class App extends Component {
  componentDidMount(){
    this.props.authUser();
  }
  render() {
    console.log(this.props.user);
    return (
      <div className="App">
      Express React Redux Boilerplate
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser.user,
});

export default connect(mapStateToProps, {authUser})(App);
