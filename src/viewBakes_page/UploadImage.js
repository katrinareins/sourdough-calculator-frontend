import React, { Component } from 'react';
import axios from 'axios';
// import {useDropzone} from 'react-dropzone'

export class uploadImage extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            photo: null,
        }
    }
    
    
    fileSelectedHandler = (event) => {
        console.log('photo selected', event.target.files[0])
        this.setState({
            photo: event.target.files[0]
        })
    }

    // axios.post(`http://localhost:3000/bakes/${bake.id}`,  photoUpload )
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
    
    fileUploadHandler = () => {
        const formData = new FormData();
        formData.append('photos', this.state.photo)
        
    }

    render() {

        return (
            <div>
                <input 
                type='file' 
                onChange={this.fileSelectedHandler} 
                />
                <button className='buttons-cards' onClick={this.fileUploadHandler}>Upload Photo</button>
            </div>
        )
    }
}

export default uploadImage

        // axios.post(`http://localhost:3000/bakes/${bake.id}`,  photoUpload )
        //     .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //     })

        // fetch(`http://localhost:3000/bakes/${bake.id}`, {
        // method: 'PATCH',
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         photos: formData
        //     })
        //     })
        //     .then(res => res.json())
        //     .then(data => { console.log('data returned from PHOTO post request', data)  
        // })