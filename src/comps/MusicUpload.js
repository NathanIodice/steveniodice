import React, { useState } from 'react';
import {storage} from "../firebase/config"
import firebase from "../firebase/config"

export default function UploadForm() {
    const [musicFile, setMusicFile] = useState(null);



    const changeHandler = (e) => {
        let selected = e.target.files;
        setMusicFile(selected)
    }


    const UploadHandler = (e) => {
        e.preventDefault();

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
                }
            )
        }
    }


    return(
        <div>
            <p>Uploaded</p>
        <form action="">
            
            <label>
                <input type="file" multiple onChange={changeHandler}/>
            </label>

            <button onClick={UploadHandler}>UPLOAD</button>
        </form>

        </div>

    )
}


