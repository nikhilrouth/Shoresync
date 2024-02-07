import React, { useState } from 'react';
import CheckboxItem from './CheckBoxItem';
import './LandUseForm.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";

const LandUseForm = () => {
 
  let navigate = useNavigate(); 

  const [checkedItems, setCheckedItems] = useState({
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

  const handleCheckboxChange = (name) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: !prevCheckedItems[name],
    }));
  };

  const handleContinueClick = () => {
    console.log('Checked Items:', checkedItems);
    // Add your logic here for what happens when the user clicks Continue
    navigate("/BankAttributes")

  };
      

  return (
    <div className="form-container">
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
        <button type="button" onClick={handleContinueClick} className="form-button">
          Continue
        </button>
      </form>
    </div>
  );
};

export default LandUseForm;
