import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import TicketBox from '../common/widget/ticketBox'
import StatusBox from '../common/widget/statusBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <StatusBox cols='12 4' color='green'  evolution='' />
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

export default Dashboard