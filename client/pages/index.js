import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { isNil } from 'lodash'
import Svg from 'react-inlinesvg'
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
        this.state = {
            productPage: 0
        }
    }

    handlePageClick = (page) => {
        this.setState({
            productPage: page.selected
        })
    }

    componentDidMount() {
        this.props.fetchAuctionProducts()
        this.props.fetchBuyProducts()
    }

    render() {
        // TODO Fix Index
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
        return (
            <div className="main-page">    
                <header>
                    <div className="background-mask">
                        <h1>Auction Page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum , consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum</p>
                    </div>
                </header>
                <main>
                    <aside>
                      <h3>Featured Auction</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </aside>
                    <div className="featured-auction">
                        { !productsLoading && <Slider {...settings}>
                            { auction.map((item) => (
                                <ProductCard 
                                    auction={false} 
                                    auctionData={item.auction}
                                    organization={item.organization} 
                                    productId={item.productId} 
                                    name={item.name} 
                                    price={item.price} 
                                    // onCardClick={onCardClick} 
                                    thumbnail={item.thumbnail}
                                />
                            )) }
                            </Slider>
                        }
                    </div>
                </main>
                <header>
                    <div className="background-mask">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum , consectetur adipiscing elit. Maecenas posuere, augue vitae molestie bibendum</p>
                    </div>
                </header>
                <main>
                    <aside>
                      <h3>Featured Selling</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </aside>
                    <div className="featured-auction">
                        { !productsLoading && <Slider {...settings}>
                            { buying.map((item) => (
                                <ProductCard 
                                    auction={false} 
                                    auctionData={item.auction}
                                    organization={item.organization} 
                                    productId={item.productId} 
                                    name={item.name} 
                                    price={item.price} 
                                    // onCardClick={onCardClick} 
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