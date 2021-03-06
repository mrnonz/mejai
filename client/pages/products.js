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
import Categories from 'stores/models/Categories'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productPage: 0,
            filterApplied: false,
            filterCategory: null,
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

    handleFilter = (filterCategory) => {
        this.setState({
            filterApplied: true,
            filterCategory
        })
    }

    handleClearFilter = () => {
        this.setState({
            filterApplied: false
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
        const { productPage, filterApplied, filterCategory } = this.state
        const { products: { data: allProducts = [], isLoading } } = this.props
        const { url: { query: { type: productType } } } = this.props
        const filteredProduct = allProducts.filter((product) => product.category_id == filterCategory)
        const products = filterApplied ? filteredProduct : allProducts
        const itemCount = products.length
        const totalPage = Math.ceil(itemCount / 10)
        const pageItems = products.slice(productPage * 10, productPage * 10 + 10)
        
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
                    <aside>
                        <FilterProduct 
                            categories={categories.list} 
                            onFilterSelected={this.handleFilter.bind(this)}
                            onFilterClear={this.handleClearFilter.bind(this)}
                        />
                    </aside>                    
                    <section className="list-container">
                        { isLoading && <section className="page-loader-wrapper"><Loader /></section> }
                        <div className="product-count">
                            { filterApplied ? <h3>{new Categories(filterCategory).categoryName}</h3> :
                            <h3>แสดงทั้งหมด</h3> }
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