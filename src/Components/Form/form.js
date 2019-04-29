import React, { Component } from 'react';
import Style from './form.css';
import axios from 'axios';
import './form.css';

export default class FormJet extends Component {

    constructor(){
        super()
        this.state = {
            inputNombre: '',
            inputEmail:'',
            inputCelular:'',
            inputEdad:'',
            validationMessage:'',
            btnDisabled: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();        

        console.log(this.state)

        //Conexión Axios ---> Enviar Datos
        axios.post('http://localhost:3004/form', this.state)
    }

    validateElements = (e) => {
        console.log(this.state)
        // Validación de datos
        //if(this.state.inputNombre === '' || this.state.inputNombre === '' || this.state.inputNombre === '' || this.state.inputNombre === ''){
            //this.state.btnDisabled = true;
        if(e.target.value === ''){
        }else{
            this.setState({btnDisabled: false});
        }
    }

    render() {
        return (                
                <form onSubmit={this.handleSubmit}>
                <h4
                className={Style.element}
                >Has escogido el avión </h4>
                <div className={Style.grid}>
                        <input
                            className={Style.element}
                            id='nombre'
                            type='text'
                            name='userName'
                            placeholder='Nombre Completo'
                            change={e => this.validateElements()}
                            onChange={e => this.setState({ inputNombre: e.target.value})}                            
                            value={this.state.inputNombre}>
                        </input>

                        <input
                            className={Style.element}
                            id='email'
                            type='text'
                            name='Email'
                            placeholder='Email'
                            change={e => this.validateElements()}
                            onChange={e => this.setState({ inputEmail: e.target.value})}
                            value={this.state.inputEmail}>
                        </input>

                        <input
                            className={Style.element}
                            id='celular'
                            type='number'
                            name='celular'
                            placeholder='Número de Celular'
                            change={e => this.validateElements()}
                            onChange={e => this.setState({ inputCelular: e.target.value})}
                            value={this.state.inputCelular}>
                        </input>

                        <input
                            className={Style.element}
                            id='edad'
                            type='number'
                            name='userName'
                            placeholder='Introduce tu edad'
                            change={e => this.validateElements()}
                            onChange={e => this.setState({ inputEdad: e.target.value})}
                            value={this.state.inputEdad}>
                        </input>                    
                    </div>
                    <div className={Style.btnSubmit}>
                        <button className={Style.btn} type="submit" onClick={this.handleSubmit} disabled={this.state.btnDisabled}>Enviar</button>
                    </div>
                </form>
            
        )
    }

}