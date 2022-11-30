import React from "react";
import CatManager from "./CatManager";
import DogManager from "./DogManager";
import CatPicManager from "./CatPicManager";
import DogPicManager from "./DogPicManager";

function MainBody() {
    return (
        <div>
            <CatManager></CatManager>
            <DogManager></DogManager>
            <CatPicManager></CatPicManager>
            <DogPicManager></DogPicManager>
        </div>
    )
}

export default MainBody
