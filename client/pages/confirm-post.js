import React, { Component } from 'react'
import { Container, Header, Button } from 'semantic-ui-react'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import HelpingTable from 'molecules/HelpingTable'
import ProductDataCard from 'molecules/ProductDataCard'
import { fetchProductItem } from 'stores/actions/product'
import { fetchOrganizationBank } from 'stores/actions/organization'

class ConfirmPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loadingBank: true
        }
    }

    componentDidMount() {
        const { url: { query: { id: productId } } } = this.props
        this.props.fetchProductItem(productId)
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.product.isLoading && this.state.loadingBank) {
            this.props.fetchOrganizationBank(nextProps.product.data.organization.organizationId)
            this.setState({
                loadingBank: false
            })
        }
    }

    handleOnSubmit() {
        const { product: { data: product } } = this.props
        Router.push({
            pathname: '/product',
            query: {
                type: product.auction ? 'auction' : 'buy',
                id: product.productId
            }
        })
    }

    render() {
        const { 
            product: { 
                data: { organization = {} }, 
                data: product, 
                isLoading 
            },
            organization: {
                isLoadingBank,
                bank
            } 
        } = this.props
        return (
            <Container className="confirm-post-page">
                <Header as='h2' dividing color="orange" >
                    ข้อมูลสินค้า
                </Header>
                { isLoading || isLoadingBank ? <Loader wrapped /> :
                    <div>
                        <Header as='h5' >
                            โครงการที่ช่วยเหลือ
                        </Header>
                        <HelpingTable hideLabel organization={organization} hidePrice bank={ bank } />
                        <Header as='h5' >
                            สินค้าที่ลงขาย
                        </Header>
                        <ProductDataCard product={product} auction={product.auction} />
                        <div className="button-wrapper">
                            <Button onClick={() => this.handleOnSubmit()} color="teal" size="large" >ดำเนินการต่อ</Button>
                        </div>
                    </div>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
        product: state.product,
        organization: state.organization
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductItem: (productId) => {
            dispatch(fetchProductItem(productId))
        },
        fetchOrganizationBank: (organizationId) => {
            dispatch(fetchOrganizationBank(organizationId))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(ConfirmPost))
