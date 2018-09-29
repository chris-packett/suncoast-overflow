import React, { Component } from 'react';

class CreateAnswerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionId: props.questionId,
            body: ""
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let answerData = {
            "Content": this.state.body,
            "CreatedBy": "anonymous",
            "QuestionId": this.state.questionId
        }

        fetch(`https://localhost:5001/api/posts/questions/${this.state.questionId}/answers/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(answerData)
        })
        .then(resp => resp.json())
        .then(answerData => {
            console.log(answerData)
            this.setState({
                body: ""
            })
        })
    }

    render() {
        return (
            <div className="p-4">
                <div className="mb-4 text-left">
                    <h5>Your Answer</h5>
                </div>
                <form className="d-flex flex-column align-items-center" onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-12">
                        <textarea className="form-control" rows="5"
                            name="body"
                            value={this.state.body}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-primary mt-2 align-self-end">Post your Answer</button>
                </form>
            </div>
        );
    }
}

export default CreateAnswerForm;
