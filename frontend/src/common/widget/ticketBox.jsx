import React from 'react'
import Grid from '../layout/grid'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <Grid cols={props.cols}>
        <div className={`info-box`}>
            <span className={`info-box-icon bg-${props.color}`}><i className={`fa fa-${props.icon}`}></i></span>
            <div className='info-box-content'>
                <span className='info-box-text'>{props.round}</span>
                <span className='info-box-number'>{props.bets}</span>
            </div>
      </div>
    </Grid>
)