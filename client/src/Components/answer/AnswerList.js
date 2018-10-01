import React, { Component } from 'react';
import Answer from './Answer'

class AnswerList extends Component {
    render() {
        return (
            <div>
                <h5><span>{this.props.answers.length}</span> Answers</h5>
                <hr className="w-80" />
                {this.props.answers.map(answer => {
                    return (
                        <Answer key={answer.id} answer={answer} questionId={this.props.questionId} />
                    )
                })}
            </div>
        );
    }
}

export default AnswerList;
