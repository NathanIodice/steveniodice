import {useEffect, useState} from 'react'
import MusicUpload from "./MusicUpload"
import "../music.css"
import useMusicData from "./useMusicData"
import AudioPlayer from "./AudioPlayer"
import Loading from "./loading"

export default function MusicPlayer() {
    const {music, loaded} = useMusicData(); 
    
    useEffect(() => {
    
        if(loaded){

    console.log(music)
    console.log(loaded)
        }

    })

    return (
        <div className="musicPageContainer">
            {/* <MusicUpload/> */}
            {loaded&&music.length > 0?<AudioPlayer
            item={music}
            hasLoaded={loaded}/>:<Loading />}

        </div>
    )
}
