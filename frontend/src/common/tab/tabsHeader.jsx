import React from 'react'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <ul className='nav nav-tabs'>
        {props.children}
    </ul>
)