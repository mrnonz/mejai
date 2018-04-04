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
import { fetchBuyProducts } from 'stores/actions/product'

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

    componentDidMount() {
        this.props.fetchBuyProducts()
    }

    render() {
        const { productPage } = this.state
        const { products: { data: products, isLoading } } = this.props
        const { url: { query: { type: productType } } } = this.props
        const itemCount = products.length
        const totalPage = Math.ceil(itemCount / 12)
        const pageItems = products.slice(productPage * 12, productPage * 12 + 12)
        const sortOptions = [
            {
                text: 'Featured',
                value: 'featured'
            },
            {
                text: 'Price: Low to High',
                value: 'priceLow'
            },
            {
                text: 'Price: Hight to Low',
                value: 'priceHigh'
            }
        ]
        
        return (
            <div className="products-page">    
                <header>
                    <div className="background-mask">
                        <h1>Auction Page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum , consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum</p>
                    </div>
                </header>
                <main>
                    <aside>
                        <FilterProduct categories={categories.list} />
                    </aside>
                    { isLoading ? <section className="page-loader-wrapper"><Loader /></section> :
                    <section className="list-container">
                        <div className="product-count">
                            <h3>List All</h3>
                            <p>Found {products.length} Items</p>
                        </div>
                        <div className="product-sort">
                            <span>Sort By </span>
                            <Dropdown selection defaultValue="featured" options={sortOptions}/>
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
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Products))