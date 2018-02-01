import React, { Component } from 'react'
import Head from 'next/head'
import { Container } from 'semantic-ui-react'
import stylesheet from 'static/styles/main.scss'

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="products-page">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <Head>
                    <link rel="stylesheet" type="text/css" href="/static/dist/semantic.min.css"></link>
                    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet"></link>
                </Head>
                <header>
                    Header
                </header>
                <main>
                    <aside>
                        Aside
                    </aside>
                    <section>
                        Section
                    </section>
                </main>
            </Container>
        )
    }
}

export default Products