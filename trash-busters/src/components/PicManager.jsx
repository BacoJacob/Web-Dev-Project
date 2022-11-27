import React,{useState, Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../sass/App.scss"

// make a list. Get each of the URLs from the database and put in the list. For each url, make an img tag and display it
class PicManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
        urls: []
        }
    }
    
    
    // onSuccess(response) {
    //     let urls = []
    //     let array = response;
    //     let arrayLength = Object.keys(array).length;
    //     console.log(arrayLength);
    //     for(let i = 0; i <= arrayLength; i++) {
    //         let url = array.data[i].url;
    //         console.log(url);
    //         urls.push(url);
    //     }
    //     const urlList = urls.map((url) => 
    //         <li>{url}</li>
    //     );
    // }
        
    async getUrls() {
        let urlsList = []
        let response = await axios.get('http://localhost:5000/pictures', )
        .then(function (response) {
            console.log(response);
            // onSuccess(response)
            let array = response;
            let arrayLength = Object.keys(array).length;
            for(let i = 0; i <= arrayLength; i++) {
                let url = array.data[i].url;
                console.log(url);
                urlsList.push(url);
            }
            this.setState({urls: urlsList})
            // console.log(response.data[0].url)
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    
    render() {
        this.getUrls()
        return (
            <div className="mt-3 border" id='savedPics'>
                <p>This is the pic manager.</p>
                <ul>
                    {this.state.urls.map((url, index) => (
                        <img src={url} alt="" />
                    ))}
                </ul>
            </div>
        )
    }

}

export default PicManager;