import React from 'react';
import axios from 'axios';

class ImageUpload extends React.Component {
  fileObj = [];
  thumbnailPreview = [];
  imgURLArray = [];
  constructor(props) {
    super(props);
    this.state = {
      file: [null],
      uploaded: false
    }
    this.uploadMulitpleFiles = this.uploadMulitpleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this);
  }

  async encodeImageFileAsURL(file) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onloadend = function () {
        reader.result ? resolve(reader.result) : reject();
      }
      reader.readAsDataURL(file);
    });
  }

  uploadMulitpleFiles(event) {
    this.fileObj.push(event.target.files);
    for (var i = 0; i < this.fileObj[0].length; i++) {
      let photoObj = this.fileObj[0][i];
      let thumbnailLocalURL = URL.createObjectURL(photoObj);
      this.thumbnailPreview.push(thumbnailLocalURL);
      let imageData = new FormData();


      this.encodeImageFileAsURL(photoObj)
      .then((result) => {
        let imageBlob = new Blob([result]);
        imageData.append('file', imageBlob);
      })
      .then(() => {
        axios.post('/uploadImg', imageData)
        .then((res) => {
          let imageURL = res.data;
          this.imgURLArray.push(imageURL);
        })
        .catch((err) => {
          console.error(err);
        });
      })
      .catch((error) => {
        console.log('error getting imgData: ', error);
      });

    }

    this.setState({
      files: this.imgURLArray,
    })
  }

  uploadFiles(event){
    event.preventDefault()
    var images = this.state.files
    this.props.handleImages(images);
    this.setState({uploaded: true});
  }

  render() {
    return (
      <div className="image-upload-buttons" data-testid="image-upload-buttons">
        <div className="review-images">
          {(this.thumbnailPreview || []).map(url => (
              <img key={url} className="review-image-thumbnail" src={url} alt="..." />
          ))}
        </div>
        {(this.thumbnailPreview.length < 5) ? <input type="file" onChange={this.uploadMulitpleFiles} multiple/> : null}
        <br></br>
        <button className="upload-button"type="button" onClick={this.uploadFiles}>{(this.state.uploaded) ? "Uploaded" : "Upload" }</button>
      </div>
    )
  }

}

export default ImageUpload;