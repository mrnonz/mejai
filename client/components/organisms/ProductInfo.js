import React, { Component } from 'react'
import { Menu, Segment, Header, Image, Grid } from 'semantic-ui-react'
import organization from 'stores/mock/organization.json'

class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: 'helping'
        }
    }

    handleMenuClick = (name) => {
    this.setState({
            menuActive: name
        })
    }

    render() {
        const { menuActive } = this.state
        return (
            <div className="product-info">
                <Menu>
                    <Menu.Item
                        name='info'
                        active={'info' === menuActive}
                        onClick={()=>this.handleMenuClick('info')}
                    >
                        รายละเอียด
                    </Menu.Item>
                    <Menu.Item
                        name='helping'
                        active={'helping' === menuActive}
                        onClick={()=>this.handleMenuClick('helping')}
                    >
                        ช่วยเหลือ
                    </Menu.Item>
                </Menu>
                { menuActive === 'helping' && (
                    <Grid container>
                        <Grid.Row>
                            <Header as="h3">1 Help 1 Life : น้ำสะอาดให้น้องดื่ม</Header>
                        </Grid.Row>
                        <Grid.Row centered columns={2}>
                            <Grid.Column>
                                <Image src="static/OrganizationImage1.jpg" size="large"/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Segment className="helping-content">
                                {organization.data[0].info.map((paragraph) => (
                                    <p>{paragraph}</p>
                                ))}
                            </Segment>    
                        </Grid.Row>
                    </Grid>
                )}
            </div>
        )
    }
}

export default ProductInfo