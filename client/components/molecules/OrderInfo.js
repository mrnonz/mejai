import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const OrderInfo = ({ order }) => (
    <Table basic className="order-info-table">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell singleLine>รายละเอียด</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell className="cell-header">
                    วันที่ :
                </Table.Cell>
                <Table.Cell className="cell-item">
                    { order.CreatedAt }
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell className="cell-header">
                   สถานะ :
                </Table.Cell>
                <Table.Cell className="cell-item">
                    { order.OrderStatus }
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell className="cell-header">
                   ที่อยู่การจัดส่ง :
                </Table.Cell>
                <Table.Cell className="cell-item">
                    { order.Address }
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)

export default OrderInfo