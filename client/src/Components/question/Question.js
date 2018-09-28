import React, { Component } from 'react';
import moment from 'moment'

class Question extends Component {

    getFormattedDate = () => {
        return moment(this.props.question.createdOn).fromNow()
    }

    render() {
        let { question } = this.props
        return (
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="mb-2">
                        {question.title}
                    </div>
                    <div className="d-flex justify-content-between align-items-end">
                        <div>
                            asked <span>{this.getFormattedDate()}</span> by <span>{question.createdBy}</span>
                        </div>
                        <button className="btn btn-primary btn-sm float-right">
                            View Answers
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;
