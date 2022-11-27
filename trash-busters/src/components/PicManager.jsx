import React,{useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../sass/App.scss"

// make a list. Get each of the URLs from the database and put in the list. For each url, make an img tag and display it

function PicManager() {

    async function getUrls() {
        const response = await axios.get('http://localhost:5000/pictures')
            .then(function (response) {
                console.log("Response: " + response)
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    getUrls()

    return (
        <div className="mt-3 border" id='savedPics'>
            <h1>See your saved pics below:</h1>
        </div>
    )
}

export default PicManager;