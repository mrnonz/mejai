import React, { Component } from 'react'
import Head from 'next/head'
import FilterProduct from 'organisms/FilterProduct'
import { Container } from 'semantic-ui-react'
import categories from 'stores/mock/categories.json'
import stylesheet from 'static/styles/main.scss'

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="products-page">
                    <Head>
                        <link rel="stylesheet" type="text/css" href="/static/dist/semantic.min.css"></link>
                        <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet"></link>
                    </Head>
                    <header>
                        Header
                    </header>
                    <main>
                        <aside>
                            <FilterProduct categories={categories.list} />
                        </aside>
                        <section>
                            <div>
                                List All<br />
                                20 Products
                            </div>
                            <div>
                                Sort
                            </div>
                            <div>
                                Products
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}

export default Products