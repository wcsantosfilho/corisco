import React from 'react'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <section className='content-header'>
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
)