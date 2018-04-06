import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import { Form, Container, Grid, Button } from 'semantic-ui-react'
import SiteLogo from 'molecules/SiteLogo'


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: true
    }
  }

  hideLoginForm() {
    this.setState({
      showLoginForm: false
    })
  }

  render() {
    const { showLoginForm } = this.props
    return (
      <div className="login-page">
        <div className="login-form">
          <SiteLogo />
            {
              false ?
              <Form>
                <Form.Field>
                  <Form.Input placeholder='Username' name='username' />
                </Form.Field>
                <Form.Group widths="equal">
                  <Form.Field>
                    <Form.Input placeholder='Firstname' name='firstname' />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input placeholder='Lastname' name='lastname' />
                  </Form.Field>
                </Form.Group>
                <Form.Field>
                  <Form.Input placeholder='Password' name='password' type='password' />
                </Form.Field>
                <Form.Field>
                  <Form.Input placeholder='Confirm Password' name='confirmPassword' type='password' />
                </Form.Field>
                <div className="button-group">
                    <Button color="green">Register</Button>
                    <Button basic>Cancel</Button>
                </div> 
              </Form>
              :
              <Form>
                <Form.Input placeholder="อีเมล์" name='email' />
                <Form.Input placeholder='ชื่อ - สกุล' name='name' />
                <Form.Input placeholder='รหัสผ่าน' name='password' type='password' />
                <Form.Input placeholder='ยืนยันรหัสผ่าน' name='confirmPassword' type='password' />
                <div className="button-group">
                    <Button color="green">Register</Button>
                    <Button basic>Cancel</Button>
                </div> 
              </Form>
            }
        </div>
      </div>
    )
  }
}

export default withRedux(makeStore)(LoginPage)
