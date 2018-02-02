import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const Pagination = ({ currentPage }) => {

    return (
        <Menu pagination>
            <Menu.Item name='1' />
            {currentPage > 3 && <Menu.Item disabled>...</Menu.Item>}
            <Menu.Item name='2' active />
            <Menu.Item name='3' />
            {currentPage > 3 && <Menu.Item disabled>...</Menu.Item>}
        </Menu>
    )
}

export default Pagination