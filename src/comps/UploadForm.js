import React, { useState } from 'react';
import {storage} from "../firebase/config"
import firebase from "../firebase/config"

export default function UploadForm() {
    const [file, setFile] = useState(null);



    const changeHandler = (e) => {
        let selected = e.target.files;
        setFile(selected)
    }


    const UploadHandler = (e) => {
        e.preventDefault();

        for (let i = 0; i < file.length; i++) {
            const newFile = file[i];
            const uploadTask = storage.ref(`images/${newFile.name}`).put(newFile);
            const galleryRef = firebase.database().ref("gallery");
    
            
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error)
                },
                () => {
                    storage
                        .ref("images")
                        .child(newFile.name)
                        .getDownloadURL()
                        .then((picUrl) => {
                            galleryRef.push({picUrl});
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
                <span>+</span>
            </label>

            <button onClick={UploadHandler}>UPLOAD</button>
        </form>

        </div>

    )
}


