import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import CreateAnswerForm from './CreateAnswerForm';

class AnswerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionId: undefined,
            answers: []
        }
    }

    componentDidMount() {
        this.setState({
            questionId: this.props.questionId,
            answers: this.props.answers
        })
    }
    
    render() {
        return (
            <div>
                <h5><span>{this.state.answers.length}</span> Answers</h5>
                <hr className="w-80" />
                {this.state.answers.map(answer => {
                    return (
                        <div>
                            <div className="d-flex p-4">
                                <div className="mr-4 d-flex flex-column align-items-center">
                                    <button className="btn btn-outline-secondary btn-sm">^</button>
                                    <strong>{answer.upvoteCount - answer.downvoteCount}</strong>
                                    <button className="btn btn-outline-secondary btn-sm">v</button>
                                </div>
                                <div>
                                    <p>
                                        {answer.content}
                                    </p>
                                    <Link to="/">
                                        <u className="text-secondary">edit</u>
                                    </Link>
                                </div>
                            </div>
                            <hr className="w-80" />
                        </div>
                    )
                })}
                <CreateAnswerForm questionId={this.state.questionId} />
            </div>
        );
    }
}

export default AnswerList;
