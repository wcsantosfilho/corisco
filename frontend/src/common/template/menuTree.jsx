import React from 'react'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <li className='treeview'>
        <a href="true">
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)