import FormCadastro from './components/cadastro'
import FormDuvida from './components/duvidas'
import FormSolicitacao from './components/solicitacao'
import FormFeedback from './components/feedback'
import Tabela from './components/tabela'
import React, { Component } from 'react';
import './App.css';
import { Button } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <Router>
      <div>
        <Link to='/cadastro'>
          <button href='./components/cadastro.js'>Cadastro</button>
        </Link>
        <Link to='/duvidas'>
          <button href='./components/duvidas.js'>Duvidas</button>
        </Link>
        <Link to='/feedback'>
          <button href='./components/feedback.js'>Feedback</button>
        </Link>
        <Link to='/solicitacao'>
          <button href='./components/solicitacao.js'>Solicitacao</button>
        </Link>
        <Link to='/envio'>
          <button>Envio de arquivo</button>
        </Link>
        
        
      </div>
        <Switch>
          <Route path='/cadastro' component={FormCadastro}/>
          <Route path='/duvidas' component={FormDuvida}/>
          <Route path='/feedback' component={FormFeedback}/>
          <Route path='/solicitacao' component={FormSolicitacao}/>
          <Route path='/tabela' component={Tabela}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
