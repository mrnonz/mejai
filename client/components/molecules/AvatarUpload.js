import React, { Component } from 'react'
import { isNull } from 'lodash'
import { Image } from 'semantic-ui-react'
class AvatarUpload extends Component {
    constructor(props){
        super(props)
        this.state = {
            file: '',
            preview: null
        }
    }


    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            preview: reader.result
          });
        }
        reader.readAsDataURL(file)
        const data = {
            target: {
                name: 'avatar',
                value: file
            }
        }
        this.props.onFileChange(data)
    }

    render() {
        const { preview } = this.state
        const avatarUrl = !isNull(preview) ? preview : 'static/add-avatar.png'
        
        return (
            <div className="avatar-wrapper">
                <input type="file" accept="image/*" onChange={this.handleImageChange.bind(this)} className="upload-form"/>
                <Image src={avatarUrl} size="tiny" className="avatar" avatar />
            </div>
        )
    }
}

export default AvatarUpload