import Header from './components/Header';
import Footer from './components/Footer';
import LandUseForm from './components/LandUseForm';
import ShorelineFeaturesForm from './components/ShorelineFeatures';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='page'>
      <Header />
      <br></br>
      <LandUseForm />
      {/* <ShorelineFeaturesForm /> */}
      <ToastContainer />
      <br></br>
      <Footer/>
    </div>
  );
};


export default App;
