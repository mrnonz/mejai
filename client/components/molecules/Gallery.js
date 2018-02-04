import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImage: 'static/shirt1.jpeg',
            images: ['static/shirt1.jpeg','static/shirt2.jpeg','static/shirt3.jpeg'],
        }
    }

    handleImageClick = (image) => {
        this.setState({
            mainImage: image
        })
    }

    render () {
        const { mainImage, images } = this.state
        return (
            <div className="gallery">
                <div className="main-image">
                    <Image src={mainImage} size="large" bordered />
                </div>
                <div className="images">
                    {images.map((image) => (
                        <div><Image 
                            src={image} 
                            onClick={() => this.handleImageClick(image)} 
                            size="small"
                            bordered
                        /></div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Gallery