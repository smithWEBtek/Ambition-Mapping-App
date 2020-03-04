import React from 'react';
import './App.css';
import Navbar from './components/Main/Navbar';
import MyStepper from './components/Main/MyStepper';
// import WelcomeCard from './components/Cards/WelcomeCard';
import DirectionsCard from './components/Cards/DirectionsCard';
// import FormCard from './components/Cards/FormCard';


function App() {

  const background = {
    backgroundColor: "#DCDCDC",
    paddingBottom: '150px',
    
    

  }
  return (
    <div className="App" style={background} >

      <Navbar 
      title="Ambition Mapping"

      />
      
      <MyStepper />

      {/* <WelcomeCard /> */}

      

      {/* <FormCard /> */}

      
    </div>
  );
}

export default App;
