import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnswerList from '../answer/AnswerList'

class QuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {},
            isUpvoted: false,
            isDownvoted: false,
            answers: []
        }
    }
    
    componentDidMount() {
        this.getQuestionData()
        this.getAnswersData()
    }
    
    getQuestionData = () => {
        fetch(`https://localhost:5001/api/posts/questions/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(questionData => {
            this.setState({
                question: questionData.results
            })
        })
    }

    getAnswersData = () => {
        fetch(`https://localhost:5001/api/posts/questions/${this.props.match.params.id}/answers`)
        .then(resp => resp.json())
        .then(answersData => {
            console.log(answersData.results)
            this.setState({
                answers: answersData.results
            })
        }) 
    }

    handleQuestionVoteClickEvent = (voteType) => {
        let { isUpvoted, isDownvoted } = this.state

        if (isUpvoted === false && isDownvoted === false) {
            this.handleQuestionVoteScore(voteType)
        }
        else if (voteType === "upvote" && isUpvoted === false && isDownvoted === true) {
            this.handleQuestionVoteUndo("downvote")
            this.handleQuestionVoteScore("upvote")
        }
        else if (voteType === "downvote" && isDownvoted === false && isUpvoted === true) {
            this.handleQuestionVoteUndo("upvote")
            this.handleQuestionVoteScore("downvote")
        }
    }
    
    handleQuestionVoteUndo = (voteType) => {
        fetch(`https://localhost:5001/api/posts/questions/${this.props.match.params.id}/${voteType}/undo`, {
            method: "PATCH"
        })
        .then(resp => resp.json())
        .then(questionData => {
            console.log(questionData)
            const voteTypeBool = (voteType === "upvote") ? "isUpvoted" : "isDownvoted"
            this.setState({
                question: questionData.results,
                [voteTypeBool]: false
            })
        })
    }

    handleQuestionVoteScore = (voteType) => {
        fetch(`https://localhost:5001/api/posts/questions/${this.props.match.params.id}/${voteType}`, {
            method: "PATCH"
        })
        .then(resp => resp.json())
        .then(questionData => {
            console.log(questionData)
            const voteTypeBool = (voteType === "upvote") ? "isUpvoted" : "isDownvoted"
            this.setState({
                question: questionData.results,
                [voteTypeBool]: true
            })
        })
    }

    render() {        
        return (
            <div className="p-5">
                <div className="d-flex justify-content-around">
                    <h3>{this.state.question.title}</h3>
                    <Link to="/question/add" className="btn btn-primary btn-md align-self-center">Ask Question</Link>
                </div>
                <hr className="w-80" />
                <div className="d-flex p-4">
                    <div className="mr-4 d-flex flex-column align-items-center">
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => this.handleQuestionVoteClickEvent("upvote")}>^</button>
                        <strong>{this.state.question.upvoteCount - this.state.question.downvoteCount}</strong>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => this.handleQuestionVoteClickEvent("downvote")}>v</button>
                    </div>
                    <div>
                        <p>
                            {this.state.question.content}
                        </p>
                        <Link to="/">
                            <u className="text-secondary">edit</u>
                        </Link>
                    </div>
                </div>
                <AnswerList questionId={this.state.question.id} answers={this.state.answers} />
            </div>
        );
    }
}

export default QuestionDetails;
