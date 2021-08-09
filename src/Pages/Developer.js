import axios from 'axios';
import React,{Component} from 'react';
import './Developer.css'


class Developer extends Component {
    state = {
      selectedFile: null,
    };
    
    onFileChange = event => {
      this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {
      const formData = new FormData();
      formData.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name, 
        this.state.selectedFile.size, 
        this.state.selectedFile.ImageThumb
      );
      console.log(this.state.selectedFile);
      console.log(formData);
      axios.post("http://localhost:3000/uploader", formData);
    };
    
    fileData = () => {
      if (this.state.selectedFile) {
        return (
        <div className="details">
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
            <p>File Size: {this.state.selectedFile.size}</p>
            <p>File Img: {this.state.selectedFile.ImageThumb}</p>
       </div>
        );
      } else {
        return (
          <div>
            <h3>Upload File Here</h3>
          </div>
        );
      }
    };

    render() {
      return (
        <div className="title">
          <div>
            <input type="file" onChange={this.onFileChange} />
            { <button className= "button" onClick={this.onFileSubmit}>
              Submit!
            </button> }
          </div>
          {this.fileData()}
          {this.state.selectedFile && <ImageThumb image={this.state.selectedFile} />}
        </div>
      );
    }
  }

  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };
  
export default Developer;