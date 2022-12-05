import React,{Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../sass/App.scss"

class CatPicManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
        urls: []
        }
    }

    componentDidMount = () => {
        this.getCatUrls();
    };  

    getCatUrls = () => {
        axios.get('http://localhost:5000/catPictures')
        .then((response) => {
            const data = response.data;
            this.setState({ urls: data});
        })
        .catch(() => {
            alert('Error getting cat data');
        });
    }

    displayCatPics = (pics) => {
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
            <div className="saved-pics mt-3 border" id='savedCatPics'>
                <h2 className='d-flex justify-content-center mt-3 mb-3'>View All Saved Cat Pictures Below</h2>
                {this.displayCatPics(this.state.urls)}
            </div>
        )
    }
}

export default CatPicManager;