import React, {useEffect, useState} from 'react';
import CheckboxItem from './CheckBoxItem';
import './LandUseForm.css'; // Import the CSS file
import {landUseFormData} from '../app-static-data/appdata';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandUseForm = (props) => {

  const [checkedItems, setCheckedItems] = useState(landUseFormData.landUseData);


    const handleCheckboxChange = (name) => {
      setCheckedItems((prevCheckedItems) => {
        const updatedCheckedItems = {
          ...prevCheckedItems,
          [name]: !prevCheckedItems[name],
        };


        sessionStorage.setItem('landUse', JSON.stringify(updatedCheckedItems));
        // console.log("Updated checked items:", updatedCheckedItems);
        return updatedCheckedItems;
      });   
    };



  // const fetchUserData = () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(checkedItems),
  //   };
  //   fetch("http://localhost:5000/api/addFormData",  requestOptions)
  //       .then(response => {
  //         return response.json()
  //       })
  //       .then(data => {
  //         console.log("data",data)
  //       })
  // }


  const handleContinueClick = () => {
    console.log('Checked Items:', checkedItems);  
    // Check if at least one item is checked
    const isAtLeastOneChecked = Object.values(checkedItems).some(value => value === true);
    if (isAtLeastOneChecked) {

      //session storage upodated
      sessionStorage.setItem('landUse', JSON.stringify(checkedItems));

      // Use a callback function in setAllFormsData to log the updated value
      props.setAllFormsData(prevData => {
        const updatedData = { ...prevData, landUse: checkedItems };
        console.log("All Forms Data:", updatedData);
        return updatedData;
      });

      //setting form to next form 
      props.setFormComponent(1);
    } else {
      // alert("Select atleast One");
      toast.error(landUseFormData.errorMessage, {});
    }
  };
  


  const handleReset = () => {
    setCheckedItems({
      forest: false,
      scrubShrub: false,
      grass: false,
      agriculture: false,
      residential: false,
      commercial: false,
      industrial: false,
      marshIsland: false,
      bareLot: false,
      timberedClearCuts: false,
      pavedAreas: false,
      unknownLandUse: false,
    });
    sessionStorage.removeItem('landUse');
    // Create a copy of the data object
    // const newData = { ...props.allFormsData };
    // // Delete the key from the copy
    // delete newData[keyToDelete];
    // // Update the state with the modified data
    // setData(newData);
  };

  useEffect(() => {
    if(sessionStorage.getItem('landUse') !== null ){
    var recieved = sessionStorage.getItem('landUse');
    var parsedRecieved = JSON.parse(recieved);
    setCheckedItems(parsedRecieved); 
    }  
  },[]);   



  return (
    <div className="form-container" style={{paddingBottom: '80px'}}>
      <h2 className="form-header">Check the corresponding riparian land use classes</h2>
      <form>
        {Object.entries(checkedItems).map(([key, value]) => (
          <CheckboxItem
            key={key}
            name={key}
            checked={value}
            onChange={handleCheckboxChange}
          />
        ))}
        {/* <button type="button" onClick={handleContinueClick} className="form-button">
          Continue
        </button> */}

      <div style={{ textAlign: 'center', marginTop: '20px' }}>

          <button type="button"  onClick={handleContinueClick} className="form-button">
            Continue
          </button>
          &nbsp;
          &nbsp;
          <button type="reset" onClick={handleReset} className="form-button">Reset</button>
      </div>
      </form>
    </div>
  );
};

export default LandUseForm;
