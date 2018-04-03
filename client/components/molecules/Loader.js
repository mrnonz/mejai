import React from 'react'
import SiteLogo from 'molecules/SiteLogo'

const Loader = ({ wrapped = false }) => (
    wrapped ? 
    <div className="loader-wrapper">
        <div className="web-loader">
            <SiteLogo />
        </div>
    </div>
    :
    <div className="web-loader">
        <SiteLogo />
    </div>
)

export default Loader