import React, {Component} from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import TicketBox from '../common/widget/ticketBox'
import StatusBox from '../common/widget/statusBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { initialRound: 3030, finalRound: 3033}
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/api/getCurrentBet`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { initialRound, finalRound } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <StatusBox cols='12 4' color='green'  evolution='' title = 'CONCURSOS'
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
