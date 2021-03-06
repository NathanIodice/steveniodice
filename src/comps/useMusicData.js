import {useState, useEffect} from "react"
import firebase from "../firebase/config"


const useMusicData = () => {
    const [music, setMusic] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const musicRef = firebase.database().ref("music");
        musicRef.on("value", (snapshot) => {
            let items = snapshot.val();
            let allItems = [];
    
            for (let item in items) {
                allItems.push(
                    {
                        id:item,
                        file: items[item].music,
                        fileName: items[item].fileName,
                    }
                    )
            }
            setMusic(
                allItems
            )
            setLoaded(true)
        })

    },[])

    return {
        music, loaded
    }
}

export default useMusicData