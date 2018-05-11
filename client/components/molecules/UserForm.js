import React, { Component } from 'react'
import { isNil } from 'lodash'
import { Grid, Header, Form, Select, Button, Table, Transition } from 'semantic-ui-react'
import ShippingForm from 'molecules/ShippingForm'
import UserAddress from 'stores/models/UserAddress'

class UserForm extends Component {
    constructor(props) {
        super(props);

        const userAddress = new UserAddress(this.props.user.address)
        this.state = {
            firstname: userAddress.firstname,
            lastname: userAddress.lastname,
            name: userAddress.name,
            tel: userAddress.tel,
            district: userAddress.district,
            subDistrict: userAddress.subDistrict,
            province: userAddress.province,
            postcode: userAddress.postcode
        }
    }

    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        const { first_name, last_name, name, tel, district, subDistrict, province, postcode } = this.state
        const address = `${name.split(' ')[0]}\\${name.split(' ')[1]}\\${district}\\${subDistrict}\\${province}\\${postcode}\\${tel}`
        const detail = {
            first_name,
            last_name,
            address
        }
        this.props.onSubmit(detail)
    }

    render() {
        const { user = {} } = this.props
        const userAddress = new UserAddress(user.address)
        return (
            <Form>
                <Header as='h4' color="orange" >
                    ข้อมูลผู้ใช้
                </Header>
                <Form.Group widths='equal'>
                    <Form.Input 
                        required fluid
                        label='ชื่อจริง' 
                        name="first_name" 
                        defaultValue={user.firstname} 
                        onChange={this.handleChange}
                    />
                    <Form.Input 
                        required fluid
                        label='นามสกุล' 
                        name="last_name" 
                        defaultValue={user.lastname} 
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Header as='h4' color="orange" >
                    ข้อมูลการจัดส่ง
                </Header>
                <ShippingForm address={userAddress} onChange={this.handleChange} />
                <Button color="green" size="large" onClick={this.handleSubmit} >บันทึก</Button>
            </Form>
        )
    }
}

export default UserForm