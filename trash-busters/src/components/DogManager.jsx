import React,{Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../sass/App.scss"

class DogManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breedsStateList: [],
            selectedBreed: '',
            selectedBreedImageUrl: '',
        }
    }

    // todo: make getDogBreeds() run only once
    componentDidMount = () => {
        this.getDogBreeds();
    };

    getDogBreeds = () => {
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then((response) => {
            const data = response.data;
            let dataArray = []
            const unprocessedDataArray = []
            Object.keys(data).forEach(key => unprocessedDataArray.push({name: key, value: data[key]}))
            for(let breed in unprocessedDataArray[0].value) {
                dataArray.push(breed)
            }
            this.setState({breedsStateList: dataArray})
        })
        .catch(() => {
            alert('Error getting full breed list');
        });
    }

    onDogBreedChangeHandler = (event) => {
        const breedSelected = event.target.value;
        if (breedSelected === "") return;
        this.setState({
            selectedBreed: breedSelected,
        });
    }

    displayAndSaveImageOnClick = () => {
        axios.get(`https://dog.ceo/api/breed/${this.state.selectedBreed}/images/random`, ).then((response) => {
            const data = response.data;
            this.setState({
                selectedBreedImageUrl: data.message
            })
        });
    }

    send_data() {
        const url = this.state.selectedBreedImageUrl
        if (url) {
            axios.post('http://localhost:5000/dogPictures/add', {
                "url": url,
                breed: this.state.selectedBreed,
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }

    getSaveButton () {
        if (this.state.selectedBreedImageUrl) {
           return <Button variant="success" onClick={this.send_data.bind(this)}>Save Photo</Button>
        }
    }

    displayDogBreeds = (breeds) => {
        if(!breeds.length) {
            return null;
        }
            return <Form.Select className="w-25" defaultValue="" onChange={this.onDogBreedChangeHandler.bind(this)}>
                <option disabled value="">Select breed</option>
                {this.state.breedsStateList.map((value,index) => <option key={index}>{value}</option>)}
            </Form.Select>
    };

    render() {
        return (
        <div className="mt-3 border" id='dogs'>
            <div className='d-flex justify-content-center'>
                <h1>
                    Random Dog Generator
                </h1>
            </div>
            <div className="mt-2 d-flex justify-content-center">
                {this.displayDogBreeds(this.state.breedsStateList)}
                <Button onClick={this.displayAndSaveImageOnClick}>Get Dog Photo</Button>
                {this.getSaveButton()}
            </div>
            <br />
            <div className="mb-2 cat-picture-container d-flex justify-content-center">
                <Image className="img-fluid shadow-3-strong mh cat-picture-container d-block" src={this.state.selectedBreedImageUrl} alt=""/>
            </div>
        </div>
        );
    };
}

export default DogManager;