import {useState,useRef,useEffect} from 'react'
import "../music.css"
import firebase from "../firebase/config"

export default function AudioPlayer({item, hasLoaded, loggedIn}) {

    const [currentSong,setCurrentSong] = useState(0)
    const [isPlaying,setIsPlaying] = useState(false)
    const audioEl = useRef(null)

    const handleDelete = (id) => {
        console.log(id)
        firebase.database().ref(`music/${id}`).remove()
    }

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
                    <h1 className="songTitle"> 
                    
                    {item[currentSong]?<div>{item[currentSong].fileName.replace(".mp3","")}</div>:""}

                    
                    </h1>
                    <p></p>
                    {item[currentSong]?<audio ref={audioEl} src={item[currentSong].file} >
                    </audio>:null}

                    <section className="playerButtons">

                    <button className="nextButton playerButton"
                        onClick={prevSong}
                    ><i className="fas fa-backward"></i></button>

                    <button className="playButton playerButton" 
                        onClick={() => {setIsPlaying(!isPlaying)}}>
                        {isPlaying?<i className="fas fa-pause"></i>:<i className="fas fa-play"></i>}
                    </button>

                    <button className="PreviousButton playerButton"
                        onClick={nextSong}>
                        <i className="fas fa-forward"></i>
                    </button>

                    </section>


                    
                    <ul className="songList">
                        {item.map((list, index) => (
                            <div key={list.id}> 
                                
                               <li value={list.file}  onClick={()=>{
                                setCurrentSong(index)
                                songChanged()
                            }} key={list.id} id={index} className={index === currentSong?"listItem current":"listItem"}>
                                {loggedIn.loggedIn?<button
                         onClick = {() => {
                          handleDelete(list.id)   
                         }}
                         className="bin"
                         ><i className="fas fa-trash-alt"></i></button>:""}
                                {list.fileName.replace(".mp3", "")}</li></div>

                        ))}
                    </ul>

                </div>

        </div>
    )
}
