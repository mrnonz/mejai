import React, { Component } from 'react'
import cookie from 'react-cookie'
import { isNil, isEmpty } from 'lodash'
import { Grid, Header, Form, Select, Icon, Button, Table, Transition } from 'semantic-ui-react'

class PaymentForm extends Component {
    constructor(props) {
        super(props);
        const hasPromptPay = !isEmpty(this.props.bank.promptPay)
        const hasbankAccount = !isEmpty(this.props.bank.bankAccount)
        const bankAccount = this.props.bank.bankAccount.map((account) => ({
            bank_name: account.name,
            bank_bank: account.bankId,
            bank_number: account.number,
            bank_branch: account.branch
        }))
        this.state = {
            promptpay_name: hasPromptPay ? this.props.bank.promptPay[0].name : '',
            promptpay_value: hasPromptPay ? this.props.bank.promptPay[0].number : '',
            hasPromptPay,
            bankAccount: hasbankAccount ? bankAccount : []
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
        this.props.onSubmitPayment()
    }

    handleSubmitBankAccount = () => {
        const organizationId = cookie.load('organizationId')
        const { bankAccount } = this.state
        const data = { 
            accounts: bankAccount.map((account) => ({
                name: account.bank_name,
                number: account.bank_number,
                bankId: account.bank_bank,
                branch: account.bank_branch 
            }))
        }
        this.props.onSubmitBankAccount(organizationId, data)
        this.props.onSubmitPayment()
    }

    render() {
        const { promptpay_name, promptpay_value, bankAccount } = this.state
        const { bankList, isUpdatingPayment } = this.props
        const banks = bankList.map((bank) => ({
            text: bank.name_th,
            value: bank.bankId
        }))
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
                    <Button color="green" size="large" loading={isUpdatingPayment} onClick={this.handleSubmitPromptPay} >บันทึก</Button>
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
                                    defaultValue={account.bank_name}
                                    placeholder="ชื่อ นามสกุลที่ของบัญชี"
                                    onChange={(e, value) => this.handleBankChange(e, value, index)}
                                />
                                <Form.Field
                                    fluid required
                                    control={Select}
                                    label='ธนาคาร' 
                                    name="bank_bank"
                                    defaultValue={+account.bank_bank} 
                                    placeholder="ธนาคาร"
                                    options={banks}
                                    onChange={(e, value) => this.handleBankChange(e, value, index)}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input 
                                    fluid required
                                    label='เลขบัญชี' 
                                    name="bank_number" 
                                    defaultValue={account.bank_number}
                                    placeholder="เลขบัญชีของคุณ"
                                    onChange={(e, value) => this.handleBankChange(e, value, index)}
                                />
                                <Form.Input 
                                    fluid required
                                    label='สาขา' 
                                    name="bank_branch" 
                                    defaultValue={account.bank_branch}
                                    placeholder="สาขาธนาคารบัญชีของคุณ"
                                    onChange={(e, value) => this.handleBankChange(e, value, index)}
                                />
                            </Form.Group>
                            <Form.Group className="delete-container">
                                <Button content='ลบบัญชี' type="button" color="red" size="tiny" onClick={() => this.handleDeleteBankAccount(index)} icon='trash' labelPosition='left' />
                            </Form.Group>
                        </div>
                    ))}
                    <Button color="green" loading={isUpdatingPayment} size="large" onClick={this.handleSubmitBankAccount} >บันทึก</Button>
                    <Button color="teal" loading={isUpdatingPayment} type="button" size="large" onClick={this.handleAddBankAccount} >เพิ่มบัญชี</Button>
                </Form>
            </div>
        )
    }
}

export default PaymentForm