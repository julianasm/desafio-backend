import React, { Component } from 'react';

export class FormDuvida extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: '',
            phone: '', 
            name: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    };

    handleNameChange = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nome do paciente</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label>Mensagem</label>
                    <textarea name="Text" cols="40" rows="5" value={this.state.feedback} onChange={this.handleMessageChange}></textarea>
                </div>
                <div>
                    <label>Telefone</label>
                    <input type="text" value={this.state.name} onChange={this.handlePhoneChange}/>
                </div>
            </form>
        )
    }


}

export default FormDuvida