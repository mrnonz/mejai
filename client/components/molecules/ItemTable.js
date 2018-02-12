import React, { Component } from 'react'
import Svg from 'react-inlinesvg'
import { Table, Image, Header } from 'semantic-ui-react'

class ItemTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items, editable } = this.props
        return (
            <Table basic className="item-table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>สินค้า {items.length} ชิ้น</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { items.map((item) => {
                        const { product: { name, attribute }, organization, price, quantity } = item
                        return (
                            <Table.Row>
                                <Table.Cell>
                                    <Image src={'static/shirt1.jpeg'} size="small" />
                                </Table.Cell>
                                <Table.Cell className="cell-item">
                                    <Header as='h4'>{name}</Header>
                                    { attribute && <p>{attribute.name}: {attribute.value}</p> }
                                    <p>ช่วยเหลือ: {organization}</p>
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                    <p>จำนวน</p>
                                    {
                                        editable ?
                                        <div className="quantity-input">
                                            <a>-</a><span>{quantity}</span><a>+</a>
                                        </div>        
                                        :
                                        <div className="quantity-input">
                                            <span>{quantity}</span>
                                        </div>
                                    }
                                </Table.Cell>
                                <Table.Cell className="cell-price" textAlign="center">
                                    <p>ราคา</p>
                                    <p className="price">{quantity * price} บาท</p>
                                </Table.Cell>
                                <Table.Cell verticalAlign="top">
                                    <Svg src={`static/icons/close.svg`} />
                                </Table.Cell>
                            </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        )
    }
}

export default ItemTable