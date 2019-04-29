import React, { Component } from 'react';
import Style from './form.css';
import axios from 'axios';
import './form.css';
import Swal from 'sweetalert2';

export default class FormJet extends Component {

    constructor() {
        super()
        this.state = {
            inputNombre: '',
            inputEmail: '',
            inputCelular: '',
            inputEdad: '',
            validationMessage: '',
            btnDisabled: true
        }
    }

    popUpOk = () => {
        Swal.fire({
            type: 'success',
            title: 'Tu información fue enviada con éxito, estaremos en contácto contigo',
            showConfirmButton: false,
            timer: 5000
          })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //Conexión Axios ---> Enviar Datos
        axios.post('http://localhost:3004/form', this.state).then(({ data }) => console.log(data))

        //Reiniciar Form
        //e.target.value.reset()
        this.setState({
            inputNombre: '',
            inputEmail: '',
            inputCelular: '',
            inputEdad: ''
        })
    }

    validateElement() {

        if (this.state.inputNombre !== '' && this.state.inputEmail !== '' && this.state.inputCelular !== '' && this.state.inputEdad !== '') {
            this.setState({ btnDisabled: false, validationMessage: '' })
            this.setState({ validationMessage: '' })

            //     //Validación Email
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.inputEmail)) {
                this.setState({ 
                    btnDisabled: false, validationMessage: ''})

                //     //Validación Número Celular
                if (this.state.inputCelular.length === 10) {
                    this.setState({ btnDisabled: false, validationMessage: ''})

                    //     //Validación Edad
                    if (Number(document.getElementById('edad').value) >= 18 && Number(document.getElementById('edad').value) <= 100) {
                        this.setState({ btnDisabled: false, validationMessage: '' })
                    } else {
                        this.setState({ btnDisabled: true, validationMessage: 'La edad no esta dentro del rango permitido' })
                    }
                } else {
                    this.setState({ btnDisabled: true, validationMessage: 'Número de celular Invalido' })
                }
            } else {
                this.setState({ btnDisabled: true, validationMessage: 'Correo electrónico invalido' })
            }

        } else {
            this.setState({ btnDisabled: true, validationMessage: 'Debe diligenciar todos los campos' });
            this.setState({ validationMessage: 'Debe diligenciar todos los campos' })
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4
                    className={Style.element}
                >Has escogido el avión {this.props.jet}</h4>
                <div className={Style.grid}>
                    <input
                        className={Style.element}
                        id='nombre'
                        type='text'
                        name='userName'
                        placeholder='Nombre Completo'
                        value={this.state.inputNombre}
                        onChange={e => { this.setState({ inputNombre: e.target.value }); this.validateElement() }}
                    >
                    </input>

                    <input
                        className={Style.element}
                        id='email'
                        type='email'
                        name='Email'
                        placeholder='Email'
                        value={this.state.inputEmail}
                        onChange={e => { this.setState({ inputEmail: e.target.value }); this.validateElement() }}
                    >
                    </input>

                    <input
                        className={Style.element}
                        id='celular'
                        type='number'
                        name='celular'
                        placeholder='Número de Celular'
                        value={this.state.inputCelular}
                        onChange={e => { this.setState({ inputCelular: e.target.value }); this.validateElement() }}
                    >
                    </input>

                    <input
                        className={Style.element}
                        id='edad'
                        type='number'
                        name='userName'
                        placeholder='Introduce tu edad'
                        value={this.state.inputEdad}
                        onChange={e => { this.setState({ inputEdad: e.target.value }); this.validateElement() }}
                    >
                    </input>
                </div>
                <div className={Style.btnSubmit}>
                    <div className={Style.errorMesagge}>{this.state.validationMessage}</div>
                    <button className={Style.btn} type="submit" onClick={this.popUpOk} disabled={this.state.btnDisabled}>Enviar</button>
                </div>
            </form>

        )
    }

}