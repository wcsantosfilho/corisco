import React from 'react'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>C </b>Corisco</span>
            <span className='logo-lg'>
                <i className='fa fa-calendar-check-o'></i>
                <b> Corisco</b>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <span className='sidebar-toggle' data-toggle='offcanvas'></span>
        </nav>
    </header>
)