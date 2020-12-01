import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='registroApostas' label='Apostas' icon='truck' />
        </MenuTree>
    </ul>
)