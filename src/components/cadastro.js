import React, { Component } from 'react';

export class FormCadastro extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            UF: ''
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    }


    handleDateChange = (event) => {
        this.setState({
            dateOfBirth: event.target.value
        })
    }

    handleUFChange = (event) => {
        this.setState({
            UF: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(JSON.stringify(this.state))
        fetch('http://localhost:3001/cadastro',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(this.state)
        }).then(function(response){
            console.log(response)
            return response.json();
        });
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Nome</label>
                <input type='text' value={this.state.name} onChange={this.handleUserNameChange}
                />
            </div>
            <div>
                <label>Email</label>
                <input type='email' value={this.state.email} onChange={this.handleEmailChange}
               />
            </div>
            <div>
                <label>Telefone</label>
                <input type='text' value={this.state.phone} onChange={this.handlePhoneChange}/>
            </div>
            <div>
                <label>Data de Nascimento</label>
                <input type='date' value={this.state.dateOfBirth} onChange={this.handleDateChange}/>
            </div>
            <div>
                <label onChange={this.handleUFChange}>UF</label>
                <select value={this.state.UF} onChange={this.handleUFChange}>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
            </div>
            <input type="submit" value="Enviar" />
        </form>
        )
    }
}

export default FormCadastro