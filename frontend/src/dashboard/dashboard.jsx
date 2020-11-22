import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import TicketBox from '../common/widget/ticketBox'
import StatusBox from '../common/widget/statusBox'
import Row from '../common/layout/row'


class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { initialRound, finalRound } = this.props.currentBet
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <StatusBox cols='12 4' color='green' title = 'CONCURSOS'
                            currentBet = {`${initialRound} a ${finalRound}`} 
                            evolution = {`4 realizados de 8 apostados`}/>
                    </Row>
                    <Row>
                        <TicketBox cols='12 4' color='black' icon='th'
                            round = 'Concurso 1218' bets='09 - 19 - 42 - 47 - 48 - 60' />
                    </Row>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='dot-circle-o'
                            value='09' text='Toda forma de poder é uma forma de viver por nada' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({currentBet: state.dashboard.currentBet})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)