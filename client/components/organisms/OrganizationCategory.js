import React, { Component } from 'react'
import Svg from 'react-inlinesvg'

const OrganizationCategory = (props) => {
    const categories = [
        {
            name: 'ทั้งหมด',
            value: 'all'
        },
        {
            name: 'การศึกษา',
            value: 'edu'
        },
        {
            name: 'สิ่งแวดล้อม',
            value: 'enviroment'
        },
        {
            name: 'สุขภาพ',
            value: 'health'
        },
        {
            name: 'เทคโยโลยี',
            value: 'tech'
        },
        {
            name: 'อื่นๆ',
            value: 'misc'
        }
    ]

    return (
        <header className="organization-category">
            { categories.map((category) => (
                <div className="category">
                    <Svg src={`static/icons/${category.value}.svg`} />
                    <span>{category.name}</span>
                </div>
            ))}
        </header>
    )
}

export default OrganizationCategory