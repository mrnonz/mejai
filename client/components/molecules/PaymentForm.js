import React, { Component } from 'react'
import cookie from 'react-cookie'
import { isNil, isEmpty } from 'lodash'
import { Grid, Header, Form, Select, Button, Table, Transition } from 'semantic-ui-react'

class PaymentForm extends Component {
    constructor(props) {
        super(props);
        const hasPromptPay = !isEmpty(this.props.bank.promptPay) 
        this.state = {
            promptpay_name: hasPromptPay ? this.props.bank.promptPay[0].name : '',
            promptpay_value: hasPromptPay ? this.props.bank.promptPay[0].number : '',
            hasPromptPay
        }        
    }

    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmitPromptPay = () => {
        const organizationId = cookie.load('organizationId')
        const { promptpay_name, promptpay_value, hasPromptPay } = this.state
        const data = {
            name: promptpay_name,
            number: promptpay_value 
        }
        this.props.onSubmitPromptPay(organizationId, data, !hasPromptPay)   
    }

    render() {
        const { promptpay_name, promptpay_value } = this.state
        return (
            <div>
                <Form>
                    <Header as='h4' color="orange" >
                        ข้อมูลระบบพร้อมเพย์ (PromptPay)
                    </Header>
                    <Form.Group widths='equal'>
                        <Form.Input 
                            fluid required
                            label='ชื่อ - สกุล' 
                            name="promptpay_name" 
                            placeholder="ชื่อ นามสกุลที่ใช่ในบัญชีระบบพร้อมเพย์ของคุณ"
                            defaultValue={promptpay_name}
                            onChange={this.handleChange}
                        />
                        <Form.Input 
                            fluid required
                            label='รหัสบัตรประชาชน หรือเบอร์โทรศัพท์' 
                            name="promptpay_value"
                            type="number" 
                            placeholder="รหัสบัตรประชาชน หรือเบอร์โทรศัพท์ที่ใช้สมัครระบบพร้อมเพย์"
                            defaultValue={promptpay_value}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button color="green" size="large" onClick={this.handleSubmitPromptPay} >บันทึก</Button>
                </Form>
                <Form>
                    <Header as='h4' color="orange" >
                        ข้อมูลบัญชีธนาคาร
                    </Header>
                    
                    <Button color="green" size="large" onClick={this.handleSubmit} >บันทึก</Button>
                </Form>
            </div>
        )
    }
}

export default PaymentForm