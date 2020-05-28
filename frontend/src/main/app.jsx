import React from 'react'
import { HashRouter } from 'react-router-dom'

import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
)