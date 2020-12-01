import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import '../../../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
    <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />
)
