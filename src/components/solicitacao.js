import React, { Component } from 'react';

export class FormSolicitacao extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            UF: '', 
            typeOfTreatment: ''
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

    handleTypeTreatment = (event) =>{
        this.setState({
            typeOfTreatment: event.target.value
        })
    }

    handleUFChange = (event) => {
        this.setState({
            UF: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nome do paciente</label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange}></input>
                </div>
                <div>
                    <label>UF</label>
                    <select name="estados-brasil" value={this.state.UF} onChange={this.handleUFChange}>
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
                <div>
                    <label>Tratamento</label>
                    <select name="tipos-tratamento" value={this.state.typeOfTreatment} onChange={this.handleTypeTreatment}>
                        <option value="Implante-dentario">Implante Dentario</option>
                        <option value="Ortodontia">Ortodontia</option>s
                        <option value="Clareamento">Clareamento</option>
                
                    </select>
                </div>
                </div>
            </form>
        )
    }

}

export default FormSolicitacao