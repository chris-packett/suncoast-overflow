import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-body">
                                        <div className="mb-2">
                                            {question.title}
                                        </div>
                                        <div className="d-flex justify-content-between align-items-end">
                                            <div>
                                                asked on <span>09/28/18</span> by <span>{question.createdBy}</span>
                                            </div>
                                            <button className="btn btn-primary btn-sm float-right">View Answers</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default QuestionList;
