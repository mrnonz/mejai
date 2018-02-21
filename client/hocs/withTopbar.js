import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import Topbar from 'organisms/Topbar'

const withTopbar = (ComposedComponent) => {
    return (props) => (
        <div>
            <Topbar />
            <div className="content-with-topbar">
                <ComposedComponent {...props} />
            </div>
        </div>
    )
}

export default withTopbar