import React, { useState } from 'react';
import {storage} from "../firebase/config"
import firebase from "../firebase/config"
import MusicPlayer from "../comps/MusicPlayer"

export default function UploadForm() {
    const [musicFile, setMusicFile] = useState(null);
    const [login,setLogin] = useState(false)
    const [loginText,setLoginText] = useState("");
    const [uploading,setUploading] = useState(false)

    const changePassword = (e) => {
        setLoginText(e.target.value)
    }

    const checkPassword = () => {
        if(loginText === "password"){
            setLogin(true)
        }
    }

    const changeHandler = (e) => {
        let selected = e.target.files;
        setMusicFile(selected)
    }


    const UploadHandler = (e) => {
        e.preventDefault();
        setUploading(true)

        for (let i = 0; i < musicFile.length; i++) {
            const newFile = musicFile[i];
            const uploadTask = storage.ref(`music/${newFile.name}`).put(newFile);
            const musicRef = firebase.database().ref("music");
            const fileName = musicFile[i].name
    
            
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error)
                },
                () => {
                    storage
                        .ref("music")
                        .child(newFile.name)
                        .getDownloadURL()
                        .then((music) => {
                            // const songLength = () => {
                                
                            // }
                            musicRef.push({music,fileName})
                        } )
                        setUploading(false)
                }
            )
        }
    }


    return(
        login?

        uploading?
        <div className="uploadForm">
            <h3>UPLOADING</h3>
        </div>:
        <div className="uploadForm">
        <form action="">
            
            <label>
                <input type="file" multiple onChange={changeHandler}/>
            </label>

            <button onClick={UploadHandler}>UPLOAD</button>
        </form>

        <MusicPlayer loggedIn={login}/>

        </div>:


<div className="uploadForm">
<div className="login"><h5>Login - </h5><input type="text" onChange={changePassword}></input><button onClick={checkPassword}>Login</button></div>
</div>



    )
}


