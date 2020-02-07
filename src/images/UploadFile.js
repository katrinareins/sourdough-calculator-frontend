import S3FileUpload from 'react-s3';
import React, { Component } from 'react'

const config = {
    bucketName: 'sourdoughimageuploader',
    dirName: 'Enter Folder Name ', /* optional */
    region: 'US West (Oregon)',
    accessKeyId: 'AKIAIXAR63Q25JRDH6IQ',
    secretAccessKey: 'GiN9VmdXSH3hK11r7E2BA6sw1JcwHn/Z1OdUwrFL'
}

export class UploadFile extends Component {
    render() {
        return (
            <div>
                <h3>Upload your photos</h3>
                <input type="file" onChange={upload}></input>
            </div>
        )
    }
}

export default UploadFile
