import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class RegistroApostasForm extends Component {

    render() {
        const { handleSubmit } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='betDate' component='input' />
                    <Field name='initialRound' component='input' />
                    <Field name='finalRound' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'RegistroApostasForm'})(RegistroApostasForm)
