import React, { Component } from 'react'
import { Container, Header, Grid, Button, Image, Modal, Dimmer, Icon, Segment } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import { isEmpty } from 'lodash'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import cookie from 'react-cookie'
import OrderItemCard from 'molecules/OrderItemCard'
import OrderInfo from 'molecules/OrderInfo'
import OrderButton from 'molecules/OrderButton'
import OrderModel from 'stores/models/Order'
import HelpingTable from 'molecules/HelpingTable'
import UploadForm from 'molecules/UploadForm'
import { fetchOrder, uploadSlip, updateOrderStatus, fetchOrders } from 'stores/actions/order'
import { fetchOrganizationBank, fetchOrganizationOrders } from 'stores/actions/organization'

class Order extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showUploadForm: false,
            submitingSlip: false,
            submitedSlip: false,
            loadingBank: true,
            updatingStatus: false,
            slip: []
        }
    }

    componentDidMount() {
        const { url: { query: { id: orderId } } } = this.props
        this.props.fetchOrder(orderId)
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.updatingStatus) {
            const { url: { query: { type } } } = this.props
            if(type == 'organization') {
                Router.push({
                    pathname: '/organization'
                })
            } else {

                Router.push({
                    pathname: '/user'
                })
            }
        }
        
        if(this.state.submitingSlip) {
            if(!nextProps.order.isUploading) {
                this.setState({
                    submitedSlip: true
                })
            }
        }

        if(!!nextProps.order && this.state.loadingBank) {
            this.props.fetchOrganizationBank(nextProps.order.data.organizationId)
            this.setState({
                loadingBank: false
            })
        }

        
    }

    showSlipForm() {
        this.setState({
            showUploadForm: true
        })
    }

    hideSlipForm() {
        this.setState({
            showUploadForm: false
        })
    }

    handleFileUpload(uploadFiles) {
        this.setState({
            slip: uploadFiles
        })
    }

    handleUpdateOrderStatus() {
        const { url: { query: { id: orderId, type } } } = this.props
        this.props.updateOrderStatus(orderId)
        this.setState({
            updatingStatus: true
        })
        if(type == 'organization') {
            const organizationId = cookie.load('organizationId')
            this.props.fetchOrganizationOrders(organizationId)
            if(!nextProps.organization.isLoadingOrder) {
                Router.push({
                    pathname: '/organization'
                })
            }
        } else {
            const userId = cookie.load('userId')
            this.props.fetchOrders(userId)
            if(!nextProps.user.isLoadingOrder) {
                Router.push({
                    pathname: '/user'
                })
            }
        }
    }

    handleSubmitSlip() {
        const { slip } = this.state
        const { url: { query: { id: orderId } } } = this.props
        this.props.uploadSlip(slip, orderId)
        this.setState({
            submitingSlip: true
        })
    }

    redirectPage() {
        const { url: { query: { id: orderId, type } } } = this.props
        if(type == 'organization') {
            Router.push({
                pathname: '/organization'
            })
        } else {
            Router.push({
                pathname: '/user'
            })
        }
    }

    render() {
        const { slip, showUploadForm, submitingSlip, submitedSlip } = this.state
        const { 
            order: { 
                isLoading, 
                isUploading,
                data, 
                data: { address = '' } 
            },
            organization: {
                isLoadingBank,
                bank
            },
            organization
        } = this.props
        const { url: { query: { type } } } = this.props
        const order = new OrderModel(data)
        return isLoading || isLoadingBank ? <Loader wrapped /> :
            <Container className="order-page">
                <Modal open={showUploadForm} className="order-modal">
                    { ( submitingSlip && isUploading ) && <Dimmer active><Loader /></Dimmer> }
                    <Modal.Header>เพิ่มหลักฐานการโอนเงิน</Modal.Header>
                    { submitedSlip ?
                    <Modal.Content>
                        <Segment basic textAlign="center">
                            <Icon name="check circle" size="massive" color="green" />
                            <Header as='h5' >
                                เพิ่มหลักฐานสำเร็จ
                            </Header>
                            <Button 
                                color="teal" 
                                size="large"
                                content="ยืนยัน"
                                onClick={ () => this.redirectPage() }
                            />
                        </Segment>
                    </Modal.Content>
                    :
                    <Modal.Content>
                        <UploadForm 
                            onFileUpload={this.handleFileUpload.bind(this)} 
                            fileLimit={1}
                        />
                        <div className="button-group">
                            <Button 
                                disabled={ isEmpty(slip) }
                                onClick={ () => this.handleSubmitSlip() } 
                                color="green" 
                                size="large"
                                content="ยืนยัน"
                            />
                            <a className="back" onClick={() => this.hideSlipForm()} >ย้อนกลับ</a>
                        </div>
                    </Modal.Content>
                    }
                </Modal>
                <Header as='h2' dividing color="orange" >
                    รายการสั่งซื้อ <span> #{ order.OrderId }</span>
                </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <OrderItemCard attribute={ data.attribute } price={ order.Price } item={ order.Item } />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <OrderInfo order={ order } />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <HelpingTable organization={ order.Organization } price={ order.Price } bank={ bank }/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Header as='h4' color="orange" >
                    หลักฐานการโอน
                </Header>
                <div className="slip-area">
                    { !order.Slip ? "ยังไม่เพิ่มหลักฐานการโอน" :
                    <Image src={ order.Slip } size="big" /> }
                </div>
                <div className="button-group">
                    <OrderButton 
                        userType={type}
                        onHandleSlip={ () => this.showSlipForm() } 
                        onUpdateStatus={ () => this.handleUpdateOrderStatus() }
                        orderStatus={ order.OrderStatusId } 
                    />
                    <Button 
                        color="teal" 
                        size="large"
                        onClick={ () => this.redirectPage() }
                        content="ย้อนกลับ"
                    />
                </div>
            </Container>
    }
}

const mapStateToProps = (state) => ({
        order: state.order,
        user: state.order,
        organization: state.organization
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrder: (orderId) => {
            dispatch(fetchOrder(orderId))
        },
        fetchOrders: (userId) => {
            dispatch(fetchOrders(userId))
        },
        fetchOrganizationBank: (organizationId) => {
            dispatch(fetchOrganizationBank(organizationId))
        },
        uploadSlip: (file, orderId) => {
            dispatch(uploadSlip(file, orderId))
        },
        updateOrderStatus: (orderId) => {
            dispatch(updateOrderStatus(orderId))
        },
        fetchOrganizationOrders: (organizationId) => {
            dispatch(fetchOrganizationOrders(organizationId))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Order))