import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import SideNav from './Components/layout/SideNav'
import QuestionList from './Components/question/QuestionList'
import QuestionDetails from './Components/question/QuestionDetails';
import CreateQuestionForm from './Components/question/CreateQuestionForm'
import searchError from './Components/question/searchError'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <div className="app-body">
            <SideNav />
            <Switch>
              <Route exact path="/" component={QuestionList} />
              <Route exact path="/question/:id/details" component={QuestionDetails}/>
              <Route exact path="/question/add" component={CreateQuestionForm} />
              <Route exact path="/searchError" component={searchError} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
