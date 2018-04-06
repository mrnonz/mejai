import React, { Component } from 'react'
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
        const options = [
            {
              key: 1,
              text: 'Mobile',
              value: 1,
              content: <Header icon='mobile' content='Mobile' subheader='The smallest size' />,
            },
            {
              key: 2,
              text: 'Tablet',
              value: 2,
              content: <Header icon='tablet' content='Tablet' subheader='The size in the middle' />,
            },
            {
              key: 3,
              text: 'Desktop',
              value: 3,
              content: <Header icon='desktop' content='Desktop' subheader='The largest size' />,
            },
        ]
        return (
            itemType === 'buy' ? 
            <div className="product-data">
                <Header as="h2">{ product.name }</Header>
                <Header as="h3" color="grey">ราคา</Header>
                <p className="price">{ product.price } บาท</p>
                <Header as="h3" color="grey">องค์กรที่ช่วยเหลือ</Header>
                <p>{ product.organization.name }</p>
                <Header as="h3" color="grey">ขนาด</Header>
                <Dropdown
                    selection
                    fluid
                    options={options}
                    placeholder='Choose an option'
                />
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