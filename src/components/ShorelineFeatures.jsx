
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import './ShorelineFeatures.css'; // Import the CSS file
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from "../tooltip";
import Data from "../Data.json"


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

const ShorelineFeaturesForm = (props) => {
  const [selectedErosionControlOptions, setSelectedErosionControlOptions] = useState([]);
  const [selectedRecreactionalOptions, setSelectedRecreactionalOptions] = useState([]);
  const [selectedOtherOptions, setSelectedOtherOptions] = useState([]);
  //const [error, setError] = useState('');

  // const handleCheckboxChange = (name) => {
  //   setCheckedItems((prevCheckedItems) => {
  //     const updatedCheckedItems = {
  //       ...prevCheckedItems,
  //       [name]: !prevCheckedItems[name],
  //     };


  //     sessionStorage.setItem('landUse', JSON.stringify(updatedCheckedItems));
  //     // console.log("Updated checked items:", updatedCheckedItems);
  //     return updatedCheckedItems;
  //   });

    
  // };

  const handleCheckboxChange = (name) => {
          setSelectedErosionControlOptions(name);
          sessionStorage.setItem('erosionStructers', JSON.stringify(name));
          // console.log("Updated checked items:", updatedCheckedItems);
          // return updatedCheckedItems;
        // });
  }

  const handleCheckboxChange1 = (name) => {
    setSelectedRecreactionalOptions(name);
    sessionStorage.setItem('recreationalStructures', JSON.stringify(name));

  }

  const handleCheckboxChange2 = (name) => {
    setSelectedOtherOptions(name);
    sessionStorage.setItem('otherOptions', JSON.stringify(name));

}

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
      sessionStorage.setItem('erosionStructers', JSON.stringify(selectedErosionControlOptions));

      console.log('Selected Recreational Structures:', selectedRecreactionalOptions);
      sessionStorage.setItem('recreationalStructures', JSON.stringify(selectedRecreactionalOptions));

      console.log('Selected other:', selectedOtherOptions);
      sessionStorage.setItem('otherOptions', JSON.stringify(selectedOtherOptions));

      // Add your logic here for what happens when the user clicks Continue

      props.setFormComponent(3);
    }
  };

  const handlePrevious = () => {
    props.setFormComponent(1);
  };


  const handleReset = () => {
    setSelectedErosionControlOptions([]);
    setSelectedRecreactionalOptions([]);
    setSelectedOtherOptions([]);

    sessionStorage.removeItem('erosionStructers');
    sessionStorage.removeItem('recreationalStructures');
    sessionStorage.removeItem('otherOptions');
  };

  useEffect(() => {
    if(sessionStorage.getItem('erosionStructers') !== null ){
    var recieved = sessionStorage.getItem('erosionStructers');
    var parsedRecieved = JSON.parse(recieved);
    setSelectedErosionControlOptions(parsedRecieved);
    }

    if(sessionStorage.getItem('recreationalStructures') !== null ){
    var recieved1 = sessionStorage.getItem('recreationalStructures');
    var parsedRecieved1 = JSON.parse(recieved1);
    setSelectedRecreactionalOptions(parsedRecieved1);

    }

    if(sessionStorage.getItem('otherOptions') !== null ){
    var recieved2 = sessionStorage.getItem('otherOptions');
    if(recieved2 !== null){
    var parsedRecieved2 = JSON.parse(recieved2);
    setSelectedOtherOptions(parsedRecieved2);
    }
    }

    sessionStorage.setItem('formComponent', 2);
   
  },[]);  
  


  return (
    
    <div className="form-container" style={{paddingBottom: '60px'}}>
    <h2 className="form-header">Shoreline Features</h2>
    <form>
      <h4 className="tooltip-display">{Data.ShoreLineFeaturesData.erosionControl.lable_heading}
      &nbsp;
      <Tooltip text={Data.ShoreLineFeaturesData.erosionControl.tool_lable}>
        <span class="material-symbols-outlined small-info-icon" >info</span>
      </Tooltip>
      </h4>
      {/* <pre>{JSON.stringify(selectedErosionControlOptions)}</pre> */}
      <MultiSelect
        options={erosionControlOptions}
        value={selectedErosionControlOptions}
        onChange={handleCheckboxChange}
        labelledBy="Select Erosion Control Structures"
      />

  
      <h4 className="tooltip-display">{Data.ShoreLineFeaturesData.recreational.lable_heading}
      &nbsp;
      <Tooltip text={Data.ShoreLineFeaturesData.recreational.tool_lable}>
        <span class="material-symbols-outlined small-info-icon" >info</span>
      </Tooltip>
      </h4>
      {/* <pre>{JSON.stringify(selectedRecreactionalOptions)}</pre> */}
      <MultiSelect
        options={recreactionalOptions}
        value={selectedRecreactionalOptions}
        onChange={handleCheckboxChange1}
        labelledBy="Select Recreactional Structures"
      />

       <h4>{Data.ShoreLineFeaturesData.other.lable_heading}</h4>
       {/* <pre>{JSON.stringify(selectedOtherOptions)}</pre> */}
       <MultiSelect
        options={otherOptions}
        value={selectedOtherOptions}
        onChange={handleCheckboxChange2}
        labelledBy="Select Other"
        
        
       
       />

      <br></br>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button type="reset" onClick={handlePrevious} className="form-button">Previous</button>
          &nbsp;
          &nbsp;
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