import React, { Component } from 'react'
import { Table, Image, Progress } from 'semantic-ui-react'

const HelpingTable = (props) => {
    return (
        <Table basic className="helping-table">
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Image src={'static/OrganizationImage1.jpg'} size="medium" />
                    </Table.Cell>
                    <Table.Cell className="content">
                        <p className="header">1 Help 1 Life: น้ำสะอาดให้น้องดื่ม</p>
                        <p className="description">เพราะโรงเรียนไม่มีเครื่องกรองน้ำ เราจึงอยากร่วมมอบเครื่องกรองน้ำเพื่อผลิตน้ำดื่มสะอาดให้เด็กนักเรียนโรงเรียนวัดคลองห้า จังหวัดสระบุรี</p>
                        <p className="helping">ยอดช่วยเหลือ : 25000 บาท</p>
                        <Progress percent={75} size="small" color="orange"/>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default HelpingTable 