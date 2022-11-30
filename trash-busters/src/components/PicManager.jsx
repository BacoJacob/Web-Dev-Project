import React,{Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../sass/App.scss"

class PicManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
        urls: []
        }
    }

    componentDidMount = () => {
        this.getUrls();
    };  

    getUrls = () => {
        axios.get('http://localhost:5000/pictures')
        .then((response) => {
            const data = response.data;
            this.setState({ urls: data});
            console.log('Received data');
            console.log(data)
        })
        .catch(() => {
            alert('Error getting data');
        });
    }

    displayPics = (pics) => {
        if (!pics.length) return null;

        return pics.map((url, index) => (
            // <div key={index}>
            //     <img src={url.url} alt="" />
            // </div>
            <div key={index}>
                <Card className="saved-pic-card">
                  <Card.Img className="saved-pic" variant="bottom" src={url.url} />
                </Card>
            </div>
        ));
    };
    
    render() {
        return (
            <div className="saved-pics mt-3 border" id='savedPics'>
                <h2 className='mt-3 mb-3'>View All Saved Pictures Below</h2>
                {this.displayPics(this.state.urls)}
            </div>
        )
    }
}

export default PicManager;