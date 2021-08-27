// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import Practice from './components/Practice';

function App() {

   const [mode, setMode] = useState('light')
   const toggleMode = () =>{
     if(mode==='light'){
       setMode('dark');
       document.body.style.backgroundColor='rgb(34 42 65)';
       showAlert("Dark Mode has been enabled","success");
       document.title="TextUtils - Dark Mode";
       
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode has been enabled","success");
        document.title="TextUtils - Light Mode";
      }
    }
    
    const [alert, setAlert] = useState(null);
    
   const showAlert = (message,type)=>{
     setAlert({
       msg: message,
       type: type
     })
     setTimeout(() => {
       setAlert(null)
     }, 1500);
   }

  return (
    <>
  {/* <Router> */}
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> }
          {/* </Route> */}
        {/* </Switch> */}
</div>
        {/* </Router> */}
{/* <Practice/> */}
    </>
    
  );
}

export default App;
