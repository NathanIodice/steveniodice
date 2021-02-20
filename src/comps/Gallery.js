import React from 'react'
import ImgList from "./ImgList"
import useData from "./useData"
import "../gallery.css"


export default function Gallery() {
    const {gallery} = useData(); 
    return (
        <div className="gallery">
            <h1>Gallery</h1>
            <ImgList item={gallery} />
        </div>
    )
}
