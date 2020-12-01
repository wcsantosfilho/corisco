import React from 'react'

import { Switch, Route, Redirect } from 'react-router'
//import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import RegistroApostas from '../apostas/registroApostas'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/registroApostas' component={RegistroApostas} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)