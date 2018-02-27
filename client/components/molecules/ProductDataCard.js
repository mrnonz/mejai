import React from 'react'
import { Header, Grid } from 'semantic-ui-react'
import Gallery from 'molecules/Gallery'

const ProductDataCard = (props) => (
    <Grid className="product-data-card" container>
        <Grid.Column width={8}>
            <Gallery />
        </Grid.Column>
        <Grid.Column width={8}>
            <div className="product-data">
                <Header as="h2">เสื้อสีน้ำเงิน</Header>
                <Header as="h3" color="grey">ผู้ช่วยเหลือ</Header>
                <p>สมศรี สมชาย</p>
                <Header as="h3" color="grey">วันที่ลง</Header>
                <p>23 ตุลาคม 2560 14.30 น.</p>
                <Header as="h3" color="grey">หมวดหมู่</Header>
                <p>เครื่องแต่งกาย</p>
                <div className="detail-table">
                    <div><Header as="h4" color="grey">ราคา</Header></div>
                    <div><p>150 บาท</p></div>
                    <div><Header as="h4" color="grey">จำนวนสินค้า</Header></div>
                    <div><p>15 ชิ้น</p></div>
                </div>
            </div>
        </Grid.Column>
    </Grid>
) 

export default ProductDataCard