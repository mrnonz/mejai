import React, { Component } from 'react'
import { isNil } from 'lodash'
import Svg from 'react-inlinesvg'
import { Table, Image, Header, Loader } from 'semantic-ui-react'
import QuantityInput from 'molecules/QuantityInput'
class ItemTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items, editable, onEdit, onDelete, isUpdating = false } = this.props
        return (
            <Table basic className="item-table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>สินค้า {items.length} ชิ้น</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { items.map((item) => {
                        if (isNil(item.product)) return null
                        const { product: { itemId, name, auction, organization = {}, thumbnail }, productAttribute, price, quantity } = item
                        return (
                            <Table.Row>
                                <Table.Cell>
                                    <Image src={thumbnail} size="small" />
                                </Table.Cell>
                                <Table.Cell className="cell-item">
                                    <Header as='h4'>{name}</Header>
                                    { productAttribute && <p>{productAttribute.name}: {productAttribute.value}</p> }
                                    <p>ช่วยเหลือ: { organization.name }</p>
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                    <p>จำนวน</p>
                                    <QuantityInput
                                        item={item}
                                        onEdit={onEdit}
                                        editable={!auction && editable}
                                        quantity={quantity} 
                                        isUpdating = {isUpdating}
                                    />
                                </Table.Cell>
                                <Table.Cell className="cell-price" textAlign="center">
                                    <p>ราคา</p>
                                    <p className="price">{(quantity * price).toFixed(2)} บาท</p>
                                </Table.Cell>
                                { editable && <a onClick={() => onDelete(item)}><Svg className="delete-icon" src={`static/icons/close.svg`} /></a> }
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