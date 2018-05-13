import React, { Component } from 'react'
import Svg from 'react-inlinesvg'
import Dropzone from 'react-dropzone'
import { Card, Image, Button } from 'semantic-ui-react'
import { filter } from 'lodash'

class UploadForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            files: []
        }
    }

    handleFileUpload(uploadFiles) {
        const files = this.state.files
        files.push(uploadFiles[0])
        this.setState({
            files: files
        })
        this.props.onFileUpload && this.props.onFileUpload(files)
    }

    handleDeleteFile(file) {
        const files = this.state.files
        this.setState({
            files: filter(files, (f) => file.name !== f.name)
        })
        window.URL.revokeObjectURL(file.preview)
    }

    componentWillUnmount() {
        this.state.files.map((file) => window.URL.revokeObjectURL(file.preview))
    }

    render() {
        const { files } = this.state
        const { label, fileLimit } = this.props
        const uploadMax = !( files.length < fileLimit )
        const ImageCard = (file) => (
            <Card className="preview-card" onClick={() => this.handleDeleteFile(file)}>
                <Image src={file.preview} className="card-img"/>
                <Card.Content>
                    <Card.Meta>
                        { file.name }
                    </Card.Meta>
                </Card.Content>
            </Card>
        )
        const AddFileCard = () => (
            <Card className="add-card">
                <Card.Content>
                    เพิ่มรูปภาพ
                </Card.Content>
            </Card>
        )
        return (
            <div className="upload-form field">
                <label>รูปภาพ</label>
                <Dropzone 
                    className="upload-zone" 
                    disabled={uploadMax}  
                    onDrop={(uploadFiles) => this.handleFileUpload(uploadFiles)}
                    accept="image/jpeg, image/png"
                >
                    { files.length !== 0 ? (
                        <Card.Group itemsPerRow={fileLimit}>
                            { files.map((file) => ImageCard(file)) }
                            { !(uploadMax) && <AddFileCard /> }
                        </Card.Group>
                    ) : (
                        <div className="none-msg">
                            <div>{ label }</div>
                            <Button color="teal" type="button" >อัพโหลด</Button>
                        </div>
                    ) }
                </Dropzone>
                { fileLimit !== 1 && <label className="warn">* เพิ่มรูปภาพได้สูงสุด { fileLimit } รูป</label> }
            </div>
        )
    }
}

export default UploadForm