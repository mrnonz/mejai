import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import Router from 'next/router'
import withTopbar from 'hocs/withTopbar'
import { Dropdown, Menu } from 'semantic-ui-react'
import ProductList from 'molecules/ProductList'
import Pagination from 'molecules/Pagination'
import Loader from 'molecules/Loader'
import FilterProduct from 'organisms/FilterProduct'
import categories from 'stores/mock/categories.json'
import { fetchBuyProducts, fetchAuctionProducts } from 'stores/actions/product'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productPage: 0
        }
    }

    handlePageClick = (page) => {
        this.setState({
            productPage: page.selected
        })
    }

    handleCardClick = (productId) => {
        const { url: { query: { type: productType } } } = this.props
        Router.push({
            pathname: '/product',
            query: { type: productType, id: productId }
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.url.query.type !== this.props.url.query.type) {
            if (nextProps.url.query.type === 'auction') {
                this.props.fetchAuctionProducts()
            } else {
                this.props.fetchBuyProducts()
            }
        }
    }

    componentDidMount() {
        const { url: { query: { type: productType } } } = this.props
        if (productType === 'auction') {
            this.props.fetchAuctionProducts()
        } else {
            this.props.fetchBuyProducts()
        }
    }

    render() {
        const { productPage } = this.state
        const { products: { data: products = [], isLoading } } = this.props
        const { url: { query: { type: productType } } } = this.props
        const itemCount = products.length
        const totalPage = Math.ceil(itemCount / 12)
        const pageItems = products.slice(productPage * 12, productPage * 12 + 12)
        
        return (
            <div className="products-page">    
                {/* TODO Dynamic header */}
                <header>
                    <div className="background-mask">
                        <h1>เลือกสินค้า</h1>
                        <p>ผู้ใช้เลือกสินค้าที่ถูกใจ โดยรายได้จากสินค้าเหล่านั้นจะนำไปช่วยเหลือองค์กรการกุศลที่ผู้ขายเลือก</p>
                    </div>
                </header>
                <main>
                    {/* TODO Add Filter Feature */}
                    <aside>
                        <FilterProduct categories={categories.list} />
                    </aside>
                    { isLoading ? <section className="page-loader-wrapper"><Loader /></section> :
                    <section className="list-container">
                        <div className="product-count">
                            <h3>แสดงทั้งหมด</h3>
                            <p>พบ {products.length} ชิ้น</p>
                        </div>
                        <div className="product-sort">
                        </div>
                        <ProductList productType={productType} products={pageItems} onCardClick={this.handleCardClick}/>
                        <Pagination 
                            pageCount={totalPage}
                            pageRangeDisplayed={4}
                            onPageChange={(page) => this.handlePageClick(page)}
                        />
                    </section>
                    }
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        products: state.products
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBuyProducts: () => {
            dispatch(fetchBuyProducts())
        },
        fetchAuctionProducts: () => {
            dispatch(fetchAuctionProducts())
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Products))