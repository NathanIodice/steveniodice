import React, { useState } from 'react';
import {storage} from "../firebase/config"
import firebase from "../firebase/config"
import Gallery from './Gallery';

export default function UploadForm() {
    const [file, setFile] = useState(null);
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
        setFile(selected)
    }


    const UploadHandler = (e) => {
        e.preventDefault();
        setUploading(true)

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
                <span>+</span>
            </label>

            <button onClick={UploadHandler}>UPLOAD</button>
        </form>

        <Gallery loggedIn={login}/>

        </div>

        
        :<div className="uploadForm">
            <div className="login"><h5>Login - </h5><input type="text" onChange={changePassword}></input><button onClick={checkPassword}>Login</button></div>
        </div>

    )
}


