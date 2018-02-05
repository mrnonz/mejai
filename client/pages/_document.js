import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import storeApp from 'stores'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import stylesheet from 'static/styles/main.scss'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      
        <html>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Head>
              <link rel="stylesheet" type="text/css" href="/static/dist/semantic.min.css"></link>
              <link href="https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,700" rel="stylesheet" />  
          </Head>
          <body style={{background: '#F5F5F5'}}>
            <Main />
            <NextScript />
          </body>
        </html>
      
    )
  }
}