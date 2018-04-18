import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: null
        }
    }

    handleMenuClick = (name) => {
    this.setState({
            menuActive: name
        })
    }

    render() {
        const { menuActive } = this.state
        return (
            <div className="product-info">
                <Menu>
                    <Menu.Item
                        name='info'
                        active={'info' === menuActive}
                        onClick={()=>this.handleMenuClick('info')}
                    >
                        รายละเอียด
                    </Menu.Item>
                    <Menu.Item
                        name='helping'
                        active={'helping' === menuActive}
                        onClick={()=>this.handleMenuClick('helping')}
                    >
                        ช่วยเหลือ
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default ProductInfo