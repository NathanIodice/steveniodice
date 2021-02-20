import React from 'react'

export default function ImgList({item}) {
    return (
        <div className="imgList">
            <div className="galleryContainer">
                {item.map((post) => (
                    <div className="imgContainer">
                        <img src={post.img} alt="" srcset=""/>
                    </div>
                ))}
            </div>
        </div>
    )
}
