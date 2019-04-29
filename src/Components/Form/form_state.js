import React, { Component } from 'react';
import Style from './form.css';
import './form.css';
import FormFields from '../../Widgets/Form/formFields';
import Modal from "react-responsive-modal";
import axios from 'axios';

class FormJet extends Component {

    state = {
        open: false,
        formData: {
            name: {
                values: {
                    value: ''
                },
                element: 'input',
                type: 'text',
                placeholder: 'Nombre Completo',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            email: {
                values: {
                    value: ''
                },
                element: 'input',
                type: 'text',
                placeholder: 'Email',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            cel: {
                values: {
                    value: ''
                },
                element: 'input',
                type: 'number',
                placeholder: 'Celular',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                length: true,
                validationMessage: ''
            },
            age: {
                values: {
                    value: ''
                },
                element: 'input',
                type: 'number',
                placeholder: 'Edad',
                validation: {
                    required: true
                },
                rango: true,
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
        /*this.onCloseModal()*/
    };

    onCloseModal = () => {
            setTimeout(function () {
                this.setState({ open: false })
            }.bind(this), 5000);
        }
    

    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }

    disableBtn = () => {
        this.state.formData.map((item, i) => {
            if (item.validationMessage === '') {
                console.log(item.validationMessage)
                return false;
            } else {
                return true;
            }
        })
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].values.value
        }
        console.log(dataToSubmit)
        axios.post('http://localhost:3004/form', dataToSubmit)
    }

    render() {
        return (


            <form onSubmit={this.submitForm}>

                <div className={Style.grid}>
                    <FormFields formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)} />
                </div>

                <div className={Style.btnSubmit}>
                    <button className={Style.btn} type="submit" onClick={this.onOpenModal}>Enviar</button>
                </div>
                <div className={Style.modal}>
                    <Modal open={this.state.open} /*onClose={this.onCloseModal}*/ className={Style.modal} center>
                        <h2>Enviado con éxito</h2>
                        <p>Tu información fue enviada con éxito, estaremos en contácto con tigo</p>
                    </Modal>
                </div>
            </form>
        )
    }

}

export default FormJet;