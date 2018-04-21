import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImage: this.props.images[0].url
        }
    }

    handleImageClick = (image) => {
        this.setState({
            mainImage: image
        })
    }

    render () {
        // TODO Fix Gallery for 5 images
        const { mainImage } = this.state
        const { images } = this.props
        return (
            <div className="gallery">
                <div className="main-image">
                    <Image src={mainImage} size="large" bordered />
                </div>
                <div className="images">
                    {images.map((image) => (
                        <div><Image 
                            src={image.url} 
                            onClick={() => this.handleImageClick(image.url)} 
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