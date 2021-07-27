import './Developer.css'
import axios from 'axios';
import React,{Component} from 'react';

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
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name, 
        this.state.selectedFile.size, 
        this.state.selectedFile.ImageThumb
      );
      console.log(this.state.selectedFile);
      axios.post("api/uploadfile", formData);
    };
    
    fileData = () => {
      if (this.state.selectedFile) {
        return (
          <div>
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
            <h1>Select a File</h1>
          </div>
        );
      }
    };

    render() {
      return (
        <div>
          <h1>Developer</h1>
          <div>
            <input type="file" onChange={this.onFileChange} />
            {/* <button onClick={this.onFileSave}>
              Save!
            </button> */}
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