import React, { Component } from 'react'
import { Table, Image, Button } from 'semantic-ui-react'
import { reduce, find, remove } from 'lodash'

const CartSummary = ({ organizations, showButton = true, onSubmit }) => {
    const helpSummary = reduce(organizations, (sum, o) => (sum + o.value), 0)
    return (
        <div className="cart-summary">
            <div className="content-wrapper">
                <Table basic>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>สรุป</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { organizations.map((organization) => (
                            <Table.Row>
                                <Table.Cell>
                                    <Image src={organization.thumbnail} size="small" />
                                </Table.Cell>
                                <Table.Cell className="cell-item">
                                    <p>{ organization.name }</p>
                                    <p className="item">จาก: { organization.items.join(', ') }</p>
                                    <p className="price">{ organization.value.toFixed(2) } บาท</p>
                                </Table.Cell>
                            </Table.Row>
                        )) }
                    </Table.Body>
                </Table>
            </div>
            <Table basic className="summary-table">
                <Table.Row />
                <Table.Row className="summary-row">
                    <Table.Cell verticalAlign="top">
                        <p>ยอดสุทธิ</p>
                    </Table.Cell>
                    <Table.Cell textAlign="right">
                        <p className="price">{ helpSummary.toFixed(2) } บาท</p>
                        { showButton && <Button onClick={() => onSubmit()} color="teal">ดำเนินการต่อ</Button> }
                    </Table.Cell>
                </Table.Row>
            </Table>
        </div>
    )
}

export default CartSummary