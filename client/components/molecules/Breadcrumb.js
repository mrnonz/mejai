import React, { Component } from 'react'
import { Breadcrumb as DefaultBreadcrumb } from 'semantic-ui-react'
import Categories from 'stores/models/Categories'

const Breadcrumb = ({ product }) => (
    <DefaultBreadcrumb className="breadcrumb">
        <DefaultBreadcrumb.Section>{ product.auction ? 'ประมูลสินค้า' : 'ซื้อสินค้า' }</DefaultBreadcrumb.Section>
        <DefaultBreadcrumb.Divider />
        <DefaultBreadcrumb.Section>{new Categories(product.category_id).categoryName}</DefaultBreadcrumb.Section>
        <DefaultBreadcrumb.Divider />
        <DefaultBreadcrumb.Section active>{ product.name }</DefaultBreadcrumb.Section>
    </DefaultBreadcrumb>
)

export default Breadcrumb