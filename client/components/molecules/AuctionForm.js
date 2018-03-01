import React, { Component } from 'react'
import moment from 'moment'
import { Form } from 'semantic-ui-react'
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
    }

    render() {
        const displayTime = this.state.selectedTime ? moment(this.state.selectedTime).format("D MMMM YYYY, HH:mm") : null
        const DateForm = (props) => (
            <Form.Input label='เวลาสิ้นสุด' value={displayTime} placeholder='เวลาสิ้นสุดการประมูล' onClick={props.onClick} />
        )

        return (
            <Form className="auction-form">
                <Form.Group widths='equal'>
                    <Form.Input fluid label='ชื่อสินค้า' placeholder='สินค้าของคุณ เช่น กระเป๋า' />
                    <Form.Input fluid label='หมวดหมู่' placeholder='ประเภทสินค้า' />
                </Form.Group>
                <Form.Group>
                    <Form.Input width={8} label='ราคาเริ่มต้น' placeholder='ราคาเริ่มต้นเมื่อการประมูลเริ่ม' />
                    <DatePicker
                        selected={this.state.selectedTime}
                        inputClassName="field" 
                        customInput={<DateForm />}
                        showTimeSelect
                        timeFormat="HH:mm"
                        onChange={(date)=>this.handleDateChange(date)}
                    />
                </Form.Group>
                <UploadForm />
                <Form.TextArea label="รายละเอียด" placeholder="ข้อมูลเพิ่มเติมสินค้าของคุณ" />
               
            </Form>
        )
    }
}

export default AuctionForm