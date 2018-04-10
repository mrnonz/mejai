import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import { Form, Container, Grid, Button } from 'semantic-ui-react'
import SiteLogo from 'molecules/SiteLogo'
import FormInput from 'molecules/FormInput'
import { createUser } from 'stores/actions/user'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: true,
      creatingUser: false,
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
      }
    }
  }

  componentWillReceiveProps(nextProps) {
      if(this.state.creatingUser) {
          if(!nextProps.user.isCreating) {
              this.setState({
                showLoginForm: true
              })
          }
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

  handleRegisterSubmit() {
    const { email, name, password, confirmPassword } = this.state.registerForm
    const userData = {
      email,
      firstname: name.split(' ')[0],
      lastname: name.split(' ')[1],
      password
    }
    this.props.createUser(userData)
  }

  handleLoginChange = ({ target: { name , value } }) => {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  }

  handleRegisterChange = ({ target: { name , value } }) => {
    this.setState({
      creatingUser: true,
      registerForm: {
        ...this.state.registerForm,
        [name]: value
      }
    })
  }

  render() {
    const { showLoginForm } = this.state
    const { user: { isCreating } } = this.props
    return (
      <div className="login-page">
        <div className="login-form">
          <SiteLogo />
            {
              showLoginForm ?
              <Form>
                <FormInput onChange={this.handleLoginChange} label="อีเมล์" name="email" required />
                <FormInput onChange={this.handleLoginChange} label="รหัสผ่าน" name="password" type="password" required />
                <Button fluid className="login-button" color="green">เข้าสู่ระบบ</Button>
                <Button fluid className="login-button" color="teal" onClick={this.hideLoginForm.bind(this)}>สมัครสมาชิก</Button>
              </Form>
              :
              <Form>
                <FormInput onChange={this.handleRegisterChange} label="อีเมล์" name="email" required />
                <FormInput onChange={this.handleRegisterChange} label="ชื่อ - สกุล" name="name" required />
                <FormInput onChange={this.handleRegisterChange} label="รหัสผ่าน" name="password" required type="password" />
                <FormInput onChange={this.handleRegisterChange} label="ยืนยันรหัสผ่าน" name="confirmPassword" required type="password" />
                <div className="button-group">
                  <Button loading={ isCreating } color="green" onClick={this.handleRegisterSubmit.bind(this)} >Register</Button>
                  <Button disabled={ isCreating } basic onClick={this.showLoginForm.bind(this)}>Cancel</Button>
                </div> 
              </Form>
            }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    user: state.user
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userData) => {
        dispatch(createUser(userData))
    }
  }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(LoginPage)
