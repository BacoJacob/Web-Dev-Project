import React,{Component} from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../sass/App.scss"

class DogManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breedsStateList: []
        }
    }

    componentDidMount = () => {
        this.getDogBreeds();
    };

    getDogBreeds = () => {
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then((response) => {
            const data = response.data;
            let dataArray = []
            Object.keys(data).forEach(key => dataArray.push({name: key, value: data[key]}))
            // this.setState({ breedsStateList: dataArray[0].value});
            for(let breed in dataArray[0].value) {
                // this.setState({breedsStateList: dataArray[0].value[breed]})
                console.log(breed)
                dataArray.push(breed)
                // this.setState({breedsStateList: })
            }

            // console.log('Received full breed list');
            // console.log(dataArray[0].value);
        })
        .catch(() => {
            alert('Error getting full breed list');
        });

        return (
            <ul>
            </ul>
        );
    }

    displayDogBreeds = (breeds) => {
        if(!breeds.length) {
            // console.log('BREEDS::::')
            // console.log(breeds)
            return null;
        }

        return breeds.map((breed, index) => (
            <div key={index}>
                <h5>{breed}</h5>
            </div>
        ));
    };

    render() {
        return (
        <div className="mt-3 border" id='dogs'>
            <div className='d-flex justify-content-center'>
                <h1>
                    Random Dog Generator
                </h1>
                {this.displayDogBreeds(this.state.breedsStateList)}
            </div>
        </div>
        );
    };
}

export default DogManager;