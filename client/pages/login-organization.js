import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import { makeStore } from '../stores'
import { isNil } from 'lodash'
import cookie from 'react-cookie'
import withTopbar from 'hocs/withTopbar'
import { Form, Container, Grid, Button, Segment, Icon } from 'semantic-ui-react'
import SiteLogo from 'molecules/SiteLogo'
import FormInput from 'molecules/FormInput'
import { organizationLogin } from 'stores/actions/organization'

class LoginOrganizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: true,
      loggingUser: false,
      errorLogin: false,
      loginForm: {
        email: '',
        password: '',
      }
    }
  }

    componentWillReceiveProps(nextProps) {
        if(this.state.loggingUser) {
            if(nextProps.organization.isLoggingError) {
              this.setState({
                  errorLogin: true,
                  loggingUser: false
              })
            }
            else if(!isNil(nextProps.organization.organization)) {
                cookie.save('orgnization', nextProps.organization.organization.userId)
                Router.push({
                    pathname: '/organization'
                })
            }
            
        }
    }


  handleLoginSubmit() {
      const { email, password } = this.state.loginForm
      const userData = { email, password }
      this.props.organizationLogin(userData)
      this.setState({
          loggingUser: true
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

  render() {
    const { loggingUser, errorLogin } = this.state
    return (
      <div className="login-page login-organization">
        <div className="login-form">
          <SiteLogo />
            <Segment className="notice" color='teal'><Icon name="announcement" />สำหรับองค์กรการกุศลเท่านั้น</Segment>
            {
              <Form>
                <FormInput onChange={this.handleLoginChange} autocomplete="off" label="อีเมล์" name="email" required />
                <FormInput onChange={this.handleLoginChange} label="รหัสผ่าน" name="password" type="password" required />
                <Button fluid loading={ loggingUser }  className="login-button" color="green" onClick={this.handleLoginSubmit.bind(this)}>เข้าสู่ระบบ</Button>    
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
    organization: state.organization
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    organizationLogin: (userData) => {
        dispatch(organizationLogin(userData))
    }
  }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(LoginOrganizationPage)
