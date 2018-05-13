import React, { Component } from 'react'
import { Header, Radio, Form, List, Button } from 'semantic-ui-react'

class FilterProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 'none'
        }
    }

    handleChange = (value, index) => { 
        this.setState({ checked: value })
        this.props.onFilterSelected(index+1)
    }

    clearFilter = () => {
        this.setState({ checked: 'none' })
        this.props.onFilterClear()
    }

    render() {
        const { categories } = this.props
        const { checked } = this.state
        return (
            <div>
                <Header as='h3' dividing>
                    กรองสินค้า
                </Header>
                <Form>
                    { categories.map((category, index) => (
                        <List><List.Item><Radio label={category} checked={checked == category} value={category} onChange={(e, { value }) => this.handleChange(value, index)} /></List.Item></List>
                    )) }
                    <List><List.Item><Button icon='close' negative labelPosition='left' size="tiny" content="ล้างตัวกรอง" onClick={this.clearFilter.bind(this)}/></List.Item></List>
                </Form>
                
            </div>
        )
    }
}

export default FilterProduct