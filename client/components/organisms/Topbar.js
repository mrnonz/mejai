import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Button, Popup, Grid } from 'semantic-ui-react'
import SiteLogo from 'molecules/SiteLogo'
import Svg from 'react-inlinesvg'
import cookie from 'react-cookie'

const PageNav = () => {
    const PageList = [
        {
            name: 'หน้าหลัก',
            url: '/'
        },
        {
            name: 'องค์กร',
            url: {
                pathname: '/organizations',
                query: { type: 'buyer' }
            } 
        },
        {
            name: 'ซื้อสินค้า',
            url: {
                pathname: 'products',
                query: { type: 'buy' }
            }
        },
        {
            name: 'ประมูล',
            url: {
                pathname: 'products',
                query: { type: 'auction' }
            }
        }
    ]

    return (
        <ul className="pagenav">
            { PageList.map((page) => (
                <li><Link href={page.url}><a>{page.name}</a></Link></li>
            )) }
        </ul>
    )
}

const Topbar = (props) => {
    const userId = cookie.load('userId')
    const organizationId = cookie.load('organizationId')
    const handleUser = () => {
        Router.push({
            pathname: '/login',
        })
    }

    const handleOrganization = () => {
        Router.push({
            pathname: '/login-organization',
        })
    }
    const loginButtonGroup = () => (
        <Grid divided='vertically' className="login-choice">
            <Grid.Row>
                <Button color="green" onClick={handleUser.bind(this)} fluid>ผู้ใช้ทั่วไป</Button>
            </Grid.Row>
            <Grid.Row>
                <Button color="teal" onClick={handleOrganization.bind(this)} fluid>องค์กรการกุศล</Button>
            </Grid.Row>
        </Grid>
    )
    return (
        <div className="topbar">
            <Link href="/"><a><SiteLogo /></a></Link>
            <PageNav />
            <div className="icon-wrapper">
                { !!userId && <Link href="/cart"><a>
                    <div className="cart-wrapper">
                        <Svg src={`static/icons/cart.svg`} />
                    </div>
                </a></Link> }
                <div className="separator" />
                { !!userId || !!organizationId ? 
                    <Link href="/user"><a>
                        <div className="user-wrapper">
                            <Svg src={`static/icons/user.svg`} />
                            <span>ข้อมูลผู้ใช้งาน</span>
                        </div>
                    </a></Link>
                    :
                    <a>
                        <Popup
                            trigger={ <div className="user-wrapper">
                            <Svg src={`static/icons/user.svg`} />
                            <span>เข้าสู่ระบบ</span>
                            </div> }
                            content={loginButtonGroup()}
                            on='click'
                            hideOnScroll
                        />
                    </a>
                }
            </div>        
        </div>
    )
}


export default Topbar