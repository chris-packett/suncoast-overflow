import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import QuestionList from './Components/question/QuestionList'
import QuestionDetails from './Components/question/QuestionDetails';
import CreateQuestionForm from './Components/question/CreateQuestionForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={QuestionList} />
            <Route exact path="/question/:id/details" component={QuestionDetails}/>
            <Route exact path="/question/add" component={CreateQuestionForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
