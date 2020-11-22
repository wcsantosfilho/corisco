import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate } from './registroApostasActions'

class RegistroApostasList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        // abaixo: artifício para retonar um array vazio se for undefined
        const list = this.props.list || []
        return list.map(aposta => (
            <tr key={aposta._id}>
                <td>{aposta.betDate}</td>
                <td>{aposta.initialRound}</td>
                <td>{aposta.finalRound}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(aposta)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div> 
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Data Aposta</th>
                            <th>Conc.Inicial</th>
                            <th>Conc.Final</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.apostas.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RegistroApostasList)