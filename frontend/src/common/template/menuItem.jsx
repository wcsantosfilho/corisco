import React from 'react'
import { Link } from 'react-router-dom'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <li>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </Link>
    </li>
)