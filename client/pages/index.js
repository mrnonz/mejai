import React, { Component } from 'react'
import Head from 'next/head'
import { Form, Container, Grid, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import InputBox from 'molecules/InputBox'

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
  background: rgba(80,80,80,0.55);
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

const FormButton = styled(Button)`
  height: 50px !important;
  font-size: 16px !important;
  border-radius: 0px !important;
  background: #38D672 !important;
  color: white !important;
  position:relative;
  top:50%; 
  left:50%;
  transform: translateX(-50%);
`

const CustomFormField = styled(Form.Field)`
  margin-bottom: 25px !important;
`

const CustomFormGroup = styled(Form.Group)`
  margin-bottom: 25px !important;
`

class FormExampleCaptureValues extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', submittedName: '', submittedEmail: '' }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)}

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }

  render() {
    const { name, email, submittedName, submittedEmail } = this.state

    return (
      <PageWrapper>
        <Head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
            <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet"></link>
        </Head>
        <FormWrapper>
          <LogoWrapper>
            <span className="left-logo web-logo">Mejai</span><span className="right-logo web-logo">Charity</span>
          </LogoWrapper>
          <Form onSubmit={this.handleSubmit}>
            <CustomFormField>
              <InputBox label="Username" name="username" onChange={this.handleChange} />
            </CustomFormField>
            <CustomFormGroup widths="equal">
              <Form.Field>
                <InputBox label="Firstname" name="firstname" />
              </Form.Field>
              <Form.Field>
                <InputBox label="Lastname" name="lastname" />
              </Form.Field>
            </CustomFormGroup>
            <CustomFormField>
              <InputBox label="Password" name="password" type="password" />
            </CustomFormField>
            <CustomFormField>
              <InputBox label="Confirm Password" name="confirmpassword" type="password" />
            </CustomFormField>
            <FormButton content='Register' />
          </Form>
        </FormWrapper>
      </PageWrapper>
    )
  }
}

export default FormExampleCaptureValues
