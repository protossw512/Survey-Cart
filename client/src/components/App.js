import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; //give certain components ability to call action creater
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  //time difference between componentWillMount and componentDidMount is almost 0
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <div>
              <Header />
              <Route exact path='/' component={Landing} />
              <Route exact={true} path='/surveys' component={Dashboard} />
              <Route exact path='/surveys/new' component={SurveyNew} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

//react will take current path and check if any routes is contained in current path and display ones that are contained, if current path is '/', then it is also contained in '/surveys'
//inside BrowserRouter you can only have one child
//property exact = {true} is equal to exact

//actions are assigned to App as props
export default connect(null, actions)(App);
