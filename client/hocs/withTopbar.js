import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import Topbar from 'organisms/Topbar'

const withTopbar = (ComposedComponent) => {
    return (props) => (
        <div>
            <Topbar />
            <ComposedComponent {...props} />
        </div>
    )
}

export default withTopbar