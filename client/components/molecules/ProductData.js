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

    handleShowPriceInput() {
        this.setState({
            showPriceInput: true,
            selectAttribute: 0
        })
    }

    handlePriceSubmit() {
        this.setState({
            showPriceInput: false
        })
    }

    handleAttributeChange(e, data) {
        this.setState({
            selectAttribute: data.value
        })
    }

    render() {
        const { showPriceInput, selectAttribute } = this.state
        const { product, itemType, onAdd } = this.props
        const productOptions = !isEmpty(product.attributes) && product.attributes.map((attribute, index) => ({
            key: index,
            text: attribute.value,
            value: index
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
                        onChange={this.handleAttributeChange.bind(this)}
                        placeholder='เลือกคุณสมบัติของสินค้า'
                    />
                }
                <Button 
                    color="teal" 
                    size="huge" 
                    fluid
                    onClick={() => onAdd(product.productId, selectAttribute)}
                    content="เพิ่มลงตะกร้า"
                />
            </div>
            :
            <div className="product-data">
                <Header as="h2">{ product.name }</Header>
                <Header as="h3" color="grey">ราคาปัจจุบัน</Header>
                <p className="price">250 บาท</p>
                <Header as="h3" color="grey">องค์กรที่ช่วยเหลือ</Header>
                <p>{ product.organization.name }</p>
                <Header as="h3" color="grey">ระยะเวลาที่เหลือ</Header>
                <p>30 นาที</p>
                <div className="data-auction" >
                    <Progress percent={90} size="small" color="orange"/>
                    { showPriceInput ? 
                        <Input 
                            className="auction-form" 
                            size="huge" 
                            action={{ color:"teal", size:"huge", content: "ประมูล", onClick:this.handlePriceSubmit.bind(this) }} 
                            placeholder='กรอกราคา' 
                        /> : 
                        <Button color="teal" size="huge" onClick={this.handleShowPriceInput.bind(this)} fluid>ร่วมประมูล</Button> 
                    }
                </div>
            </div>
        )
    }
}

export default ProductData