import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { isNil, sortBy, reverse } from 'lodash'
import Svg from 'react-inlinesvg'
import Router from 'next/router'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import ProductCard from 'molecules/ProductCard'
import Pagination from 'molecules/Pagination'
import FilterProduct from 'organisms/FilterProduct'
import { Dropdown, Menu } from 'semantic-ui-react'
import categories from 'stores/mock/categories.json'
import Slider from 'react-slick';
import { fetchBuyProducts, fetchAuctionProducts } from 'stores/actions/product'

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    handleCardClick = (productId) => {
        Router.push({
            pathname: '/product',
            query: { id: productId }
        })
    }

    componentDidMount() {
        this.props.fetchAuctionProducts()
        this.props.fetchBuyProducts()
    }

    render() {
        function NextArrow(props) {
            const { className, style, onClick } = props
            return (
                <div onClick={onClick} style={{ ...style}} className='slick-arrow'>
                    <Svg src={`static/icons/arrow.svg`} />
                </div>
            )
        }

        function PrevArrow(props) {
            const { className, style, onClick } = props
            return (
                <div onClick={onClick} style={{ ...style}} className='slick-arrow prev'>
                    <Svg src={`static/icons/arrow.svg`} />
                </div>
            )
        }

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            className: 'product-slider',
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        const { buying = [], auction = [] } = this.props.products
        const productsLoading = isNil(buying) || isNil(auction)
        const filterBuying = reverse(sortBy(buying, (item) => item.created_time)).slice(0,10)
        const filterAuction = reverse(sortBy(auction, (item) => item.created_time)).slice(0,10)
        return (
            <div className="main-page">    
                <header>
                    <div className="background-mask">
                        <h1>ยินดีต้อนรับ</h1>
                        <p>รายได้จากการขายสินค้าจะนำเงินไปช่วยเหลือองค์กรการกุศลที่ผู้ขายกำหนดไว้</p>
                    </div>
                </header>
                <main>
                    <aside>
                      <h3>สินค้าการประมูล</h3>
                      <p>แสดงผลสินค้าประมูลล่าสุด</p>
                    </aside>
                    <div className="featured-auction">
                        { !productsLoading && <Slider {...settings}>
                            { filterAuction.map((item) => (
                                <ProductCard 
                                    auction={false} 
                                    auctionData={item.auction}
                                    organization={item.organization} 
                                    productId={item.productId} 
                                    name={item.name} 
                                    price={item.price} 
                                    onCardClick={this.handleCardClick.bind(this)} 
                                    thumbnail={item.thumbnail}
                                />
                            )) }
                            </Slider>
                        }
                    </div>
                </main>
                <header className="sub">
                    <div className="background-mask">
                        <h2>การช่วยเหลือ</h2>
                        <p>คุณสามารถเพิ่มสินค้าเข้าระบบและเลือกองค์กรการกุศลที่ต้องการช่วยเหลือได้</p>
                    </div>
                </header>
                <main>
                    <aside>
                      <h3>สินค้าการจำหน่าย</h3>
                      <p>แสดงผลสินค้าจำหน่ายล่าสุด</p>
                    </aside>
                    <div className="featured-auction">
                        { !productsLoading && <Slider {...settings}>
                            { filterBuying.map((item) => (
                                <ProductCard 
                                    auction={false} 
                                    auctionData={item.auction}
                                    organization={item.organization} 
                                    productId={item.productId} 
                                    name={item.name} 
                                    price={item.price} 
                                    onCardClick={this.handleCardClick.bind(this)} 
                                    thumbnail={item.thumbnail}
                                />
                            )) }
                            </Slider>
                        }
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        products: state.products
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBuyProducts: () => {
            dispatch(fetchBuyProducts())
        },
        fetchAuctionProducts: () => {
            dispatch(fetchAuctionProducts())
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(MainPage))