import React from 'react'
import ImgList from "./ImgList"
import useData from "./useData"
import "../gallery.css"
import Loading from "./loading";


export default function Gallery(loggedIn) {
    const {gallery,loaded} = useData(); 
    console.log(loggedIn)
    return (
        <div className="gallery">
            <h1>Gallery</h1>
            {loaded?
            <ImgList item={gallery} loggedIn={loggedIn} />:<Loading />}
        </div>
    )
}
