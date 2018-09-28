import React, { Component } from 'react';
import Navbar from './Components/layout/Navbar'
import QuestionList from './Components/question/QuestionList'
import CreateQuestionForm from './Components/question/CreateQuestionForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={QuestionList} />
            <Route exact path="/question/add" component={CreateQuestionForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
