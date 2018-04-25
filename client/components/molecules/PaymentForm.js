import React, { Component } from 'react'
import cookie from 'react-cookie'
import { isNil, isEmpty } from 'lodash'
import { Grid, Header, Form, Select, Icon, Button, Table, Transition } from 'semantic-ui-react'

class PaymentForm extends Component {
    constructor(props) {
        super(props);
        const hasPromptPay = !isEmpty(this.props.bank.promptPay) 
        this.state = {
            promptpay_name: hasPromptPay ? this.props.bank.promptPay[0].name : '',
            promptpay_value: hasPromptPay ? this.props.bank.promptPay[0].number : '',
            hasPromptPay,
            bankAccount: []
        }        
    }

    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        })
    }

    handleBankChange(e, { name, value }, index) {
        const { bankAccount } = this.state
        bankAccount[index] = {
            ...bankAccount[index],
            [name]: value
        }
        this.setState({
            bankAccount
        })
    }

    handleAddBankAccount = () => {
        const { bankAccount } = this.state
        bankAccount.push({
            bank_name: '',
            bank_bank: '',
            bank_number: '',
            bank_branch: ''
        })
        this.setState({ bankAccount })
    }

    handleDeleteBankAccount = (index) => {
        const { bankAccount } = this.state   
        bankAccount.splice(index, 1);
        this.setState({ bankAccount })
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
        const { promptpay_name, promptpay_value, bankAccount } = this.state
        const isMaxAccount = bankAccount.length <= 5
        return (
            <div className="payment-form">
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
                <Header as='h4' color="orange" >
                    ข้อมูลบัญชีธนาคาร
                </Header>
                <Form>
                    { bankAccount.map((account, index) => (
                        <div>
                            <Form.Group widths='equal'>
                                <Form.Input 
                                    fluid required
                                    label='ชื่อ - สกุล' 
                                    name="bank_name" 
                                    placeholder="ชื่อ นามสกุลที่ของบัญชี"
                                    onChange={(e, value) => this.handleBankChange(e, value, index)}
                                />
                                <Form.Input 
                                    fluid required
                                    label='ธนาคาร' 
                                    name="bank_bank" 
                                    placeholder="ธนาคาร"
                                    onChange={(e, value) => this.handleBankChange(e, value, index)}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input 
                                    fluid required
                                    label='เลขบัญชี' 
                                    name="bank_number" 
                                    placeholder="เลขบัญชีของคุณ"
                                    onChange={(e, value) => this.handleBankChange(e, value, index)}
                                />
                                <Form.Input 
                                    fluid required
                                    label='สาขา' 
                                    name="bank_branch" 
                                    placeholder="สาขาธนาคารบัญชีของคุณ"
                                    onChange={(e, value) => this.handleBankChange(e, value, index)}
                                />
                            </Form.Group>
                            <Form.Group className="delete-container">
                                <Button content='ลบบัญชี' type="button" color="red" size="tiny" onClick={() => this.handleDeleteBankAccount(index)} icon='trash' labelPosition='left' />
                            </Form.Group>
                        </div>
                    ))}
                    <Button color="green" size="large" onClick={this.handleSubmit}>บันทึก</Button>
                    <Button color="teal" type="button" size="large" onClick={this.handleAddBankAccount} >เพิ่มบัญชี</Button>
                </Form>
            </div>
        )
    }
}

export default PaymentForm