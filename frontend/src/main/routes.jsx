import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import RegistroApostas from '../apostas/registroApostas'

export default props => (
    <Router history={hashHistory}>
        <Route exact path='/' component={Dashboard} />
        <Route path='/registroApostas' component={RegistroApostas} />
        <Redirect from='*' to='/' />
    </Router>
)