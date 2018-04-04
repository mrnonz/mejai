import React, { Component } from 'react';
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