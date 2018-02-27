import React from 'react'
import Router from 'next/router'
import { Table, Header } from 'semantic-ui-react'

const handleRowClick = () => {
    Router.push({
        pathname: '/order'
    })
}

const OrderTable = (props) => (
    <Table basic className="order-table">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ประวัติ 2 รายการ</Table.HeaderCell>
                <Table.HeaderCell>สถานะ</Table.HeaderCell>
                <Table.HeaderCell>วันที่</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row onClick={() => handleRowClick()}>
                <Table.Cell>
                    <Header color="blue" as='h4'>หมายเลข #1458</Header>
                </Table.Cell>
                <Table.Cell>
                    <p className="wait">รอการยืนยัน</p>
                </Table.Cell>
                <Table.Cell>
                    <p>3 มกราคม 2018 12.00 น.</p>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header color="blue" as='h4'>หมายเลข #1351</Header>
                </Table.Cell>
                <Table.Cell>
                    <p className="success">สำเร็จ</p>
                </Table.Cell>
                <Table.Cell>
                    <p>3 มกราคม 2018 12.00 น.</p>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header color="blue" as='h4'>หมายเลข #1051</Header>
                </Table.Cell>
                <Table.Cell>
                    <p className="success">สำเร็จ</p>
                </Table.Cell>
                <Table.Cell>
                    <p>3 มกราคม 2018 12.00 น.</p>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)

export default OrderTable