import React, { Component } from 'react'
import { Table, Image, Button } from 'semantic-ui-react'
import { reduce, find, remove } from 'lodash'

const CartSummary = ({ items }) => {
    const organizationList = reduce(items, (organizations, item) => {
        const duplicateItem = find(organizations, (organization) => {
            return organization.name === item.organization
        })
        if(duplicateItem) {
            remove(organizations, (o) => o.name === duplicateItem.name)
            duplicateItem.items.push(item.product.name)
            organizations.push({
                name: duplicateItem.name,
                value: duplicateItem.value + item.price * item.quantity,
                items: duplicateItem.items
            })
            
            return organizations
        } else {
            organizations.push({
                name: item.organization,
                value: item.price * item.quantity,
                items: [item.product.name]
            })
            return organizations
        }
    }, [])
    const helpSummary = reduce(organizationList, (sum, o) => (sum + o.value), 0)
    return (
        <div className="cart-summary">
            <Table basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>สรุป</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { organizationList.map((organization) => (
                        <Table.Row>
                            <Table.Cell>
                                <Image src={'static/OrganizationImage1.jpg'} size="small" />
                            </Table.Cell>
                            <Table.Cell className="cell-item">
                                <p>{ organization.name }</p>
                                <p className="item">จาก: { organization.items.join(', ') }</p>
                                <p className="price">{ organization.value } บาท</p>
                            </Table.Cell>
                        </Table.Row>
                    )) }
                    <Table.Row className="summary-row">
                        <Table.Cell verticalAlign="top">
                            <p>ยอดสุทธิ</p>
                        </Table.Cell>
                        <Table.Cell textAlign="right">
                            <p className="price">{ helpSummary } บาท</p>
                            <Button color="teal">ดำเนินการต่อ</Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default CartSummary