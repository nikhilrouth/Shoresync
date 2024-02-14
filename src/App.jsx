import Header from './components/Header';
import Footer from './components/Footer';
import LandUseForm from './components/LandUseForm';
import ShorelineFeaturesForm from './components/ShorelineFeatures';
import React from 'react';
import { useState, useEffect } from 'react';
import BankAttributesForm from './components/BankAttributesForm';

function App() {

  const [formComponent, setFormComponent] = useState(1);

  useEffect(() => {
    // Set the initial value of formComponent when the component mounts
    setFormComponent(formComponent); // Set it to 1 or any other initial value as needed
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className='page'>
      <Header /> 
      {formComponent === 0 && <LandUseForm setFormComponent={setFormComponent} />}
      {formComponent === 1 && <BankAttributesForm setFormComponent={setFormComponent}/>}
      {formComponent === 2 && <ShorelineFeaturesForm  lineFeaturesForm setFormComponent={setFormComponent}/>}
      {/* <LandUseForm /> */}
      <Footer/>
    </div>
  );
};


export default App;
