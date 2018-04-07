import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import { Form, Container, Grid, Button } from 'semantic-ui-react'
import SiteLogo from 'molecules/SiteLogo'
import FormInput from 'molecules/FormInput'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false
    }
  }

  hideLoginForm() {
    this.setState({
      showLoginForm: false
    })
  }

  showLoginForm() {
    this.setState({
      showLoginForm: true
    })
  }

  render() {
    const { showLoginForm } = this.state
    return (
      <div className="login-page">
        <div className="login-form">
          <SiteLogo />
            {
              showLoginForm ?
              <Form>
                <FormInput label="อีเมล์" name="email" required />
                <FormInput label="รหัสผ่าน" name="password" required />
              </Form>
              :
              <Form>
                <FormInput label="อีเมล์" name="email" required />
                <FormInput label="ชื่อ - สกุล" name="name" required />
                <FormInput label="รหัสผ่าน" name="password" required />
                <FormInput label="ยืนยันรหัสผ่าน" name="confirmPassword" required />
                <div className="button-group">
                  <Button color="green">Register</Button>
                  <Button basic onClick={this.showLoginForm.bind(this)}>Cancel</Button>
                </div> 
              </Form>
            }
        </div>
      </div>
    )
  }
}

export default withRedux(makeStore)(LoginPage)
