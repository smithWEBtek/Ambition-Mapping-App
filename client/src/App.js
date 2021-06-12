import React from 'react';
import './App.css';
import Navbar from './components/Main/Navbar';
import MyStepper from './components/Main/MyStepper';
// import WelcomeCard from './components/Cards/WelcomeCard';

function App() {
  const background = {
    backgroundColor: "#DCDCDC",
    paddingBottom: '150px'
  }
  return (
    <div className="App" style={background} >
      <Navbar 
      title="Ambition Mapping" 
      />
      <MyStepper />
    </div>
  );
}

export default App;
