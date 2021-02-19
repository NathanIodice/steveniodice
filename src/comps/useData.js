import {useState, useEffect} from "react"
import firebase from "../firebase/config"


const useData = () => {
    const [gallery, setGallery] = useState([])

    useEffect(() => {
        const galleryRef = firebase.database().ref("gallery");
        galleryRef.on("value", (snapshot) => {
            let items = snapshot.val();
            let allItems = [];
    
            for (let item in items) {
                allItems.push(
                    {
                        id:item,
                        img: items[item].picUrl
                    }
                    )
            }
            setGallery(
                allItems
            )
        })
    },[])

    return {
        gallery
    }
}

export default useData