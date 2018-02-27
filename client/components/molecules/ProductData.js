import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Progress, Header, Input } from 'semantic-ui-react'
import { fetchRepo } from '../../stores/actions/mock';

class ProductData extends Component {
    constructor(props){
        super(props)
        this.state = {
            showPriceInput: false
        }
    }
    render() {
        const { showPriceInput } = this.state
        return (
            <div className="product-data">
                <Header as="h2">เสื้อสีน้ำเงิน</Header>
                <Header as="h3" color="grey">ราคาปัจจุบัน</Header>
                <p className="price">150 บาท</p>
                <Header as="h3" color="grey">องค์กรที่ช่วยเหลือ</Header>
                <p>1 Help 1 Life : น้ำสะอาดให้น้องดื่ม</p>
                <Header as="h3" color="grey">ระยะเวลา</Header>
                <p>3 วัน 4 ขั่วโมง</p>
                <div className="data-auction" >
                    <Progress percent={75} size="small" color="orange"/>
                    { showPriceInput ? 
                        <Input className="auction-form" size="huge" action={{ color:"teal", size:"huge", content: "ประมูล" }} placeholder='ราคาของคุณ' /> : 
                        <Button color="teal" size="huge" fluid>ร่วมประมูล</Button> 
                    }
                </div>
            </div>
        )
    }
}

export default ProductData