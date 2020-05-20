import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='info-box bg-red'>
            <span className='info-box-icon'><i className='fa fa-comments-o'></i></span>
            <div className='info-box-content'>
                <span className='info-box-text'>Concursos</span>
                <span className='info-box-number'>1280 a 1288</span>
                <div className='progress'>
                    <div className='progress-bar'></div>
                </div>
                <span className='progress-description'>
                    6 de 8 concursos realizados
                </span>
            </div>
        </div>
    </Grid>
)