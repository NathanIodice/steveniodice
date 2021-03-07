import useData from "./useData"

export default function ViewPic({pics,id,handleReset}) {
    const {gallery,loaded} = useData();
    return (
        <div className="imgPreview">
            <div className="img">
            <button className="exitView"  onClick={() => {handleReset()}}>X</button>
            <img  src={pics[id].img} alt=""/>
            </div>


        </div>
    )
}
