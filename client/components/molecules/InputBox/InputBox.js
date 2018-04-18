import React, { Component } from 'react'
import { Form, Container, Grid, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const InputWrapper = styled.div`
    position: relative;
`

const InputForm = styled.input`
    padding-left: 15px !important;
    padding-bottom: 5px !important;
    box-sizing: border-box !important;
    font-size: 18px !important;
    background-color: rgba(0,0,0,0) !important;
    border-style: solid !important;
    border-color: #555454 !important;
    border-width: 0 0 1.5px 0 !important;
    color: white !important;
    outline: 0 !important;

    &:focus ~ span,
    &:not(:focus):valid ~ span{
        font-size: 14px;
        top: -7px;
    }
`

const InputLabel = styled.span`
    position: absolute;
    top: 12px;
    left: 10px;
    margin-bottom: 5px;
    font-size: 18px;
    color: white;
    transition: ease-in 0.2s;
    pointer-events: none;
`

const InputBox = ({ label, name, ...props }) => (
    <InputWrapper>
        <InputForm name={name} {...props} required/>
        <InputLabel>{label}</InputLabel>
    </InputWrapper>
)

export default InputBox