import React, { Component } from 'react'
import Svg from 'react-inlinesvg'
import { Table, Image, Header, Loader } from 'semantic-ui-react'

class QuantityInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isUpdating: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!nextProps.isUpdating) {
            this.setState({
                isUpdating: false
            })
        }
    }

    handleOnEdit(isPlus, item) {
        this.setState({
            isUpdating: true
        })
        this.props.onEdit(isPlus, item)
    }

    render() {
        const { isUpdating } = this.state
        const { quantity, editable, item } = this.props
        return (
            editable ?
            ( isUpdating ? <Loader active inline /> :
                <div className="quantity-input">
                    <a onClick={() => this.handleOnEdit(false, item)}>-</a><span>{quantity}</span><a onClick={() => this.handleOnEdit(true, item)}>+</a>
                </div> )
            :
                <div className="quantity-input">
                    <span>{quantity}</span>
                </div>
        )
    }
}

export default QuantityInput