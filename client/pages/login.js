import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import { Form, Container, Grid, Button } from 'semantic-ui-react'
import SiteLogo from 'molecules/SiteLogo'


class LoginPage extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <SiteLogo />
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
        </div>
      </div>
    )
  }
}

export default withRedux(makeStore)(LoginPage)
