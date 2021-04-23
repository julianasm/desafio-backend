import React, { Component } from 'react';

export class Table extends Component {

    state = {
        users: []
    }

    async componentDidMount(){
        const data = await fetch('http://localhost:3001/cadastro')
        const users = await data.json();
        this.setState({users})
    }

    makeTable(){
        return this.state.users.map(user => {
            return (
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.UF}</td>
                <td>{user.dateOfBirth}</td>
                </tr>
            )
        })
    }

    render(){
        return (
            <div>
            <table id='user'>
            <tbody>
               {this.makeTable()}
            </tbody>
            </table>
            </div>
        )
    } 

}





export default Table