import {useState, useEffect} from "react"
import firebase from "../firebase/config"


const useData = () => {
    const [gallery, setGallery] = useState([])
    const [loaded, setLoaded] = useState(false)


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
            setLoaded(true)
        })
    },[])

    return {
        gallery, loaded
    }
}

export default useData