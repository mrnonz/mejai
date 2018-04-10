import React, { Component } from 'react'
import { Container, Header, Grid, Button, Image, Modal, Dimmer, Icon, Segment } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import { isEmpty } from 'lodash'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import OrderItemCard from 'molecules/OrderItemCard'
import OrderInfo from 'molecules/OrderInfo'
import OrderButton from 'molecules/OrderButton'
import OrderModel from 'stores/models/Order'
import HelpingTable from 'molecules/HelpingTable'
import UploadForm from 'molecules/UploadForm'
import { fetchOrder, uploadSlip, updateOrderStatus } from 'stores/actions/order'

class Order extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showUploadForm: false,
            submitingSlip: false,
            submitedSlip: false,
            slip: []
        }
    }

    componentDidMount() {
        const { url: { query: { id: orderId } } } = this.props
        this.props.fetchOrder(orderId)
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.submitingSlip) {
            if(!nextProps.order.isUploading) {
                this.setState({
                    submitedSlip: true
                })
            }
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
    
    handleShipping() {
        const { url: { query: { id: orderId } } } = this.props
        this.props.updateOrderStatus(orderId)
        Router.push({
            pathname: '/user'
        })
    }

    handleReceive() {
        const { url: { query: { id: orderId } } } = this.props
        this.props.updateOrderStatus(orderId)
        Router.push({
            pathname: '/user'
        })
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
        const { url: { query: { id: orderId } } } = this.props
        Router.push({
            pathname: '/user'
        })
    }

    render() {
        const { slip, showUploadForm, submitingSlip, submitedSlip } = this.state
        const { 
            order: { 
                isLoading, 
                isUploading,
                data, 
                data: { address = '' } 
            } 
        } = this.props
        const { url: { query: { type } } } = this.props
        const order = new OrderModel(data)
        return isLoading ? <Loader wrapped /> :
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
                        <UploadForm onFileUpload={this.handleFileUpload.bind(this)} fileLimit={1}/>
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
                            <OrderItemCard item={ order.Item } />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <OrderInfo order={ order } />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <HelpingTable organization={ order.Organization } />
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
                    { type === 'seller' ?
                        order.OrderStatusId == 2 && 
                        <OrderButton 
                            onHandleShipping={() => this.handleShipping()} 
                            orderStatus={ order.OrderStatusId } 
                        /> :
                        order.OrderStatusId != 2 && 
                        <OrderButton 
                            onHandleSlip={ () => this.showSlipForm() } 
                            onHandleReceive={ () => this.handleReceive() }
                            orderStatus={ order.OrderStatusId } 
                        />
                    }
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
        order: state.order
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrder: (orderId) => {
            dispatch(fetchOrder(orderId))
        },
        uploadSlip: (file, orderId) => {
            dispatch(uploadSlip(file, orderId))
        },
        updateOrderStatus: (orderId) => {
            dispatch(updateOrderStatus(orderId))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Order))