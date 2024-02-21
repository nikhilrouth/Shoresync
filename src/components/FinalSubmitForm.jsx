import React, { useEffect, useState } from 'react';
import CheckboxItem from './CheckBoxItem';
import './FinalSubmitForm.css'; // Import the CSS file

const FinalSubmitForm = () => {
  //   const [checkedItems, setCheckedItems] = useState({
//     forest: false,
//     scrubShrub: false,
//     grass: false,
//     agriculture: false,
//     residential: false,
//     commercial: false,
//     industrial: false,
//     marshIsland: false,
//     bareLot: false,
//     timberedClearCuts: false,
//     pavedAreas: false,
//     unknownLandUse: false,
//   });

//   const handleCheckboxChange = (name) => {
//     setCheckedItems((prevCheckedItems) => ({
//       ...prevCheckedItems,
//       [name]: !prevCheckedItems[name],
//     }));
//   };

//   const handleContinueClick = () => {
//     console.log('Checked Items:', checkedItems);
//     // Add your logic here for what happens when the user clicks Continue
//   };

/// test adding

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    // Get the selected files from the event
    const files = Array.from(event.target.files);
    // Update the selected files state
    setSelectedFiles(files.filter(file => file.type === 'image/jpeg' || file.type === 'image/png'));
  }

useEffect(() => {

  sessionStorage.setItem('formComponent', 3);

});

  return (
    <div className="form-container">
        <p className="form-text">Click here to Synchronize GPS location</p>
        <button type="button" className="form-button">
        Synchronize GPS
        </button>
        <p className="form-text">Click here to Process Data Files</p>
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
          
            <button type="button" className="form-button2">
            Submit Final Data
            </button>
        </div>
        

    </div>
  );
};

export default FinalSubmitForm