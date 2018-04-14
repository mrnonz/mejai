import React, { Component } from 'react'
import { Card, Button, Image, Popup } from 'semantic-ui-react'

const OrganizationCard = ({ data, onInfoClick, onHelpClick, type }) => {
    const helpButtonGroup = () => (
        <div>
            <Button color="green"  onClick={() => onHelpClick(data.organizationId, 'buy')} icon >ซื้อสินค้า</Button>
            <Button color="teal"  onClick={() => onHelpClick(data.organizationId, 'auction')} icon >ประมูลสินค้า</Button>
        </div>
    )

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
                    <Button basic color="orange" fluid onClick={() => onInfoClick(data.organizationId, null)}>รายละเอียด</Button>
                    { type === 'seller' ? <Button color="teal" fluid onClick={() => onHelpClick(data.organizationId)}>ช่วยเหลือ</Button> :
                        <Popup
                            trigger={<Button color="teal" fluid>ช่วยเหลือ</Button>}
                            content={helpButtonGroup()}
                            on='click'
                            hideOnScroll
                        />
                    }
                </div>
            </Card.Content>
        </Card>
    )
}

export default OrganizationCard