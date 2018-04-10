import React, { Component } from 'react'
import { Table, Image, Progress } from 'semantic-ui-react'

const HelpingTable = ({ organization, hideLabel }) => {
    return (
        <Table basic className="helping-table" fixed>
            { !hideLabel &&
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>องค์กรที่ช่วยเหลือ</Table.HeaderCell>
                </Table.Row>
            </Table.Header> }
            <Table.Body>    
                <Table.Row>
                    <Table.Cell width={5}>
                        <Image src={'static/OrganizationImage1.jpg'} size="medium" />
                    </Table.Cell>
                    <Table.Cell width={11} className="content">
                        <p className="header">{organization.name}</p>
                        <p className="description">{organization.description}</p>
                        <p className="helping">ยอดช่วยเหลือ : 25000 บาท</p>
                        <Progress percent={75} size="small" color="orange"/>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default HelpingTable 