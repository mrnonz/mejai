import React, { Component } from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

const OrganizationCard = ({ data }) => {
    return (
        <Card className="organization-card">
            <Image src="static/OrganizationImage1.jpg" />
            <Card.Content>
                <Card.Header>
                    { data.title }
                </Card.Header>
                <Card.Description>
                    { data.description }
                </Card.Description>
                <div className="button-group">
                    <Button basic color="orange" fluid>รายละเอียด</Button>
                    <Button color="teal" fluid>ช่วยเหลือ</Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default OrganizationCard