import React from 'react';

const ImageList = (props) => {
  let pics = props.images.map((image) => {
    return <img key={image.id} src={image.urls.small} alt={image.description}/>
  })

  return (
    <div>
      {pics}
    </div>)
}

export default ImageList;
