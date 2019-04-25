import React, { Component } from 'react';
import Style from './form.css';
import './form.css';
import FormFields from '../../Widgets/Form/formFields';
/*import axios from 'axios';*/

class FormJet extends Component {

    state = {
        formData: {
            name: {
                values: {
                    value: ''
                },
                element: 'input',
                type: 'text',
                placeholder: 'Nombre Completo'
            },
            email: {
                values: {
                    value: ''
                },
                element: 'input',
                type: 'text',
                placeholder: 'Email'
            },
            cel: {
                values: {
                    value: ''
                },
                element: 'input',
                type: 'number',
                placeholder: 'Celular'
            },
            age: {
                values: {
                    value: ''
                },
                element: 'select',
                type: 'select',
                placeholder: 'Edad',
                option:[
                    {val:'1', text:'10-20'},
                    {val:'1', text:'20-30'},
                    {val:'1', text:'30+'}
                ]
            }
        }
    }

    updateForm = (newState) => {
        this.setState({
            formData:newState
        })
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].values.value           
        }
        console.log(dataToSubmit)
        /*axios.post('http://localhost:3004/aviones', dataToSubmit)*/
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>

                <div className={Style.grid}>
                    <FormFields formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)} />
                </div>

                <div className={Style.btnSubmit}>
                    <button className={Style.btn} type="submit">Enviar</button>
                </div>
            </form>
        )
    }

}

export default FormJet;