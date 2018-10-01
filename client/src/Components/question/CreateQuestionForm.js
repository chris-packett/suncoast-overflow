import React, { Component } from 'react';

class CreateQuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
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
        let questionData = {
            "Title": this.state.title,
            "Content": this.state.body,
            "CreatedBy": "anonymous"
        }

        fetch("https://localhost:5001/api/posts/questions/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(questionData)
        })
        .then(resp => resp.json())
        .then(questionData => {
            console.log(questionData)
            this.setState({
                title: "",
                body: ""
            })
        })
    }

    render() {
        return (
            <div className="p-4" id="create-question-form-page">
                <div className="mb-4 text-center m-5">
                    <h2>Ask a Question</h2>
                </div>
                <form className="d-flex flex-column align-items-center" onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-6">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" 
                            name="title"
                            placeholder="What's your programming question? Be specific."
                            value={this.state.title} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="body">Body</label>
                        <textarea className="form-control" rows="5"
                            name="body"
                            value={this.state.body}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-primary mt-2">Submit to Forum</button>
                </form>
            </div>
        );
    }
}

export default CreateQuestionForm;
