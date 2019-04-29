import React from 'react';
import Style from '../../Components/Form/form.css';

const FormFields = (props) => {

    const renderFields = () => {

        const formArray = [];
        for (let elementName in props.formData) {
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            })
        }

        return formArray.map((item, i) => {
            return (
                <div key={i} className={Style.element}>
                    {renderTemplates(item)}
                </div>
            ) 
        })

    }

    const changeHandler = (event, id) => {
        const newState = props.formData;
        newState[id].values.value = event.target.value

        let validData = validate(newState[id])
        newState[id].valid = validData[0];
        newState[id].validationMessage = validData[1];

        props.change(newState)
       
    }

    const validate = (element) => {
        let error = [true, '']

        if(element.validation.required){
            const valid = element.values.value.trim() !== '';
            const message = `${ !valid ? 'Este campo es obligatorio':''}`        

        error = !valid ? [valid,message] : error

        }
        if(element.rango){
            const valid = Number(element.values.value) >= 18 && Number(element.values.value) <= 100;
            const message = `${ !valid ? 'La edad que ha diligenciado no esta dentro del rango permitido':''}`        

        error = !valid ? [valid,message] : error

        }

        if(element.length){
            const valid = element.values.value.length <= 10 && element.values.value.length >= 10;
            const message = `${ !valid ? 'Número de celular no valido':''}`        

        error = !valid ? [valid,message] : error

        }

        return error;

    }

    const showValidation = (data) =>{
        let errorMessage = null;

        if(data.validation && !data.valid){
            errorMessage = (<span className={Style.labelError}>{data.validationMessage}</span>)
        }

        return errorMessage;

    }

    const renderTemplates = (data) => {
        let formTemplate = '';
        let values = data.settings;

        switch (values.element) {
            case ('input'):

                formTemplate = (
                    <div className={Style.element}>
                        <input {...values} value={values.values.value} onChange={
                            (event) => changeHandler(event, data.id)
                        } />
                        {showValidation(values)}
                    </div>
                )
                break;
        
                    default:
                    formTemplate = null;
                }
                return formTemplate;
            }
        
            return(
                <div>
                    {renderFields()}
                </div>
                )
                    
                     }
                    
 export default FormFields;