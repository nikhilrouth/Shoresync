
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import './ShorelineFeatures.css'; // Import the CSS file
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const erosionControlOptions = [
  { label: "Riprap (L)", value: "riprapL" },
  { label: "Bulkhead (L)", value: "bulkheadL" },
  { label: "Dilapidated Bulkhead (L)", value: "DilapidatedBulkheadL" },
  { label: "Breakwaters (L)", value: "breakwatersL" },
  { label: "Groinfield (L)", value: "groinfieldL" },
  { label: "Jetty (P)", value: "jettyP" },
  { label: "Unconventional (L)", value: "unconventionalL" },
  { label: "Debris (L)", value: "debrisL" },
  { label: "Marsh Toe Revetment (L)", value: "MarshToeRevetmentL" },
  { label: "Seawall (L)", value: "seawallL" },

];

const recreactionalOptions = [
  { label: "Pier (P)", value: "pierP" },
  { label: "Dilapidated Pier (P)", value: "DilapidatedPierP" },
  { label: "Wharf (L)", value: "wharfL" },
  { label: "Boat Ramp (P)", value: "boatRampP" },
  { label: "Boat House (P)", value: "boatHouseP" },
  { label: "Marina (L)", value: "MarinaL" },
  { label: "Outfall (P)", value: "outfallP" },
];

const otherOptions = [
    { label: "Outfall (P)", value: "outfallP" },
]

const ShorelineFeaturesForm = () => {
  const [selectedErosionControlOptions, setSelectedErosionControlOptions] = useState([]);
  const [selectedRecreactionalOptions, setSelectedRecreactionalOptions] = useState([]);
  const [selectedOtherOptions, setSelectedOtherOptions] = useState([]);
  //const [error, setError] = useState('');


const handleContinueClick = () => {
    const validations = [
      {
        condition: selectedErosionControlOptions.length === 0,
        message: 'Please select at least one Erosion Control Structure.'
      },
      {
        condition: selectedRecreactionalOptions.length === 0,
        message: 'Please select at least one Recreational Structure.'
      }
    ];
  
    validations.forEach(validation => {
      if (validation.condition) {
        toast.error(validation.message, {});
      }
    });
  
    // If no errors, proceed with logic
    if (!validations.some(validation => validation.condition)) {
      console.log('Selected Erosion Control Structures:', selectedErosionControlOptions);
      console.log('Selected Recreational Structures:', selectedRecreactionalOptions);
      console.log('Selected other:', selectedOtherOptions);
      // Add your logic here for what happens when the user clicks Continue
    }
  };




  const handleReset = () => {
    setSelectedErosionControlOptions([]);
    setSelectedRecreactionalOptions([]);
    setSelectedOtherOptions([])

  };


  return (
    <div className="form-container">
    <h2 className="form-header">Shoreline Features</h2>
    <form>
      <h4>Erosion Control Structures</h4>
      {/* <pre>{JSON.stringify(selectedErosionControlOptions)}</pre> */}
      <MultiSelect
        options={erosionControlOptions}
        value={selectedErosionControlOptions}
        onChange={setSelectedErosionControlOptions}
        labelledBy="Select Erosion Control Structures"
      />

      <h4>Recreactional Structures</h4>
      {/* <pre>{JSON.stringify(selectedRecreactionalOptions)}</pre> */}
      <MultiSelect
        options={recreactionalOptions}
        value={selectedRecreactionalOptions}
        onChange={setSelectedRecreactionalOptions}
        labelledBy="Select Recreactional Structures"
      />

       <h4>Other</h4>
       {/* <pre>{JSON.stringify(selectedOtherOptions)}</pre> */}
       <MultiSelect
        options={otherOptions}
        value={selectedOtherOptions}
        onChange={setSelectedOtherOptions}
        labelledBy="Select Other"
        
        
       
       />

      <br></br>
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

export default ShorelineFeaturesForm;