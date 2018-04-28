import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import { Table, Image, Progress } from 'semantic-ui-react'
import { generatePayload } from 'utils/promptpay'
import BankModel from 'stores/models/BankModel'
import QRCode from 'qrcode.react'

const HelpingTable = ({ organization, hideLabel, price, hidePrice, bank }) => {
    return (
        <Table basic className="helping-table" fixed>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={5} singleLine>{ !hideLabel && "องค์กรที่ช่วยเหลือ" }</Table.HeaderCell>
                    <Table.HeaderCell width={4} />
                    <Table.HeaderCell width={3}></Table.HeaderCell>
                    <Table.HeaderCell width={4}></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>    
                <Table.Row>
                    <Table.Cell>
                        <Image src={organization.thumbnail} size="medium" />
                    </Table.Cell>
                    <Table.Cell  className="content">
                        <p className="header">{organization.name}</p>
                        <p className="description">{organization.description}</p>                         
                    </Table.Cell>
                    <Table.Cell className="content" textAlign="right" >
                    {console.log(price)}
                        { !isEmpty(bank.promptPay) ? 
                        <div>
                            <QRCode value={generatePayload(bank.promptPay[0].number, +price)} />
                            <p className="description">ชื่อบัญชี: {bank.promptPay[0].name}</p>
                        </div> :
                            <Image src={'static/qr.jpg'} size="small" inline /> }
                    </Table.Cell>
                    <Table.Cell  verticalAlign="middle" className="content">
                        {bank.bankAccount.map((account) => {
                            const bankName = new BankModel(account.bankId).BankName
                            return (
                                <div className="bank-detail">
                                    <p className="bank-name">ธนาคาร{bankName} สาขา{account.branch}</p>
                                    <p>{account.name} เลขบัญชี: <span className="account-number">{account.number}</span></p>
                                </div>
                            )
                        })}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default HelpingTable 