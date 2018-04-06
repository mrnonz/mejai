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

class ConfirmPost extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { url: { query: { id: productId } } } = this.props
        this.props.fetchProductItem(productId)
    }

    handleOnSubmit() {
        const { product: { data: product } } = this.props
        Router.push({
            pathname: '/product',
            query: {
                type: product.type ? 'auction' : 'buy',
                id: product.productId
            }
        })
    }

    render() {
        const { product: { data: product, isLoading } } = this.props
        return (
            <Container className="confirm-post-page">
                <Header as='h2' dividing color="orange" >
                    ข้อมูลสินค้า
                </Header>
                { isLoading ? <Loader wrapped /> :
                    <div>
                        <Header as='h5' >
                            โครงการที่ช่วยเหลือ
                        </Header>
                        <HelpingTable organization={product.organization} />
                        <Header as='h5' >
                            สินค้าที่ลงขาย
                        </Header>
                        <ProductDataCard product={product} auction={product.type} />
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
        product: state.product
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductItem: (productId) => {
            dispatch(fetchProductItem(productId))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(ConfirmPost))
