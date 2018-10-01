import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: {},
            isUpvoted: false,
            isDownvoted: false
        }
    }
    
    handleAnswerVoteClickEvent = (voteType) => {
        let { isUpvoted, isDownvoted } = this.state

        if (isUpvoted === false && isDownvoted === false) {
            this.handleAnswerVoteScore(voteType)
        }
        else if (voteType === "upvote" && isUpvoted === false && isDownvoted === true) {
            this.handleAnswerVoteUndo("downvote")
            this.handleAnswerVoteScore("upvote")
        }
        else if (voteType === "downvote" && isDownvoted === false && isUpvoted === true) {
            this.handleAnswerVoteUndo("upvote")
            this.handleAnswerVoteScore("downvote")
        }
    }
    // api/posts/questions/{question_id}/answers/{answer_id}/{voteType}
    handleAnswerVoteUndo = (voteType) => {
        fetch(`https://localhost:5001/api/posts/questions/${this.props.questionId}/answers/${this.props.answer.id}/${voteType}/undo`, {
            method: "PATCH"
        })
        .then(resp => resp.json())
        .then(answerData => {
            console.log(answerData)
            const voteTypeBool = (voteType === "upvote") ? "isUpvoted" : "isDownvoted"
            this.setState({
                answer: answerData.results,
                [voteTypeBool]: false
            })
        })
    }

    handleAnswerVoteScore = (voteType) => {
        fetch(`https://localhost:5001/api/posts/questions/${this.props.questionId}/answers/${this.props.answer.id}/${voteType}`, {
            method: "PATCH"
        })
        .then(resp => resp.json())
        .then(answerData => {
            console.log(answerData)
            const voteTypeBool = (voteType === "upvote") ? "isUpvoted" : "isDownvoted"
            this.setState({
                answer: answerData.results,
                [voteTypeBool]: true
            })
        })
    }

    render() {
        const { answer } = this.props

        return (
            <div>
                <div className="d-flex p-4">
                    <div className="mr-4 d-flex flex-column align-items-center">
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => this.handleAnswerVoteClickEvent("upvote")}>^</button>
                        <strong>{answer.upvoteCount - answer.downvoteCount}</strong>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => this.handleAnswerVoteClickEvent("downvote")}>v</button>
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
        );
    }
}

export default Answer;
