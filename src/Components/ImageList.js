import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  let pics = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}/>
  })

  return (
    <div className="image-list">
      {pics}
    </div>)
}

export default ImageList;
