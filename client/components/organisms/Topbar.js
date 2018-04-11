import React from 'react'
import Link from 'next/link'
import SiteLogo from 'molecules/SiteLogo'
import Svg from 'react-inlinesvg'

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

const Topbar = (props) => (
    <div className="topbar">
        <Link href="/"><a><SiteLogo /></a></Link>
        <PageNav />
        <div className="icon-wrapper">
            <Link href="/cart"><a>
                <div className="cart-wrapper">
                    <Svg src={`static/icons/cart.svg`} />
                </div>
            </a></Link>
            <div className="separator" />
            <Link href="/login"><a>
                <div className="user-wrapper">
                    <Svg src={`static/icons/user.svg`} />
                    <span>สมชาย ใจดี</span>
                </div>
            </a></Link>
        </div>        
    </div>
)

export default Topbar