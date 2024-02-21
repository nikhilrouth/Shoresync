import React, { useEffect, useState } from 'react';
import RadioButtonItem from './RatioButtonItem';
import Header from './Header';
import Footer from './Footer';
import './BankAttributesForm.css'; // Import the CSS file
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BankAttributesForm = (props) => {
    
      const handleCheckboxChange = (name) => {
        setHeightItems(name);
        sessionStorage.setItem('heightItem', name);


      };

      const handleCheckboxChange1 = (name => {
        setStabilityItems(name);
        sessionStorage.setItem('bankStability', name);

      })

      const handleCheckboxChange2 = (name => {
        setCoverItems(name);
        sessionStorage.setItem('bankCover', name);
        

      })

      const handleCheckboxChange3 = (name => {
        setMarshItems(name);
        sessionStorage.setItem('marshBuffer', name);

      })


      const handleCheckboxChange4 = (name => {
        setBeachItems(name);
        sessionStorage.setItem('bankBuffer', name);
        

      })

      const handleCheckboxChange5 = (option) => {
            setSelected5(option);
            sessionStorage.setItem('phragmitesAustralis', option);
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

    const handleReset = () => {
      setHeightItems({
        "0 - 5ft": false,
        "5 - 10ft": false,
        "10 - 30ft": false,
        "> 30ft": false,
      });

      setStabilityItems({
        stable: false,
        transitional: false,
        unstable: false,
        undercut: false,
      });

      setCoverItems({
        bare: false,
        partial: false,
        total: false,
      });

      setMarshItems({
        yes: false,
        no: false,
      });

      setBeachItems({
        yes: false,
        no: false,
      });

      setSelected5({
        yes: false,
        no: false,
      });

      sessionStorage.removeItem('heightItem');
      sessionStorage.removeItem('bankStability');
      sessionStorage.removeItem('bankCover');
      sessionStorage.removeItem('marshBuffer');
      sessionStorage.removeItem('bankBuffer');
      sessionStorage.removeItem('phragmitesAustralis');
    };

    const handlePrevious = () => {
      props.setFormComponent(0);
    };
  
    //Session Storage Beginning
    useEffect(() => {
      var item = sessionStorage.getItem('heightItem');
      if(item != null){
        handleCheckboxChange(item);
      }

      var item1 = sessionStorage.getItem('bankStability');
      if(item1 != null){
        handleCheckboxChange1(item1);
      }

      var item2 = sessionStorage.getItem('bankCover');
      if(item2 != null){
        handleCheckboxChange2(item2);
      }

      var item3 = sessionStorage.getItem('marshBuffer');
      if(item3 != null){
        handleCheckboxChange3(item3);
      }

      var item4 = sessionStorage.getItem('bankBuffer');
      if(item4 != null){
        handleCheckboxChange4(item4);
      }

      var item5 = sessionStorage.getItem('phragmitesAustralis');
      if(item5 != null){
        handleCheckboxChange5(item5);
      }

      sessionStorage.setItem('formComponent', 1);
        
    }, []);


      const handleContinueClick = () => {

        // const validations = [
        //   {
        //     condition: heightItems.length === undefined || heightItems.length === 15,
        //     message: 'Please select a Bank Height.'
        //   },
        // ];
      
        // validations.forEach(validation => {
        //   if (validation.condition) {
            
        //     toast.error(validation.message,{});
        //     console.log(validation.message);
        //   }
        // });

        console.log('testing ', heightItems.length);
        console.log('Checked Bank Height Items:', heightItems);
        sessionStorage.setItem('heightItem', heightItems);

        console.log('Checked Bank Stavility:', stabilityItems);
        sessionStorage.setItem('bankStability', stabilityItems);

        console.log('Checked Bank Cover:', coverItems);
        sessionStorage.setItem('bankCover', coverItems);

        console.log('Checked Marsh Buffer:', marshItems);
        sessionStorage.setItem('marshBuffer', marshItems);

        console.log('Checked Beach Buffer:', beachItems);
        sessionStorage.setItem('bankBuffer', beachItems);

        console.log('Checked Phragmites Australis:', selected5);
        sessionStorage.setItem('phragmitesAustralis', selected5);
        // Add your logic here for what happens when the user clicks Continue
        props.setFormComponent(2);
      };
      //Session Storage end
      
return (
  <div>
<Header/>
<div className="form-container" style={{paddingBottom: '100px'}}>
<h2 className="form-header">Check the corresponding bank attribute features</h2>
    
    <form>
    <h3 className="form-sub-header">Bank Height </h3>
        {Object.entries(height).map(([key, value]) => (
          <RadioButtonItem
            key={key}
            name={value}
            checked={heightItems === value}
            onChange={handleCheckboxChange}
          />
        ))}

    <h3 className="form-sub-header">Bank Stability </h3>
        {Object.entries(stability).map(([key, value]) => (
          <RadioButtonItem
            key={key}
            name={value}
            checked={stabilityItems === value}
            onChange={handleCheckboxChange1}
            
          />
        ))}

    <h3 className="form-sub-header">Bank Cover </h3>
        {Object.entries(cover).map(([key, value]) => (
          <RadioButtonItem
            key={key}
            name={value}
            checked={coverItems === value}
            onChange={handleCheckboxChange2}
          />
        ))}

    <h3 className="form-sub-header">Marsh Buffer </h3>
        {Object.entries(marsh).map(([key, value]) => (
            <RadioButtonItem
                key={key}
                name={value}
                checked={marshItems === value}
                onChange={handleCheckboxChange3}
            />
            ))}

    <h3 className="form-sub-header">Beach Buffer </h3>
        {Object.entries(beach).map(([key, value]) => (
            <RadioButtonItem
                key={key}
                name={value}
                checked={beachItems === value}
                onChange={handleCheckboxChange4}
            />
            ))}

    <h3 className="form-sub-header">Phragmites australis </h3>

        {Object.entries(phragmites).map(([key, value]) => (
          <RadioButtonItem
          key={key}
          name={value}
          checked={selected5 === value}
          onChange={handleCheckboxChange5}
        />
      ))}

        {/* <button type="button" onClick={handleContinueClick} className="form-button">
          Continue
        </button> */}

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
<Footer/>
</div>

);
};

export default BankAttributesForm
