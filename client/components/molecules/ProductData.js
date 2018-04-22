import React, { Component } from 'react'
import moment from 'moment'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import cookie from 'react-cookie'
import { Button, Progress, Header, Input, Dropdown } from 'semantic-ui-react'

class ProductData extends Component {
    constructor(props){
        super(props)
        this.state = {
            showPriceInput: false,
            currentPrice: +this.props.product.auction.lastest_price + +this.props.product.auction.price_step
        }
    }

    handleShowPriceInput() {
        this.setState({
            showPriceInput: true,
            selectAttribute: 0
        })
    }

    handlePriceSubmit() {
        const { currentPrice: price } = this.state
        this.setState({
            showPriceInput: false
        })
        this.props.onBid(price)
    }

    handleAttributeChange(e, data) {
        this.setState({
            selectAttribute: data.value
        })
    }

    handleBidPrice(e, data) {
        this.setState({
            currentPrice: data.value
        })
    }

    render() {
        moment.locale('th')
        const { showPriceInput, selectAttribute } = this.state
        const { product, onAdd, currentTime } = this.props
        const userId = cookie.load('userId')
        const productOptions = !isEmpty(product.attributes) && product.attributes.map((attribute, index) => ({
            key: index,
            text: attribute.value,
            value: index
        }))
        return (
            !product.auction ? 
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
                <p className="price">{ product.auction.lastest_price } บาท</p>
                <Header as="h3" color="grey">องค์กรที่ช่วยเหลือ</Header>
                <p>{ product.organization.name }</p>
                <Header as="h3" color="grey">เวลาสิ้นสุดการประมูล</Header>
                <p>{ currentTime > product.auction.exp_time ? 'หมดเวลาการประมูล' : moment(product.auction.exp_time).format('LLL')}</p>
                <div className="data-auction" >
                    { showPriceInput ? 
                        <Input 
                            className="auction-form" 
                            size="huge" 
                            onChange={this.handleBidPrice.bind(this)}
                            action={{ color:"teal", size:"huge", content: "ประมูล", onClick:this.handlePriceSubmit.bind(this) }} 
                            placeholder={ `เพิ่มขั้นต่ำ ${product.auction.price_step} บาท` }
                        /> : 
                        userId == product.auction.userId ? 
                        <Button color="red" size="huge" fluid>ราคาของคุณ</Button> : 
                        currentTime > product.auction.exp_time ? <Button color="red" size="huge" fluid>สิ้นสุดการประมูล</Button> : <Button color="teal" size="huge" onClick={this.handleShowPriceInput.bind(this)} fluid>ร่วมประมูล</Button>
                    }
                </div>
            </div>
        )
    }
}

export default ProductData