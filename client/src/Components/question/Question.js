import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
                        <Link to={`/question/${question.id}/details`} className="btn btn-primary btn-sm float-right">
                            View Answers
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;
