import React, { Component } from 'react'
import { Table, Image, Header } from 'semantic-ui-react'

const PaymentTable = ({ organizations }) => {
    return (
        <Table basic className="payment-table">
            <Table.Body>
                {
                    organizations.map((organization) => (
                        <Table.Row>
                            <Table.Cell>
                                <Image src={'static/OrganizationImage1.jpg'} size="medium" />
                            </Table.Cell>
                            <Table.Cell className="content">
                                <p className="header">{ organization.name }</p>
                                <p className="description">เพราะโรงเรียนไม่มีเครื่องกรองน้ำ เราจึงอยากร่วมมอบเครื่องกรองน้ำเพื่อผลิตน้ำดื่มสะอาดให้เด็กนักเรียนโรงเรียนวัดคลองห้า จังหวัดสระบุรี</p>
                                <p><span className="price">จำนวนเงิน : { organization.value } บาท</span> ธ.กสิกรไทย สาขา ลาดพร้าว</p>
                                <p>เลขบัญชี : 123-4-56789-0</p>
                            </Table.Cell>
                            <Table.Cell>
                                <Image src={'static/qr.jpg'} className="qr-code" />
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default PaymentTable 