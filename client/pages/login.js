import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import { makeStore } from '../stores'
import cookie from 'react-cookie'
import withTopbar from 'hocs/withTopbar'
import { Form, Container, Grid, Button, Segment } from 'semantic-ui-react'
import SiteLogo from 'molecules/SiteLogo'
import FormInput from 'molecules/FormInput'
import { createUser, userLogin } from 'stores/actions/user'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: true,
      creatingUser: false,
      loggingUser: false,
      errorLogin: false,
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
                    creatingUser: false,
                    showLoginForm: true
                })
            }
        }
        if(this.state.loggingUser) {
            const { user } = nextProps.user
            if(user.userId) {
                cookie.save('userId', user.userId)
                Router.push({
                    pathname: '/'
                })
            }
            if(nextProps.user.isLoggingError) {
                this.setState({
                    errorLogin: true,
                    loggingUser: false
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

  handleLoginSubmit() {
      const { email, password } = this.state.loginForm
      const userData = { email, password }
      this.props.userLogin(userData)
      this.setState({
          loggingUser: true
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
    this.setState({
        creatingUser: true
    })
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
      registerForm: {
        ...this.state.registerForm,
        [name]: value
      }
    })
  }

  render() {
    const { showLoginForm, loggingUser, errorLogin } = this.state
    const { user: { isCreating } } = this.props
    return (
      <div className="login-page">
        <div className="login-form">
          <SiteLogo />
            {
              showLoginForm ?
              <Form>
                <FormInput onChange={this.handleLoginChange} autocomplete="off" label="อีเมล์" name="email" required />
                <FormInput onChange={this.handleLoginChange} label="รหัสผ่าน" name="password" type="password" required />
                <Button fluid loading={ loggingUser }  className="login-button" color="green" onClick={this.handleLoginSubmit.bind(this)}>เข้าสู่ระบบ</Button>
                <Button fluid loading={ loggingUser } className="login-button" color="teal" onClick={this.hideLoginForm.bind(this)}>สมัครสมาชิก</Button>
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
            { errorLogin && <Segment inverted color='red'>
                อีเมล์ หรือ รหัสผ่านผิดพลาด
            </Segment> }
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
    },
    userLogin: (userData) => {
        dispatch(userLogin(userData))
    }
  }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(LoginPage)
