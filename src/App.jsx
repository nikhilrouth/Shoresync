import Header from './components/Header';
import Footer from './components/Footer';
import LandUseForm from './components/LandUseForm';
import ShorelineFeaturesForm from './components/ShorelineFeatures';
import React from 'react';
import { useState, useEffect } from 'react';
import BankAttributesForm from './components/BankAttributesForm';
import FinalSubmitForm from './components/FinalSubmitForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Images from './images/hero.jpeg';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';


function App() {

  const [formComponent, setFormComponent] = useState(0);
  const [allFormsData, setAllFormsData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Set the initial value of formComponent when the component mounts
    var component = sessionStorage.getItem('formComponent');
    console.log("hi", component);

    if(component === null) {
      component = 0
    }
    setFormComponent(parseInt(component)); // Set it to 1 or any other initial value as needed

  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = sessionStorage.getItem('loggedIn');
    if (userLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    
    sessionStorage.setItem('loggedIn', 'true');
    setLoggedIn(true);
  };

  

  return (
    <div className='page' style={{backgroundImage: `url(${Images})`, backgroundSize: '100% 100%', height: formComponent !== 1 ? '100vh' : undefined  }}>
      
      <br/>


        {/* {!loggedIn && <Login onLogin={handleLogin} />}
      {loggedIn && (
        <>
          <Header />
          {formComponent === 0 && <LandUseForm setFormComponent={setFormComponent} allFormsData={allFormsData} setAllFormsData={setAllFormsData} />}
          {formComponent === 1 && <BankAttributesForm setFormComponent={setFormComponent} allFormsData={allFormsData} setAllFormsData={setAllFormsData} />}
          {formComponent === 2 && <ShorelineFeaturesForm setFormComponent={setFormComponent} allFormsData={allFormsData} setAllFormsData={setAllFormsData} />}
          {formComponent === 3 && <FinalSubmitForm setFormComponent={setFormComponent} allFormsData={allFormsData} setAllFormsData={setAllFormsData} />}
          <ToastContainer />
          <br/>
          <Footer />
        </>
       )}   */}

        <>
            <Header />
            {formComponent === 0 && <LandUseForm setFormComponent={setFormComponent} allFormsData={allFormsData} setAllFormsData={setAllFormsData} />}
            {formComponent === 1 && <BankAttributesForm setFormComponent={setFormComponent} allFormsData={allFormsData} setAllFormsData={setAllFormsData} />}
            {formComponent === 2 && <ShorelineFeaturesForm setFormComponent={setFormComponent} allFormsData={allFormsData} setAllFormsData={setAllFormsData} />}
            {formComponent === 3 && <FinalSubmitForm setFormComponent={setFormComponent} allFormsData={allFormsData} setAllFormsData={setAllFormsData} />}
            <ToastContainer />
            <br/>
            <Footer />
        </>

    </div>
  );
}



export default App;


