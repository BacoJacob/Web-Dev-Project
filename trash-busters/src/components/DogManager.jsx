import React,{useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../sass/App.scss"

function DogManager() {
    const [url, setUrl] = useState('');
    function fetch_data() {
        fetch('https://dog.ceo/api/breeds/image/random').then(res => {
            if(res.ok) {
                console.log(res);
                return res.json();
            }
            throw new Error ('Request failure');
        },networkError => console.log(networkError.message)
        ).then(jsonRes => {
            setUrl(jsonRes.message);
        })    
    }

    function send_data() {
        if (url) {
            axios.post('http://localhost:5000/dogPictures/add', {
            "breed": "Golden",
            "url": url
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }

    function SaveButton() {
        if (url) {
           return <Button variant="success" onClick={send_data}>Save Photo</Button>
        }
    }

    return (
        <div className="mt-3 border" id='dogs'>
            <div className='d-flex justify-content-center'>
                <h1>
                    Random Dog Generator
                </h1>
            </div>
            <div className="mt-2 d-flex justify-content-center">
                <Button className="mr-2" variant="primary" onClick={fetch_data}>Get Photo</Button>
                <SaveButton></SaveButton>
            </div>
            <br></br>
            <div className="mb-2 cat-picture-container d-flex justify-content-center">
                <Image className="img-fluid shadow-3-strong mh cat-picture-container d-block" src={url} alt=""/>
            </div>
        </div>
    )
}

export default DogManager;