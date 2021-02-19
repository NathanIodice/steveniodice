import React from 'react'
import ImgList from "./ImgList"
import useData from "./useData"

export default function Gallery() {
    const {gallery} = useData(); 
    return (
        <div>
            <ImgList item={gallery} />
        </div>
    )
}
