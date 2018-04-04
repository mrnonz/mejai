import React from 'react'
import moment from 'moment'
import { Header, Grid } from 'semantic-ui-react'
import Gallery from 'molecules/Gallery'
import Categories from 'stores/models/Categories'

const ProductDataCard = ({ auction, product }) => {
    moment.locale('th')
    return (
        <Grid className="product-data-card" container>
            <Grid.Column width={8}>
                <Gallery />
            </Grid.Column>
            <Grid.Column width={8}>
                {
                    auction ? (
                        <div className="product-data">
                            <Header as="h2">เสื้อสีน้ำเงิน</Header>
                            <Header as="h3" color="grey">ผู้ช่วยเหลือ</Header>
                            <p>สมศรี สมชาย</p>
                            <Header as="h3" color="grey">วันสิ้นสุด</Header>
                            <p>23 ตุลาคม 2560 14.30 น.</p>
                            <Header as="h3" color="grey">หมวดหมู่</Header>
                            <p>เครื่องแต่งกาย</p>
                            <Header as="h3" color="grey">ราคาเริ่มต้น</Header>
                            <p>150 บาท</p>
                        </div>
                    ) : (
                        <div className="product-data">
                            <Header as="h2">{product.name}</Header>
                            <Header as="h3" color="grey">ผู้ช่วยเหลือ</Header>
                            {/* TODO Change Name */}
                            <p>สมศรี สมชาย</p>
                            <Header as="h3" color="grey">วันที่ลง</Header>
                            <p>{moment(product.created_time).format('LLL')}</p>
                            <Header as="h3" color="grey">หมวดหมู่</Header>
                            <p>{new Categories(product.category_id).categoryName}</p>
                            <div className="detail-table">
                                <div><Header as="h4" color="grey">ราคา</Header></div>
                                <div><p>{product.price} บาท</p></div>
                                <div><Header as="h4" color="grey">จำนวนสินค้า</Header></div>
                                <div><p>{product.quantity} ชิ้น</p></div>
                            </div>
                        </div>
                    )
                }
            </Grid.Column>
        </Grid>
    )
}

export default ProductDataCard