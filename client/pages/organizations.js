import React, { Component } from 'react'
import { Header, Container, Grid, Segment, Image, Button } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import Pagination from 'molecules/Pagination'
import OrganizationCategory from 'organisms/OrganizationCategory'
import OrganizationCard from 'molecules/OrganizationCard'
import organizations from 'stores/mock/organization.json'

class Organizations extends Component {
    constructor(props){
        super(props)

        this.state = {
            activeCategory: 0,
            organizationPage: 0,
            showInfo: false,
        }
    }

    handleCategoryClick = (index) => {
        this.setState({
            activeCategory: index,
            showInfo: false
        })
    }

    handlePageClick = (page) => {
        this.setState({
            organizationPage: page.selected
        })
    }

    handleInfoClick = () => {
        this.setState({
            showInfo: true
        })
    }

    handleHideInfo = () => {
        this.setState({
            showInfo: false
        })
    }

    render() {
        const { activeCategory, organizationPage, showInfo } = this.state
        const organizationCount = organizations.data.length
        const totalPage = Math.ceil(organizations.data.length / 12)
        const pageItems = organizations.data.slice(organizationPage * 12, organizationPage * 12 + 12)
        console.log(pageItems)
        const OrganizationList = () => [
            <div className="page-header">
                <Header as="h2">โครงการ</Header>
                <span>พบ { organizationCount } รายการ</span>
            </div>,
            <div className="organization-list">
                { pageItems.map((organization) => (
                    <OrganizationCard data={organization} onInfoClick={this.handleInfoClick}/>
                ))}
                <Pagination 
                    pageCount={totalPage}   
                    pageRangeDisplayed={4}
                    forcePage={organizationPage}
                    onPageChange={(page) => this.handlePageClick(page)}
                />
            </div>
        ]

        const OrganizationInfo = () => (
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
                        {pageItems[0].info.map((paragraph) => (
                            <p>{paragraph}</p>
                        ))}
                    </Segment>    
                </Grid.Row>
                <Grid.Row centered columns={7}>
                    <Grid.Column>
                        <Button color="red" size="large" onClick={this.handleHideInfo}>ย้อนกลับ</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )

        return (
            <div className="organization-page">
                <OrganizationCategory activeIndex={activeCategory} categoryClick={this.handleCategoryClick} />
                <Container className="content">
                    { showInfo ? <OrganizationInfo /> : <OrganizationList /> }
                </Container>
            </div>
        )
    }
}

export default withRedux(makeStore)(withTopbar(Organizations))