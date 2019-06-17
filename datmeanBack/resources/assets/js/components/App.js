import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './header/Header'
import './App.css';


class App extends Component {
    render () {
        return (

                <div className="App">
                    <h1>DatMean Gestión Empleados</h1>
                    <Header/>
                </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
