import React,{Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../sass/App.scss"

class DogPicManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urls: []
        }
    }

    componentDidMount = () => {
        this.getDogUrls();
    };

    getDogUrls = () => {
        axios.get('http://localhost:5000/dogPictures')
        .then((response) => {
            const data = response.data;
            this.setState({ urls: data});
        })
        .catch(() => {
            alert('Error getting dog data');
        });
    }

    displayDogPics = (pics) => {
        if (!pics.length) return null;
        return pics.map((url, index) => (
            <div key={index}>
                <Card className="saved-pic-card mt-5">
                  <Card.Img className="saved-pic" variant="bottom" src={url.url} />
                </Card>
            </div>
        ));
    };
    
    render() {
        return (
            <div className="saved-pics mt-3 border" id='savedDogPics'>
                <h2 className='mt-3 mb-3 d-flex justify-content-center'>View All Saved Dog Pictures Below</h2>
                {this.displayDogPics(this.state.urls)}
            </div>
        )
    }
}

export default DogPicManager;