import React, { Component } from 'react'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import { Form, Container, Grid } from 'semantic-ui-react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  background-image: url('/static/loginBG.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const FormWrapper = styled.div`
  background: rgba(135,135,135,0.8);
  padding: 50px 30px;
`
const LogoWrapper = styled.div` 
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  .web-logo {
    font-family: 'Kanit', sans-serif;
    font-size: 62px;
  }

  .left-logo {
    color: #316CB0;
  }

  .right-logo {
    color: #F4B333;
  }
`

const InputBox = styled.input`
  padding-left: 15px !important;
  box-sizing: border-box !important;
  font-size: 18px !important;
  background-color: rgba(0,0,0,0) !important;
  border-style: solid !important;
  border-color: rgb(175, 175, 175) !important;
  border-width: 0 0 1.5px 0 !important;
  color: white !important;
  outline: 0 !important;
`

class FormExampleCaptureValues extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', submittedName: '', submittedEmail: '' }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }

  render() {
    const { name, email, submittedName, submittedEmail } = this.state

    return (
      <PageWrapper>
        <Head>
            <link rel="stylesheet" type="text/css" href="/static/dist/semantic.min.css"></link>
            <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet"></link>
        </Head>
        <FormWrapper>
          <LogoWrapper>
            <span className="left-logo web-logo">Mejai</span><span className="right-logo web-logo">Charity</span>
          </LogoWrapper>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <InputBox placeholder='Username' name='username' />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Field>
                <InputBox placeholder='Firstname' name='firstname' />
              </Form.Field>
              <Form.Field>
                <InputBox placeholder='Lastname' name='lastname' />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <InputBox placeholder='Password' name='password' type='password' />
            </Form.Field>
            <Form.Field>
              <InputBox placeholder='Confirm Password' name='confirmPassword' type='password' />
            </Form.Field>  
            <Form.Button content='Register' color="green" />
          </Form>
        </FormWrapper>
      </PageWrapper>
    )
  }
}

export default withRedux(makeStore)(FormExampleCaptureValues)
