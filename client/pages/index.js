import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import ProductCard from 'molecules/ProductCard'
import Pagination from 'molecules/Pagination'
import FilterProduct from 'organisms/FilterProduct'
import { Dropdown, Menu } from 'semantic-ui-react'
import categories from 'stores/mock/categories.json'
import products from 'stores/mock/auction_products.json'

class MainPage extends Component {
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

    render() {
        return (
            <div className="main-page">    
                <header>
                    <div className="background-mask">
                        <h1>Auction Page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum , consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum</p>
                    </div>
                </header>
                <main>
                    <aside>
                      <h3>Featured Auction</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </aside>
                    <div className="featured-auction">
                      { products.data.map((item) => (
                          <div className="product"><ProductCard auction name={item.name} price={item.price} /></div>
                      ))}
                    </div>
                </main>
                <header>
                    <div className="background-mask">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum , consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum</p>
                    </div>
                </header>
                <main>
                    <aside>
                      <h3>Featured Selling</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </aside>
                    <div className="featured-auction">
                      { products.data.map((item) => (
                          <div className="product"><ProductCard name={item.name} price={item.price} /></div>
                      ))}
                    </div>
                </main>
            </div>
        )
    }
}

export default withRedux(makeStore)(withTopbar(MainPage))