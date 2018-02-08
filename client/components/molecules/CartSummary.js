import React, { Component } from 'react'
import { Table, Image, Button } from 'semantic-ui-react'

const CartSummary = () => {
    return (
        <div className="cart-summary">
            <Table basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>สรุป</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Image src={'static/OrganizationImage1.jpg'} size="small" />
                        </Table.Cell>
                        <Table.Cell className="cell-item">
                            <p>1 Help 1 Life: น้ำสะอาดให้น้องดื่ม</p>
                            <p className="item">จาก: เสื้อสีดำ</p>
                            <p className="price">450 บาท</p>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="summary-row">
                        <Table.Cell verticalAlign="top">
                            <p>ยอดสุทธิ</p>
                        </Table.Cell>
                        <Table.Cell textAlign="right">
                            <p className="price">690 บาท</p>
                            <Button color="teal">ดำเนินการต่อ</Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default CartSummary