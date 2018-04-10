import React from 'react'
import Router from 'next/router'
import { Table, Header } from 'semantic-ui-react'
import Order from 'stores/models/Order'

const OrderTable = ({ orders = [], handleOrderRowClick, isSeller = false }) => (
    <Table basic className="order-table">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>พบ { orders.length } รายการ</Table.HeaderCell>
                <Table.HeaderCell>สถานะ</Table.HeaderCell>
                <Table.HeaderCell>วันที่</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                orders.map((o) => {
                    const order = new Order(o)
                    return (
                    <Table.Row onClick={() => handleOrderRowClick(order.OrderId, isSeller)}>
                        <Table.Cell>
                            <Header color="blue" as='h4'>หมายเลข #{ order.OrderId }</Header>
                        </Table.Cell>
                        <Table.Cell>
                            <p className={ order.OrderStatusClass }>{ order.OrderStatus }</p>
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