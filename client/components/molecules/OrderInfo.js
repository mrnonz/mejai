import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const OrderInfo = (props) => (
    <Table basic className="order-info-table">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>รายละเอียด</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell className="cell-header">
                   หมายเลขการสั่งซื้อ :
                </Table.Cell>
                <Table.Cell className="cell-item">
                    1458
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell className="cell-header">
                    วันที่ :
                </Table.Cell>
                <Table.Cell className="cell-item">
                    3 มกราคม 2018 12.00 น.
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell className="cell-header">
                   สถานะ :
                </Table.Cell>
                <Table.Cell className="cell-item">
                    รอการยืนยัน
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)

export default OrderInfo