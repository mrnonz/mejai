import React, { Component } from 'react'
import Router from 'next/router'
import ProductCard from 'molecules/ProductCard'
import Pagination from 'molecules/Pagination'
import FilterProduct from 'organisms/FilterProduct'
import { Dropdown, Menu } from 'semantic-ui-react'
import categories from 'stores/mock/categories.json'
import products from 'stores/mock/auction_products.json'

import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import storeApp from 'stores'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { fetchRepo } from 'stores/actions/mock';

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

    handleCardClick = () => {
        this.props.onButtonClick()
        Router.push({
            pathname: '/product'
        })
    }

    render() {
        const { productPage } = this.state
        const itemCount = products.data.length
        const totalPage = Math.ceil(products.data.length / 12)
        const pageItems = products.data.slice(productPage * 12, productPage * 12 + 12)
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
                    <section className="list-container">
                        <div className="product-count">
                            <h3>List All</h3>
                            <p>Found {products.data.length} Items</p>
                        </div>
                        <div className="product-sort">
                            <span>Sort By </span>
                            <Dropdown selection defaultValue="featured" options={sortOptions}/>
                        </div>
                        <main className="product-list">
                            {pageItems.map((item) => (
                                <ProductCard name={item.name} price={item.price} onCardClick={this.handleCardClick} />
                            ))}
                        </main>
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
        text: state.mock,
        repo: state.repository
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => {
            dispatch(fetchRepo('Hello World'))
        }
    }
}

export default withRedux(() => createStore(storeApp, {mock: '', repository: ''}, composeWithDevTools(applyMiddleware(thunk))), mapStateToProps, mapDispatchToProps)(Products)