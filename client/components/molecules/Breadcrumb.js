import React, { Component } from 'react'
import { Breadcrumb as DefaultBreadcrumb } from 'semantic-ui-react'

const Breadcrumb = ({ product }) => (
    <DefaultBreadcrumb className="breadcrumb">
        <DefaultBreadcrumb.Section>{ product.auction ? 'ประมูลสินค้า' : 'ซื้อสินค้า' }</DefaultBreadcrumb.Section>
        <DefaultBreadcrumb.Divider />
        <DefaultBreadcrumb.Section>เครื่องแต่งกาย</DefaultBreadcrumb.Section>
        <DefaultBreadcrumb.Divider />
        <DefaultBreadcrumb.Section active>{ product.name }</DefaultBreadcrumb.Section>
    </DefaultBreadcrumb>
)

export default Breadcrumb