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
        <div>
            <button type="button" className="form-button2">
            Submit Final Data
            </button>
        </div>
        

    </div>
  );
};

export default FinalSubmitForm