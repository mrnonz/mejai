import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { isEmpty } from 'lodash'
import cookie from 'react-cookie'
import { makeStore } from '../stores'
import Router from 'next/router'
import withTopbar from 'hocs/withTopbar'
import { Container, Menu, Header, Segment, Button, Modal } from 'semantic-ui-react'
import SellingForm from 'molecules/SellingForm';
import AuctionForm from 'molecules/AuctionForm';
import { createBuyProduct, createBuyProductAttribute } from 'stores/actions/product'

class Posting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showConfirmModal: false,
            menuActive: 'selling',
            name: '',
            category: 0,
            price: 0,
            quantity: 0,
            info: '',
            attributeName: '',
            attributes: [],
            hasAttribute: false
        }
    }

    handleMenuClick = (name) => {
        this.setState({
                menuActive: name
        })
    }

    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        })
    }

    handleHasAttribute = (hasAttribute, attributeName) => {
        this.setState({ hasAttribute, attributeName })
    }

    handleAttributeChange = (attributes) => {
        this.setState({ attributes })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.product.isCreated) {
            Router.push({
                pathname: '/confirm-post',
                query: { id: nextProps.product.data.productId }
            })
        }
    }

    openConfirmModal = () => {
        this.setState({
            showConfirmModal: true
        })
    }

    closeConfirmModal = () => {
        this.setState({
            showConfirmModal: false
        })
    }

    handleProductSubmit = () => {
        const { url: { query: { organization: organizationId } } } = this.props
        const userId = cookie.load('userId')
        if(this.state.menuActive === 'selling') {
            const { name, category, price, quantity, info, attributeName, attributes, hasAttribute } = this.state
            const product = {
                name, price, quantity, info, organizationId,
                sellerId: userId,
                categoryId: category,
                // TODO Upload Image
                images: ["path1"]
            }
            if(!hasAttribute) {
                this.props.createBuyProduct(product) 
            } else {
                product['attributes'] = {
                    name: attributeName,
                    values: attributes
                }
                this.props.createBuyProductAttribute(product)
            }
        }
    }

    render() {
        const { menuActive, showConfirmModal } = this.state
        const renderForm = () => {
            if(menuActive === 'selling') {
                return <SellingForm 
                    onSubmit={this.openConfirmModal} 
                    onChange={this.handleChange} 
                    onAttributeChange={this.handleAttributeChange}
                    onHasAttribute={this.handleHasAttribute}
                />
            }
            return <AuctionForm />
        }
        console.log(this.state.attributeName)
        return (
            <Container className="posting-page">
                <Header as='h2' dividing color="orange" >
                    เพิ่มสินค้าเข้าระบบ
                </Header>
                <Modal open={showConfirmModal}>
                    <Modal.Header>ยืนยันการเพิ่มสินค้า</Modal.Header>
                    <Modal.Content>
                        <Button positive icon='checkmark' labelPosition='right' content="ยืนยัน" onClick={() => this.handleProductSubmit()} />
                        <Button negative icon='close' labelPosition='right' content="ยกเลิก" onClick={() => this.closeConfirmModal()} />
                    </Modal.Content>
                </Modal>
                <Menu attached='top'>
                    <Menu.Item
                        name='selling'
                        active={'selling' === menuActive}
                        onClick={()=>this.handleMenuClick('selling')}
                    >
                        ลงขาย
                    </Menu.Item>
                    <Menu.Item
                        name='auction'
                        active={'auction' === menuActive}
                        onClick={()=>this.handleMenuClick('auction')}
                    >
                        ลงประมูล
                    </Menu.Item>
                </Menu>
                <Segment className="form-wrapper" attached='bottom'>
                    { renderForm() }
                </Segment>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
        product: state.product
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        createBuyProduct: (product) => {
            dispatch(createBuyProduct(product))
        },
        createBuyProductAttribute: (product, attribute) => {
            dispatch(createBuyProductAttribute(product, attribute))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Posting))