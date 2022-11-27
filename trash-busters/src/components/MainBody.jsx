import React from "react";
import CatManager from "./CatManager";
import DogManager from "./DogManager";
import PicManager from "./PicManager";

function MainBody() {
    return (
        <div>
            <CatManager></CatManager>
            <div className="min-vh-100">

            </div>
            <DogManager></DogManager>
            <PicManager></PicManager>
        </div>
    )
}

export default MainBody
