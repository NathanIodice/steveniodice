import {useState} from 'react'
import ImgList from "./ImgList"
import useData from "./useData"
import "../gallery.css"
import Loading from "./loading";


export default function Gallery(loggedIn) {
    const [viewNum,setViewNum] = useState(null)
    const {gallery,loaded} = useData(); 
    console.log(loggedIn)

    const handleClick = (index) => {
        setViewNum(index)
    }
    const handleReset = (index) => {
        setViewNum(null)
    }
    
    return (
        <div className="gallery">
            <h1>Gallery</h1>
            {loaded?
            <ImgList item={gallery} loggedIn={loggedIn} viewNum={viewNum} handleClick={handleClick} handleReset={handleReset} />:<Loading />}
        </div>
    )
}
