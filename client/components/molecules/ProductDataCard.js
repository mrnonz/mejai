import React, { Component } from 'react'
import moment from 'moment'
import { isEmpty } from 'lodash'
import { Header, Grid, Table, Popup } from 'semantic-ui-react'
import Gallery from 'molecules/Gallery'
import Categories from 'stores/models/Categories'

class ProductDataCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAttribute: false
        }
    }

    handleShowAttribute() {
        this.setState({
            showAttribute: true
        })
    }

    render() {
        moment.locale('th')
        const { auction, product, product: { attributes = [] } } = this.props
        return (
            <Grid className="product-data-card" container>
                <Grid.Column width={8}>
                    <Gallery images={product.images} />
                </Grid.Column>
                <Grid.Column width={8}>
                    {
                        auction ? (
                            <div className="product-data">
                                <Header as="h2">{product.name}</Header>
                                <Header as="h3" color="grey">ผู้ช่วยเหลือ</Header>
                                <p>{ `${product.seller.firstname} ${product.seller.lastname}` }</p>
                                <Header as="h3" color="grey">วันที่ลง</Header>
                                <p>{moment(product.created_time).format('LLL')}</p>
                                <Header as="h3" color="grey">หมวดหมู่</Header>
                                <p>{new Categories(product.category_id).categoryName}</p>
                                <div className="detail-table">
                                    <div><Header as="h4" color="grey">ราคาเริ่มต้น</Header></div>
                                    <div><p>{product.price} บาท</p></div>
                                </div>
                            </div>
                        ) : (
                            <div className="product-data">
                                <Header as="h2">{product.name}</Header>
                                <Header as="h3" color="grey">ผู้ช่วยเหลือ</Header>
                                <p>{ `${product.seller.firstname} ${product.seller.lastname}` }</p>
                                <Header as="h3" color="grey">วันที่ลง</Header>
                                <p>{moment(product.created_time).format('LLL')}</p>
                                <Header as="h3" color="grey">หมวดหมู่</Header>
                                <p>{new Categories(product.category_id).categoryName}</p>
                                <div className="detail-table">
                                    <div><Header as="h4" color="grey">ราคา</Header></div>
                                    <div><p>{product.price} บาท</p></div>
                                    <div><Header as="h4" color="grey">จำนวนสินค้า</Header></div>
                                    { isEmpty(attributes) ? <div><p>{product.quantity} ชิ้น</p></div> : 
                                        <Popup
                                        trigger={<a>มากกว่า 1 รูปแบบ</a>}
                                        on='click'
                                        >
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Header as="h5" color="grey">คุณสมบัติ : { product.attributes[0].name }</Header>
                                                </Grid.Column>
                                            </Grid.Row>
                                        { product.attributes.map((attribute) => (
                                            <Grid.Row>
                                                <Grid.Column width={10}>
                                                    { attribute.value }
                                                </Grid.Column>
                                                <Grid.Column width={6}>
                                                    { attribute.quantity } ชิ้น
                                                </Grid.Column>
                                            </Grid.Row>
                                        )) }
                                        </Grid>
                                        </Popup>
                                    }
                                </div>
                            </div>
                        )
                    }
                </Grid.Column>
            </Grid>
        )
    }
}

export default ProductDataCard