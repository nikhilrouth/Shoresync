import React, { useEffect, useState } from 'react';
import CheckboxItem from './CheckBoxItem';
import './FinalSubmitForm.css'; // Import the CSS file

const FinalSubmitForm = (props) => {
const handleSubmitClick = () => {
  alert('Form Submitted');
};

const handleReset = () => {
  alert('Reset Clicked');
};

const handlePrevious = () => {
  props.setFormComponent(2);
}

useEffect(() => {

  sessionStorage.setItem('formComponent', 3);

});

  return (
    <div className="form-container">
        <h3 className="form-text">Click here to Synchronize GPS location</h3>
        <button type="button" className="form-button">
        Synchronize GPS
        </button>
        <h3 className="form-text">Click here to Process Data Files</h3>
        <div>
            <button type="button" className="form-button">
            Process Data Forms
            </button>
        </div>
        <div className="upload-container">
        <p className="form-text">Click here to Upload Images</p>
        <label htmlFor="file-upload" className="upload-button">
        Upload Images
        </label>
          {/* Input element for file upload */}
          <input id="file-upload" type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} />
            {/* Render selected files */}
            <div className="uploaded-files">
              {selectedFiles.map((file, index) => (
                <div key={index} className="uploaded-file">
                  <img src={URL.createObjectURL(file)} alt={file.name} className="thumbnail" />
                  <span>{file.name}</span>
                </div>
              ))}
            </div>

        </div>
        <div>

            {/* <button type="button" className="form-button2">
            Submit Final Data
            </button> */}
            <button type="reset" onClick={handlePrevious} className="form-button">Previous</button>
            &nbsp;
            &nbsp;
            <button type="reset" onClick={handleReset} className="form-button">Reset</button>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <button type="button"  onClick={handleSubmitClick} className="form-button2">
            Submit Final Data
            </button>
            
            
        </div>
        

    </div>
  );
};

export default FinalSubmitForm