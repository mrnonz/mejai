import React, { Component } from 'react'
import Router from 'next/router'
import Svg from 'react-inlinesvg'
import { sortBy, reverse } from 'lodash'
import { Header, Menu, Container, Button } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import cookie from 'react-cookie'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import OrderTable from 'molecules/OrderTable'
import IssueForm from 'molecules/IssueForm'
import PaymentForm from 'molecules/PaymentForm'
import { fetchBanks, fetchOrganizationOrders, fetchOrganizationBank, createUpdatePromptPay, updateOrganizationBank } from 'stores/actions/organization'

class Organization extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeBar: 'organization-order',
            updatingPayment: false
        }
    }

    componentDidMount() {
        const organizationId = cookie.load('organizationId')
        this.props.fetchOrganizationOrders(organizationId)
        this.props.fetchOrganizationBank(organizationId)
        this.props.fetchBanks()
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.updatingPayment && !nextProps.organization.isUpdatingPayment) {
            const organizationId = cookie.load('organizationId')
            this.props.fetchOrganizationBank(organizationId)
            this.setState({
                activeBar: 'organization-order',
                updatingPayment: false
            })
        }
    }

    handleBarClick(value) {
        this.setState({
            activeBar: value
        })
    }
    
    handleOrderRowClick = (orderId) => {
        Router.push({
            pathname: '/order',
            query: {
                id: orderId,
                type: 'organization'
            }
        })
    }

    handleUpdatePayment = () => {
        this.setState({
            updatingPayment: true
        })
    }

    render() {
        const { activeBar } = this.state
        const {
            organization: {
                isLoadingOrders,
                isLoadingBank,
                isFetching,
                isUpdatingPayment,
                orders,
                bank,
                banks
            }
        } = this.props
        const SidebarItems = [
            {
                value: 'organization-order',
                title: 'รายการสั่งซื้อถึงคุณ',
                icon: 'seller-order'
            },
            {
                value: 'payment',
                title: 'การเงิน',
                icon: 'payment'
            },
            {
                value: 'issue',
                title: 'แจ้งปัญหา',
                icon: 'issue'
            },
            {
                value: 'logout',
                title: 'ออกจากระบบ',
                icon: 'logout'
            }
        ]

        const renderContent = () => {
            if (activeBar === 'organization-order') {
                const sortedOrder = reverse(sortBy(orders, (order) => order.created_by))
                return (
                    <Container>
                        <Container>
                            <Header as='h2' dividing color="orange" >
                                รายการสั่งซื้อถึงองค์กรของคุณ
                            </Header>
                            { isLoadingOrders ? <Loader wrapped /> : 
                            <OrderTable 
                                handleOrderRowClick={this.handleOrderRowClick.bind(Organization)} 
                                orders={sortedOrder} /> 
                            }
                        </Container>
                    </Container>
                )
            } else if (activeBar === 'payment') {
                return (
                    <Container>
                        <Header as='h2' dividing color="orange" >
                            การเงิน
                        </Header>
                        { isLoadingBank || isFetching ? <Loader wrapped /> : 
                        <PaymentForm 
                            bank={bank} 
                            bankList={banks}
                            isUpdatingPayment={isUpdatingPayment}
                            onSubmitPayment={this.handleUpdatePayment.bind(Organization)}
                            onSubmitPromptPay={this.props.createUpdatePromptPay.bind(Organization)} 
                            onSubmitBankAccount={this.props.updateOrganizationBank.bind(Organization)} 
                        /> 
                        }
                    </Container>
                )
            } else if (activeBar === 'issue') {
                return (
                    <Container>
                        <Header as='h2' dividing color="orange" >
                            แจ้งปัญหาการใช้งาน
                        </Header>
                        <IssueForm />
                        <div className="button-group">
                            <Button color="green" size="large">แจ้งปัญหา</Button>
                        </div>
                    </Container>
                )
            } else if (activeBar === 'logout') {
                cookie.remove('userId')
                Router.push({
                    pathname: '/'
                })
                return (
                    <Container>
                        <Loader wrapped />
                    </Container>
                )
            }
        }

        return (
            <div className="user-page">
                <div className="sidebar">
                    { SidebarItems.map((item) => (
                        <div onClick={() => this.handleBarClick(item.value)} className={item.value === activeBar ? 'item active' : 'item'}>
                            <Svg src={`static/icons/${item.icon}.svg`} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div> 
                <div className="content">
                    { renderContent() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        organization: state.organization   
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrganizationOrders: (organizationId) => {
            dispatch(fetchOrganizationOrders(organizationId))
        },
        fetchOrganizationBank: (organizationId) => {
            dispatch(fetchOrganizationBank(organizationId))
        },
        createUpdatePromptPay: (id, data, isCreate) => {
            dispatch(createUpdatePromptPay(id, data, isCreate))
        },
        updateOrganizationBank: (id, data) => {
            dispatch(updateOrganizationBank(id, data))
        },
        fetchBanks: () => {
            dispatch(fetchBanks())
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Organization))