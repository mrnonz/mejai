import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Progress, Header, Input } from 'semantic-ui-react'

class ProductData extends Component {
    constructor(props){
        super(props)
        this.state = {
            showPriceInput: false
        }
    }
    render() {
        const { showPriceInput } = this.state
        const { product, itemType, onAdd } = this.props
        const renderData = () => {
            if(itemType === 'buy') {
                return [
                    <Button 
                        color="teal" 
                        size="huge" 
                        fluid
                        onClick={() => onAdd(product.productId)}
                        content="เพิ่มลงตะกร้า"
                    />
                ]
            } else {
                return [
                    <Header as="h3" color="grey">ระยะเวลา</Header>,
                    <p>3 วัน 4 ขั่วโมง</p>,
                    <div className="data-auction" >
                        <Progress percent={75} size="small" color="orange"/>
                        { showPriceInput ? 
                            <Input className="auction-form" size="huge" action={{ color:"teal", size:"huge", content: "ประมูล" }} placeholder='ราคาของคุณ' /> : 
                            <Button color="teal" size="huge" fluid>ร่วมประมูล</Button> 
                        }
                    </div>
                ]
            }
        }
        return (
            <div className="product-data">
                <Header as="h2">{ product.name }</Header>
                <Header as="h3" color="grey">ราคาปัจจุบัน</Header>
                <p className="price">{ product.price } บาท</p>
                <Header as="h3" color="grey">องค์กรที่ช่วยเหลือ</Header>
                <p>{ product.organization.name }</p>
                { renderData() }
            </div>
        )
    }
}

export default ProductData