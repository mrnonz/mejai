import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { Button, Progress, Header, Input, Dropdown } from 'semantic-ui-react'

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
        const productOptions = !isEmpty(product.attributes) && product.attributes.map((attribute, index) => ({
            key: index,
            text: attribute.value,
            value: attribute.value
        }))
        return (
            itemType === 'buy' ? 
            <div className="product-data">
                <Header as="h2">{ product.name }</Header>
                <Header as="h3" color="grey">ราคา</Header>
                <p className="price">{ product.price } บาท</p>
                <Header as="h3" color="grey">องค์กรที่ช่วยเหลือ</Header>
                <p>{ product.organization.name }</p>
                {
                    !isEmpty(product.attributes) && <Header as="h3" color="grey">{ product.attributes[0].name }</Header>
                }
                {
                    !isEmpty(product.attributes) && 
                    <Dropdown
                        selection
                        fluid
                        options={productOptions}
                        placeholder='เลือกคุณสมบัติของสินค้า'
                    />
                }
                <Button 
                    color="teal" 
                    size="huge" 
                    fluid
                    onClick={() => onAdd(product.productId)}
                    content="เพิ่มลงตะกร้า"
                />
            </div>
            :
            <div className="product-data">
                <Header as="h2">{ product.name }</Header>
                <Header as="h3" color="grey">ราคาปัจจุบัน</Header>
                <p className="price">{ product.price } บาท</p>
                <Header as="h3" color="grey">องค์กรที่ช่วยเหลือ</Header>
                <p>{ product.organization.name }</p>
                <Header as="h3" color="grey">ระยะเวลา</Header>,
                <p>3 วัน 4 ขั่วโมง</p>,
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