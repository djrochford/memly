import React from 'react'

const ImageUpload = ({imagePreviewUrl, handleSubmit, handleImageChange}) => {
  // let {imagePreviewUrl} = this.state;
  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = (<img src={imagePreviewUrl} />);
  } else {
    $imagePreview = (<div className="previewText">Preview image</div>);
  }

  return (
    <div className="previewComponent">
      <form method="post" action="/api/photo" encType="multipart/form-data">
        <input className="fileInput" type="file" name="photo" onChange={(e)=>handleImageChange(e)} />
        <button className="submitButton" type="submit">Upload Image</button>
      </form>
      <div className="imagePreview">
        {$imagePreview}
      </div>
    </div>
  )
  // <form method="post" action="/api/photo" enctype="multipart/form-data">
  //   <p>Title: <input type="text" name="title" /></p>
  //   <p>Image: <input type="file" name="image" /></p>
  //   <p><input type="submit" value="Upload" /></p>
  // </form>
}

export default ImageUpload


// <form onSubmit={(e)=>handleSubmit(e)}>
// <button className="submitButton" type="submit" onClick={(e)=>handleSubmit(e)}>Upload Image</button>