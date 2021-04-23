import React, { Component } from 'react';

export class FormFeedback extends Component {
    constructor(props){
        super(props)

        this.state = {
            feedback: '',
            date: '', 
            name: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    };


    handleFeedbackChange = (event) => {
        this.setState({
            feedback: event.target.value
        })
    }

    handleDateChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    handleNameChange = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Data do tratamento</label>
                <input type="date" value={this.state.date} onChange={this.handleDateChange}></input>
            </div>
            <div>
                <label>Nome completo: </label>
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            </div>
            <div>
                <label>FeedBack</label>
                <textarea name="Text" cols="40" rows="5" value={this.state.feedback} onChange={this.handleFeedbackChange}></textarea>
            </div>
            </form>
)};
}

export default FormFeedback