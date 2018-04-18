import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react'
import Pagination from 'molecules/Pagination'
import OrganizationCategory from 'organisms/OrganizationCategory'
import OrganizationCard from 'molecules/OrganizationCard'
import organizations from 'stores/mock/organization.json'

class Organization extends Component {
    constructor(props){
        super(props)

        this.state = {
            activeCategory: 0,
            organizationPage: 0
        }
    }

    handleCategoryClick = (index) => {
        this.setState({
            activeCategory: index
        })
    }

    handlePageClick = (page) => {
        this.setState({
            organizationPage: page.selected
        })
    }

    render() {
        const { activeCategory, organizationPage } = this.state
        const organizationCount = organizations.data.length
        const totalPage = Math.ceil(organizations.data.length / 12)
        const pageItems = organizations.data.slice(organizationPage * 12, organizationPage * 12 + 12)

        return (
            <div className="organization-page">
                <OrganizationCategory activeIndex={activeCategory} categoryClick={this.handleCategoryClick} />
                <Container className="content">
                    <div className="page-header">
                        <Header as="h2">โครงการ</Header>
                        <span>พบ { organizationCount } รายการ</span>
                    </div>
                    <div className="organization-list">
                        { pageItems.map((organization) => (
                            <OrganizationCard data={organization} />
                        ))}
                        <Pagination 
                            pageCount={totalPage}
                            pageRangeDisplayed={4}
                            onPageChange={(page) => this.handlePageClick(page)}
                        />
                    </div>
                </Container>
            </div>
        )
    }
}

export default Organization