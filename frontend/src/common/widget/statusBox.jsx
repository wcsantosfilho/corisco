import React from 'react'
import Grid from '../layout/grid'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <Grid cols={props.cols}>
        <div className='info-box bg-red'>
            <span className='info-box-icon'><i className='fa fa-comments-o'></i></span>
            <div className='info-box-content'>
                <span className='info-box-text'>{props.title}</span>
                <span className='info-box-number'>{props.currentBet}</span>
                <div className='progress'>
                    <div className='progress-bar'></div>
                </div>
                <span className='progress-description'>
                    {props.evolution}
                </span>
            </div>
        </div>
    </Grid>
)