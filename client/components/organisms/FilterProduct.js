import React, { Component } from 'react'
import { Header, Checkbox, List } from 'semantic-ui-react'

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
                    <List><List.Item><Checkbox label={category} /></List.Item></List>
                )) }
            </div>
        )
    }
}

export default FilterProduct