import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class RegistroApostasForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='betDate' component={labelAndInput} 
                        label='Data da Aposta' cols='12 4' placeholder='Iso Date' type='date'/>
                    <Field name='initialRound' component={labelAndInput} 
                        label='Concurso Inicial' cols='12 4' placeholder='#concurso' type='number' />
                    <Field name='finalRound' component={labelAndInput} 
                        label='Concurso Final' cols='12 4' placeholder='#concurso' type='number' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'RegistroApostasForm', destroyOnUnmount: false})(RegistroApostasForm)
