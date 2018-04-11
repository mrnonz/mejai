import React, { Component } from 'react'
import { Table, Image, Progress } from 'semantic-ui-react'

const HelpingTable = ({ organization, hideLabel }) => {
    return (
        <Table basic className="helping-table" fixed>
            { !hideLabel &&
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>องค์กรที่ช่วยเหลือ</Table.HeaderCell>
                    <Table.HeaderCell width={6} ></Table.HeaderCell>
                    <Table.HeaderCell width={2}></Table.HeaderCell>
                    <Table.HeaderCell width={3}></Table.HeaderCell>
                </Table.Row>
            </Table.Header> }
            <Table.Body>    
                <Table.Row>
                    <Table.Cell width={5}>
                        <Image src={'static/OrganizationImage1.jpg'} size="medium" />
                    </Table.Cell>
                    <Table.Cell  className="content">
                        <p className="header">{organization.name}</p>
                        <p className="description">{organization.description}</p>
                        <p className="helping"><span>จำนวนเงิน: 450 บาท</span> ธ.กสิกรไทย สาขา ลาดกระบัง</p>
                        <p className="helping">เลขบัญชี: 123-4-56789-0</p>
                    </Table.Cell>
                    <Table.Cell  className="content">
                        <Image src={'static/qr.jpg'} size="small" />
                    </Table.Cell>
                    <Table.Cell  verticalAlign="middle" className="content">
                        <p className="description">รายละเอียด PromptPay</p>
                        <p className="helping"><span>จำนวนเงิน: 450 บาท</span> ธ.กสิกรไทย สาขา ลาดกระบัง</p>
                        <p className="helping">เลขบัญชี: 123-4-56789-0</p>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default HelpingTable 