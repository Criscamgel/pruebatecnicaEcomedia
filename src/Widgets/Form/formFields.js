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

        props.change(newState)
       
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
                    </div>
                )
                break;

            case ('select'):
                formTemplate = (
                    <div className={Style.element}>
                        <select
                            value={values.values.value}
                            name={values.element}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }>
                            {values.option.map((item, i) => (
                                <option key={i} value={item.val}>
                                    {item.text}
                                </option>
                            ))}
                    
                        </select>
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