import React, { useEffect, useState } from 'react';
import './FinalSubmitForm.css'; // Import the CSS file
import Compressor from 'compressorjs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FinalSubmitForm = (props) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [location, setLocation] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);


  const handleFileChange = (event) => {

    //Sets the original image
    const files = Array.from(event.target.files);
    setSelectedFiles(files.filter(file => file.type === 'image/jpeg' || file.type === 'image/png'));

    //Original image size
    files.map((file, index) => (
      console.log("Image Size: ", file.size/1024)
      )
    );

    //Compresses the image received and saves it to session storage
    const image = event.target.files[0];
    new Compressor(image, {
      quality: 0.8,
      success: (compressedResult) => {
        setCompressedFile(compressedResult)
        console.log('compression size: ', compressedResult.size/1024);
        console.log('compression result: ', compressedResult);
        //use session storage to receive already existing 
        const alreadyExistingImages = sessionStorage.getItem('compressedImage');

        if(alreadyExistingImages != null){
          const compressedImages = [alreadyExistingImages, compressedResult];
          sessionStorage.setItem('compressedImage', compressedImages);
        } else {
          sessionStorage.setItem('compressedImage', compressedResult);
        }
        
      },
    }) ;

    
  }

    function handleLocationClick() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({ latitude, longitude });
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        console.log('location',location);

        sessionStorage.setItem('longitude', longitude);
        sessionStorage.setItem('latitude', latitude);
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    const sendFormData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props.allFormsData),
        };
        fetch("http://localhost:5000/api/addFormData",  requestOptions)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log("data",data)

            })
    }

    const sendImages = () => {
        const formData = new FormData();
        formData.append("image", sessionStorage.getItem('compressedImage'));
        const requestOptions = {
            method: 'POST',
            /*headers: { 'Content-Type': 'image/jpeg' },*/
            headers: { 'Content-Type': 'image/jpeg' },
            body: JSON.stringify(formData),
        };
        fetch("http://localhost:5000/api/addImages",  requestOptions)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log("data",data)
            })
    }


const handleSubmitClick = () => {

      if(!location){
          toast.error("Synchronize GPS Coordinates",{toastId: "locationError"});
      }else {


          //page one
          const landUse = JSON.parse(sessionStorage.getItem('landUse'));

          //page two
          const heightItem = (sessionStorage.getItem('heightItem'));
          const bankStability = (sessionStorage.getItem('bankStability'));
          const bankCover = (sessionStorage.getItem('bankCover'));
          const marshBuffer = (sessionStorage.getItem('marshBuffer'));
          const bankBuffer = (sessionStorage.getItem('bankBuffer'));
          const phragmitesAustralis = (sessionStorage.getItem('phragmitesAustralis'));
          const BankAttributesData = {
              heightItem,
              bankStability,
              bankCover,
              marshBuffer,
              bankBuffer,
              phragmitesAustralis
          }


          //page 3
          const erosionStructers = JSON.parse(sessionStorage.getItem('erosionStructers'));
          const recreationalStructures = JSON.parse(sessionStorage.getItem('recreationalStructures'));
          const otherOptions = JSON.parse(sessionStorage.getItem('otherOptions'));
          const ShoreLineFeaturesData = {erosionStructers, recreationalStructures, otherOptions}


          //page 4- current page
          const longitude = sessionStorage.getItem('longitude');
          const latitude = sessionStorage.getItem('latitude');
          const compressedImage = sessionStorage.getItem('compressedImage');

          const isAtLeastOneChecked = Object.values(landUse).some(value => value === true);


          //validation of every page
          if (isAtLeastOneChecked) {

              if (heightItem !== null && bankStability !== null && bankCover !== null && marshBuffer !== null && bankBuffer !== null && phragmitesAustralis !== null) {
                  if (erosionStructers != null && recreationalStructures != null) {
                      if (longitude != null && latitude != null && compressedImage != null) {
                          console.log('came here');

                          props.setAllFormsData(prevData => {

                              const previousData = {landUse, BankAttributesData, ShoreLineFeaturesData}
                              const updatedData = {
                                  ...previousData,
                                  FinalSubmitForm: {longitude: longitude, latitude: latitude, image: compressedImage}
                              };

                              sessionStorage.setItem('allFormsData', JSON.stringify(updatedData));
                              console.log("All Forms Data: ", JSON.parse(sessionStorage.getItem('allFormsData')));
                              return updatedData;
                          });

                          sendFormData()
                          sendImages()

                      }
                  }
              }
          }

          toast.dismiss('locationError');
      }

};

const handleReset = () => {
  alert('Reset Clicked');
};

const handlePrevious = () => {
  props.setFormComponent(2);
  sessionStorage.setItem('formComponent', 2);
}


useEffect(() => {

  console.log("This is upon starting of the page ", JSON.parse(sessionStorage.getItem('allFormsData')));
  sessionStorage.setItem('formComponent', 3);

});

  return (
    <div className="form-container">
        <h4 className="form-text">Click here to Synchronize GPS location</h4>
        <button type="button" className="form-button" onClick={handleLocationClick}>
        Synchronize GPS
        </button>
        {location &&
        <div>


        <label htmlFor="Latitude" >
            Latitude: {location.latitude} &nbsp; &nbsp;
        </label>


        <label htmlFor="Longitude" >
            Longitude: {location.longitude}
        </label>
        </div>}
        <h4 className="form-text">Click here to Process Data Files</h4>
        <div>
            <button type="button" className="form-button">
            Process Data Forms
            </button>
        </div>
        <div className="upload-container">
        <h4 className="form-text">Click here to Upload Images</h4>
        
    
        {/* <label htmlFor="file-upload" className="upload-button">
        Upload Images
        </label> */}

        <button className="upload-button">
          <label htmlFor="file-upload">
            Upload Images
            <input id="file-upload" type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} />
          </label>
        </button>
        
        
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
            {/* <button type="button" className="form-button2"> */}

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