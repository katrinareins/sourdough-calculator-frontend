import React, { Component } from 'react'
import S3FileUpload from 'react-s3';

export class uploadImage extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            selectedFile: null
        }
        
        
        // header("Access-Control-Allow-Origin: *");
        // header("Access-Control-Allow-Methods: POST");
        // header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");
    }
    
    
    fileSelectedHandler = (event) => {
        console.log('photo selected', event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    
    fileUploadHandler = () => {
        const config = {
            bucketName: 'sourdoughimageuploader',
            // dirName: 'Enter Folder Name ', /* optional */
            region: 'US West (Oregon)',
            // region: 'us-west-2',
            accessKeyId: 'AKIAIXAR63Q25JRDH6IQ',
            secretAccessKey: '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',
        //             header: "Access-Control-Allow-Origin: *",
        // header: "Access-Control-Allow-Methods: POST",
        // header: "Access-Control-Allow-Headers: Origin, Methods, Content-Type"
        };
        console.log('is this working???')
        console.log('selected file: ', this.state.selectedFile)
        console.log(config)
        S3FileUpload.uploadFile(this.state.selectedFile, config)
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


// <?xml version="1.0" encoding="UTF-8"?>
// <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
// <CORSRule>
//     <AllowedOrigin>*</AllowedOrigin>
//     <AllowedMethod>PUT</AllowedMethod>
//     <AllowedMethod>POST</AllowedMethod>
//     <AllowedMethod>DELETE</AllowedMethod>
//     <AllowedHeader>*</AllowedHeader>
// </CORSRule>
// <CORSRule>
//     <AllowedOrigin>*</AllowedOrigin>
//     <AllowedMethod>GET</AllowedMethod>
// </CORSRule>
// </CORSConfiguration>