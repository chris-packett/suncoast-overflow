import React, { Component } from 'react';
import { Link } from 'react-router-dom' 

class AnswerList extends Component {  
    render() {
        return (
            <div>
                <h5><span>{this.props.answers.length}</span> Answers</h5>
                <hr className="w-80" />
                {this.props.answers.map(answer => {
                    return (
                        <div key={answer.id}>
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
            </div>
        );
    }
}

export default AnswerList;
