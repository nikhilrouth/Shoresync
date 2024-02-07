import React, { useState } from 'react';
import CheckboxItem from './CheckBoxItem';
import Header from './Header';
import Footer from './Footer';
import './BankAttributesForm.css'; // Import the CSS file


const BankAttributesForm = () => {
    
      const handleCheckboxChange = (name) => {
        setHeightItems(name);
      };

      const handleCheckboxChange1 = (name => {

        setStabilityItems(name);
      })

      const handleCheckboxChange2 = (name => {
        setCoverItems(name);

      })

      const handleCheckboxChange3 = (name => {

        setMarshItems(name);
      })


      const handleCheckboxChange4 = (name => {
        setBeachItems(name);
      })

      const handleCheckboxChange5 = (option) => {
            setSelected5(option);
    };


      //extra

      const height = ["0 - 5ft","5 - 10ft", "10 - 30ft", "> 30ft" ]
      const [heightItems, setHeightItems] = useState({
        "0 - 5ft": false,
        "5 - 10ft": false,
        "10 - 30ft": false,
        "> 30ft": false,
    
      });


      const stability = ["stable", "transitional", "unstable", "undercut"];
      const [stabilityItems, setStabilityItems] = useState({
        stable: false,
        transitional: false,
        unstable: false,
        undercut: false,

      });


      const cover = ["bare", "partial","total"];
      const [coverItems, setCoverItems] = useState({
        bare: false,
        partial: false,
        total: false,
      });

      const marsh = ["yes", "no"];
      const [marshItems, setMarshItems] = useState({
        yes: false,
        no: false,
    
      });

      const beach = ["yes", "no"];
      const [beachItems, setBeachItems] = useState({
        yes: false,
        no: false,
    
      });

      const phragmites = ["yes", "no"];
      const [selected5, setSelected5] = useState({
          yes: false,
          no: false,
    });


      const handleContinueClick = () => {
        console.log('Checked Bank Height Items:', heightItems);
        console.log('Checked Bank Stavility:', stabilityItems);
        console.log('Checked Bank Cover:', coverItems);
        console.log('Checked Marsh Buffer:', marshItems);
        console.log('Checked Beach Buffer:', beachItems);
        console.log('Checked Phragmites Australis:', selected5);
        // Add your logic here for what happens when the user clicks Continue
      };
      
return (
  <div>
<Header/>
<div className="form-container">
<h2 className="form-header">Check the corresponding bank attribute features</h2>
    
    <form>
    <h3 className="form-sub-header">Bank Height </h3>
        {Object.entries(height).map(([key, value]) => (
          <CheckboxItem
            key={key}
            name={value}
            checked={heightItems === value}
            onChange={handleCheckboxChange}
          />
        ))}

    <h3 className="form-sub-header">Bank Stability </h3>
        {Object.entries(stability).map(([key, value]) => (
          <CheckboxItem
            key={key}
            name={value}
            checked={stabilityItems === value}
            onChange={handleCheckboxChange1}
          />
        ))}

    <h3 className="form-sub-header">Bank Cover </h3>
        {Object.entries(cover).map(([key, value]) => (
          <CheckboxItem
            key={key}
            name={value}
            checked={coverItems === value}
            onChange={handleCheckboxChange2}
          />
        ))}

    <h3 className="form-sub-header">Marsh Buffer </h3>
        {Object.entries(marsh).map(([key, value]) => (
            <CheckboxItem
                key={key}
                name={value}
                checked={marshItems === value}
                onChange={handleCheckboxChange3}
            />
            ))}

    <h3 className="form-sub-header">Beach Buffer </h3>
        {Object.entries(beach).map(([key, value]) => (
            <CheckboxItem
                key={key}
                name={value}
                checked={beachItems === value}
                onChange={handleCheckboxChange4}
            />
            ))}

    <h3 className="form-sub-header">Phragmites australis </h3>

        {Object.entries(phragmites).map(([key, value]) => (
          <CheckboxItem
          key={key}
          name={value}
          checked={selected5 === value}
          onChange={handleCheckboxChange5}
        />
      ))}


        <button type="button" onClick={handleContinueClick} className="form-button">
          Continue
        </button>
      </form>


</div>
<Footer/>
</div>

);
};

export default BankAttributesForm
