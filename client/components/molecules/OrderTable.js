import React from 'react'
import Router from 'next/router'
import { Table, Header } from 'semantic-ui-react'
import Order from 'stores/models/Order'

const handleRowClick = (orderId) => {
    Router.push({
        pathname: '/order',
        query: {
            id: orderId
        }
    })
}
const OrderTable = ({ orders }) => (
    <Table basic className="order-table">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ประวัติ 2 รายการ</Table.HeaderCell>
                <Table.HeaderCell>สถานะ</Table.HeaderCell>
                <Table.HeaderCell>วันที่</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                orders.map((o) => {
                    const order = new Order(o)
                    return (
                    <Table.Row onClick={() => handleRowClick(order.OrderId)}>
                        <Table.Cell>
                            <Header color="blue" as='h4'>หมายเลข #{ order.OrderId }</Header>
                        </Table.Cell>
                        {/* TODO Change class according to status */}
                        <Table.Cell>
                            <p className="wait">{ order.OrderStatus }</p>
                        </Table.Cell>
                        <Table.Cell>
                            <p>{ order.CreatedAt }</p>
                        </Table.Cell>
                    </Table.Row>
                    )
                })
            }
        </Table.Body>
    </Table>
)

export default OrderTable