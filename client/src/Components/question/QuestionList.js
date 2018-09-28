import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Question from './Question'

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        fetch("https://localhost:5001/api/posts/questions")
        .then(resp => resp.json())
        .then(questionData => {
            this.setState({
                questions: questionData.results
            })
        })
    }
    
    render() {
        return (
            <div>
                <div className="d-flex justify-content-around mb-4">
                    <h2>All Questions</h2>
                    <Link to="/question/add" className="btn btn-primary btn-lg align-self-center">Ask a Question</Link>
                </div>
                <div className="row">
                    {this.state.questions.map(question => {
                        return (
                            <div key={question.id} className="col-md-8 mx-auto">
                                <Question question={question} />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default QuestionList;
