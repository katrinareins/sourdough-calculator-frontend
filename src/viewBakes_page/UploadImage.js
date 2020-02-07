import React, { Component } from 'react'
import S3FileUpload from 'react-s3';

export class uploadImage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selectedFile: null
        }

        this.config = {
            bucketName: 'sourdoughimageuploader',
            // dirName: 'Enter Folder Name ', /* optional */
            region: 'US West (Oregon)',
            accessKeyId: 'AKIAIXAR63Q25JRDH6IQ',
            secretAccessKey: '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'
        };
    }


    fileSelectedHandler = (event) => {
        console.log('photo selected', event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    
    fileUploadHandler = (selectedFile, config) => {
        console.log(config)
        S3FileUpload.uploadFile(selectedFile, this.config)
        .then(data => {
            console.log(data.location)
        })
        .catch(err => {
            alert(err)
        })
    }
    

    render() {

        return (
            <div>
                <input 
                // style={{display: 'none'}} 
                type='file' 
                onChange={this.fileSelectedHandler} 
                // ref={fileInput => this.fileInput = fileInput}
                />

                {/* <button onClick={this.fileSelectedHandler} >Pick File</button> */}
                <button onClick={this.fileUploadHandler}>Upload Photo</button>
            </div>
        )
    }
}

export default uploadImage
