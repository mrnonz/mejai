import React, { Component } from 'react'
import Head from 'next/head'
import ProductCard from 'molecules/ProductCard'
import FilterProduct from 'organisms/FilterProduct'
import { Dropdown } from 'semantic-ui-react'
import categories from 'stores/mock/categories.json'
import products from 'stores/mock/auction_products.json'
import stylesheet from 'static/styles/main.scss'

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
            <div>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="products-page">
                    <Head>
                        <link rel="stylesheet" type="text/css" href="/static/dist/semantic.min.css"></link>
                        <link href="https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,700" rel="stylesheet" />  
                    </Head>
                    <header>
                        Header
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
                                {products.data.map((product) => (
                                    <ProductCard name={product.name} price={product.price} />
                                ))}
                            </main>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}

export default Products