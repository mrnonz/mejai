import React, { Component } from 'react'
import { Breadcrumb as DefaultBreadcrumb } from 'semantic-ui-react'

const Breadcrumb = (props) => (
    <DefaultBreadcrumb>
        <DefaultBreadcrumb.Section link>Home</DefaultBreadcrumb.Section>
        <DefaultBreadcrumb.Divider />
        <DefaultBreadcrumb.Section link>Store</DefaultBreadcrumb.Section>
        <DefaultBreadcrumb.Divider />
        <DefaultBreadcrumb.Section active>T-Shirt</DefaultBreadcrumb.Section>
    </DefaultBreadcrumb>
)

export default Breadcrumb