import React, { Component } from 'react'
import S3FileUpload from 'react-s3';

export class uploadImage extends Component {

    state = {
        selectedFile: null
    }

    fileSelectedHandler = (event) => {
        console.log('photo selected', event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    
    fileUploadHandler = () => {
        S3FileUpload.uploadFile(selectedFile, config)
        .then((data) => {
            console.log(data.location)
        })
        .catch(err => {
            alert(err)
        })
    }

    render() {

        const config = {
            bucketName: 'sourdoughimageuploader',
            dirName: 'Enter Folder Name ', /* optional */
            region: 'US West (Oregon)',
            accessKeyId: 'AKIAIXAR63Q25JRDH6IQ',
            secretAccessKey: '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'
        };

        return (
            <div>
                <input 
                style={{display: 'none'}} 
                type='file' 
                onChange={this.fileSelectedHandler} 
                ref={fileInput => this.fileInput = fileInput}
                />

                <button onClick={this.fileInput.click()} >Pick File</button>
                <button onClick={this.fileUploadHandler}>Upload Photo</button>
            </div>
        )
    }
}

export default uploadImage
