import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = (props) => {
    return (
        <ReactPaginate
            containerClassName="pagination"
            activeClassName="active"
            previousLabel="<"
            nextLabel=">"
            {...props}
        />
    )
}

export default Pagination