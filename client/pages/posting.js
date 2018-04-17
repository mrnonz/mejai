import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { isEmpty } from 'lodash'
import cookie from 'react-cookie'
import { makeStore } from '../stores'
import Router from 'next/router'
import withTopbar from 'hocs/withTopbar'
import { Container, Menu, Header, Segment, Button, Modal, Dimmer } from 'semantic-ui-react'
import SellingForm from 'molecules/SellingForm';
import AuctionForm from 'molecules/AuctionForm';
import Loader from 'molecules/Loader'
import { createBuyProduct, createBuyProductAttribute, createAuctionProduct } from 'stores/actions/product'

class Posting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showConfirmModal: false,
            menuActive: 'selling',
            name: '',
            category: 0,
            price: 0,
            price_step: 0,
            quantity: 0,
            info: '',
            exp_time: null,
            attributeName: '',
            attributes: [],
            hasAttribute: false,
            images: []
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

    handleFileUpload(uploadFiles) {
        this.setState({
            images: uploadFiles
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.product.isCreated) {
            Router.push({
                pathname: '/confirm-post',
                query: { id: nextProps.product.productId }
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
            const { name, category, price, quantity, info, 
                attributeName, attributes, hasAttribute, images } = this.state
            const product = {
                name, price, quantity, info, organizationId, userId,
                sellerId: userId,
                categoryId: category,
            }
            if(!hasAttribute) {
                this.props.createBuyProduct(product, images) 
            } else {
                product['attributes'] = {
                    name: attributeName,
                    values: attributes
                }
                this.props.createBuyProductAttribute(product, images)
            }
        } else if (this.state.menuActive === 'auction') {
            const { name, category, price, price_step, info, exp_time, images } = this.state
            const product = {
                name, price, price_step, info, exp_time, organizationId, images, userId,
                sellerId: userId,
                categoryId: category,
            }
            this.props.createAuctionProduct(product, images)
        }
    }

    render() {
        const { menuActive, showConfirmModal } = this.state
        const { product: { isCreating } } = this.props
        const renderForm = () => {
            if(menuActive === 'selling') {
                return <SellingForm 
                    onSubmit={this.openConfirmModal} 
                    onChange={this.handleChange} 
                    onAttributeChange={this.handleAttributeChange}
                    onHasAttribute={this.handleHasAttribute}
                    onFileUpload={this.handleFileUpload.bind(this)}
                />
            }
            return <AuctionForm 
                    onChange={this.handleChange} 
                    onFileUpload={this.handleFileUpload.bind(this)}
                    onSubmit={this.openConfirmModal} 
                />
        }
        return (
            <Container className="posting-page">
                <Header as='h2' dividing color="orange" >
                    เพิ่มสินค้าเข้าระบบ
                </Header>
                <Modal open={showConfirmModal}>
                    { ( isCreating ) && <Dimmer active><Loader /></Dimmer> }
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
        createBuyProduct: (product, images) => {
            dispatch(createBuyProduct(product, images))
        },
        createBuyProductAttribute: (product, images) => {
            dispatch(createBuyProductAttribute(product, images))
        },
        createAuctionProduct: (product, images) => {
            dispatch(createAuctionProduct(product, images))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Posting))