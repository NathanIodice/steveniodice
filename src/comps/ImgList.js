import firebase from "../firebase/config"
import ViewPic from "./ViewPic"
export default function ImgList({item, loggedIn,viewNum,handleClick,handleReset}) {
    const handleDelete = (id) => {
        console.log(id)
        firebase.database().ref(`gallery/${id}`).remove()
    }

    return (
        <div className="imgList">
            <div className="galleryContainer">
                {item.map((post, index) => (
                    <div key={post.id} className="imgContainer">
                         {loggedIn.loggedIn === true?<button
                         onClick = {() => {
                          handleDelete(post.id)   
                         }}
                         className="delete"><i className="fas fa-trash-alt"></i></button>:<div></div>}
                        <img className="pic" onClick={() => {handleClick(index)}} src={post.img} alt="" srcSet=""/>
                        {viewNum === index ? 
                        <div><ViewPic handleReset={handleReset} pics={item} id={index}/></div>:""}
                    </div>
                ))}
            </div>
        </div>
    )
}
