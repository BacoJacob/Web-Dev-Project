import React,{useState} from 'react';

function GeneratePicture() {
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
    return (
        <div>
            <img src={url} alt=""/>
            <button onClick={fetch_data}>Get Photo</button>
        </div>
    )
}

export default GeneratePicture;