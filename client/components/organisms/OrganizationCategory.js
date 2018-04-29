import React, {
    Component
} from 'react'
import Svg from 'react-inlinesvg'
import classNames from 'classnames'

const OrganizationCategory = ({
    activeIndex,
    categoryClick
}) => {
    const categories = [{
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
            name: 'เทคโนโลยี',
            value: 'tech'
        },
        {
            name: 'อื่นๆ',
            value: 'misc'
        }
    ]

    return ( <
        header className = "organization-category" > {
            categories.map((category, index) => {
                const categoryClass = classNames('category', {
                    'active': activeIndex === index
                })
                return ( <
                    div className = {
                        categoryClass
                    }
                    onClick = {
                        () => categoryClick(index)
                    } >
                    <
                    Svg src = {
                        `static/icons/${category.value}.svg`
                    }
                    /> <
                    span > {
                        category.name
                    } < /span> <
                    /div>
                )
            })
        } <
        /header>
    )
}

export default OrganizationCategory
