import React, { Component } from 'react'
import ProductCard from 'molecules/ProductCard'
import Pagination from 'react-paginate'
import FilterProduct from 'organisms/FilterProduct'
import { Dropdown, Menu } from 'semantic-ui-react'
import categories from 'stores/mock/categories.json'
import products from 'stores/mock/auction_products.json'

import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productPage: 0
        }
    }

    handlePageClick = (data) => {
        this.setState({
            productPage: data.selected
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
                                <ProductCard name={item.name} price={item.price} />
                            ))}
                        </main>
                        <Pagination 
                            pageCount={totalPage}
                            pageRangeDisplayed={4}
                            onPageChange={(data) => this.handlePageClick(data)}
                            containerClassName="pagination"
                            activeClassName="active"
                            previousLabel="<"
                            nextLabel=">"
                        />
                    </section>
                </main>
            </div>
        )
    }
}

export default Products