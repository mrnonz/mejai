import React, { Component } from 'react'
import moment from 'moment'
import { Form, Select, Button, Table, Transition } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import UploadForm from 'molecules/UploadForm'

class AuctionForm extends Component {
    constructor(props) {
        super(props);
        moment.locale('th')
        this.state = {
            selectedTime: null
        }
    }

    handleDateChange(date) {
        this.setState({
            selectedTime: date
        })
        this.props.onChange(null, {
            name: 'exp_time',
            value: date._d
        })
    }

    render() {
        const displayTime = this.state.selectedTime ? moment(this.state.selectedTime).format("D MMMM YYYY, HH:mm") : null
        const DateForm = (props) => (
            <Form.Input label='เวลาสิ้นสุด' value={displayTime} placeholder='เวลาสิ้นสุดการประมูล' onClick={props.onClick} />
        )
        const { onChange, onFileUpload } = this.props
        const categoriesOption = [
            {
                key: 'wearable',
                text: 'เครื่องแต่งกาย',
                value: 1
            },
            {
                key: 'electronic',
                text: 'เครื่องใช้ไฟฟ้า',
                value: 2
            },
            {
                key: 'health',
                text: 'สุขภาพ',
                value: 3
            },
            {
                key: 'furniture',
                text: 'เฟอร์นิเจอร์',
                value: 4
            },
            {
                key: 'book',
                text: 'หนังสือ',
                value: 5
            }
        ]

        return (
            <Form className="auction-form">
                <Form.Group widths='equal'>
                    <Form.Input required fluid name="name" label='ชื่อสินค้า' placeholder='สินค้าของคุณ เช่น กระเป๋า' onChange={onChange} />
                    <Form.Field required control={Select} fluid name="category" options={categoriesOption} label='หมวดหมู่' placeholder='ประเภทสินค้า' onChange={onChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Input required name="price" width={4} label='ราคาเริ่มต้น' placeholder='ราคาเริ่มต้นเมื่อการประมูลเริ่ม' onChange={onChange} />
                    <Form.Input required name="price_step" width={4} label='ขั้นของราคา' placeholder='ราคาขั้นต่ำต่อครั้งการประมูล' onChange={onChange} />
                    <DatePicker
                        name="exp_time"
                        selected={this.state.selectedTime}
                        inputClassName="field" 
                        customInput={<DateForm />}
                        showTimeSelect
                        timeFormat="HH:mm"
                        onChange={(date)=>this.handleDateChange(date)}
                    />
                </Form.Group>
                <UploadForm 
                    label="คุณยังไม่มีรูปภาพสินค้าของคุณ" 
                    fileLimit={5} 
                    onFileUpload={onFileUpload}
                />
                <Form.TextArea name="info" label="รายละเอียด" placeholder="ข้อมูลเพิ่มเติมสินค้าของคุณ" onChange={onChange} />
            </Form>
        )
    }
}

export default AuctionForm