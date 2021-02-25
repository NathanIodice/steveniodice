import {useState,useRef,useEffect} from 'react'
import "../music.css"

export default function AudioPlayer({item, hasLoaded}) {

    const [currentSong,setCurrentSong] = useState(0)
    const [isPlaying,setIsPlaying] = useState(false)
    const audioEl = useRef(null)
    const songName = item[currentSong].fileName.replace(".mp3","")

    const songChanged = () => {
        if (isPlaying){
            setIsPlaying(false)
            setTimeout(() => {
            setIsPlaying(true)
            }, 500);
        }
    }



    useEffect(() => { 
        if (isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
    }

    },[isPlaying])


    const songList = item.length



    const nextSong = () => {
        if(currentSong < songList - 1)
        {
            setCurrentSong(currentSong + 1)
            if (isPlaying){
                setIsPlaying(false)
                setTimeout(() => {
                setIsPlaying(true)
                }, 500);
            }
        }

    }

    const prevSong = () => {
        if(currentSong > 0)
        {
            setCurrentSong(currentSong - 1)
            if (isPlaying){
                setIsPlaying(false)
                setTimeout(() => {
                setIsPlaying(true)
                }, 500);
            }
        }

    }

    






    return (

        
        <div>

                <div className="musicPlayer">
                    <h1> {songName}  </h1>
                    <p></p>
                    <audio ref={audioEl} src={item[currentSong].file} >
                    </audio>

                    <section className="playerButtons">

                    <button className="nextButton playerButton"
                        onClick={prevSong}
                    ><i class="fas fa-backward"></i></button>

                    <button className="playButton playerButton" 
                        onClick={() => {setIsPlaying(!isPlaying)}}>
                        {isPlaying?<i className="fas fa-pause"></i>:<i className="fas fa-play"></i>}
                    </button>

                    <button className="PreviousButton playerButton"
                        onClick={nextSong}>
                        <i class="fas fa-forward"></i>
                    </button>

                    </section>


                    
                    <ul className="songList">
                        {item.map((list, index) => (
                            <div> 
                                
                               <li value={list.file}  onClick={()=>{
                                setCurrentSong(index)
                                songChanged()
                            }} key={list.id} id={index} className={index === currentSong?"listItem current":"listItem"}>
                                {list.fileName.replace(".mp3", "")}</li></div>

                        ))}
                    </ul>

                </div>

        </div>
    )
}
