import React from 'react'
import Menu from './menu'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <aside className='main-sidebar'>
        <section className='sidebar'>
            <Menu />
        </section>
    </aside>
)