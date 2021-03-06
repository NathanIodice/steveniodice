import firebase from "../firebase/config"
export default function ImgList({item, loggedIn}) {
    const handleDelete = (id) => {
        console.log(id)
        firebase.database().ref(`gallery/${id}`).remove()
    }

    return (
        <div className="imgList">
            <div className="galleryContainer">
                {item.map((post) => (
                    <div key={post.id} className="imgContainer">
                         {loggedIn.loggedIn === true?<button
                         onClick = {() => {
                          handleDelete(post.id)   
                         }}
                         className="delete"><i className="fas fa-trash-alt"></i></button>:<div></div>}
                        <img src={post.img} alt="" srcSet=""/>
                    </div>
                ))}
            </div>
        </div>
    )
}
