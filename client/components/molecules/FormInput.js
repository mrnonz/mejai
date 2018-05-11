import React from 'react'

const FormInput = ({ label, name, ...props }) => (
    <div className="input-wrapper">
        <input name={name} {...props} />
        <label>{label}</label>
    </div>
)

export default FormInput