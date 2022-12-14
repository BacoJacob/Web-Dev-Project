import React,{useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../sass/App.scss";

function CatManager() {
    const [url, setUrl] = useState('');
    function fetch_data() {
        fetch('https://api.thecatapi.com/v1/images/search').then(res => {
            if(res.ok) {
                return res.json();
            }
            throw new Error ('Request failure');
        },networkError => console.log(networkError.message)
        ).then(jsonRes => {
            setUrl(jsonRes[0].url)
        })    
    }

    function send_data() {
        if (url) {
            axios.post('http://localhost:5000/catPictures/add', {
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
        <div className="mt-3 border scroll-modify" id='cats'>
            <div className='d-flex justify-content-center'>
                <h1>
                    Random Cat Generator
                </h1>
            </div>
            <div className="mt-2 d-flex justify-content-center">
                <Button className="mr-2" variant="primary" onClick={fetch_data}>Get Cat Photo</Button>
                <SaveButton></SaveButton>
            </div>
            <br></br>
            <div className="mb-2 cat-picture-container d-flex justify-content-center">
                <Image className="img-fluid shadow-3-strong mh cat-picture-container d-block" src={url} alt=""/>
            </div>
        </div>
    )
}

export default CatManager;