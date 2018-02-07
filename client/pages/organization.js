import React, { Component } from 'react'
import OrganizationCategory from 'organisms/OrganizationCategory'

class Organization extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="organization-page">
                <OrganizationCategory />
            </div>
        )
    }
}

export default Organization