import React, { Component } from 'react'
import Svg from 'react-inlinesvg'
import { Table, Image, Header } from 'semantic-ui-react'

class OrderItemCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item: { name, attribute, organization, quantity, price } } = this.props
        return (
            <Table basic className="item-table">
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Image src={'static/shirt1.jpeg'} size="small" />
                        </Table.Cell>
                        <Table.Cell className="cell-item">
                            <Header as='h4'>{name}</Header>
                            { attribute && <p>{attribute.name}: {attribute.value}</p> }
                            <p>ช่วยเหลือ: {organization.name}</p>
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                            <p>จำนวน</p>
                            <p>{ quantity }</p>
                        </Table.Cell>
                        <Table.Cell className="cell-price" textAlign="center">
                            <p>ราคา</p>
                            <p className="price">{(quantity * price).toFixed(2)} บาท</p>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}

export default OrderItemCard