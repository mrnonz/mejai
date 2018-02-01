import React, { Component } from 'react'
import { Header, Checkbox } from 'semantic-ui-react'

class FilterProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories } = this.props
        return (
            <div>
                <Header as='h3' dividing>
                    Filter
                </Header>
                { categories.map((category) => (
                    <li><Checkbox label={category} /></li>
                )) }
            </div>
        )
    }
}

export default FilterProduct