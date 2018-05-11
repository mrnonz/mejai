import React, { Component } from 'react'
import { Header, Container, Grid, Segment, Image, Button } from 'semantic-ui-react'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import Pagination from 'molecules/Pagination'
import Loader from 'molecules/Loader'
import OrganizationCategory from 'organisms/OrganizationCategory'
import OrganizationCard from 'molecules/OrganizationCard'
import organizations from 'stores/mock/organization.json'
import { fetchOrganizations, fetchOrganizationInfo } from 'stores/actions/organization'

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

    handleInfoClick = (id) => {
        this.props.fetchOrganizationInfo(id)
        this.setState({
            showInfo: true
        })
    }

    handleHideInfo = () => {
        this.setState({
            showInfo: false
        })
    }

    handleHelpClick = (id, type) => {
        const { url: { query: { type: userType } } } = this.props
        if(userType === 'seller') {
            Router.push({
                pathname: '/posting',
                query: { organization: id }
            })
        } else {
            Router.push({
                pathname: '/products-help',
                query: { type, id }
            })
        }
    }

    componentDidMount() {
        this.props.fetchOrganizations()
    }

    render() {
        const { activeCategory, organizationPage, showInfo } = this.state
        const { organization: { data: allOrganizations, isLoading, info: { name: infoName, info, thumbnail } }  } = this.props
        const { url: { query: { type: userType } } } = this.props
        const filteredOrganization = allOrganizations.filter((organization) => organization.category == activeCategory)
        const organizations = activeCategory ? filteredOrganization : allOrganizations
        const organizationCount = organizations.length
        const totalPage = Math.ceil(organizations.length / 12)
        const pageItems = organizations.slice(organizationPage * 12, organizationPage * 12 + 12)

        const OrganizationList = () => ([
            <div className="page-header">
                {   userType === "seller" ? <Header as="h2">เลือกองค์กรการกุศลที่ต้องการช่วยเหลือ</Header> :
                    <Header as="h2">องค์กรการกุศล</Header>
                }
                <span>พบ { organizationCount } รายการ</span>
            </div>,
            <div className="organization-list">
                { pageItems.map((organization) => (
                    <OrganizationCard 
                        data={organization} 
                        onInfoClick={this.handleInfoClick} 
                        onHelpClick={this.handleHelpClick} 
                        type={userType}
                    />
                ))}
                { !!organizationCount && <Pagination 
                    pageCount={totalPage}   
                    pageRangeDisplayed={4}
                    forcePage={organizationPage}
                    onPageChange={(page) => this.handlePageClick(page)}
                /> }
            </div>
        ])

        const OrganizationInfo = () => (
            <Grid container>
                <Grid.Row>
                    <Header as="h3">{infoName}</Header>
                </Grid.Row>
                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <Image src={ thumbnail } size="large"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Segment className="helping-content">
                        <td dangerouslySetInnerHTML={{__html: info}} />
                    </Segment>    
                </Grid.Row>
                <Grid.Row centered columns={4}>
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
                {   isLoading ? <Loader wrapped /> :
                    ( showInfo ? <OrganizationInfo /> : <OrganizationList /> ) 
                }
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    organization: state.organization
}
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrganizations: () => {
            dispatch(fetchOrganizations())
        },
        fetchOrganizationInfo: (id) => {
            dispatch(fetchOrganizationInfo(id))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Organizations))