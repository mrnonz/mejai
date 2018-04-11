import React, { Component } from 'react'
import { Breadcrumb as DefaultBreadcrumb } from 'semantic-ui-react'

const Breadcrumb = (props) => (
    <DefaultBreadcrumb className="breadcrumb">
        <DefaultBreadcrumb.Section>หน้าหลัก</DefaultBreadcrumb.Section>
        <DefaultBreadcrumb.Divider />
        <DefaultBreadcrumb.Section>ประมูลสินค้า</DefaultBreadcrumb.Section>
        <DefaultBreadcrumb.Divider />
        <DefaultBreadcrumb.Section active>เสื้อเชิ้ตสีน้ำเงิน</DefaultBreadcrumb.Section>
    </DefaultBreadcrumb>
)

export default Breadcrumb